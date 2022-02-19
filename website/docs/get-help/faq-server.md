---
sidebar_position: 
---

# Server 相关

### 服务端是否支持 docker 部署

:::note 答复

支持，[请参考部署指南](../getting-started/deploy-server)

:::

### 使用本地数据库时，如何初始化数据库

:::note 答复

  [请参考初始化自定义数据库](../getting-started/deploy-server#初始化自定义数据库")

:::

### 部署时拉取镜像或者代码失败的原因

:::note 答复

  * 拉取镜像：检查网络是否能访问 Docker Hub

  * 拉取代码：检查网络是否能访问 GitHub

:::

### 本地安装对服务器资源有什么要求

:::note 答复

  建议至少 4 Core 8 GB, [请参考部署指南](../getting-started/deploy-server) 中各部署方式之系统需求

:::

### 基于 docker-compose 部署多个 OpenAPI 服务节点

:::note 答复

  使用以下命令将 `OpenApi` 扩容到 `number`

  ```bash
  sudo docker-compose -p dongtai-iast up -d –scale dongtai-openapi=<number> –no-recreate
  ```
:::

### Centos7 部署报 `chown mod /var/lib/mysql permission denied`，如何解决

:::note 答复

  * ``getenforce`` 查看 ``selinux`` 是否开启

  * 若开启使用 ``setenforce 0`` 关闭 ``getenforce``

  * 仍不行就给需要映射文件的容器加上 ``--``
:::
