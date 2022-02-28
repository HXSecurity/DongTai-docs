---
sidebar_position: 10
---

# API Sitemaps
## API 搜索

* **API Path**：
`/api/v1/api_route/search`

* **请求协议**：
`HTTP`

* **请求方法**：
`POST`

* **请求内容**：

	```json
	{
		"exclude_ids": "",
		"page_size": 1,
		"page_index": 1,
		"uri": "",
		"http_method": "",
		"is_cover": "",
		"project_id": "188",
		"version_id": 1360
	}
	```

* **响应内容**：

	```json
	{
		"status": 201,
		"msg": "success",
		"data": [
			{
				"id": 188841,
				"path": "/swagger-resources/configuration/ui",
				"code_class": "springfox.documentation.swagger.web.ApiResourceController",
				"description": "",
				"method": {
					"apimethod": "GET/POST",
					"httpmethods": [
						"GET",
						"POST"
					]
				},
				"code_file": "",
				"controller": "springfox.documentation.swagger.web.ApiResourceController",
				"agent": 6423,
				"is_cover": 0,
				"parameters": [],
				"responses": [
					{
						"id": 29906,
						"return_type": "org.springframework.http.ResponseEntity",
						"route": 188841,
						"return_type_shortcut": "ResponseEntity"
					}
				],
				"vulnerablities": []
			}
		]
	}
	```

* **请求参数**：
	`Json Object`

	| 参数名 | 说明 | 必填 | 类型 | 值可能性 |  限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|page_size|每页数量|否|[int]| | | |
	|uri|Api 导航对应的 URI|否|[string]| | | |
	|http_method|该 API 对应的 HTTP 方法|否|[string]| | | |
	|project_id|项目 ID|是|[int]| | | |
	|version_id|项目的版本 ID|否|[int]| | | |
	|exclude_ids|排除以下 ID 的 API route，该字段用于分批获取整个项目的数据|否|[string]| | | |
	|is_cover|表示该 API 是否被覆盖，覆盖指记录到了相关的方法调用链|否|[string]| | | |

* **响应内容**：
* **返回结果**：
	 `Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|data| |是|[object]| || |
	|data>>id|API 的 ID|是|[int]| || |
	|data>>path|API的 URI|是|[string]| || |
	|data>>code_class|该 API 的对应类|是|[string]| || |
	|data>>description|API 导航对应的注释|是|[string]| || |
	|data>>code_file|API 导航对应的代码文件|是|[string]| || |
	|data>>controller|API 导航对应的 controller|是|[string]| || |
	|data>>agent|上报该 API 的 Agent 的 ID|是|[int]| || |
	|data>>is_cover|表示该 API 是否被覆盖，覆盖指记录到了相关的方法调用链|否|[string]| || |
	|data>>responses| |是|[array]| || |
	|data>>responses>>id|API 响应数据的 ID|是|[int]| || |
	|data>>responses>>return_type|该 API 响应的类型|是|[string]| || |
	|data>>responses>>route|该响应的对应的 API ID|是|[int]| || |
	|data>>responses>>return_type_shortcut|return_type 的简称|是|[string]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|parameters| |是|[array]| || |
	|parameters>>id|API 的 ID|是|[int]| || |
	|parameters>>name|该 API 的名称|是|[string]| || |
	|parameters>>parameter_type|参数类型|是|[string]| || |
	|parameters>>parameter_type_shortcut|参数类型缩写，如:java.lang.String -> String|是|[string]| || |
	|parameters>>annotaion|关于该参数的注释|是|[string]| || |
	|parameters>>route|该参数的对应的 API ID|是|[int]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|vulnerablities| |是|[array]| || |
	|vulnerablities>>level_id|漏洞类型 ID|是|[int]| || |
	|vulnerablities>>hook_type_name|漏洞类型名称|是|[string]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|method| |是|[object]| || |
	|method>>apimethod|该 API 所绑定的方法|是|[string]| || |
	|method>>httpmethods|该 API 所绑定的方法，数组形式|是|[array]| || |
	|method>>httpmethods>>httpmethod| |是|[string]| || |
	|status|状态码：201  |否|[int]| || |
	|msg|状态信息：success  |否|[string]| || |


## 测试覆盖率

* **API Path**：
`/api/v1/api_route/cover_rate`

* **请求协议**：
`HTTP`

* **请求方法**：
`GET`

* **详细说明**：
通过指定id来获取对应项目的API覆盖率

* **请求内容**：

	```bash
	/api/v1/api_route/cover_rate?project_id=188&version_id=1360
	```

* **响应内容**：
	```json
	{
		"status": 201,
		"msg": "API覆盖率获取成功",
		"data": {
			"cover_rate": "3.85%"
		}
	}
	```

* **Query 参数**：

	| 参数名 | 说明 | 必填 | 类型 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|project_id| |否|[int]|| |
	|version_id| |否|[int]|| |

* **响应内容**：
	
* **返回结果**： 
	`Json Object`

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|data| |是|[object]| || |
	|data>>cover_rate|项目的 API 覆盖率|是|[int]| || |
	|status|状态码：201 |否|[int]| || |
	|msg|状态信息：success |否|[string]| || |



