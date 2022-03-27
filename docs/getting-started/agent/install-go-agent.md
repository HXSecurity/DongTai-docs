---
sidebar_position: 5
---

# Go Agent

:::tip
[靶场参考](../../introduction/detection#测试靶场)
:::

## 安装环境

* Go 版本: 1.12 +

* Web 框架: Gin

* ORM library: gorm

* 其他: httpRouter、 http


## 安装 Agent

1. 将下载的 `dongtai-go-agent-config.yaml` 放置到项目根目录

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
