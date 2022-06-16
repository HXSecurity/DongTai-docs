---
sidebar_position: 5
---

# Agent 管理

:::note 使用流程
1. 使用 **Agent** 列表接口或 **Agent** 列表接口获取 **Agent** 的 `id`，`token`
（**Agent**列表接口会包含全部的 **Agent** 数据，而 **Agent** 简易列表接口只包含 **Agent** 的 `id` 和 `Agent 名`）
2. 使用 **Agent** 启动接口与 **Agent** 停止接口控制 **Agent** 的状态
3. 使用 **Agent** 删除接口删除不需要的 **Agent** 数据（会清除相关联的漏洞数据和检测历史）
:::

:::info 额外
* 可以使用 `Agent 别名` 修改接口修改 `Agent 名`
:::

## Agent 删除

* **API Path**：
`/api/v1/agent/{id}/delete`

* **请求方法**：
`GET`

* **详细说明**：
通过条件删除指定的项目版本

* **REST 参数**：

  | 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
  | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
  |id| |是|[int]| || |

* **请求内容**：

  ```
  /api/v1/agent/2113/delete
  ```

* **响应内容**：

  ```json
  {
  	"status": 201,
  	"msg": "agent及相关数据删除成功"
  }
  ```

* **返回结果**：
  `Json Object`

  | 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
  | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
  |status|状态码：201、202|否|[int]| || |
  |msg|状态信息：删除过程出错，请稍后重试、agent及相关数据删除成功、agent不存在或无权限访问 |否|[string]| || |


## Agent 别名修改

* **API Path**：
`/api/v1/agent/alias/modified`

* **请求方法**：
`POST`

* **详细说明**：
修改 Agent 别名

* **请求参数**:
  `Json Object`

  | 参数名 | 说明 | 必填 | 类型 | 值可能性 |  限制 | 示例 |
  | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
  |id|Agent 的对应 ID|是|[int]| | |
  |alias|Agent 的别名|是|[string]| | |

* **请求内容**：

  ```json title="/api/v1/agent/alias/modified"
  {
  	"id": 226,
  	"alias": "Mac OS X-owefsad.local-v1.0.0-c6f8a6358d0c47c7a7ee51c3dd88a489123"
  }
  ```

* **响应内容**：

  ```json
  {
  	"status": 201,
  	"msg": "修改成功"
  }
  ```

* **返回结果**：

  `Json Object`

  | 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
  | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
  |status|状态码：201、202 |否|[int]| || |
  |msg|状态信息：删除过程出错，请稍后重试、agent不存在或无权限访问、修改成功 |否|[string]| || |



## Agent 列表

* **API Path**：
`/api/v1/agents`

* **请求方法**：
`GET`

* **详细说明**：
基于所给条件获取 Agent 信息列表

* **Query 参数**：

  | 参数名 | 说明 | 必填 | 类型 | 限制 | 示例 |
  | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
  |page| |否|[int]|| |
  |pageSize| |否|[int]|| |
  |project_name| |否|[string]|| |
  |state| |否|[int]|| |
  |token| |否|[string]|| |

* **请求内容**：

  ```bash
  /api/v1/agents?page=1&pageSize=10&state=1&token=a
  ```

* **响应内容**：
  ```json
  {
    "status": 201,
    "msg": "success",
    "data": [
      {
        "id": 2087,
        "token": "Darwin 18.7.0-bogon-v1.0.6-bd6a6c04c8cc440a9a997ed7c928dfc4",
        "server": "Agent暂未检测到流量",
        "running_status": "运行中",
        "system_load": "{\"rate\": 15.9}",
        "owner": "admin",
        "latest_time": 1635488528,
        "project_name": "Songtest1203",
        "is_core_running": 0,
        "language": "PYTHON",
        "flow": 1,
        "is_control": 1,
        "report_queue": 0,
        "method_queue": 0,
        "replay_queue": 0,
        "alias": "Darwin 18.7.0-bogon-v1.0.6-bd6a6c04c8cc440a9a997ed7c928dfc4",
        "register_time": 1635387261,
        "startup_time": 0
      },
      {
        "id": 2083,
        "token": "Windows 10-cain-v1.0.6-dongtai-agent-python",
        "server": "Agent暂未检测到流量",
        "running_status": "运行中",
        "system_load": "{\"rate\": 5.4}",
        "owner": "admin",
        "latest_time": 1635483334,
        "project_name": "lost004",
        "is_core_running": 1,
        "language": "PYTHON",
        "flow": 0,
        "is_control": 1,
        "report_queue": 0,
        "method_queue": 0,
        "replay_queue": 0,
        "alias": "Windows 10-cain-v1.0.6-dongtai-agent-python",
        "register_time": 1635489059,
        "startup_time": 189
      }
    ],
    "page": {
      "alltotal": 3,
      "num_pages": 1,
      "page_size": 10
    }
  }
  ```

