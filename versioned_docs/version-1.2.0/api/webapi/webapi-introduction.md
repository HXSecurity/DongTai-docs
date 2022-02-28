---
sidebar_position: 1
---

# 使用介绍

## 关于

* **DongTai-WebAPI** 用于处理DongTai用户资源管理的相关请求，包括：

	* 项目管理
	* 漏洞管理
	* 租户管理
	* 方法调用链
	* Agent 管理		
	* 用户数据检索
	* 系统配置资源
	* 部署文档检索
	* 用户/角色管理
	* API Sitemaps


* 可通过相关的 `tag` 来找到对应的管理部分 **API** 的使用流程。
* 这里包含了 **API** 的相关信息。


## 鉴权方式

* 通过登录流程获取 `csrf_token` 和 `sessionid`，
* 通过用户对应的 `token` 来访问对应的 **API**。

:::info

使用 `token` 方式，用户可在安装 Agent 界面找到：

 ```bash
 -H 'Authorization: Token {token}'
 ```
  
此处为用户对应的 `token`，`token` 方式同样需要在请求头上带上一个这样的 `token`。

:::