---
sidebar_position: 2
---

import Link from '@docusaurus/Link';
import Highlight from '@site/src/components/Highlight';

# Kubernetes
## 系统需求

* Kubernetes version: 1.9+

* 客户端已经安装 Kubectl

* 具备以下操作的授权,可以使用 `kubectl auth can-i` 验证:

    * create secrets

    * create deployments

    * create configmaps

    * create namespaces

    * create StatefulSet

    * create Service



## 脚本部署

> 「脚本部署」部分内置了demo数据库用于快速体验，升级版本的时候会出现数据丢失，生产环境请使用自维护的稳定数据库！

### 部署

```bash
# 克隆存储库
git clone https://github.com/HXSecurity/DongTai.git
cd deploy/kubernetes

# 部署
./install.sh -m NodePort -n dongtai
```

### 升级

> 文件内容`{{}}`是需要修改的部分

> v1.3.1 以前版本升级请参照以下升级方式 

1. 备份数据库。

	```bash
	kubectl exec -n {{namespace}} {{mysql-pod}} -- sh -c 'exec mysqldump --all-databases -uroot -p"dongtai-iast"' > dongtai-mysql-bak-$(date '+%Y-%m-%d').sql
	```

2. 下载和导入数据库资料，数据库资料可参阅[自定义数据库](initial-sql-config)。

	只需执行部分增量的 sql 文件，比如：`v1.2.0` 升 `v1.4.0`，需导入 `v1.3.0 ～ v1.4.0` 的 sql 文件。

	```bash
	kubectl exec -i -n {{namespace}} {{mysql-pod}} -- mysql  -uroot -p"dongtai-iast" dongtai_webapi < *.sql
	```
3. 仓库拉取最新代码，修改配置文件和编辑各个 deployments 组件的镜像版本号。

	a. 使用 `DongTai/deploy/kubernetes/install.sh` 每个组件的镜像版本号。

	b. 编辑 [upgrade-legacy.yaml](https://github.com/HXSecurity/DongTai/blob/main/deploy/kubernetes/upgrade-legacy.yaml)。
	
	c. 执行更新配置文件 `kubectl apply -f upgrade-legacy.yaml`。

	d. 执行以下指令删除 `dongtai-webapi`、`dongtai-openapi`， v1.4.0 已合并成 `dongtai-server`。
	
	```bash
	kubectl delete deployment dongtai-webapi dongtai-openapi -n {{namespace}}
	```


### 卸载

```bash
kubectl delete namespace ${YourNamespace}
```


### 自定义配置

:::note 数据库

* m: 访问模式(mode)，可选: `NodePort LoadBalancer`, 默认为: NodePort

* s: 跳过的资源(skip), 可选: `mysql redis mysql,redis`, 默认: don’t skip

* n: 指定 `namespace`, 默认: dongtai


使用自定义数据库，请手动修改 `manifest/4.deploy-iast-server.yml` 文件内的 `mysql` 和 `redis` 配置后再参照[初始化自定义数据库](initial-sql-config)。

:::

:::note 访问

* NodePort

	* 获取可用的 Node IP

	```bash
	kubectl get nodes -o wide |  awk {'print $1" " $2 " " $7'} | column -t
	```

	* 获取可用的NodePort

	```bash
	kubectl get svc dongtai-web-pub-svc -n dongtai-iast -o=jsonpath='{.spec.ports[0].nodePort}'
	```

	* 访问地址:

	```bash
	http://${NodeIP}:${PORT}
	```

* LoadBalancer

	* 获取可用的 LoadBalancer IP 或者 DNS

:::


## Helm 部署
> 「Helm 部署」部分内置了demo数据库用于快速体验，升级版本的时候会出现数据丢失，生产环境请使用自维护的稳定数据库！

:::tip

安装之前请确保已经安装 Helm。安装指南：[Helm](https://helm.sh/docs/intro/install/)

:::

### 部署

```bash
# 克隆存储库
git clone https://github.com/HXSecurity/DongTai.git
cd deploy/kubernetes/helm

# 添加、更新仓库
helm repo add dongtai https://charts.dongtai.io/iast
helm repo update

# 部署
helm install --create-namespace -n dongtai  dongtai-iast dongtai/dongtai-iast
```
这个命令将会在 `dongtai` 命名空间部署 Dongtai IAST Server , 并且使用 `ClusterIP` 方式暴露服务。

### 卸载

```bash
helm uninstall dongtai-iast -n dongtai
```

### 自定义配置

:::note 配置

* 使用自定义数据库，请手动修改 `/tmp/my-values.yml` 文件内的 `mysql` 和 `redis` 配置后再参照[初始化自定义数据库](initial-sql-config)。

```yml title="/tmp/my-values.yml"
mysql:
  host: my-dongtai-mysql
  port: 3306
  name: my-dongtai_webapi
  user: root
  password: my-dongtai-iast

redis:
  host: my-dongtai-redis
  port: 6379
  password: 123456
  db: 0
```

```bash
helm install --create-namespace -n dongtai --values /tmp/my-values.yaml dongtai-iast dongtai/dongtai-iast
```

* 也可以使用 `--set` 来覆盖单个值, 你可以使用 `--set` 将 ClusterIP 切换成 NodePort:

```bash
helm install --create-namespace -n dongtai-test --set accessType=NodePort --set imageVersion=1.3.1 dongtai-iast dongtai/dongtai-iast
```

* Avaliable values:

	* skipMysql: false (默认值), skipRedis: false (默认值)

	* accessType: ClusterIP(默认值), 可选项: `ClusterIP`, `NodePort`, `LoadBalancer`

	* imageVersion: latest (默认值)

:::

:::info 部署后

环境启动成功后，通过部署过程中指定的 `web service port` 访问即可。

* 默认账号及密码: `admin` / `admin`;

* 首次登入 <Highlight color="#E3242B">必须</Highlight> 修改密码。

	* 至 **`系统配置 > 密码修改`** 修改密码后再重新登入。

:::

## 扩容

```bash
kubectl scale deployments ${deployment-names} --replicas=${number} -n ${your-namespace}

#举例扩容 5 个 Engine：
kubectl scale deployments dongtai-engine --replicas=5 -n your-namespace
```

也可配置自动水平扩容，指南：[Pod 水平自动扩缩](https://kubernetes.io/zh/docs/tasks/run-application/horizontal-pod-autoscale/)

```bash
kubectl autoscale deployments ${deployment-names} -n ${your-namespace} --cpu-percent=80 --min=${number} --max=${number}
```

