---
sidebar_position: 5
---

# Go Agent

:::caution
该Agent目前主要有社区维护，当前为beta版本，可能存在无法部署成功等问题。

[靶场参考](../../introduction/detection#测试靶场)
:::


## 安装环境

* Go 版本: 1.12 +

* Web 框架: Gin

* ORM library: gorm

* 其他: httpRouter、http


## 安装 Agent

1. 将下载的 `dongtai-go-agent-config.yaml` 放置到项目根目录

	:::info离线部署配置
	在 go.mod 文件中添加 `replace github.com/HXSecurity/DongTai-agent-go => 本地洞态路径`
	:::

2. 在项目入口文件引入基础包 `_ "github.com/HXSecurity/DongTai-agent-go/run/base"`

3. 在项目入口文件引入框架包 例：`_ "github.com/HXSecurity/DongTai-agent-go/run/gin"`

	:::info 目前支持的框架包
	* gorm: _ "github.com/HXSecurity/DongTai-agent-go/run/gorm"
	* http: _ "github.com/HXSecurity/DongTai-agent-go/run/http"
	* httprouter： _ "github.com/HXSecurity/DongTai-agent-go/run/httpRouter"
	:::

4. 执行 `go mod tidy` 等待同步包

5. 添加命令行参数 `-gcflags "all=-N -l"` 运行项目,例如：

	```
	go run -gcflags "all=-N -l" main.go
	```

6. 重启应用服务（自动安装跳过此步）


:::info

可在命令行添加参数来配置自动创建项目、项目名称、项目版本号等。

* `DongtaiGoProjectName=true` 为可选参数，将自动创建项目。
* `DongtaiGoProjectName=<application name>` 为可选参数， `<application name>` 与创建的项目名称保持一致，将自动关联至项目；默认值为 `Demo Project`。
* `DongtaiGoProjectVersion=<application version>` 为可选参数，会自动创建项目版本。

[🔗 : Go Agent 配置参数](./parameter/config-go-agent)

如果不配置上述参数，也可进入项目管理中进行手工绑定。

:::
