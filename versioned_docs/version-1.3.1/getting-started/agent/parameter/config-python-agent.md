---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Python Agent

## 配置文件 
### 参数表

| 参数名  | 说明    | 类型  | 可选参数   |预设值    |
| :--------|:--------|:--------| :--------| :--------|
| `project.name`        | 设置项目名称 | String  |名称保证唯一   | Demo Project          |
| `project.version`     | 设置项目版本       | String      |应用版本号    | V1.0.0                  |
| `iast.server.token`    | 切换 Agent 所属用户                                 | String  |        | 洞态 IAST 用户 Token     |
| `iast.server.url`      | 洞态 IAST 服务部署地址                  | String   | URL 格式      | |
| `iast.server.interval`  | Agent 存活心跳，数据上报间隔时间                 | Integer   | 5 - 120 (秒)     | 10        |
| `engine.name`        | 引擎名称 | String  |引擎名称   |        |
| `engine.version`     | 引擎版本       | String      |引擎版本号   | v1.3.0                 |
| `debug`           | 开启后会在日志记录 Agent 详细运转日志  | Boolean   |`true` or `false`       | false                 |
| `log.log_path`        | 指定日志文件所在目录                   | String |任意有读写权限的目录         |  ./dongtai_py_agent.log   |



  
### 用例

默认配置文件：`../../dongtai_agent_python/config.json`

默认配置文件内容

```json title="../../dongtai_agent_python/config.json"
{
    // highlight-next-line
    "debug":false,
    "iast":{ 
        "server":{ 
            // highlight-start          
            "token":"1f6b1......................b55berere",
            "url":"https://iast-test.huoxian.cn/openapi"
            // highlight-end
        },
        "service":{
            "report":{
                // highlight-next-line
                "interval":5
            } 
        },  
    },
    // highlight-start
    "project":{
        "name":"Demo Project",
        "version":""
    // highlight-end
    },
    // highlight-start    
    "engine":{
        "version":"v1.3.0",
        "name":"c7034af3..................46e947dc"
    // highlight-end
    }, 
    // highlight-start
    "log":{
        "log_path":"./dongtai_py_agent.log"
    // highlight-end
    }
}
```

## 环境变量配置

:::info

配置环境变量，优先级高于 Agent 配置文件

:::

### 参数


| 参数名  | 说明    | 类型  | 可选参数   |预设值    |
| :--------|:--------|:--------| :--------| :--------|
| `PROJECT_NAME`        | 设置项目名称 | String  |名称保证唯一   | Demo Project          |
| `PROJECT_VERSION `     | 设置项目版本       | String      |应用版本号    | V1.0.0                  |
| `AUTO_CREATE_PROJECT`    | 自动创建项目       | String  | `1`：开启，`0`：关闭        | 0     |
| `ENGINE_NAME`        | 引擎名称 | String  |引擎名称   |        |
| `DEBUG`           | 开启后会在日志记录 Agent 详细运转日志  | Boolean   |`true` or `false`       | false                 |
| `LOG_PATH`        | 指定日志文件所在目录                   | String |任意有读写权限的目录         |  ./dongtai_py_agent.log   |


### 用例

* 从洞态 Server 页面下载 `python-agent`。

* 安装 `python-agent`。

  ```bash 
  pip3  install ./dongtai-agent-python.tar.gz
  ```
  
* 通过环境变量配置项目名称、项目版本号。

  <Tabs
  className="python-config-tabs"
  defaultValue="linux"
  values={[
  {label: 'Linux', value: 'linux'},
  {label: 'Windows', value: 'win'},
  ]}>

  <TabItem value="linux">

    ```bash
    export  PROJECT_NAME=<application name>

    #按需添加PROJECT_VERSION、AUTO_CREATE_PROJECT、DEBUG、LOG_PATH，例：
    export  PROJECT_VERSION=<application version> 
    ```

  </TabItem>
  <TabItem value="win">

    [参考文献：Windows 增加环境变量](https://sysin.org/blog/windows-env/)

  </TabItem>
  </Tabs>



