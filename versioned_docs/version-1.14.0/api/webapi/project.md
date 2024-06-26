---
sidebar_position: 2
---

# 项目管理

:::note 使用流程

1. 通过项目列表接口获取现有的项目
2. 使用项目详情接口获取项目详细信息
3. 使用项目新建/项目删除接口管理项目进行
4. 通过项目版本列表接口获取项目对应的版本信息
5. 获取当前项目的版本

:::

:::info 额外

* 使用项目报告导出接口，导出项目的漏洞报告。
* 使用项目概况接口获取对应的项目漏洞信息。

:::

## 当前项目版本修改

* **API Path**：
`/api/v1/project/version/current`

* **请求方法**：
`POST`

* **详细说明**：
基于给定条件修改特定项目的版本号

* **请求参数**：
	`Json Object`

	| 参数名 | 说明 | 必填 | 类型 | 值可能性 |  限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|version_id|项目的版本 ID|是|[string]| | |
	|project_id|项目 ID|是|[int]| | |

* **请求内容**：

	```json title="/api/v1/project/version/current"
	{
		"version_id": 183,
		"project_id": 146
	}
	```

* **响应内容**：

	```json
	{
		"status": 201,
		"msg": "版本设置成功"
	}
	```

* **返回结果**：

	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|status|状态码：201、202|否|[int]| || |
	|msg|状态信息：版本设置成功、版本不存在、版本设置失败 |否|[string]| || |




## 删除项目

* **API Path**：
`/api/v1/project/delete`

* **请求方法**：
`POST`

* **详细说明**：
使用项目对应的 `id` 来删除项目

* **请求参数**
	`Json Object`

	| 参数名 | 说明 | 必填 | 类型 | 值可能性 |  限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|id|项目 ID|是|[int]| | |

* **请求内容**：

	```json title="/api/v1/project/delete"
	{
		"id": 144
	}
	```

* **响应内容**：

	```json
	{
		"status": 201,
		"msg": "项目删除成功"
	}
	```

* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|status|状态码：201、202|否|[int]| || |
	|msg|状态信息：删除失败、项目删除成功|否|[string]| || |


## 项目版本更新

* **API Path**：
`/api/v1/project/version/update`

* **请求方法**：
`POST`

* **详细说明**：
更新对应的版本信息


* **请求参数**：
	`Json Object`

	| 参数名 | 说明 | 必填 | 类型 | 值可能性 |  限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|version_id|项目的版本 ID|是|[string]| | |
	|version_name|项目的版本名|是|[string]| | |
	|description|项目版本的描述|是|[string]| | |
	|project_id|项目 ID|是|[int]| | |
	|current_version|表示是否为当前版本，1 代表是，0 代表否|是|[int]| | |


* **请求内容**：

	```json title="/api/v1/project/version/update"
	{
		"version_name": "1312",
		"description": "11312",
		"isEdit": true,
		"version_id": 183,
		"current_version": 1,
		"project_id": 146
	}
	```

* **响应内容**：

	```json
	{
		"status": 201,
		"msg": "更新成功"
	}
	```

* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|status|状态码：201、202  |否|[int]| || |
	|msg|状态信息：更新成功、参数错误 |否|[string]| || |



## 项目版本列表

* **API Path**：
`/api/v1/project/version/list/{project_id}`

* **请求方法**：
`GET`

* **详细说明**：
获取项目对应的版本列表

* **REST 参数**：

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|project_id| |是|[int]| || |

* **请求内容**：

	```bash
	/api/v1/project/version/list/146
	```

* **响应内容**：

	```json
	{
	  "status": 201,
	  "msg": "查询成功",
	  "data": [
	    {
	      "version_id": 183,
	      "version_name": "1312",
	      "current_version": 1,
	      "description": "13123"
	    },
	    {
	      "version_id": 182,
	      "version_name": "V1.0",
	      "current_version": 0,
	      "description": ""
	    }
	  ]
	}
	```

* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|data| |是|[array]| || |
	|status|状态码：201 |否|[int]| || |
	|msg|状态信息：success  |否|[string]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|version_id|项目的版本 ID|是|[int]| || |
	|version_name|项目的版本名|是|[string]| || |
	|current_version|表示是否为当前版本，1 代表是，0 代表否|是|[int]| || |
	|description|项目版本的描述|是|[string]| || |





## 项目版本添加

* **API Path**：
`/api/v1/project/version/add`

* **请求方法**：
`POST`

* **详细说明**：
基于给定条件添加指定项目版本，若指定版本号，将基于给定条件更新指定版本信息

* **请求参数**：
	`Json Object`

	| 参数名 | 说明 | 必填 | 类型 | 值可能性 |  限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|version_id|项目的版本 ID|是|[string]| | |
	|version_name|项目的版本名|是|[string]| | |
	|description|项目版本的描述|是|[string]| | |
	|project_id|项目 ID|是|[int]| | |
	|current_version|表示是否为当前版本，1 代表是，0 代表否|是|[int]| | |

