---
sidebar_position: 1
---

# Java Agent

## 配置安装参数

| 参数名  | 说明     | 类型  |可选参数   |预设值    |
| :--------|:--------|:--------| :--------| :--------|
| `dongtai.app.name`        | 设置项目名称 | String  |名称保证唯一   | Demo Project          |
| `dongtai.app.version`     | 设置项目版本       | String      |应用版本号    | V1.0                  |
| `dongtai.app.create`      | 设置是否自动创建项目   | Boolean    |`true` or `false`     | false                 |
| `dongtai.debug`           | 开启后加载本地系统临时目录中的检测引擎  | Boolean   |`true` or `false`       | false                 |
| `iast.server.mode`        | local模式支持、POST请求包展示、污点位置及污点值展示等功能 | String |`local` or `remote`|  local    |
| `iast.engine.delay.time`  | 延迟启动功能，单位：秒                 | Integer   |任意整型数字      | 0                     |
| `iast.dump.class.enable`  | 是否 dump 修改后的字节码             | Boolean |`true` or `false`           | false     |
| `iast.dump.class.path`    | dump 字节码的路径                   | String|任意有权限路径          | /tmp/iast-class-dump/ |
| `dongtai.server.url`      | Dongtai OpenAPI URL                  | String   | URL 格式      |  https://openapi.iast.io  |
| `dongtai.server.token`    | Dongtai OpenAPI Token             | String  |        | User Token   |
| `dongtai.response.length` | 向 Dongtai OpenAPI 发送的响应体长度     | Integer |大于 0 的整形数字        | null                  |
| `dongtai.log`             | 是否把日志输出到本地文件               | Boolean  | `true` or `false`       | true                  |
| `dongtai.log.path`        | 指定日志文件所在目录                   | String |任意有读写权限的目录         | agent.jar 当前目录    |
| `dongtai.log.level`       | 指定日志等级                             | String    |`info`, `debug`      | info                  |
| `dongtai.server.package`  | 指定是否从洞态Server端下载agent依赖包   | boolean    |`true`, `false`    | true                  |
| `dongtai.cluster.name`    | 集群名称   | String    | URL 格式     |                |
| `dongtai.cluster.version` | 集群版本   | String    | 集群版本号    |                  |

## 热部署安装参数

| 参数名             | 说明                                         | 类型      |可选参数    预设值               |
| :--------|:--------|:--------| :--------| :--------|
| `app_name`       | 设置项目名称                           | String     | 名称保证唯一   | Demo Project          |
| `app_create`     | 设置是否自动创建项目                   | Boolean    | `true` or `false`     | false               |
| `app_version`    | 设置项目版本                           | String     | 应用版本号    | V1.0                 |
| `debug`          | 开启后加载本地系统临时目录中的检测引擎 | Boolean    |`true` or `false`       | false                 |
| `dongtai_server` | Dongtai OpenAPI Url                    | String  | URL 格式      |                        |
| `dongtai_token`  | Dongtai OpenAPI Token                  | String     |       |                      |
| `mode`           | Agent 加载/卸载                        | String     | `install` or `uninstall` | |
| `pid`            | 应用程序进程 ID                        | String     |                  |    |


## 用例

:::info 

测试项目：SpringDemo

:::

* 当需要将应用绑定到云端项目 `SpringDemo` 时：

  ```bash
  java -javaagent:/path/to/agent.jar -Ddongtai.app.name=SpringDemo -jar SpringDemo.jar
  ```

* 当需要排查 Agent 报错问题或者二次开发 Agent 时需要本地调试：

  ```bash
  java -javaagent:/path/to/agent.jar -Ddongtai.debug=true -jar SpringDemo.jar
  ```

* 当启动 Agent 影响了应用的运行，需设置 Agent 延迟启动时间，以 `15 秒` 为例：

  ```bash
  java -javaagent:/path/to/agent.jar -Diast.engine.delay.time=15 -jar SpringDemo.jar
  ```

* 当排查 agent 异常或者研究字节码转换原理时，在目录 `/tmp/class` 查看转换后的字节码文件：

  ```bash
  java -javaagent:/path/to/agent.jar -Diast.dump.class.enable=true -Diast.dump.class.path=/tmp/class -jar SpringDemo.jar
  ```

* 当需要设置检测能力为 `hunter/normal` 时（`hunter` 模式的使用场景：代码审计，`normal` 模式使用场景：企业内部检测漏洞）：

  ```bash
  java -javaagent:/path/to/agent.jar -Diast.mode=hunter/normal -jar SpringDemo.jar
  ```
