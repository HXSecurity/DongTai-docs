---
sidebar_position: 3
---

# 敏感信息检测能力

:::info

* 支持 HTTP 请求中请求参数
* 请求体和响应体的检测

:::

## 使用场景
根据《个人金融信息保护技术规范》要求，C3 以上级别的数据，在进行传输时，需要进行加密处理，包括手机号、密码、身份证号等；不同行业都需要关注敏感数据是否会通过接口、页面等泄漏。

如果需要检查手机号是否明文传输、身份证号是否明文传输、银行卡号是否直接通过接口输出等，可通过该功能，快速排查以上场景。

[🔗 : 系统配置 - 敏感信息配置](../operation/server-configuration#敏感信息配置)

## 使用示例

### 正则匹配

此处的正则语法参照[🔗 :pyre官方文档](https://docs.python.org/3/library/re.html#regular-expression-syntax)


以下是示例

示例1：手机号检测


![Image](/img/docs/tutorial/zh_sensitive-04.png "")

### JSON字段解析


此处的规则语法参照[🔗 :jq官网](https://stedolan.github.io/jq/manual/#Invokingjq)

以下是示例

示例1：检测json包含某个字段时


![Image](/img/docs/tutorial/zh_sensitive-01.png"")

2.遍历json中是否有符合正则的字符串


![Image](/img/docs/tutorial/zh_sensitive-02.png "")


3.遍历json中是否有携带id字段的object


![Image](/img/docs/tutorial/zh_sensitive-03.png "")