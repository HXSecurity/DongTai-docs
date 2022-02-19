---
sidebar_position: 1
---

import Highlight from '@site/src/components/Highlight';

# Intellij IDEA

## 简介

DongTai IAST IntelliJ IDEA 插件是面向开发人员的轻量级插件选项，提供了开发人员软件安全测试和修复的功能。

## 系统配置

IntelliJ IDEA 版本：2020.3 以上

## 线上安装

从 IDEA 应用市场安装

在 **`Plugins > Marketplace`** 搜寻 **DongTai IAST** 并安装。

![Image](/img/docs/getting-started/plugin/idea/zh_idea_marketplace.png)

## 离线安装

* 下载 [DongTai IAST IDEA 插件安装包](https://github.com/HXSecurity/DongTai-Plugin-IDEA/releases/download/v1.0/DongTai-Plugin-IDEA.zip)

* 开启 IntelliJ IDEA 后点击 **`Preferences > Plugin`**。选择 **`Install Plugin from Disk`** 后开始安装插件。

![Image](/img/docs/getting-started/plugin/idea/zh_idea_install.png)
![Image](/img/docs/getting-started/plugin/idea/zh_idea_extract.png)
![Image](/img/docs/getting-started/plugin/idea/zh_idea_install.png)

### 配置插件

* 至 DongTai IAST Server 端右上方的 **`Add Agent`** 获取 `Token`。

![Image](/img/docs/getting-started/plugin/idea/zh_idea_token-1.png)

* 在 IntelliJ IDEA 界面上点击 **`Tools > DongTai IAST 配置云端`** 并填入 `Token`。

![Image](/img/docs/getting-started/plugin/idea/zh_idea_token-2.png)

:::tip

`agentUrl, url`: 若使用洞态 IAST Server 端 SaaS 版，此栏位将预设自动输入。自动部署, <Highlight color="#E3242B"> 需要 </Highlight> 自行填入。

:::

### 排错

* 若 **`Event Log`** 弹出错误提示。请检查 `Token` 是否输入正确。

![Image](/img/docs/getting-started/plugin/idea/zh_idea_error.png)

## Run/Debug

* 下图展示两种使用洞态 IAST 插件启动安全测试项目的方式：

![Image](/img/docs/getting-started/plugin/idea/zh_idea_run.png)

* 下方控制台会显示安全测试日志。

![Image](/img/docs/getting-started/plugin/idea/zh_idea_log.png)

* 可在插件中实时查看漏洞信息。

![Image](/img/docs/getting-started/plugin/idea/zh_idea_vul.png)


