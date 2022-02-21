---
sidebar_position: 3
---

# 漏洞管理

:::note 使用流程
1. 根据漏洞状态列表接口获取获取漏洞状态字段
2. 通过漏洞列表接口获取项目或 **Agent** 对应的漏洞列表
3. 通过 `漏洞 id` 使用漏洞验证接口进行重放验证
4. 自行验证完或已知的漏洞使用漏洞状态修改
:::

## 漏洞概览

* **API Path**：
`/api/v1/vuln/summary`

* **请求方法**：
`GET`

* **详细说明**：
使用下列条件来查看项目的漏洞数量统计


* **Query 参数**：

	| 参数名 | 说明 | 必填 | 类型 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|language|编程语言|否|[string]|| |
	|level|漏洞等级：1,2,3,4|否|[int]|| |
	|order|排序指标：type,type,first_time,latest_time,url|否|[string]|| |
	|project_id|项目 ID|否|[int]|| |
	|project_name|项目名|否|[string]|| |
	|status|状态名|否|[string]|| |
	|status_id|状态 ID|否|[int]|| |
	|type|漏洞类型|否|[string]|| |
	|url|漏洞的对应 URL|否|[string]|| |
	|version_id|默认值为项目的当前版本|否|[int]|| |


* **请求内容**：

	```
	/api/v1/vuln/summary?language=JAVA&level=&type=&project_name=&url=a&order=level&status_id=1&project_id=58
	```

* **响应内容**：

	```json
	{
		"status": 201,
		"msg": "success",
		"data": {
			"language": [{
				"language": "JAVA",
				"count": 428
			}, {
				"language": "PYTHON",
				"count": 64
			}],
			"level": [{
				"level": "高危",
				"count": 254,
				"level_id": 1
			}, {
				"level": "中危",
				"count": 172,
				"level_id": 2
			}, {
				"level": "低危",
				"count": 54,
				"level_id": 3
			}, {
				"level": "无风险",
				"count": 4,
				"level_id": 4
			}, {
				"level": "提示",
				"count": 8,
				"level_id": 5
			}],
			"type": [{
				"type": "路径穿越",
				"count": 120
			}, {
				"type": "反射型XSS",
				"count": 107
			}, {
				"type": "XML外部实体注入",
				"count": 65
			}, {
				"type": "命令执行 ",
				"count": 49
			}, {
				"type": "Sql注入",
				"count": 37
			}, {
				"type": "服务器端请求伪造",
				"count": 29
			}, {
				"type": "不安全的随机数",
				"count": 27
			}, {
				"type": "不安全的hash算法",
				"count": 22
			}, {
				"type": "动态库加载",
				"count": 16
			}, {
				"type": "不安全的重定向",
				"count": 4
			}, {
				"type": "exec-code",
				"count": 3
			}, {
				"type": "没有Content-Security-Policy的响应",
				"count": 2
			}, {
				"type": "禁用 X-XSS-Protection 的响应",
				"count": 2
			}, {
				"type": "没有反点击劫持控制的页面",
				"count": 2
			}, {
				"type": "没有 X-Content-Type-Options 标头的响应",
				"count": 2
			}, {
				"type": "不安全的转发",
				"count": 1
			}, {
				"type": "",
				"count": 1
			}, {
				"type": "",
				"count": 1
			}, {
				"type": "",
				"count": 1
			}, {
				"type": "",
				"count": 1
			}],
			"projects": [{
				"project_name": "openrasp-vulns",
				"count": 178,
				"id": 121
			}, {
				"project_name": "openrasp106",
				"count": 111,
				"id": 131
			}, {
				"project_name": "openrasp1.0.6",
				"count": 63,
				"id": 123
			}, {
				"project_name": "Python-DockerVulspace",
				"count": 36,
				"id": 139
			}, {
				"project_name": "springsec",
				"count": 23,
				"id": 58
			}]
		},
		"level_data": []
	}
	```

* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|data| |是|[object]| || |
	|data>>language| |是|[array]| || |
	|data>>language>>language|编程语言|是|[string]| || |
	|data>>language>>count|编程语言对应的漏洞数量|是|[int]| || |
	|data>>level| |是|[array]| || |
	|data>>level>>level|漏洞类型名称|是|[string]| || |
	|data>>level>>count|漏洞级别对应的漏洞数量|是|[int]| || |
	|data>>level>>level_id|漏洞类型 ID|是|[int]| || |
	|data>>type| |是|[array]| || |
	|data>>type>>type|漏洞类型的对应名称|是|[string]| || |
	|data>>type>>count|漏洞类型对应的漏洞数量|是|[int]| || |
	|data>>projects| |是|[array]| || |
	|data>>projects>>project_name|项目名|是|[string]| || |
	|data>>projects>>count|项目对应的漏洞数量|是|[int]| || |
	|data>>projects>>id|项目 ID|是|[int]| || |
	|status|状态码 :201 |否|[int]| || |
	|msg|状态信息 :success |否|[string]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|language| |是|[array]| || |
	|level| |是|[array]| || |
	|type| |是|[array]| || |
	|projects| |是|[array]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|language|编程语言|是|[string]| || |
	|count|编程语言对应的漏洞数量|是|[int]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|level|漏洞类型名称|是|[string]| || |
	|count|漏洞级别对应的漏洞数量|是|[int]| || |
	|level_id|漏洞类型 ID|是|[int]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|type|漏洞类型的对应名称|是|[string]| || |
	|count|漏洞类型对应的漏洞数量|是|[int]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|project_name|项目名|是|[string]| || |
	|count|项目对应的漏洞数量|是|[int]| || |
	|id|项目 ID|是|[int]| || |

## 漏洞列表（项目相关）

* **API Path**：
`/api/v1/vulns`

* **请求方法**：
`GET`

* **详细说明**：
获取项目对应的漏洞列表

* **Query 参数**：

	| 参数名 | 说明 | 必填 | 类型 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|language|编程语言|否|[string]|| |
	|level|漏洞等级的id：1,2,3,4|否|[int]|| |
	|order|排序指标：type, level, first_time, latest_time, url|否|[string]|| |
	|page|对应页码|否|[int]|| |
	|pageSize|每页数量|否|[int]|| |
	|project_id|项目 ID|否|[int]|| |
	|project_name|项目名|否|[string]|| |
	|status|状态名|否|[string]|| |
	|status_id|状态 ID|否|[int]|| |
	|type|漏洞类型|否|[string]|| |
	|url|漏洞的对应 URL|否|[string]|| |
	|version_id|默认值为项目的当前版本|否|[int]|| |


* **请求内容**：

	```bash
	/api/v1/vulns?page=1&pageSize=20&language=JAVA&level=&type=&project_name=&url=a&order=level&status_id=1&project_id=58
	```

* **响应内容**：
	```json
	{
		"status": 201,
		"msg": "success",
		"data": [{
			"id": 2653,
			"type": "命令执行 ",
			"hook_type_id": 40,
			"url": "http://localhost:8080/vul/cmd-003/id",
			"uri": "/vul/cmd-003/id",
			"agent_id": 484,
			"level_id": 1,
			"http_method": "GET",
			"top_stack": "org.springframework.web.method.support.HandlerMethodArgumentResolver.resolveArgument",
			"bottom_stack": "java.lang.Runtime.exec",
			"taint_position": "HEADER/PATH",
			"latest_time": 1632993094,
			"first_time": 1629774096,
			"language": "JAVA",
			"status": "待验证",
			"index": 0,
			"project_name": "springsec",
			"project_id": 58,
			"server_name": "Apache Tomcat/9.0.37",
			"server_type": "apache tomcat",
			"level_type": 1,
			"level": "高危"
		}, {
			"id": 2654,
			"type": "路径穿越",
			"hook_type_id": 44,
			"url": "http://localhost:8080/vul/file-read-001",
			"uri": "/vul/file-read-001",
			"agent_id": 484,
			"level_id": 1,
			"http_method": "GET",
			"top_stack": "org.springframework.web.method.support.HandlerMethodArgumentResolver.resolveArgument",
			"bottom_stack": "java.io.File.<init>",
			"taint_position": "GET/HEADER/PATH",
			"latest_time": 1632993094,
			"first_time": 1629774097,
			"language": "JAVA",
			"status": "待验证",
			"index": 1,
			"project_name": "springsec",
			"project_id": 58,
			"server_name": "Apache Tomcat/9.0.37",
			"server_type": "apache tomcat",
			"level_type": 1,
			"level": "高危"
		}],
		"page": {
			"alltotal": 22,
			"num_pages": 2,
			"page_size": 20
		}
	}
	```

* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|data| |是|[array]| || |
	|status|状态码：201 |否|[int]| || |
	|msg|状态信息：success  |否|[string]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|id||是|[int]|||
	|type||是|[string]|||
	|hook_type_id||是|[int]|||
	|url||否|[string]|||
	|uri||否|[string]|||
	|agent_id||是|[int]|||
	|level_id||是|[int]|||
	|http_method||否|[string]|||
	|top_stack||否|[string]|||
	|bottom_stack||否|[string]|||
	|taint_position||否|[string]|||
	|latest_time||否|[int]|||
	|first_time||否|[int]|||
	|language||是|[string]|||
	|status||是|[string]|||
	|index||是|[int]|||
	|project_name|项目名|否|[string]|||
	|project_id|项目ID|否|[int]|||
	|server_name||否|[string]|||
	|server_type||是|[string]|||
	|level_type||是|[int]|||
	|level||是|[string]|||

## 漏洞列表（Agent相关）

* **API Path**：
`/api/v1/plugin/vuln/list`

* **请求方法**：
`GET`

* **详细说明**：
使用 `agent 名` 获取对应的漏洞列表

* **Query 参数**：

	| 参数名 | 说明 | 必填 | 类型 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|name|Agent 名称|否|[string]|| |
	|order|排序指标：id, hook_type_id, url, http_method, top_stack, bottom_stack|否|[string]|| |
	|page|对应页码|否|[int]|| |
	|pageSize|每页数量|否|[int]|| |
	|url|漏洞的对应url|否|[string]|| |

* **请求内容**：

	```bash
	/api/v1/plugin/vuln/list
	```

