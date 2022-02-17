---
sidebar_position: 5
---

# Go Agent

## 安装环境

* Go 版本: 1.11 +

* Web 框架: Gin

* ORM library: gorm

* 其他: httpRouter、 http

## 安装 Agent

1.  将下载的 `dongtai-go-agent-config.yaml` 放置到项目根目录

2.  在项目入口文件引入基础包 `_ "github.com/HXSecurity/DongTai-agent-go/run/base"`

3.  在项目入口文件引入框架包 例：`_ "github.com/HXSecurity/DongTai-agent-go/run/gin"`

4.  重启服务
