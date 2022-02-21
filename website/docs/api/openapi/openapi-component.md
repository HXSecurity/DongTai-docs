---
sidebar_position: 8
---

# 组件漏洞

## 查询 JAVA 组件漏洞

* **API Path**： 

	`iast.io/openapi/sca/v1/package_vul/?hash=07b6bf82cea13570b5290d6ed841283a1fcce170`


* **请求方法**：
`GET`

* **详细说明**：
通过组件 `SHA-1` 信息获取组件对应的漏洞数据

* **REST 参数**：

	|参数名|是否必填|类型|
	|:|:|:|
	|hash |必填 |string |

* **请求内容**：

	```
	/openapi/sca/v1/package_vul/?hash=cfa4f316351a91bfd95cb0644c6a2c95f52db1fc
	```

* **响应内容**：

	```json
	{
		"data": {
			"vul_list": [{
				"vul": {
					"id": "GHSA-qq48-m4jx-xqh8",
					"summary": "Remote Code Execution (RCE)",
					"details": "## Overview\n[org.mybatis:mybatis](https://github.com/mybatis/mybatis-3) is a SQL mapper framework\n\nAffected versions of this package are vulnerable to Remote Code Execution (RCE). It mishandles deserialization of object streams. All of the following conditions needs to be met in order to trigger RCE.\r\n1. the user enabled the built-in 2nd level cache [1]\r\n2. the user did not setup JEP-290 filter\r\n3. the attacker found a way to modify entries of the private Map field i.e. `org.apache.ibatis.cache.impl.PerpetualCache.cache` and a valid cache key\n## Remediation\nUpgrade `org.mybatis:mybatis` to version 3.5.6 or higher.\n## References\n- [GitHub PR](https://github.com/mybatis/mybatis-3/pull/2079)\n",
					"aliases": ["CVE-2020-26945"],
					"modified": "2022-01-11T23:39:10.758Z",
					"published": "2020-10-11T16:35:51Z",
					"withdrawn": null,
					"references": [{
						"url": "https://nvd.nist.gov/vuln/detail/CVE-2020-26945",
						"type": "ADVISORY"
					}, {
						"url": "https://github.com/mybatis/mybatis-3/pull/2079",
						"type": "WEB"
					}, {
						"url": "https://github.com/mybatis/mybatis-3/releases/tag/mybatis-3.5.6",
						"type": "WEB"
					}, {
						"url": "https://github.com/advisories/GHSA-qq48-m4jx-xqh8",
						"type": "ADVISORY"
					}]
				},
				"vul_package": {
					"id": 132,
					"vul_id": "GHSA-qq48-m4jx-xqh8",
					"ecosystem": "Maven",
					"name": "org.mybatis:mybatis",
					"cwe_ids": ["CWE-502"],
					"ghsa": "https://github.com/advisories/GHSA-qq48-m4jx-xqh8",
					"cvss_vector": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H",
					"cvss_score": 8.1,
					"source": "https://storage.googleapis.com/ghsa-osv/GHSA-qq48-m4jx-xqh8.json",
					"severity": "high"
				},
				"fixed_versions": ["3.5.6"]
			}],
			"package": {
				"id": 1615787,
				"aql": "maven:org.mybatis:mybatis:3.2.8:",
				"hash": "07b6bf82cea13570b5290d6ed841283a1fcce170",
				"ecosystem": "Maven",
				"name": "org.mybatis:mybatis",
				"version": "3.2.8",
				"license": null
			}
		},
		"msg": "success",
		"status": 201
	}
	```

* **字段解释**：

|参数名|说明|
|:|:|
|vul_list |漏洞列表 |
|vul |漏洞详细数据 |
|vul.id |漏洞id |
|vul.summary |漏洞标题 |
|vul.details |漏洞描述 |
|vul.aliases |漏洞其他编号 |
|vul.published |漏洞发布时间 |
|vul.references |漏洞参考资料 |
|vul.references.url |参考资料 URL |
|vul.references.type |参考资料类型 |  
|vul_package.cwe_ids |CWE 列表 |
|vul_package.cvss_score |CVSS Sscore |
|vul_package.severity: 漏洞级别 |Critical,High,Medium,Low,None |   
|fixed_versions |该漏洞修复版本 |
|package |包信息 |
|package.aql |包 AQL值
|package.hash |包的 SHA-1 值 |
|package.ecosystem |包来源，Java 组件包为 Maven |
|package.name |包名 |
|package.version |包版本 |
|package.license |包的授权信息 |

