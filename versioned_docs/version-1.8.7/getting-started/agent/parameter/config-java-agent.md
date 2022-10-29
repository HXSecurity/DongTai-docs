---
sidebar_position: 1
---

# Java Agent

## 配置安装参数

| 参数名                          | 说明                         | 类型    | 可选参数                                  | 预设值                  |
| :------------------------------ | :--------------------------- | :------ | :---------------------------------------- | :---------------------- |
| `dongtai.app.create`            | 是否自动创建项目             | Boolean | `true`, `false`                           | false                   |
| `dongtai.app.name`              | 项目名称                     | String  | 名称保证唯一                              | Demo Project            |
| `dongtai.app.version`           | 项目版本                     | String  | 应用版本号                                | V1.0                    |
| `dongtai.debug`                 | 开启后加载本地缓存的检测引擎 | Boolean | `true`, `false`                           | false                   |
| `iast.engine.delay.time`        | 延迟启动功能，单位：秒       | Integer | 任意整型数字                              | 0                       |
| `iast.dump.class.enable`        | 是否 dump 修改后的字节码     | Boolean | `true`, `false`                           | false                   |
| `iast.dump.class.path`          | dump 字节码的路径            | String  | 任意有权限路径                            | /tmp/iast-class-dump/   |
| `dongtai.server.url`            | Dongtai OpenAPI URL          | String  | URL 格式                                  | https://iast.io/openapi |
| `dongtai.server.token`          | Dongtai OpenAPI Token        | String  |                                           |                         |
| `dongtai.response.length`       | 向 OpenAPI 发送的响应体长度  | Integer | 大于 0 的整形数字                         |                         |
| `dongtai.cluster.name`          | 集群名称                     | String  | 名称保证唯一                              |                         |
| `dongtai.cluster.version`       | 集群版本                     | String  | 集群版本号                                |                         |
| `dongtai.server.package`        | 设置是否从云端下载引擎       | boolean | `true`, `false`                           | true                    |
| `dongtai.log`                   | 是否开启日志                 | Boolean | `true`, `false`                           | true                    |
| `dongtai.log.level`             | 日志等级                     | String  | `error`, `warn`, `info`, `debug`, `trace` | info                    |
| `dongtai.log.path`              | 日志文件所在目录             | String  | 任意有读写权限的目录                      |                         |
| `dongtai.log.disable-collector` | 是否禁用日志采集             | Boolean | `true`, `false`                           | false                   |

## 热部署安装参数

| 参数名                  | 说明                         | 类型    | 可选参数                                  | 预设值                  |
| :---------------------- | :--------------------------- | :------ | :---------------------------------------- | :---------------------- |
| `mode`                  | Agent 加载/卸载, 必填        | String  | `install`, `uninstall`                    |                         |
| `pid`                   | 应用程序进程 ID, 必填        | String  |                                           |                         |
| `app_create`            | 是否自动创建项目             | Boolean | `true`, `false`                           | false                   |
| `app_name`              | 项目名称                     | String  | 名称保证唯一                              | Demo Project            |
| `app_version`           | 项目版本                     | String  | 应用版本号                                | V1.0                    |
| `debug`                 | 开启后加载本地缓存的检测引擎 | Boolean | `true`, `false`                           | false                   |
| `dongtai_server`        | Dongtai OpenAPI Url          | String  | URL 格式                                  | https://iast.io/openapi |
| `dongtai_token`         | Dongtai OpenAPI Token        | String  |                                           |                         |
| `cluster_name`          | 集群名称                     | String  | 名称保证唯一                              |                         |
| `cluster_version`       | 集群版本                     | String  | 集群版本号                                |                         |
| `server_package`        | 设置是否从云端下载引擎       | Boolean | `true`, `false`                           | true                    |
| `log`                   | 是否开启日志                 | Boolean | `true`, `false`                           | true                    |
| `log_level`             | 日志等级                     | String  | `error`, `warn`, `info`, `debug`, `trace` | info                    |
| `log_path`              | 日志文件所在目录             | String  | 任意有读写权限的目录                      |                         |
| `log_disable_collector` | 是否禁用日志采集             | Boolean | `true`, `false`                           | false                   |


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

* 当热部署安装需集群配置时的参数参考：
  ```bash
  java -jar agent.jar -m install -p pid --app_name "app_name" --app_create "true" --app_version "v1.0" --dongtai_server "https://iast.io/openapi" --dongtai_token "a303ab4bedc93f96808335d023d7ac4d2ba00773" --cluster_name "cluster_name" --cluster_version "v1.0" --server_package "false" --log_level "info" --log_path "/tmp"
  ```