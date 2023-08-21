---
sidebar_position: 1
---

# 使用介绍
## Agent 开发流程简介

:::note Agent 全流程
1.  访问 WEB 页面，下载 **Agent**
2.  配置 **Agent**，启动服务
3.  **Agent** 向 **OpenAPI** 服务发起 **Agent** 注册请求，获取 `AgentID`
4.  **Agent** 向 **OpenAPI** 服务发起请求，获取规则，然后根据规则对服务进行信息采集
5.  **Agent** 每分钟向 **OpenAPI** 服务发起一次请求，通知 **Agent** 存活，并拉取需要 **Agent** 重放的请求，在 **Agent** 内部进行重放
6.  **Agent** 启动时向 **OpenAPI** 服务发起请求，上报目标应用中存在的 API 接口及参数信息
7.  **Agent** 每分钟向 **OpenAPI** 服务发起请求，上报目标应用使用到的依赖组件数据
8.  **Agent** 每分钟向 **OpenAPI** 服务发起请求，上报目标应用处理 API 请求时产生的一系列不可信数据在内部传播的相关方法调用数据
9.  **Agent** 每分钟向 **OpenAPI** 服务发起请求，上报 **Agent** 运行过程中产生的异常信息
:::

:::note Agent 开发流程
1.  开发 **Agent**，进行`污点源方法`、`传播方法`、`危险方法`、`过滤方法`等进行 Hook 实现`参数`、`返回值`、`对象`等信息的获取与`唯一标识`
2.  将 Hook 的逻辑与 Hook 点分开，实现 Hook 逻辑与 Hook 策略的解藕
3.  开发完成后，进行项目的对接，包括：
    1.  **OpenAPI** 实现 **Agent** 下载的接口
    2.  **OpenAPI** 实现 **Agent** 获取规则的接口
    3.  **WebAPI** 及 **WEB** 实现 **Agent** 下载的功能、规则配置的功能
:::


## API 接口地址及鉴权方式
### 测试服务接口地址

请使用 **本地的 OpenAPI 服务地址** 或 **测试环境 OpenAPI 服务地址，**如果地址不正确，可通过公众号联系技术人员

```bash
http://a28754cd66991441d8d682808caecead-626172336.cn-north-1.elb.amazonaws.com.cn:8000  
```

* 内部员工测试地址

    测试地址可能会变，如果得不到响应通过访问 `iast-test.huoxian.cn` 自行获取

    ```bash
    http://192.168.2.161:8001
    ```

### 接口验证方式

发送 HTTP 请求时，增加如下 `Header` 头即可，其中，`custom-token` 可通过 **`Add Agent`** 页面进行获取

```bash
Authorization: Token <custom-token>
```
