---
sidebar_position: 2
---

# Server 相关

### 服务端是否支持 docker 部署

:::note 答复

支持，[请参考部署指南](../getting-started/server/deploy-docker-compose)

:::

### 使用本地数据库时，如何初始化数据库

:::note 答复

  [请参考初始化自定义数据库](../getting-started/server/initial-sql-config)

:::

### 部署时拉取镜像或者代码失败的原因

:::note 答复

  * 拉取镜像：检查网络是否能访问 Docker Hub

  * 拉取代码：检查网络是否能访问 GitHub

:::

### 本地安装对服务器资源有什么要求

:::note 答复

  建议至少 4 Core 8 GB, [请参考部署指南](../category/server-部署指南) 中各部署方式之系统需求

:::

### 基于 docker-compose 部署多个 OpenAPI 服务节点

:::note 答复

  使用以下命令将 `OpenApi` 扩容到 `number`

  ```bash
  sudo docker-compose -p dongtai up –-scale dongtai-openapi=<number> -d –no-recreate
  ```

  例子：扩容 4 个 `dongtai-openapi`

  ```bash
  sudo docker-compose -p dongtai up --scale dongtai-openapi=4 -d –no-recreate
  ```  
:::

### 基于 docker-compose 扩容多个 `dongtai-engine`

:::note 答复

  使用以下命令将 `dongtai-engine` 扩容到 `number`

  ```bash
  sudo docker-compose -p dongtai up –-scale dongtai-engine=<number> -d –no-recreate
  ```

  例子：扩容 4 个 `dongtai-engine`

  ```bash
  sudo docker-compose -p dongtai up --scale dongtai-engine=4 -d –no-recreate
  ```


:::

### Centos7 部署报 `chown mod /var/lib/mysql permission denied`，如何解决

:::note 答复

  * ``getenforce`` 查看 ``selinux`` 是否开启

  * 若开启使用 ``setenforce 0`` 关闭 ``getenforce``

  * 仍不行就给需要映射文件的容器加上 ``--``
:::

### 1.1.3 版本首次登录显示失败

:::note 答复

  1.1.3 版本的话重启洞态会有此 bug，建议升级到最新版

:::


### 如何解决洞态 Server 服务配置域名后，无法访问的问题

:::note 答复

  [请参考部署指南：自定义配置域名访问](../getting-started/server/deploy-docker-compose#部署) 中的配置设定

:::

### 洞态 Server 的升级方案

:::note 答复

  [请参考部署指南：升级](../getting-started/server/deploy-docker-compose#升级)

:::

### 如何查询洞态 Server 数据库增量脚本的下载地址

:::note 答复

  [请参考部署指南：初始化自定义数据库](../getting-started/server/initial-sql-config)

:::

### 业务方在哪里配置特定的 URL 或 Header

:::note 答复

  配置 `blackurl.txt` 文件

  需要更改源码中的配置文件 `src/main/resources/com.secnium.iast.resources/blackurl.txt`，重新编译 Agent

  修改 `blackurl.txt` 后编译打包，将生成的release文件夹里的所有包替换掉 `DongTai-openapi` 容器里 `/tmp/iast_cache/package` 下的所有 jar 包

:::

