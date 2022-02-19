---
sidebar_position: 1
---

import Highlight from '@site/src/components/Highlight';

# 安装问题

### 多个项目共用一个 Agent，后台会怎么展示收集到的漏洞信息

:::note 答复

  * 当多个项目共用一个 Agent，所有的漏洞数据可以在 [应用漏洞](../operation/vul-management) 进行查看

  * 如果需要区分不同的项目，可通过添加项目的启动参数 `-Dproject.name=<application name>`，然后新建项目。

  *项目名与参数 `-Dproject.name=<applicatin name>` 中的 `application name` 一致即可*

:::

### 如何取得 Agent Token

:::note 答复

  [请参考配置 Agent 插件](../getting-started/agent/plugin/java-agent-idea#配置插件)

:::


### 多个 app.jar 是否可共用同一个 agent.jar 

:::note 答复

  可以，如果需要区分不同的项目，通过指定启动参数 `application.name` 即可

:::


### 使用 Agent 启动项目后，怎么处理报错信息

:::note 答复

  在不影响项目使用的情况下， Agent 检测时会有机率出现报错，此为正常现象

  否则，请将报错日志保存并联系技术人员

:::


### 如何更新探针

:::note 答复

   **`系统配置 > 状态监控`**，点击 **`云端探针服务`** 右上角的刷新

:::


### 项目名称，需要唯一吗

:::note 答复

  同一个用户下的项目，每个项目名称 <Highlight color="#E3242B">必须</Highlight> 是唯一的

:::


### Agent 重新下载后发生变更了，但项目名称还是一致的，是否可以进行漏洞验证

:::note 答复

  需要为同一个 Agent

:::


### 启动项目后为何没有从洞态 Server 检测到探针

:::note 答复

  [请参考 Agent 排错指南](../getting-started/agent/agent-troubleshooting)

:::


### 项目如何绑定多个版本且漏洞数据会怎么展示
 
:::note 答复

 * 在洞态IAST官网新建项目时有填写版本的输入框，填写当前应用版本

 当应用更新新版本时，首先进入项目详情，在版本处可以编辑版本，新增版本并且切换到新版本，然后启动新版本应用即可

 [请参考项目配置](../operation/application-management#新建项目)

 * 不同版本的漏洞数据会展示在其对应版本的项目中

:::


### Java Agent 支持的 Java 版本

:::note 答复

  [请参考 Agent 安装环境 ](../getting-started/agent/install-java-agent#安装环境")

:::


### 系统配置正常、请求次数正常，为何没漏洞被展示

:::note 答复

  系统有延迟，等几分钟再重新刷新

:::

### 分布式项目，是否每个项目都需安装 Agent 

:::note 答复

  系分布式项目需要将 Agent 添加在每个服务上

:::

### 如何在容器内部署 Java Agent

:::note 答复

  [请参考最佳实践：容器部署洞态 Java Agent 实践](https://i0x0fy4ibf.feishu.cn/docs/doccnaKOEdFxTQnydHTuLBS5OIg)

:::
