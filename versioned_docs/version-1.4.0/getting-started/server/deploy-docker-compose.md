---
sidebar_position: 1
---

import Link from '@docusaurus/Link';
import Highlight from '@site/src/components/Highlight';


# Docker Compose

## 系统需求

* 8C16G

* Docker

:::tip

可通过运行 `docker -v` 和 `docker-compose` 来检查查看当前机器是否已经安装。

:::


## 部署

:::caution 注意

Docker Compose 方式部署仅供快速体验，**请不要用于生产环境 !**

:::


* 克隆存储库

	```bash
	git clone https://github.com/HXSecurity/DongTai.git
	```

* 更新代码

	```bash
	git pull
	```

* 切换至目录

	```bash	
 	cd DongTai/deploy/docker-compose/
	```

* 部署最新版本
	
	```bash	
	./dtctl install
	```
	```bash
	# 部署指定版本
	# 举例 1.4.0 版, <version> = 1.4.0
	./dtctl install -v <version>
	```

## 自定义配置

:::note 数据库


使用自定义数据库，请手动修改 `config-tutorial.ini` 文件内的 `mysql` 和 `redis` 配置后再参照[初始化自定义数据库](initial-sql-config)。

修改完成后，在下述的部署过程选择 `-s` 略过相应的组件:

```bash
./dtctl install -v 1.4.0 -s mysql
```
* s: 跳过的资源 (skip), 可选: `mysql redis mysql`,`redis`,默认：不跳过
* v: 需要被安装的版本

:::

:::note 域名访问

需要使用 HTTPS 域名访问的用户， 可通过修改 `config-tutorial.ini` 文件，增加如下配置，实现 CSRF 信任域名的配置，如：`https://xxx.example.com`，配置如下：

```bash
[security]
csrf_trust_origins = .example.com
```

* 若有多个 HTTPS 域名进行绑定，域名间通过 "," 连接，如：`.example.com`, `.iast.io`, `.dongtai.io`

:::

:::note SCA 配置

需要使用离线 SCA 配置的用户，可按以下三个步离线添加配置：

1. 下载 SCA 数据库文件：

	https://github.com/HXSecurity/DongTai-docs/tree/main/static/sca/

2. 执行导入命令：

	```bash
	cat sca20220114.sql | mysql -u<username> -h<url> -p --default-character-set=utf8mb4 dongtai_webapi
	```	

3. 修改 `config-tutorial.ini` 文件, 配置如下：

	```bash
	[SCA]
	base_url = http://dongtai-openapi:8000/sca/v1
	```

:::

:::note 扩容

💡：**先使用 `./dtctl file` 导出 `docker-compose.yml`，再使用 `docker-compose` 执行扩容**

#### OpenAPI 服务节点

  * 使用以下命令将 `OpenApi` 数量扩容到 `number`
	  ```bash
	  sudo docker-compose -p dongtai up –-scale dongtai-openapi=<number> -d
	  ```

  * 例子：扩容 4 个 `dongtai-openapi`
	  ```bash
	  sudo docker-compose -p dongtai up --scale dongtai-openapi=4 -d
	  ```  

#### Engine 服务节点

  * 使用以下命令将 `Engine` 数量扩容到 `number`
	  ```bash
	  sudo docker-compose -p dongtai up –-scale dongtai-engine=<number> -d
	  ```

  * 例子：扩容 4 个 `dongtai-engine`
	  ```bash
	  sudo docker-compose -p dongtai up --scale dongtai-engine=4 -d
	  ```
:::



## 升级

升级配置，可直接升级至最新版本或是指定版本。

* 更新代码

	```bash
	git pull
	```
* 执行更新

	```bash
	# 更新成最新发布版本
	./dtctl upgrade
	```
	```bash
	# 升级至指定版本，t: to version
	./dtctl upgrade -t <version>
	```

:::note 自定义数据库升级流程

**部署时自定义数据库的用户不适用 `./dtctl upgrade`**，请参照下列升级流程：

* 在 `DongTai/deploy/docker-compose` 创建 `docker-compose.yml` 文件。

* 把下列样本中的 `{ChangeThisVersion}` 替代成需要**升级**的`版本号`：
	
	:::tip
	* DongTai/deploy/latest_image.sh 可以查询到目前所有镜像最新的版本号。
	
	* 若宿住机的 port 有修正，请自行调配，预设为 `80`。
	:::

	```yml title="/DongTai/deploy/docker-compose/docker-compose.yml"
	version: "2"
	services:
	  dongtai-redis:
	    image: "registry.cn-beijing.aliyuncs.com/huoxian_pub/dongtai-redis:{ChangeThisVersion}"
	    restart: always
	    logging:
	      driver: "json-file"
	      options:
	        max-size: "10m"
	  dongtai-web:
	    image: "registry.cn-beijing.aliyuncs.com/huoxian_pub/dongtai-web:{ChangeThisVersion}"
	    restart: always
	    ports:
    	// highlight-next-line		
	      - "80:80"
	    volumes:
	      - "./nginx.conf:/etc/nginx/nginx.conf"
	    depends_on:
	      - dongtai-server
	    logging:
	      driver: "json-file"
	      options:
	        max-size: "10m"

	  dongtai-engine:
	    image: "registry.cn-beijing.aliyuncs.com/huoxian_pub/dongtai-server:{ChangeThisVersion}"
	    restart: always
	    entrypoint: ["/opt/dongtai/webapi/docker/entrypoint.sh", "worker"]
	    volumes:
	      - ./config-tutorial.ini:/opt/dongtai/webapi/conf/config.ini
	    logging:
	      driver: "json-file"
	      options:
	        max-size: "10m"
	  dongtai-server:
	    image: "registry.cn-beijing.aliyuncs.com/huoxian_pub/dongtai-server:{ChangeThisVersion}"
	    restart: always
	    volumes:
	      - ./config-tutorial.ini:/opt/dongtai/webapi/conf/config.ini
	    logging:
	      driver: "json-file"
	      options:
	        max-size: "10m"
	  dongtai-engine-task:
	    image: "registry.cn-beijing.aliyuncs.com/huoxian_pub/dongtai-server:{ChangeThisVersion}"
	    restart: always
	    entrypoint: ["/opt/dongtai/webapi/docker/entrypoint.sh", "beat"]
	    volumes:
	      - ./config-tutorial.ini:/opt/dongtai/webapi/conf/config.ini
	    logging:
	      driver: "json-file"
	      options:
	        max-size: "10m"
	volumes:
	  mysql-vol:
	```	

* 在同目录下执行下列命令：

	```bash
	docker-compose -p dongtai up -d
	```

* 最后，参照[初始化自定义数据库](initial-sql-config)导入初始库，**只需导入增量**的数据库文件即可。

	*如：1.3.1 升级，只需导入 update-20220316-release-1.4.0.sql*

:::

## 卸载

* 卸载配置

	```bash
	./dtctl rm -d
	# d : 改选项会让数据和服务一起被删除
	```

:::info 部署后

环境启动成功后，通过部署过程中指定的 `web service port` 访问即可。

* 默认账号及密码: `admin` / `admin`;

* 首次登入 <Highlight color="#E3242B">必须</Highlight> 修改密码。

	* 至 **`系统配置 > 密码修改`** 修改密码后再重新登入。

:::

## 演示

![Image](/img/docs/getting-started/server/deploy.gif)