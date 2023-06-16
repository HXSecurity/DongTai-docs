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


## Helm 部署

> 「Helm 部署」部分内置了demo数据库用于快速体验，升级版本的时候会出现数据丢失，生产环境请使用自维护的稳定数据库！

:::tip

安装之前请确保已经安装 Helm。安装指南：[Helm](https://helm.sh/docs/intro/install/)

:::

### 部署

:::tip ⚠️ 部署前，请添加 `存储类名称`；[values.yaml 样例](https://github.com/HXSecurity/DongTai/blob/main/deploy/kubernetes/helm/values.yaml)

参考资料：[K8S 储存类概念](https://kubernetes.io/zh-cn/docs/concepts/storage/storage-classes/)

需要准备一个 `storageclass`, 或者一个可公共写的 `pvc` ,下面参数三选一即可。

```
--set storage.storageClassName=storageclass
or
--set storage.persistentVolumeClaim=pvc （默认会启用）

或者不使用存储类，会影响部分功能使用，如（agent日志页面收集）
--set storage.persistentVolumeClaim=null
```

:::

```bash

# 添加、更新仓库
helm repo add dongtai https://charts.dongtai.io/iast
helm repo update

# 部署示例
helm install project --create-namespace -n dongtai dongtai/dongtai-iast \
--set storage.persistentVolumeClaim=null
```

这个命令将会在 `dongtai` 命名空间部署 Dongtai IAST Server , 并且使用 `ClusterIP` 方式暴露服务。



### 自定义配置

:::note 配置

* https://github.com/HXSecurity/DongTai/blob/main/deploy/kubernetes/helm/values.yaml
* 使用自定义数据库，请手动修改 `/tmp/my-values.yml` 文件内的 `mysql` 和 `redis` 配置后再参照[初始化自定义数据库](initial-sql-config)。

```yml title="/tmp/my-values.yml"
skipMysql: true
mysql:
  host: my-dongtai-mysql
  port: 3306
  name: my-dongtai_webapi
  user: root
  password: my-dongtai-iast

skipRedis: true
redis:
  host: my-dongtai-redis
  port: 6379
  password: 123456
  db: 0
```

```bash
helm install project --create-namespace -n dongtai dongtai/dongtai-iast \
--values /tmp/my-values.yaml
```

* 也可以使用 `--set` 来覆盖单个值, 你可以使用 `--set` 将 ClusterIP 切换成 NodePort:

```bash
helm install project --create-namespace -n dongtai dongtai/dongtai-iast \
--set storage.persistentVolumeClaim=null \
--set accessType=NodePort --set NodePort=30080
```

* 如果你需要修改 somaxconn (128) 

```
helm install project --create-namespace -n dongtai dongtai/dongtai-iast \
--set storage.persistentVolumeClaim=null \
--set somaxconn=4096
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

### 卸载

```
helm uninstall project -n dongtai
```


### 

## 扩容

```bash
kubectl scale deployments ${deployment-names} --replicas=${number} -n ${your-namespace}

#举例扩容 5 个 dongtai-worker-task：
kubectl scale deployments dongtai-worker-task --replicas=5 -n your-namespace
```

也可配置自动水平扩容，指南：[Pod 水平自动扩缩](https://kubernetes.io/zh/docs/tasks/run-application/horizontal-pod-autoscale/)

```bash
kubectl autoscale deployments ${deployment-names} -n ${your-namespace} --cpu-percent=80 --min=${number} --max=${number}
```



:::note 域名访问

需要使用 HTTPS 域名访问的用户， 可通过修改 `4.deploy-iast-server.yml` 文件，增加如下配置，实现 CSRF 信任域名的配置，如：`https://xxx.example.com`，配置如下：

```bash
[security]
csrf_trust_origins = .example.com
```

* 若有多个 HTTPS 域名进行绑定，域名间通过 "," 连接，如：`.example.com`, `.iast.io`, `.dongtai.io`

:::



### 升级

> 文件内容`{{}}`是需要修改的部分

> v1.3.1 以前版本升级请参照[此升级方式](/docs/getting-started/server/deploy-kubernetes#升级)



1. 备份数据库。

   ```bash
   kubectl exec -n {{namespace}} {{mysql-pod}} -- sh -c 'exec mysqldump --all-databases -uroot -p"dongtai-iast"' > dongtai-mysql-bak-$(date '+%Y-%m-%d').sql
   ```

2. 下载和导入数据库资料，数据库资料可参阅[自定义数据库](initial-sql-config)。

   只需执行部分增量的 sql 文件，比如：`v1.4.0` 升 `v1.5.0`，需导入 `v1.4.0 ～ v1.5.0` 的 sql 文件。

   ```bash
   kubectl exec -i -n {{namespace}} {{mysql-pod}} -- mysql  -uroot -p"dongtai-iast" dongtai_webapi < *.sql
   ```

3. 仓库拉取最新代码，编辑各个 deployments 组件的镜像版本号。

   a. 使用 `DongTai/deploy/latest_image.sh` 检查每个组件的镜像最新版本号。

   b. 编辑及执行各个 deployments 组件的镜像版本号:

   ```bash
   kubectl set image deploy dongtai-server       dongtai-server-container=registry.cn-beijing.aliyuncs.com/huoxian_pub/dongtai-server:{{ChangeThisVersion}} -n {{namespace}}
   kubectl set image deploy dongtai-web          dongtai-web-container=registry.cn-beijing.aliyuncs.com/huoxian_pub/dongtai-web:{{ChangeThisVersion}} -n {{namespace}}
   kubectl set image deploy dongtai-worker-task       dongtai-worker-task-container=registry.cn-beijing.aliyuncs.com/huoxian_pub/dongtai-server:{{ChangeThisVersion}} -n {{namespace}}
   kubectl set image deploy dongtai-worker-beat       dongtai-worker-beat-container=registry.cn-beijing.aliyuncs.com/huoxian_pub/dongtai-server:{{ChangeThisVersion}} -n {{namespace}}
   kubectl set image deploy dongtai-worker-other      dongtai-worker-other-container=registry.cn-beijing.aliyuncs.com/huoxian_pub/dongtai-server:{{ChangeThisVersion}} -n {{namespace}}
   kubectl set image deploy dongtai-worker-high-freq  dongtai-worker-high-freq-container=registry.cn-beijing.aliyuncs.com/huoxian_pub/dongtai-server:{{ChangeThisVersion}} -n {{namespace}}
   kubectl set image deploy dongtai-logrotate         dongtai-logrotate-container=registry.cn-beijing.aliyuncs.com/huoxian_pub/dongtai-logrotate:{{ChangeThisVersion}} -n {{namespace}}
   kubectl set image deploy dongtai-logstash          dongtai-logstash-container=registry.cn-beijing.aliyuncs.com/huoxian_pub/dongtai-logstash:{{ChangeThisVersion}} -n {{namespace}}
   ```





