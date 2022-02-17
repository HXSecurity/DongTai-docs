---
sidebar_position: 1
---

import Highlight from '@site/src/components/Highlight';

# IAST

## 简介
交互式应用安全测试（Interactive Application Security
Testing）是 Gartner 在 2012 年提出的一项新的应用安全测试方案。


IAST 相当于 DAST 和 SAST 的组合，是一种相互关联的运行时安全检测技术。
它通过使用部署在 Web 应用程序上的 Agent
来监控运行时发送的流量并分析流量流以实时识别安全漏洞。


**IAST 能提供更高的测试准确性,并详细的标注漏洞在应用程序代码中的确切位置，来帮助开发人员达到实时修复。**

![Image](/img/docs/introduction/zh_comparison.png)

:::info

IAST 是一种安全测试工具而不是漏洞扫描工具。

:::

## 类型

IAST 安全检测工具分成 <Highlight color="#33A9AC">**被动式 IAST**</Highlight> 和 <Highlight color="#33A9AC">**主动式 IAST**</Highlight>。

### 被动式 IAST

* **原理：**

  需要在安全测试环境中使用 Agent 对应用程序进行监控。它将利用功能测试如：`输入`、`请求`、`数据库访问`等来收集的数据后进行漏洞分析，因此不需要主动运行专门的攻击测试。

  ![Image](/img/docs/introduction/zh_passive_iast.png)

* **主要优势：**
  
  只需要业务测试（手动或自动）来触发安全测试，通过测试流量即可实时的进行漏洞检测，并不会影响同时运行的其他测试活动。


:::info

洞态 IAST 属于被动式 IAST。

:::

### 主动式 IAST

* **原理：**

  将 DAST 解决方案（Web 扫描器）和在应用程序服务器内部的 Agent 相结合, Agent 将根据 Web 扫描器提供的功能验证现有漏洞。

  ![Image](/img/docs/introduction/zh_active_iast.png)


[参考文献：【安全小哥】WEB应用自动化安全测试](https://blog.csdn.net/weixin_39997829/article/details/112981018#:~:text=%E6%8F%92%E6%A1%A9%E4%B8%BB%E5%8A%A8%E5%9E%8B-,%E6%89%AB%E6%8F%8F,-%E5%99%A8%3A)

