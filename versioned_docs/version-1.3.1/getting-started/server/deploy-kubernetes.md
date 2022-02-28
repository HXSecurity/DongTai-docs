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

* 部署

```bash
# 克隆存储库
git clone https://github.com/HXSecurity/DongTai.git
cd deploy/kubernetes

# 部署
./install.sh -m NodePort -n dongtai
```

* 卸载

```bash
kubectl delete namespace ${YourNamespace}
```


:::note

💡 自定义配置

* m: 访问模式(mode)，可选: `NodePort LoadBalancer`, 默认为: NodePort

* s: 跳过的资源(skip), 可选: `mysql redis mysql,redis`, 默认: don’t skip

* n: 指定 `namespace`, 默认: dongtai


使用自定义数据库，请手动修改 `manifest/4.deploy-iast-server.yml` 文件内的 `mysql` 和 `redis` 配置后再参照[初始化自定义数据库](initial-sql-config)。


* 访问

	* NodePort

		* 获取可用的 Node IP

		```bash
		kubectl get nodes -o wide |  awk {'print $1" " $2 " " $7'} | column -t
		```

		* 获取可用的NodePort

		```bash
		kubectl get svc dongtai-web-pub-svc -n dongtai-iast -o=jsonpath='{.spec.ports[0].nodePort}'
		kubectl get svc dongtai-engine-pub-svc -n dongtai-iast -o=jsonpath='{.spec.ports[0].nodePort}')
		```

		* 访问地址:

		```bash
		http://${NodeIP}:${PORT}
		```

	* LoadBalancer

		* 获取可用的 LoadBalancer IP 或者 DNS

		```bash
		kubectl get svc dongtai-web-pub-svc dongtai-engine-pub-svc -n dongtai-iast
		```
:::


## Helm 部署
> 「Helm 部署」部分内置了demo数据库用于快速体验，升级版本的时候会出现数据丢失，生产环境请使用自维护的稳定数据库！

:::tip

安装之前请确保已经安装 Helm。安装指南：[Helm](https://helm.sh/docs/intro/install/)

:::

* 部署

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

* 卸载

```bash
helm uninstall dongtai-iast -n dongtai
```

:::note

💡 自定义配置


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

* 也可以使用<code>--set</code>来覆盖单个值, 你可以使用<code>--set</code>将 ClusterIP 切换成 NodePort:

```bash
helm install --create-namespace -n dongtai-test --set accessType=NodePort dongtai-iast dongtai/dongtai-iast
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