* **响应内容**：

	```
	{

	    "data": 

	[

	        {
	            "id": 0,
	            "type": "string",
	            "level_id": 0,
	            "url": "string",
	            "http_method": "string",
	            "top_stack": "string",
	            "bottom_stack": "string",
	            "hook_type_id": 0,
	            "level": "string"
	        }
	    ],
	    "status": 201,
	    "msg": "success"

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
	|id| |是|[int]| || |
	|type| |是|[string]| || |
	|level_id| |是|[int]| || |
	|url| |否|[string]| || |
	|http_method| |否|[string]| || |
	|top_stack| |否|[string]| || |
	|bottom_stack| |否|[string]| || |
	|hook_type_id| |是|[int]| || |
	|level|漏洞名|是|[string]| || |

## 漏洞详情

* **API Path**：
`/api/v1/vuln/{id}
`
* **请求方法**：
`GET`

* **详细说明**：
使用漏洞对应的 `id` 来获取漏洞详情信息


* **REST 参数**：

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|id| |是|[int]| || |

* **请求内容**：

	```bash
	/api/v1/vuln/12811
	```

* **响应内容**：

	```json
	{
		"status": 201,
		"msg": "success",
		"data": {
			"vul": {
				"url": "http://localhost:8080/vulns/009-deserialize.jsp",
				"uri": "/vulns/009-deserialize.jsp",
				"agent_name": "Linux-fv-az129-986-v1.0.6-java.action.github.com",
				"http_method": "GET",
				"type": "不安全的hash算法",
				"taint_position": null,
				"first_time": 1635310288,
				"latest_time": 1635479684,
				"project_name": "openrasp-vulns",
				"project_version": "V1.0",
				"language": "JAVA",
				"level": "低危",
				"level_type": 3,
				"counts": 3,
				"req_header": "GET /vulns/009-deserialize.jsp?id=whoami HTTP/1.1\nhost:localhost:8080\nuser-agent:curl/7.68.0\naccept:*/*\n",
				"response": "\n\n",
				"graph": null,
				"context_path": "openrasp-vulns",
				"client_ip": "127.0.0.1",
				"status": "待验证",
				"taint_value": null,
				"param_name": {},
				"method_pool_id": null,
				"project_id": 121
			},
			"server": {
				"name": "server.name",
				"hostname": "fv-az129-986",
				"ip": "localhost",
				"port": 8080,
				"container": "Tomcat/8.x",
				"server_type": "tomcat",
				"container_path": "/home/runner/work/DongTai-agent-java/apache-tomcat-8.5.40",
				"runtime": "OpenJDK Runtime Environment",
				"environment": "java.vendor=Azul Systems, Inc., sun.java.launcher=SUN_STANDARD, catalina.base=/home/runner/work/DongTai-agent-java/apache-tomcat-8.5.40, sun.management.compiler=HotSpot 64-Bit Tiered Compilers, catalina.useNaming=true, os.name=Linux, sun.boot.class.path=/",
				"command": "org.apache.catalina.startup.Bootstrap start"
			},
			"strategy": {
				"desc": "",
				"sample_code": "",
				"repair_suggestion": ""
			}
		}
	}
	```

* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|data| |是|[object]| || |
	|status|状态码：201  |否|[int]| || |
	|msg|状态信息：success  |否|[string]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|vul| |是|[object]| || |
	|server| |是|[object]| || |
	|strategy| |是|[object]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|desc| |是|[string]| || |
	|sample_code| |是|[string]| || |
	|repair_suggestion| |是|[string]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|name| |是|[string]| || |
	|hostname| |是|[string]| || |
	|ip| |是|[string]| || |
	|port| |是|[string]| || |
	|container| |是|[string]| || |
	|server_type| |是|[string]| || |
	|container_path| |是|[string]| || |
	|runtime| |是|[string]| || |
	|environment| |是|[string]| || |
	|command| |是|[string]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|url| |是|[string]| || |
	|uri| |是|[string]| || |
	|agent_name| |是|[string]| || |
	|http_method| |是|[string]| || |
	|type| |是|[string]| || |
	|taint_position| |是|[string]| || |
	|first_time| |是|[int]| || |
	|latest_time| |是|[int]| || |
	|project_name|项目名|是|[string]| || |
	|project_version|项目的版本名|是|[string]| || |
	|language|编程语言|否|[string]| || |
	|level|漏洞类型名称|是|[string]| || |
	|level_type|漏洞类型 ID|是|[int]| || |
	|counts| |是|[int]| || |
	|request_header| |是|[string]| || |
	|response| |是|[string]| || |
	|graph| |是|[string]| || |
	|context_path| |是|[string]| || |
	|client_ip| |是|[string]| || |
	|status| |是|[string]| || |
	|taint_value| |是|[string]| || |
	|param_name| |是|[string]| || |
	|method_pool_id| |是|[int]| || |
	|project_id|项目 ID|是|[int]| || |

## 漏洞验证

* **API Path**：
`/api/v1/vul/recheck`

* **请求方法**：
`GET
`
* **详细说明**：
验证用户对应的漏洞（需要指定验证行为的类型）

* **Query 参数**：

	| 参数名 | 说明 | 必填 | 类型 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|projectId|项目的对应 ID，只有在 type 参数为 project 时，该参数才会被使用|否|[int]|| |
	|type|可选项有('all','project')，对应全部漏洞和指定项目的漏洞|否|[string]|| |

* **请求内容**：

	```bash
	/api/v1/vul/recheck?type=all
	```

* **响应内容**：

	```json
	{
	    "status":201,
	    "msg":"处理成功",
	    "data":{
	        "no_agent":492,
	        "pending":422,
	        "recheck":57,
	        "checking":20
	    }
	}
	```

* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|data| |是|[object]| || |
	|status|状态码：201、202 |否|[int]| || |
	|msg|状态信息：ids 必须为：漏洞 ID，漏洞 ID 格式、处理成功、漏洞重放出错、ids 不能为空|否|[string]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|no_agent|项目是否存在 Agent|是|[boolean]|||
	|pending|重放的等待队列长度|是|[int]|||
	|recheck|重放的成功队列长度|是|[int]|||
	|checking|重放的检测队列长度|是|[int]|||

## 漏洞验证

* **API Path**：
`/api/v1/vul/recheck
`
* **请求方法**：
`POST`

* **详细说明**：
验证用户对应的漏洞（需要指定验证行为的类型）

* **REST参数**：

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|ids|需要验证的漏洞的 ID，用 ',' 分割|是|[int]| || |

* **请求内容**：

	```json title="/api/v1/vul/recheck"
	{
	    "ids":"12986,12985,12983,12984,12982,12981,12980,12897,12978,12979,12977,12976,12975,12974,12973,12911,12972,12965,12964,12970"
	}
	```

* **响应内容**：

	```json
	{
		"status": 201,
		"msg": "处理成功",
		"data": {
			"no_agent": 11,
			"pending": 19,
			"recheck": 0,
			"checking": 1
		}
	}
	```

* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|data| |是|[object]| || |
	|status|状态码：201、202|否|[int]| || |
	|msg|状态信息：ids 必须为：漏洞 ID，漏洞 ID 格式、处理成功、漏洞重放出错、ids 不能为空|否|[string]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|no_agent|项目是否存在 Agent|是|[boolean]|||
	|pending|重放的等待队列长度|是|[int]|||
	|recheck|重放的成功队列长度|是|[int]|||
	|checking|重放的检测队列长度|是|[int]|||

## 漏洞状态列表

* **API Path**：
`/api/v1/vul/status_list`

* **请求方法**：
`GET`

* **详细说明**：
漏洞状态列表，里面包含了漏洞的可选状态，调用漏洞状态修改 `API` 时请先从此 `API` 获取漏洞状态数据。

* **请求内容**：

	```bash
	/api/v1/vul/recheck
	```

* **响应内容**：

	```json
	{
		"status": 201,
		"msg": "success",
		"data": [{
			"id": 1,
			"name": "待验证",
			"name_en": "Pending",
			"name_zh": "待验证"
		}, {
			"id": 2,
			"name": "验证中",
			"name_en": "Verifying",
			"name_zh": "验证中"
		}, {
			"id": 3,
			"name": "已确认",
			"name_en": "Confirmed",
			"name_zh": "已确认"
		}, {
			"id": 4,
			"name": "已忽略",
			"name_en": "Ignore",
			"name_zh": "已忽略"
		}, {
			"id": 5,
			"name": "已处理",
			"name_en": "Solved",
			"name_zh": "已处理"
		}]
	}
	```

* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|data| |是|[array]| || |
	|status|状态码：201  |否|[int]| || |
	|msg|状态信息：success |否|[string]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|id||是|[int]|||
	|name||是|[string]|||
	|name_en||是|[string]|||
	|name_zh||是|[string]|||

## 漏洞状态修改

* **API Path**：
`/api/v1/vuln/status`

* **请求方法**：
`POST`

* **详细说明**：
修改指定 `id` 的漏洞状态，状态由以下两个参数指定，`status` 对应状态名词，`status_id` 对应状态的 `id`，均可由漏洞状态列表 `API` 获得，优先使用 `status_id`

* **请求内容**：

	```json title="/api/v1/vuln/status"
	{
		"id": 12811,
		"status": "已忽略"
	}
	```

* **响应内容**：

	```json
	{
		"status": 201,
		"msg": "漏洞状态修改为已忽略"
	}
	```

* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|status|状态码：201、202 |否|[int]| || |
	|msg|状态信息：参数不正确 、漏洞状态修改为{} |否|[string]| || |

## 漏洞总数（Agent相关）

* **API Path**：
`/api/v1/plugin/vuln/count`

* **请求方法**：
`GET`

* **详细说明**：
获取用户对应的漏洞列表

* **Query 参数**：

	| 参数名 | 说明 | 必填 | 类型 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|name| |否|[string]|| |

* **请求内容**：

	```bash
	/api/v1/plugin/vuln/count?name=string
	```

* **响应内容**：

	```json
	{

	    "data": 0,
	    "status": 201,
	    "msg": "success"

	}
	```

* **返回结果**：
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|data| |是|[int]| || |
	|status|状态码 :201 |否|[int]| || |
	|msg|状态信息 :success |否|[string]| || |

