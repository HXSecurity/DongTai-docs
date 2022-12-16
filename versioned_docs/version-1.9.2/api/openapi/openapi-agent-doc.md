---
sidebar_position: 3
---

# 接口
## Agent 注册

**Agent** 启动时，向 **Server** 端注册的接口

* 请求

    ```bash
    Authorization: Token <custom-token>
    ```

* Body 参数样例

    ```bash
    Authorization: Token <custom-token>
    ```

* Body 参数说明

  |参数名             |类型       |描述                                                                               |默认值     |是否必须|
  |:-----------------|:---------|:---------------------------------------------------------------------------------|:----------|:---------|
  |name              |string     |Agent 名字，规则：osName + \"-\" + hostname + \"-\" + 探针版本号 + \"-\" + 探针唯一ID |无         |必须|
  |language          |string     |Agent 对应的语言，可选值：（JAVA、PYTHON、PHP、GO)                                 |JAVA       |必须|
  |version           |string     |Agent 版本，Agent的版本号，如：v1.0.5                                              |无         |必须|
  |projectName       |string     |配置 Agent 时指定的项目名称，各Agent测自己实现及添加对应的配置方法                |Demo Project      |非必需|
  |hostname          |string     |Agent 所在系统的主机名                                                             |无         |必须|
  |network           |string     |所在主机的网络情况（IP地址等）                                                     |无         |非必需|
  |containerName      |string     |Agent所在的容器名称（Java中的Tomcat、Python中的uwsgi、PHP中的php-fpm或Tomcat等）   |无|       |非必需|
  |containerVersion   |string     |Agent所在的容器版本                                                                |无         |非必须|
  |serverAddr         |string     |Agent所在服务的访问地址，ip地址或域名                                             |无        |必须|
  |serverPort         |string     |Agent所在服务的端口                                                                |无         |必须|
  |serverPath         |string     |服务所在的路径                                                                     |无         |非必需|
  |serverEnv          |string     |服务器中的环境变量信息，需要Base64编码                                             |无         |必须|
  |pid                |string     |当前服务对应的进程 ID                                                             |无         |非必需|

* 响应体样例
    ```bash
    {
        "status": 201,
        "msg": "success",
        "data":{
            "id": "1"
        }
    }
    ```

* 响应体字段说明

  |字段名                  |类型                    |描述|
  |:----------------------|:-----------------------|:-----------------------|
  |status                 |int                    |返回码      |
  |msg                    |string                 |错误信息      |
  |data                   |[]obj                  |数据      |

* obj 字段说明

  |参数名                  |类型                    |描述|
  |:----------------------|:-----------------------|:-----------------------|
  |id                     |int                    |注册之后的Agent ID|


## Agent 获取 HOOK 规则

**Engine** 运行时，从 **OpenAPI** 服务获取规则

* 请求

    ```bash
    GET /api/v1/profiles?language=<language>
    ```

* Query

  |参数名       |类型         |描述                                           |默认值|
  |:------------|:------------|:----------------------------------------------|:------------|
  |language     |string       |Agent 对应的语言，可选值：（JAVA、PYTHON、PHP、GO) |JAVA|
                              
* 响应体样例

    ```bash
    {
        "status": 201,
        "msg": "success",
        "data": [
            {
                "type": 1,
                "enable": 1,
                "value": "String",
                "details": [
                    {
                        "source": "P1",
                        "track": "",
                        "target": "O",
                        "value": "java.lang.String.<init>(java.lang.String)",
                        "inherit": "false"
                    },
                    {
                        "source": "P1",
                        "track": "",
                        "target": "O",
                        "value": "java.lang.String.<init>(java.lang.StringBuffer)",
                        "inherit": "false"
                    }
                ]
            }
        ]
    }
    ```

* 响应体字段 - data说明

  |字段名          |类型            |描述|
  |:---------------|:---------------|:------------|
  |type            |int             |hook规则类型，1 - 传播方法规则、2 - 不可信数据获取方法规则、3- 过滤方法规则、4 - 危险方法规则|                                  
  |enable          |int             |规则是否启用，1 - 启用、0 - 禁用|
  |value           |string          |规则类型描述（如：Propagator:String、Sink:CMD-Injection等）|
  |details         |\[\]detail      |规则详情|


## Server 端启停 Agent

**Agent** 运行时，每秒向 **Server** 端查询一次，根据 **Server** 端的控制命令 `启动` 或 `暂停` **Agent**

