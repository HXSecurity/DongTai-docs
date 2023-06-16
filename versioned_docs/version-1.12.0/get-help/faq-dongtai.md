---
sidebar_position: 1
---

import Highlight from '@site/src/components/Highlight';

# 洞态相关

## 产品相关

### 洞态 IAST 和 百度 OpenRASP-IAST 的区别

:::note 答复

  洞态 IAST 是被动式 IAST；百度 OpenRASP-IAST 则是主动式 IAST

  [请参考 IAST 类型](../introduction/iast#类型)

:::

### SAST 产品和 IAST 产品的技术区别

:::note 答复

  * SAST：根据不可信变量的变化，梳理污点传播过程
  * IAST：根据不可信数据的变化，梳理污点传播过程

[请参考洞态漏洞分析原理](../introduction/architecture#漏洞分析原理)

:::

## 其他 

### 为何无法访问洞态 IAST 和火线官方网站

:::note 答复

  * 确认网络是否能正常访问其他网站

  * 更换阿里云的 DNS

:::