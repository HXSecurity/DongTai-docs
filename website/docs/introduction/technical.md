---
sidebar_position: 4
---

# 技术规格

## DongTai Server

### 环境

* Docker
*  Kubernetes

## DongTai Agent

### 开发语言

* Java
* Python
* PHP (测试版) 
* Go (测试版)

### 功能
|<div style={{paddingRight : '400px'}}>功能</div> |<div style={{addingRight : '20px'}}>Java</div> |<div style={{paddingRight : 'px'}}>Python</div> |<div style={{paddingRight :'20px'}}>PHP</div> |<div style={{paddingRight : '20px'}}>Go</div> |
|:------------|:------:|:------:|:------:|:------:|
|支持注册、存活等基本要求|✅|✅|✅|✅|
|支持检测 SQL 注入漏洞|✅|✅|✅|✅|
|支持配置项目相关的参数（配置项目名称、项目版本、项目自动创建）|✅|✅|||
|支持 Agent 所在机器的 CPU 监控、Agent 自动熔断|✅|✅|||
|支持 第三方组件 采集|✅|✅|||
|支持但不限于 OWASP 中通用漏洞的检测|✅|☑️|||
|支持 Server 端控制 Agent（停止、启动、重启，策略热更新等）|✅|✅|||
|支持 Server 端配置 hook 规则，hook 特定的类或方法|✅|✅|||
|支持 全链路跟踪|☑️||||
|支持 RPC 框架|☑️||||
|支持 跨请求漏洞检测|✅||||
|支持 请求管理|✅||||

☑️：部分支持

### 中间件

|<div style={{paddingRight : '60px'}}>开发语言</div> |中间件 |
|:------------|:---------------------------------------------------------------------------------------------------------------------|
|Java       |Any Java EE Server、GlassFish、Jetty、Red Hat JBoss Enterprise Application Platforms、Red Hat JBoss Web Server、Resin、Tomcat、WebLogic、WebSphere|
|Python     |Django、Flask                                                                                                                                           |
|PHP        |Coming Soon                                                                                                                                             |
|Go         |Coming Soon                                                                                                                                             |


### 运行时/框架

|<div style={{float : 'left', paddingRight : '100px'}}></div> ||
|:------------|:---------------------------------------------------------------------------------------------------------------------|
|Java/JVM     |Enterprise JavaBeans (EJB)、Grails、GWT、Hibernate、OWASP ESAPI、Play、Seam、Spring、SpringBoot、Struts、Vaadin、Velocity|
|Java Runtime |AdoptOpen JDK、Amazon Corretto、Eclipse OpenJ9、IBM、Oracle HotSpot、Open JDK、Red Hat Open JDK|                                                                                                                            