* 请求

    ```bash
    GET /api/v1/engine/startstop?agentName=<agentName>
    ```

* Query

  |参数名      |类型       |描述                        |默认值     |是否必须|
  |:-----------|:----------|:---------------------------|:----------|:----------|
  |agentName   |string     |Agent 名字，规则：osName + \"-\" + hostname + \"-\" + 探针版本号 + \"-\" + 探针唯一ID  |无         |否|


## Agent 上报数据

**Agent** 向 **Server**
端发送报告数据，包括：`Agent心跳`、`依赖组件`、`方法调用数据`、`API 接口数据`、`错误日志`

* 请求

    ```bash
    POST /api/v1/report/upload
    ```

* Body 参数样例

    ```bash
    {
        "detail": {
            "disk": "{}",
            "memory": "{\"total\":\"2GB\",\"rate\":0,\"use\":\"80.605MB\"}",
            "agentId": 5848,
            "cpu": "{\"rate\":32}",
            "methodQueue": 0,
            "replayQueue": 0,
            "reqCount": 0,
            "reportQueue": 49
        },
        "type": 1
    }
    ```

* Body 参数说明

  |参数名     |类型       |描述                                             |默认值     |是否必须|
  |:----------|:----------|:----------------------------------------------|:---------|:------|
  |type       |int        |数据类型，可选择：1 - Agent心跳数据、17 -  依赖组件数据、36 - 方法调用数据|无         |必须|
  |detail     |{}detail   |数据详情，随type不同，格式不同，将分别详细解释   |无         |必须|


### Agent 心跳数据格式

* `detail` 参数样例

    ```bash
    {
        "disk": "{}",
        "memory": "{\"total\":\"2GB\",\"rate\":0,\"use\":\"80.605MB\"}",
        "agentId": 5848,
        "cpu": "{\"rate\":32}",
        "methodQueue": 0,
        "replayQueue": 0,
        "reqCount": 0,
        "reportQueue": 49
    }
    ```

* `detail` 参数说明

  |参数名        |类型       |描述                                    |默认值     |是否必须|
  |:-------------|:----------|:---------------------------------------|:----------|:----------|
  |disk          |string     |安装Agent服务所在服务器的磁盘使用情况   |无         |必须|
  |memory        |string     |安装Agent服务所在服务器的内存使用情况   |无         |必须|
  |agentId       |int        |Agent ID                                |无         |必须|
  |cpu           |string     |安装Agent服务所在服务器的CPU使用情况    |无         |必须|
  |methodQueue   |int        |Agent端待发送的方法调用图数量           |无         |必须|
  |replayQueue   |int        |Agent端待重放的请求数量                 |无         |必须|
  |reqCount      |int        |安装探针的服务，接收到的API请求次数     |无         |必须|
  |reportQueue   |int        |Agent端待发送的报告数量                 |无         |必须|

### 依赖组件数据格式

* `detail` 参数样例

    ```bash
    {
        "packagePath": "/Users/xxx/spring-boot/2.3.2.RELEASE/spring-boot-2.3.2.RELEASE.jar",
        "agentId": 5848,
        "packageSignature": "efd5812bc736735e71447a51701becd14c2bede0",
        "packageName": "spring-boot-2.3.2.RELEASE.jar",
        "packageAlgorithm": "SHA-1"
    }
    ```

* `detail` 参数说明

  |参数名             |类型       |描述                           |默认值     |是否必须|
  |:-------------|:----------|:---------------------------------------|:----------|:----------|
  |agentId            |int        |Agent ID                       |无         |必须|
  |packagePath        |string     |组件所在的物理路径             |无         |必须|
  |packageName        |string     |组件的包名                     |无         |必须|
  |packageSignature   |string     |组件的方法签名                 |无         |必须|
  |packageAlgorithm   |string     |组件的签名计算方法，统一使用 SHA-1   |无         |必须|
                                                                    


### 方法调用数据

