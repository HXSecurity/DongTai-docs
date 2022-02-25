---
sidebar_position: 1
---

# 开始检测项目

👏 欢迎使用 DongTai IAST，请依序以下步骤开启您的检测项目。


## 1. 部署 DongTai IAST Server 

  ```
  选择本地部署或注册 SaaS 服务。
  ```

:::note Server 部署或注册方案

  * [Docker Compose](deploy-server#docker-compose)
  * [Kubernetes](deploy-server#kubernetes)
  * [注册 SaaS 服务](https://jinshuju.net/f/I9PNmf) 

:::

## 2. 安装 DongTai IAST Agent

  ```
  依据开发语言，安装 Agent 至应用程序上。
  ```

### 步骤 1: 下载 Agent

:::note Agent 下载指南

  [下载指南](agent/download-agent)

:::

:::caution 注意

包名变更，1.3.1 版本之前的 Agent 无法使用 1.3.1 版本以后的 Server 端。

**升级 Server 后需重新下载及安装 Agent！**

::: 

### 步骤 2: 安装 Agent

:::note Agent 安装指南

  * [Java Agent](agent/install-java-agent)
  * [Python Agent](agent/install-python-agent)
  * [PHP Agent](agent/install-php-agent)
  * [Go Agent](agent/install-go-agent)


  <b>同时支持开发环境插件</b>

  * [Intellij IDEA](agent/plugin/java-agent-idea) 
:::


## 3. 开启安全检测项目

  ```
  项目的安全检测流程。
  ```

### 步骤 0: 确认 Agent 运行状态

:::caution

确认 Agent 已成功安装并运行

:::

1. 可在 **`系统配置 > Agent 管理`** 中的引擎列表中查询 `Agent` 状态。

   ![Image](/img/docs/getting-started/start-project/zh_agent_list.png "")

   🔗 : 
   [Agent 管理](../operation/server-configuration#agent-管理)、
   [Agent 排错指南](agent/agent-troubleshooting)

### 步骤 1: 开启安全检测项目   

2. 在 **`项目配置 > 项目列表`** 查看项目。


3. 您也能通过 **`项目设置`** 查询或修改项目信息。

    ![Image](/img/docs/getting-started/start-project/zh_application_list.png "")
    🔗 : 
    [项目配置](../operation/application-management#新建项目)

### 步骤 2: 开启安全测试

4. 至 Web 应用程序中触发流量。
    ![Image](/img/docs/getting-started/start-project/zh_application_test.png "")

### 步骤 3: 查询漏洞信息

5. 所有被识别的漏洞将显示在 DongTai Server 的漏洞列表中。

    ![Image](/img/docs/getting-started/start-project/zh_application_vuldetect.png "")
    🔗 : 
    [应用漏洞](../operation/vul-management)


6. 您可以查看漏洞详情并对其状态进行标记。

    ![Image](/img/docs/getting-started/start-project/zh_application_vuldetail.png "")

7. 当漏洞被标记为`已确认`，它也会同步显示在项目概况中。
    
    ![Image](/img/docs/getting-started/start-project/zh_application_detail.png "")
    🔗 : 
    [项目概述](../operation/application-management#项目概述")