* **请求内容**：

	```json title="/api/v1/project/version/add"
	{
		"version_name": "1312",
		"description": "13123",
		"isEdit": true,
		"project_id": 146
	}
	```

* **响应内容**：

	```json
	{
		"status": 201,
		"msg": "创建成功",
		"data": {
			"version_id": 183,
			"version_name": "1312",
			"description": "13123"
		}
	}
	```


* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|data| |是|[array]| || |
	|status|状态码：201、202|否|[int]| || |
	|msg|状态信息：参数错误、创建成功|否|[string]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|version_id|项目的版本 ID|是|[string]|||
	|version_name|项目的版本名|是|[string]|||
	|description|项目版本的描述|是|[string]|||



## 项目列表

* **API Path**：
`/api/v1/projects`

* **请求方法**：
`GET`

* **详细说明**：
用户对应的项目列表，支持使用项目模糊匹配搜索

* **Query 参数**：

	| 参数名 | 说明 | 必填 | 类型 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|name|项目名搜索，支持模糊匹配|否|[string]|| |
	|page|对应页码|否|[int]|| |
	|pageSize|每页数量，最大限制50，超过50输入视为50|否|[int]|| |


* **请求内容**：

	```bash
	/api/v1/projects?page=1&pageSize=20&name=123
	```

* **响应内容**：

	```json
	{
		"status": 201,
		"msg": "success",
		"data": [{
			"id": 146,
			"name": "123123321",
			"mode": "插桩模式",
			"vul_count": [],
			"agent_count": 0,
			"owner": "admin",
			"latest_time": 1635493011,
			"agent_language": []
		}, {
			"id": 143,
			"name": "songtestFlask1455",
			"mode": "插桩模式",
			"vul_count": [],
			"agent_count": 1,
			"owner": "admin",
			"latest_time": 1635490547,
			"agent_language": ["PYTHON"]
		}, {
			"id": 142,
			"name": "springsec-test-prod",
			"mode": "插桩模式",
			"vul_count": [],
			"agent_count": 1,
			"owner": "owefsad",
			"latest_time": 1635479073,
			"agent_language": ["JAVA"]
		}],
		"page": {
			"alltotal": 60,
			"num_pages": 3,
			"page_size": 20
		}
	}
	```

* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|data| |是|[array]| || |
	|status|状态码：201  |否|[int]| || |
	|msg|状态信息：success  |否|[string]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|id| |是|[int]| || |
	|name| |否|[string]| || |
	|mode| |否|[string]| || |
	|vul_count|漏洞数量|是|[string]| || |
	|agent_count|项目目前存活的 Agent 数量|是|[string]| || |
	|owner|项目拥有者|是|[string]| || |
	|latest_time| |否|[int]| || |
	|agent_language|Agent 的语言|是|[string]| || |



## 项目概况

* **API Path**：
`/api/v1/projects/summary/{id}`

* **请求方法**：
`GET`

* **详细说明**：
项目的情况概览，包括：漏洞、项目版本、Agent 语言等信息

* **REST 参数**：

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|id| |是|[int]| || |

* **请求内容**：

	```bash
	/api/v1/projects/summary/146
	```

* **响应内容**：
	```json
	{
		"status": 201,
		"msg": "success",
		"data": {
			"owner": "admin",
			"name": "123123321",
			"id": 146,
			"mode": "插桩模式",
			"latest_time": 1635493011,
			"type_summary": [],
			"day_num": [{
					"day_label": "10-22",
					"day_num": 0
				},
				{
					"day_label": "10-23",
					"day_num": 0
				},
				{
					"day_label": "10-24",
					"day_num": 0
				},
				{
					"day_label": "10-25",
					"day_num": 0
				},
				{
					"day_label": "10-26",
					"day_num": 0
				},
				{
					"day_label": "10-27",
					"day_num": 0
				},
				{
					"day_label": "10-28",
					"day_num": 0
				},
				{
					"day_label": "10-29",
					"day_num": 0
				}
			],
			"level_count": [{
					"level_id": 1,
					"level_name": "高危",
					"num": 0
				},
				{
					"level_id": 2,
					"level_name": "中危",
					"num": 0
				},
				{
					"level_id": 3,
					"level_name": "低危",
					"num": 0
				},
				{
					"level_id": 4,
					"level_name": "无风险",
					"num": 0
				},
				{
					"level_id": 5,
					"level_name": "提示",
					"num": 0
				}
			],
			"versionData": {
				"version_id": 183,
				"version_name": "1312",
				"description": "11312"
			},
			"agent_language": []
		}
	}
	```

* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|data| |是|[object]| || |
	|status|状态码：201 |否|[int]| || |
	|msg|状态信息：success |否|[string]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|name|项目名|是|[string]| || |
	|mode|项目模式|是|[string]| || |
	|id|项目ID|是|[int]| || |
	|latest_time|默认值为项目的当前版本|是|[int]| || |
	|versionData|项目的版本信息|是|[string]| || |
	|type_summary|关于漏洞类型的漏洞数量统计|是|[array]| || |
	|agent_language|项目中所涉及的 Agent 对应的语言|是|[array]| || |
	|level_count|基于漏洞等级的漏洞数量统计|是|[array]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|type_name|漏洞名|是|[string]| || |
	|type_count|漏洞类型的个数|是|[int]| || |
	|type_level|漏洞等级|是|[int]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|level_name|漏洞等级名|是|[string]| || |
	|level_id|漏洞等级 ID|是|[int]| || |
	|num|漏洞级别对应的漏洞数量|是|[int]| || |



## 项目 Agent

* **API Path**：
`/api/v1/project/engines/{pid}`

* **请求方法**：
`GET`

* **详细说明**：
获取项目对应的 Agent 列表

* **REST参数**：

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|pid| |是|[int]| || |


* **请求内容**：

	```bash
	/api/v1/project/engines/143
	```

* **响应内容**：
	```json
	{
	  "status": 201,
	  "msg": "success",
	  "data": [
	    {
	      "id": 2116,
	      "token": "Darwin 18.7.0-bogon-v1.0.6-3752a9aad49d42fdac5bca7dd3e58bfe",
	      "short_name": "Darwin 18.7.0-bogon-v1.0.6"
	    }
	  ]
	}
	```


* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|data| |是|[array]| || |
	|data>>id|Agent ID|是|[int]| || |
	|data>>token|Agent 名称|是|[string]| || |
	|data>>shortname|Agent 简称|是|[string]| || |
	|status|状态码：201  |否|[int]| || |
	|msg|状态信息：success |否|[string]| || |


## 项目详情

* **API Path**：
`/api/v1/project/{id}`

* **请求方法**：
`GET`

* **详细说明**：
获取项目的版本信息，包括项目的当前版本

* **REST参数**：

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|id| |是|[int]| || |

* **请求内容**

	```bash
	/api/v1/project/139
	```
* **响应内容**

	```json
	{
	  "status": 201,
	  "msg": "success",
	  "data": {
	    "name": "lost004",
	    "id": 138,
	    "mode": "插桩模式",
	    "scan_id": 5,
	    "agents": [
	      {
	        "id": 2083,
	        "name": "Windows 10-cain-v1.0.6-dongtai-agent-python"
	      }
	    ],
	    "versionData": {
	      "version_id": 174,
	      "version_name": "V1.0",
	      "description": ""
	    }
	  }
	}
	```

* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|data| |是|[object]| || |
	|status|状态码：201、203 |否|[int]| || |
	|msg|状态信息：success、no permission |否|[string]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|name|项目名|是|[string]| || |
	|agents|项目对应的 Agent|是|[array]| || |
	|mode|项目模式|是|[string]| || |
	|scan_id|扫描策略对应的 ID|是|[int]| || |
	|versionData|项目的版本信息|是|[object]| || |
	|id|项目ID|是|[int]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|name|项目版本名|是|[string]| || |
	|id|项目版本 ID|是|[int]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|version_name|项目版本名称|是|[string]| || |
	|version_id|项目版本 ID|是|[int]| || |
	|description|项目版本描述|是|[string]| || |





## 项目新建

* **API Path**
`/api/v1/project/add`

* **请求方法**：
`POST`

* **详细说明**：
根据所给条件新建项目;当指定项目id时, 根据所给条件更新对应项目

* **请求参数**：
	`Json Object`

	| 参数名 | 说明 | 必填 | 类型 | 值可能性 |  限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|name|项目名|是|[string]| | |
	|agent_ids|Agent 对应的 ID，使用","进行切分。|是|[string]| | |
	|mode|项目模式|是|[string]| | |
	|scan_id|扫描策略的对于 ID|是|[int]| | |
	|version_name|项目的版本名。|是|[string]| | |
	|pid|项目ID|是|[int]| | |
	|description|项目的描述信息|是|[string]| | |

* **请求内容**

	```json title='/api/v1/project/add'
	{
		"name": "123123123123",
		"mode": "插桩模式",
		"agent_ids": "1,2",
		"scan_id": 260,
		"version_name": "123132",
		"description": "1231"
	}
	```

* **响应内容**：

	```json
	{
		"status": 201,
		"msg": "创建成功"
	}
	```

* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|status|状态码：201、202、203 |否|[int]| || |
	|msg|状态信息：参数错误、创建失败、项目名称已存在、创建成功、agent已被其他项目绑定|否|[string]| || |



