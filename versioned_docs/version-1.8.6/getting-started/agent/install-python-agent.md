---
sidebar_position: 3
---

# Python Agent(Beta)

:::caution
该Agent目前主要有社区维护，当前为beta版本，可能存在无法部署成功等问题。

[靶场参考](../../introduction/detection#测试靶场)
:::

## 安装环境

* 操作系统: Windows/Linux/macOS

* Python 版本: 3.6 及以上

* 解释器: CPython

* 中间件: uWSGI

* 编译依赖

    * gcc (Linux/macOS)

    * make (Linux/macOS)

    * cmake

    * Visual Studio (Windows)

* Web 框架

    * Django: 3.0 - 3.2

    * Flask: 1.0 - 1.2

* Python 依赖包

    * psutil \>= 5.8.0

    * requests \>= 2.25.1

    * pip \>= 19.2.3

## 安装 Agent

* [下载 Agent 压缩文件](download-agent)并执行以下命令：

	```bash
	pip3 install ./dongtai-agent-python.tar.gz
	```

## 项目配置

### Django

* 修改 Django 项目中的 `settings.py`，在 `MIDDLEWARE` 中增加下列配置：

	```bash title="settings.py"
	MIDDLEWARE = [
	    'dongtai_agent_python.middlewares.django_middleware.FireMiddleware',
	    #...
	 ]
	```

### Flask

* 在 `app.py` 文件中新增下列配置:

	```python tittle="app.py"
	app = Flask(__name__)

	# Add agent
	from dongtai_agent_python.middlewares.flask_middleware import AgentMiddleware
	app.wsgi_app = AgentMiddleware(app.wsgi_app, app)
	```

## 资源：参数配置

:::info

可通过配置文件 `config.js` 或环境变量配置自动创建项目、项目名称、项目版本号等。

* `AUTO_CREATE_PROJECT=1` 为可选参数，将自动创建项目。
* `PROJECT_NAME=<application name>` 为可选参数， `<application name>` 与创建的项目名称保持一致，将自动关联至项目；默认值为 `Demo Project`。
* `PROJECT_VERSION=<application version>` 为可选参数，会自动创建项目版本。

[🔗 : Python Agent 配置参数](./parameter/config-python-agent)

如果不配置上述参数，也可进入项目管理中进行手工绑定。

:::

## 安装演示

<iframe width="820" height="400" src="https://fast.wistia.net/embed/iframe/2yefyzou39" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
