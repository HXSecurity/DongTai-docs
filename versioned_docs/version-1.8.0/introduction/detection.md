---
sidebar_position: 5
---

import Highlight from '@site/src/components/Highlight';

# 漏洞覆盖

## 通用漏洞覆盖

|<div style={{paddingRight : '50px'}}>漏洞等级</div> |漏洞类型|
|:------------|:-----------------|
|高危漏洞    |注入类型（EL表达式、HQL、JNI、LDAP、NoSQL、SMTP、Sql、Xpath、反射、命令执行）、服务器端请求伪造、不安全的 XML Decode、路径穿越、 不安全的JSON反序列化           |  
|中危漏洞    |反射型 XSS、XXE                                                                                                                                   |
|低危漏洞    |Cookie 未设置 Secure、Header 头注入、Regular Expression DoS、弱随机数算法、弱哈希算法、弱加密算法、不安全的 readline、不安全的重定向、 不安全的转发、 点击劫持 |
|提示信息    |缺少 Content-Security-Policy 响应头、缺少 X-Content-Type-Options 响应头、缺少 X-XSS-Protection 响应头、不正确的 Strict-Transport-Security 配置|

## Agent 通用漏洞覆盖

|<div style={{paddingRight : '100px'}}>漏洞等级</div> |<div style={{paddingRight : '100px'}}>漏洞类型</div> |<div style={{paddingRight : '30px'}}>Java</div> |<div style={{paddingRight : '20px'}}>Python</div> |<div style={{paddingRight : '50px'}}>PHP</div> |<div style={{paddingRight : '50px'}}>Go</div> |
|:------------|:------------|:------:|:------:|:------:|:------:|
|<Highlight color="#E3242B">高危</Highlight>|SQL 注入|✅|✅|✅|✅|
||HQL 注入|✅||||
||JNI 注入|✅||||
||LDAP 注入|✅|✅|||
||NoSql 注入|✅|✅|||
||SMTP 注入|✅||||
||XPath 注入|✅||||
||反射注入|✅||||
||表达式注入|✅||||
||OGNL 注入|✅||||
||JNDI 注入|✅||||
||命令执行|✅|✅|✅|✅|
||不安全的反序列化|✅|✅|✅||
||服务器端请求伪造（SSRF）|✅|✅||✅|
||路径穿越|✅|✅|✅|✅|
||代码执行||✅|✅||
||硬编码检测|✅||||
||敏感信息泄漏|✅|✅||✅|
||文件包含|||✅||
|<Highlight color="#fd8c00">中危</Highlight>|XXE|✅|✅|||
||反射型 XSS|✅|✅|✅|✅|
||不安全的 XML Decode|✅||||
||Header 头注入|✅||✅||
|<Highlight color="#1877F2">低危</Highlight>|点击劫持|✅|✅|||
||正则 DoS|✅|✅|||
||CORS Misconfiguration|✅|✅|||
||数据明文传输|✅|✅|||
||弱加密算法|✅|✅|||
||弱哈希算法|✅||||
||弱随机数算法|✅||||
||不安全的 Readline|✅||||
||信任边界|✅||||
|<Highlight color="#00ac46">提示</Highlight>|Cookie 未设置 Secure|✅||||

## 测试靶场

|Agent|靶场|
|:------------|:-----------------|
|Java   |[Dubbo RPC](https://github.com/VulnerabilitySpace/dubbo-trace-example)、[OpenRASP 靶场](https://rasp.baidu.com/doc/install/testcase.html)、[OWASP Webgoat](https://owasp.org/www-project-webgoat)|  
|Python |[DockerVulspace](https://github.com/jinghao1/DockerVulspace)|
|PHP    |[PHPVul](https://github.com/jinghao1/phpvul)|
|Go     |[Dongtai-govwa](https://github.com/piexlmax/dongtai-govwa)|








