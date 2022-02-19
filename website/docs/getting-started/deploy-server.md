---
sidebar_position: 2
---

import Link from '@docusaurus/Link';
import Highlight from '@site/src/components/Highlight';

# Server 部署指南

## Docker Compose

### 系统需求

* 8C16G

* Docker

:::tip

可通过运行 `docker -v` 和 `docker-compose` 来检查查看当前机器是否已经安装。

:::


### 部署

```bash
# 克隆存储库
git clone https://github.com/HXSecurity/DongTai.git
cd deploy/docker-compose/

# 部署最新版本
./dtctl install

# 部署指定版本
# 举例 1.2.0 版, <version> = 1.2.0
./dtctl install -v <version>
```

:::note

💡 自定义配置


使用自定义数据库，请手动修改 `config-tutorial.ini` 文件内的 `mysql` 和 `redis` 配置后再参照[初始化自定义数据库](#初始化自定义数据库)。

修改完成后，在下述的部署过程选择 `-s` 略过相应的组件:

```bash
./dtctl install -v 1.1.4 -s mysql
```
* s: 跳过的资源 (skip), 可选: `mysql redis mysql`,`redis`,默认：不跳过
* v: 需要被安装的版本

:::

### 升级

升级配置，可直接升级至最新版本或是指定版本。
```bash
# 升级至最新版本
./dtctl upgrade
```
```bash
# 升级至指定版本，t: to version
./dtctl upgrade -t <version>
```
### 卸载

卸载配置
```bash
./dtctl rm -d
# d : 改选项会让数据和服务一起被删除
```

### 演示

![Image](/img/docs/getting-started/server/deploy.gif)

## Kubernetes
### 系统需求

* Kubernetes version: 1.9+

* 客户端已经安装 Kubectl

* 具备以下操作的授权,可以使用 `kubectl auth can-i` 验证:

	* create secrets

	* create deployments

	* create configmaps

	* create namespaces

	* create StatefulSet

	* create Service

### 脚本部署

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


使用自定义数据库，请手动修改 `manifest/4.deploy-iast-server.yml` 文件内的 `mysql` 和 `redis` 配置后再参照[初始化自定义数据库](#初始化自定义数据库)。


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


### Helm 部署

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


* 使用自定义数据库，请手动修改 `/tmp/my-values.yml` 文件内的 `mysql` 和 `redis` 配置后再参照[初始化自定义数据库](#初始化自定义数据库)。

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

## 初始化自定义数据库
```bash
# 下载数据库文件
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/db.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/rule.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/sca.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20210731-release-1.0.0.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20210817-release-1.0.2.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20210831-release-1.0.3.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20210918-release-1.0.4.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20211009-release-1.0.5.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20211022-release-1.0.6.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20211105-release-1.1.0.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20211120-release-1.1.1.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20211123-release-1.1.2.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20211203-release-1.1.3.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20211218-release-1.1.4.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20211230-release-1.2.0.sql

# 执行导入命令，输入数据库密码，完成刚刚下载的数据导入
cat *.sql | mysql -u<username> -h<url> -p --default-character-set=utf8mb4 dongtai_webapi
```
## 部署后

环境启动成功后，通过部署过程中指定的 `web service port` 访问即可。

* 默认账号及密码: `admin` / `admin`;

* 首次登入 <Highlight color="#E3242B">必须</Highlight> 修改密码。

	* 至 **`系统配置 > 密码修改`** 修改密码后再重新登入。

## DongTai SaaS

:::info

我们也提供 **DongTai IAST SaaS 版本**。请至此链接 [注册账户](https://jinshuju.net/f/I9PNmf)。

:::
