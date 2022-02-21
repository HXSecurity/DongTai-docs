---
sidebar_position: 2
---

# Agent 主动验证关闭功能

:::info

* 支持全局控制 
* 支持项目级控制，默认跟随系统的配置

:::

## 需求
由于洞态 IAST 中存在主动验证的功能，C 公司担心主动验证功能会影响业务服务器的性能，但如何关闭该功能呢？

## 做法 
如果想彻底关闭主动验证功能，可在 **`系统配置 > Agent 配置`**，然后关闭主动验证功能即可；

![Image](/img/docs/tutorial/zh_verify_close-01.png "")


如果只是想在特定的项目关闭该功能，可以在 **`项目配置`** 中，修改已有项目，打开 **`高级设置`**，然后关闭主动验证功能；

如果是新创建的项目，可以直接在创建项目时，打开 **`高级设置`**，然后关闭主动验证功能。

![Image](/img/docs/tutorial/zh_verify_close-02.png "")

[🔗 : 系统配置 - Agent 配置](../operation/server-configuration#agent-配置)

[🔗 : 项目配置](../operation/application-management#新建项目)
