---
sidebar_position: 4
---

# 配置优化

:::info

* 增加高级设置的功能
* 支持手动选择 Agent

:::

:::note 使用场景

当项目中新增漏洞、组件、API Sitemap 时，修改项目的更新时间。

项目增加高级设置功能，支持控制是否开启主动验证、手动配置关联的 Agent、设置版本名称、版本描述。

:::

## 场景一
### 需求
D 公司想将洞态 IAST 用于 DevOps 流程中，但应用上线频繁，存在大量的应用和项目，手动创建项目太麻烦该怎么办呢？

### 做法 
通过 `project.create` 参数直接创建项目。

## 场景二
### 需求
D 公司已经在内部推广 IAST 一段时间，启动时没有配置项目名称等信息；

目前创建项目时都是通过自动创建功能制定，但此前的 Agent 依然存活，且配置无法更改。

如何把按照之前的配置方式启动的 Agent 绑定到当前项目中？

### 做法 
通过项目配置的 **`高级设置`** 功能，手动配置将需要加入到项目的 Agent 绑定到项目上即可。

## 场景三
### 需求
D 公司的系统上已经有好几千个项目，其中一个项目是在四个月前创建的，但最近检出了漏洞，如何快速找到刚检出漏洞的项目？

### 做法 
洞态 v1.1.3 版本解决了项目更新时间的 bug，当项目中`新增漏洞`、`第三方组件` 或 `API Sitemap`数据时，会修改项目的更新时间，确保有数据变更的项目始终位于前列。

![Image](/img/docs/tutorial/zh_optimization-01.png "")

![Image](/img/docs/tutorial/zh_optimization-02.png "")

[🔗 : Agent 配置 - Java 参数表](../getting-started/agent/parameter/config-java-agent)

[🔗 : Agent 配置 - Python 参数表](../getting-started/agent/parameter/config-python-agent)

[🔗 : 项目配置](../operation/application-management#新建项目)