* **返回结果**：
  `Json Object`

  | 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
  | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
  |data| |是|[array]| || |
  |status|状态码：201 |否|[int]| || |
  |msg|状态信息：success |否|[string]| || |

  | 参数名  | 说明 | 必填 | 类型 | 值可能性 | 示例 |
  | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
  |id||是|[int]|||
  |token||否|[string]|||
  |server||是|[string]|||
  |running_status||是|[string]|||
  |system_load||是|[string]|||
  |owner||是|[string]|||
  |latest_time||否|[int]|||
  |project_name||否|[string]|||
  |is_core_running||否|[int]|||
  |language||否|[string]|||
  |flow||是|[string]|||
  |is_control||否|[int]|||
  |report_queue||是|[string]|||
  |method_queue||是|[string]|||
  |replay_queue||是|[string]|||
  |alias||是|[string]|||
  |register_time||是|[string]|||
  |startup_time||否|[int]|||



## Agent 启动

* **API Path**：
`/api/v1/agent/start`

* **请求方法**：
`POST`

* **详细说明**：
通过指定 `id` 来启动停止的 Agent

* **请求参数**：
  `Json Object`

  | 参数名 | 说明 | 必填 | 类型 | 值可能性 |  限制 | 示例 |
  | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
  |id|Agent 的对应 ID|否|[int]| | |
  |ids|Agents 对应的 ID，使用 "," 进行切分。|否|[string]| | |

* **请求内容**：

  ```json title="/api/v1/agent/start"
  {
  	"id": 1 
  }
  ```

* **响应内容**：

  ```json
  {
  	"status": 201,
  	"msg": "正在启动..."
  }
  ```

* **返回结果**：
  `Json Object`

  | 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
  | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
  |status|状态码：201 |否|[int]| || |
  |msg|状态信息：正在暂停... |否|[string]| || |




## Agent 停止

* **API Path**：
`/api/v1/agent/stop`

* **请求方法**：
`POST`

* **请求参数**：
  `Json Object`

  | 参数名 | 说明 | 必填 | 类型 | 值可能性 |  限制 | 示例 |
  | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
  |id|Agent 的对应 ID|是|[int]| | |
  |ids|Agents 对应的 ID，使用 "," 进行切分。|是|[string]| | |

* **请求内容**：

  ```json title='/api/v1/agent/start'
  {
  	"id": 1 
  }
  ```

* **响应内容**：

  ```json
  {
  	"status": 201,
  	"msg": "正在暂停..."
  }
  ```

* **返回结果**：
  `Json Object`

  | 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
  | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
  |status|状态码：201  |否|[int]| || |
  |msg|状态信息：正在暂停... |否|[string]| || |



## Agent 详情

* **API Path**：
`/api/v1/agent/{id_}`

* **请求方法**：
`GET`

* **详细说明**：
通过条件删除指定的项目版本

* **REST 参数**：

  | 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
  | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
  |id_| |是|[int]| || |

* **请求内容**：

  ```bash
  /api/v1/agent/2113
  ```

* **响应内容**：

  ```json
  {
    "status": 201,
    "msg": "success",
    "data": {
      "agent": {
        "id": 2113,
        "token": "Mac OS X-localhost-v1.0.6-30a7571c06ec4df99e306f7fa8735e49",
        "version": "v1.0.6",
        "latest_time": 1635475404,
        "user": 208,
        "server": 1971,
        "is_running": 1,
        "is_core_running": 1,
        "control": 0,
        "is_control": 0,
        "bind_project_id": 141,
        "project_name": "SecExample",
        "online": 0,
        "project_version_id": 177,
        "language": "JAVA",
        "alias": "",
        "startup_time": 2938,
        "register_time": 1635478601
      }
    }
  }
  ```

* **返回结果**：
  `Json Object`

  | 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
  | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
  |data| |是|[object]| || |
  |status|状态码：201 ; |否|[int]| || |
  |msg|状态信息：success ; |否|[string]| || |

  | 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
  | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
  |agent| |是|[object]| || |

  | 参数名  | 说明 | 必填 | 类型 | 值可能性 | 示例 |
  | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
  |id|Agent的 ID|是|[string]| || |
  |token|Agent 名称|是|[string]| || |
  |version|Agent 版本|是|[string]| || |
  |latest_time|Agent 的最后更新时间|是|[int]| || |
  |is_running|Agent 的运行状态|是|[int]| || |
  |is_core_running|Agent 的运行状态|是|[int]| || |
  |control|Agent 状态位，1 代表安装，2 代表卸载，0 代表失去控制|是|[int]| || |
  |is_control|表示是否受控，0 代表否，1 代表是|是|[int]| || |
  |bind_project_id|绑定的项目 ID，如果存在则 Agent 被绑定|否|[int]| || |
  |project_name|项目名，用来初次启动 Agent 并创建项目|是|[string]| || |
  |online|1 代表运行中，0 代表离线，同一 token 的 Agent 只能有一个在线|是|[int]| || |
  |project_version_id|绑定项目的版本 ID，若果存在，则 Agent 被绑定|否|[int]| || |
  |language|项目中所涉及的 Agent 对应的语言|是|[string]| || |