* `detail` 参数样例

    ```bash
    {
    "agentId": 5853,
    "uri": "/",
    "url": "http://localhost:8080/",
    "protocol": "HTTP/1.1",
    "contextPath": "",
    "pool": [
        {
            "invokeId": 1024,
            "interfaces": [],
            "targetHash": [1824828808],
            "targetValues": "{q=0.9}",
            "signature": "java.util.HashMap.put",
            "originClassName": "java.util.HashMap",
            "sourceValues": "q 0.9 ",
            "methodName": "put",
            "className": "java.util.Map",
            "source": false,
            "callerLineNumber": 252,
            "callerClass": "org.springframework.util.MimeTypeUtils",
            "args": "",
            "callerMethod": "parseMimeTypeInternal",
            "sourceHash": [
                1197294456,
                365502861
            ],
            "retClassName": ""
        }
    ],
    "language": "JAVA",
    "clientIp": "127.0.0.1",
    "secure": false,
    "replayRequest": false,
    "method": "GET",
    "reqHeader": "aG9zdDpsb2NhbGhvc3Q6ODA4MApj",
    "reqBody": "",
    "resBody": "<!DOCTYPE html>\n<html la",
    "scheme": "http",
    "resHeader": "SFRUUC8xLjEgMjAw"
    }
    ```

* `detail` 参数说明

  |参数名          |类型       |描述                          |默认值     |是否必须|
  |:--------------|:----------|:----------------------------|:---------|:-------------------------|
  |agentId         |int        |Agent ID                      |无         |必须|
  |protocol        |string     |HTTP 协议                     |无         |必须，RPC请求中自行处理|
  |scheme          |string     |HTTP 协议                     |无         |必须，RPC请求中自行处理|
  |secure          |boolean    |是否为HTTPS                   |无         |必须，RPC请求中为空|
  |method          |string     |HTTP请求方法名称，GET、POST 等   |无         |必须，RPC 请求中非必需|                                                                 
  |uri             |string     |HTTP请求的uri                 |无         |必须|
  |url             |string     |HTTP请求的url                 |无         |必须|
  |queryString     |string     |HTTP请求对应的 URL 查询参数   |无         |必须，可为空|
  |contextPath     |string     |HTTP 请求的上下文路径         |无         |必须，可为空|
  |reqHeader       |string     |请求头（HTTP/Dubbo RPC/gRPC等）           |无         |必须|                                                       
  |reqBody         |string     |请求体（HTTP/Dubbo RPC/gRPC等）           |无         |必须，可为空|                                                         
  |resHeader       |string     |响应头（HTTP/Dubbo RPC/gRPC等）           |无         |必须，可为空|                           
  |resBody         |string    |响应体（HTTP/Dubbo  RPC/gRPC等）          |无         |必须，可为空|                         
  |clientIp        |string    |客户端IP                      |无         |必须|
  |language        |string     |Agent 对应的语言              |无         |必须|
  |replayRequest   |boolean    |是否为重放请求                |无         |必须|
  |pool            |\[\]pool   |不可信参数的方法调用池数据    |无         |必须，可为空|


* `pool` 参数说明

  |参数名             |类型              |描述                                                           |默认值     |是否必须|
  |:-----------------|:----------------|:------------------------------------------------------------|:----------|:-------|
  |invokeId           |int               |方法调用ID，单次HTTP请求中，确保唯一性                         |无         |必须|
  |interfaces         |array\[string\]   |hook点处命中的类对应的接口及父类                               |无         |必须，可为空|
  |targetHash         |array\[int\]      |不可信数据经过该方法后，转换为的数据对应的hash值（确保唯一）   |无         |必须，可为空|
  |targetValues       |string            |不可信数据经过该方法后，转换为的数据值                         |无         |必须，可为空|
  |signature          |string            |方法签名                                                       |无         |必须|
  |originClassName    |string            |hook点处命中的类名称                                           |无         |必须|
  |vsourceValues      |string            |不可信数据进入该方法时，对应的数据值                           |无         |必须|
  |methodName         |string            |hook点处命中的方法名称                                         |无         |必须|
  |className          |string            |hook点处命中规则的类/接口名称                                  |无         |必须|
  |source             |boolean           |是否为不可信数据来源方法                                       |无         |必须|
  |callerLineNumber   |int               |hook方法的调用行                                               |无         |必须|
  |callerClass        |string            |hook方法对应的调用方法所在的类名称                             |无         |必须|
  |args               |string            |hook方法对应的方法参数值                                       |无         |必须，可为空|
  |callerMethod       |string            |hook方法的调用方法                                             |无         |必须|
  |sourceHash         |array\[int\]      |不可信数据进入该方法时，数据对应的hash值（确保唯一）           |无         |必须|
  |retClassName       |string            |返回值数据类型的类名                                           |无         |必须，可为空|

