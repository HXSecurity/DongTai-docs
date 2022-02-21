---
sidebar_position: 3
---

import Link from '@docusaurus/Link';
import Highlight from '@site/src/components/Highlight';

# 架构

洞态 IAST 由 <Highlight color="#33A9AC">DongTai Server</Highlight> 和 <Highlight color="#33A9AC">DongTai Agent</Highlight> 两种组件组成，下列会详细介绍。

## DongTai Server

### 概览

![Image](/img/docs/introduction/zh_server_arch.png "")

DongTai Server 架构的主要组成部分，提供了用户管理界面，使用 DongTai Agent 收集的数据去分析、识别漏洞并生成漏洞报告。同时，它也提供漏洞通知、Web-API、项目管理、自定义漏洞规则等功能。

### 组件

* **Web:** 管理界面，供用户管理用户组、Web 应用检测项目、漏洞报告、 Agent 、自定义漏洞规则等。

* **WebAPI:** 用于处理和响应来自用户的请求。

* **OpenAPI:** 将 Agent 端收集到的数据存储至数据库中,同时也通过监视心跳等返回的数据来监控 Agent 的可用性。

* **Database:** 存储数据。

* **Engine Task:** 将分析任务分配给 Engine。

* **Engine:** 通过漏洞规则分析收集到的数据以识别漏洞, 当检测到漏洞，会将漏洞详细信息存储在数据库中，并触发通知组件通报用户。

* **Notification:** 通报用户的第三方 API。


### 流程

#### 漏洞检测流程

<Highlight color="#33A9AC">A-1 ~ A-5</Highlight>

* **A-1:** 在常规的操作中，Web 应用程序会收到来自用户的 HTTP 请求。

* **A-2:** 插桩在 Web 应用程序的 Agent 将监控和收集来自流量的数据，然后通过 OpenAPI 将数据发送到洞态 IAST Server 端。

* **A-3:** 当 OpenAPI 收到数据，它会将数据存入数据库并触发 Engine。

* **A-4:** Engine 开始分析和识别漏洞。

* **A-5:** 当漏洞被识别用户将收到通报。

#### 管理流程

<Highlight color="#33A9AC">B-1 ~ B-4</Highlight>

* **B-1, B-2:** WebAPI 将处理来自 Web 的用户请求。

* **B-3, B-4:** WebAPI 将响应结果通过 Web 回传给用户。

#### 修改 Agent 设置流程

<Highlight color="#33A9AC">C-1 ~ C-4</Highlight>

* **C-1, C-2:** WebAPI 将处理来自 Web 的用户请求并将变化存储在数据库中。

* **C-4, C-3:** 当客户端 Web 应用程序重新启动， Agent 将通过 OpenAPI 拉取并使用变化的设置。

### 漏洞分析原理

![Image](/img/docs/introduction/zh_detect_theory.png "")

* 【不信任数据采集】：首先将采集到的数据放到一个数据池子中，定义为污点池。
* 【不信任数据预处理】：接着从污点池里依定义的规则 hook 到函数的入参和出参。
* 【不信任数据传播图】：将污点池中的数据以树形结构串连起来形成传播图。
* 【不信任调用链查找】：最后以能够触达危险函数的链路即判定漏洞存在。

### 漏洞分析方法

![Image](/img/docs/introduction/detect_method.png "")


## DongTai Agent

### 概览

用于监控 Web 应用服务器的数据流。 DongTai Agent 会通过代码插桩来监控请求并不断收集数据，然后将这些数据发送到 DongTai Server。

如果在一台机器上部署了多个 Web 应用程序，需在每个 Web 应用程序服务器上安装一个 DongTai Agent。

:::info

目前支援的检测语言：Java、Python、PHP、Go

:::

### 流程

![Image](/img/docs/introduction/agent_arch.png)

* 从 DongTai Server 注册 DongTai Agent
* 按 Web 应用服务器开发语言下载和安装对应的 dongtai-core
* dongtai-core 会从 server 上 pull 检测规则
* 最后再按检测规则采集数据，然后将数据回传至 DongTai Server


### Java

![Image](/img/docs/introduction/java_arch.png "")

插桩（Instrument）是JVM提供的一个可以修改已加载类的类库，是专为 Java 语言编写的插桩服务。它可以构建一个独立于应用程序的 Agent，从而监测运行在 JVM 上的程序。

在启动应用时添加 `javaagent` 参数来加载插桩 DongTai Agent，可实现动态数据流污点采集及追踪。


### Python

![Image](/img/docs/introduction/python_arch.png "")

与 Java 插桩类似，DongTai-Python-Agent 利用 Monkey Patch 在运行时动态修改类或模块，实现动态数据流污点采集及追踪。

### PHP

![Image](/img/docs/introduction/php_arch.png "")

PHP 插桩原理主要是替换程序内部函数，将原始请求暂存在特定的位置，并触发 Agent 采集和追踪数据流污点。

### Go

Coming Soon

