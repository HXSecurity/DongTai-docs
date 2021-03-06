---
sidebar_position: 4
---

import Highlight from '@site/src/components/Highlight';

# 漏洞检测相关

### 是否有完整的能检测漏洞类型文档

:::note 答复

  [请参考漏洞覆盖](../introduction/detection)

:::


### 规则方法是否支持正则

:::note 答复

  * Hook 方法暂时不支持正则

  * 建议使用 IDEA 插件添加规则

:::


### 如果自定义添加规则时，规则怎样和漏洞信息和污点流图关联

:::note 答复

  *以 XSS 规则为例：*

  * 如果是过滤 xss 的话，加在过滤方法里

  * 如果是 xss 的漏洞触发点，加在危险方法里

:::


### 过滤方法规则和危险方法规则在漏洞检测机制上的区别

:::note 答复

  * 过滤方法规则是属于传播节点的一种，用于添加公司内部自定义的危险数据过滤方法

  * 危险方法是漏洞出发的位置

:::


### 洞态 Server 扫描时是否支持代理

:::note 答复

  洞态没有扫描功能，所以不需要主动向业务服务器发起请求

:::


### 组件管理这个漏洞的检测是针对 Agent 所在主机上的所有 jar 包都会检测

:::note 答复

  只会检测应用所依赖的包

:::


### 验证功能的目的是验证漏洞是否存在

:::note 答复

  是的，为了验证漏洞是否存在

:::


### 发验证请求会可能会产生脏数据

:::note 答复

  不会有脏数据，重放请求有重放标志，会进行自动拦截

:::


### 执行验证的时候，也是根据类型，自动调用集成好的 PoC 验证

:::note 答复

  暂时未区分类型，直接调用统一的 PoC `./../dongtai` 进行验证，后续支持自定义 PoC

:::


### 洞态是否会判定污染数据带有攻击性

:::note 答复

  暂时不会

:::


### 如何搜索污点参数跟踪图

:::note 答复

  在搜素功能中内置，搜索漏洞的 url 或者相关信息就可以展示污点参数跟踪图
  
  [请参考搜寻功能](../operation/search)

:::

### 洞态是否支持 log4j 的检测

:::note 答复

  1.3.0 及以上版本支持此功能，不需要插件，直接就能检测

:::

