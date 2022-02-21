---
sidebar_position: 4
---

# 组件管理

:::note 使用流程

1. 利用项目 `id` 调用组件概况接口获取组件概况。（项目 `id` 部分可参考项目部分）

2. 根据组件概况的大致情况，使用组件列表接口获取获取组件详情信息。

:::

:::info

 可使用组件详情接口，单个获取组件信息

:::

## 组件概况（项目相关）


* **API Path**：
`/api/v1/sca/summary`

* **请求方法**：
`GET`

* **详细说明**：
使用指定项目信息获取对应的组件概况。

* **Query 参数**：

	| 参数名 | 说明 | 必填 | 类型 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|keyword|模糊搜索关键词，针对 package_name 字段|否|[string]|| |
	|language|编程语言|否|[string]|| |
	|level_id|漏洞等级 ID|否|[int]|| |
	|order|排序指标：version, level, vul_count, language, package_name|否|[string]|| |
	|page|对应页码|否|[int]|| |
	|pageSize|每页数量|否|[int]|| |
	|project_id|项目 ID|否|[int]|| |
	|project_name|项目名|否|[string]|| |
	|version_id|默认值为项目的当前版本|否|[int]|| |

* **请求内容**：

	```bash
	/api/v1/sca/summary?language=JAVA&level=&project_name=&keyword=1&order=version&project_id=
	```

* **响应内容**：

	```json
	{
		"status": 201,
		"msg": "success",
		"data": {
			"language": [{
				"language": "JAVA",
				"count": 3926
			}, {
				"language": "PYTHON",
				"count": 0
			}],
			"level": [{
				"level": "高危",
				"count": 55,
				"level_id": 1
			}, {
				"level": "中危",
				"count": 13,
				"level_id": 2
			}, {
				"level": "低危",
				"count": 0,
				"level_id": 3
			}, {
				"level": "无风险",
				"count": 3858,
				"level_id": 4
			}, {
				"level": "提示",
				"count": 0,
				"level_id": 5
			}],
			"projects": [{
				"project_name": "openrasp-vulns",
				"count": 513,
				"id": 121
			}, {
				"project_name": "openrasp1.0.6",
				"count": 342,
				"id": 123
			}, {
				"project_name": "openrasp106",
				"count": 171,
				"id": 131
			}, {
				"project_name": "shop",
				"count": 152,
				"id": 85
			}, {
				"project_name": "testStars",
				"count": 87,
				"id": 116
			}]
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


	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|language| |是|[array]| || |
	|level| |是|[array]| || |
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
	|project_name|项目名|是|[string]| || |
	|count|项目对应的漏洞数量|是|[int]| || |
	|id|项目 ID|是|[int]| || |

## 组件列表（项目相关）

* **API Path**：
`/api/v1/scas`


* **请求方法**：
`GET`

* **详细说明**：
使用指定项目信息获取对应的组件。

* **Query 参数**：

	| 参数名 | 说明 | 必填 | 类型 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|keyword|模糊搜索关键词，针对package_name字段|否|[string]|| |
	|language|编程语言|否|[string]|| |
	|level_id|漏洞等级 ID|否|[int]|| |
	|order|排序指标：version, level, vul_count, language, package_name|否|[string]|| |
	|page|对应页码|否|[int]|| |
	|pageSize|每页数量|否|[int]|| |
	|project_id|项目 ID|否|[int]|| |
	|project_name|项目名|否|[string]|| |
	|version_id|默认值为项目的当前版本|否|[int]|| |

* **请求内容**：

```bash
/api/v1/scas?page=1&pageSize=12&language=JAVA&level=&project_name=&keyword=1&order=version&project_id=
```

* **响应内容**：

	```json
	{
		"status": 201,
		"msg": "success",
		"data": [{
			"id": 20931,
			"package_name": "classmate-1.5.1.jar",
			"version": "1.5.1",
			"project_name": "springsec-test-prod",
			"project_id": 142,
			"project_version": "V1.0",
			"language": "JAVA",
			"agent_name": "Mac OS X-localhost-v1.0.6-30a7571c06ec4df99e306f7fa8735e49",
			"signature_value": "3fe0bed568c62df5e89f4f174c101eab25345b6c",
			"level": "无风险",
			"level_type": 4,
			"vul_count": 0,
			"dt": 1635479128
		}, {
			"id": 20932,
			"package_name": "hibernate-commons-annotations-5.1.0.Final.jar",
			"version": "5.1.0.Final",
			"project_name": "springsec-test-prod",
			"project_id": 142,
			"project_version": "V1.0",
			"language": "JAVA",
			"agent_name": "Mac OS X-localhost-v1.0.6-30a7571c06ec4df99e306f7fa8735e49",
			"signature_value": "700aeedc4a2089816621948f0379e17cbd17d5db",
			"level": "无风险",
			"level_type": 4,
			"vul_count": 0,
			"dt": 1635479128
		}, {
			"id": 20929,
			"package_name": "postgresql-42.2.14.jar",
			"version": "42.2.14",
			"project_name": "springsec-test-prod",
			"project_id": 142,
			"project_version": "V1.0",
			"language": "JAVA",
			"agent_name": "Mac OS X-localhost-v1.0.6-30a7571c06ec4df99e306f7fa8735e49",
			"signature_value": "45fa6eef266aa80024ef2ab3688d9faa38c642e5",
			"level": "无风险",
			"level_type": 4,
			"vul_count": 0,
			"dt": 1635479127
		}, {
			"id": 20930,
			"package_name": "byte-buddy-1.10.13.jar",
			"version": "1.10.13",
			"project_name": "springsec-test-prod",
			"project_id": 142,
			"project_version": "V1.0",
			"language": "JAVA",
			"agent_name": "Mac OS X-localhost-v1.0.6-30a7571c06ec4df99e306f7fa8735e49",
			"signature_value": "1426b15be5954246a9a72fd4baae1f42b9a4f45d",
			"level": "无风险",
			"level_type": 4,
			"vul_count": 0,
			"dt": 1635479127
		}],
		"page": {
			"alltotal": 3926,
			"num_pages": 328,
			"page_size": 12
		}
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
	|id| |是|[int]| || |
	|package_name| |否|[string]| || |
	|version| |否|[string]| || |
	|project_name| |是|[string]| || |
	|project_id| |是|[string]| || |
	|project_version| |是|[string]| || |
	|language| |是|[string]| || |
	|agent_name| |是|[string]| || |
	|signature_value| |否|[string]| || |
	|level| |是|[string]| || |
	|level_type| |是|[string]| || |
	|vul_count| |否|[int]| || |
	|dt| |否|[int]| || |



## 组件详情

* **API Path**：
`/api/v1/sca/{id}`

* **请求方法**：
`GET`

* **详细说明**：
通过指定id来获取对应组件的详情

* **REST 参数**：

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 限制 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|id| |是|[int]| || |

* **请求内容**：

	```bash
	/api/v1/sca/20931
	```

* **响应内容**：

	```json
	{
		"status": 201,
		"msg": "success",
		"data": {
			"id": 20893,
			"package_name": "maven:org.springframework:spring-web:5.2.8.RELEASE:",
			"version": "5.2.8.RELEASE",
			"project_name": "springsec-test-prod",
			"project_id": 142,
			"project_version": "V1.0",
			"language": "JAVA",
			"agent_name": "Mac OS X-localhost-v1.0.6-30a7571c06ec4df99e306f7fa8735e49",
			"signature_value": "4f9542d61fff7beb6050e8028dfb6b7c6844c99a",
			"level": "中危",
			"level_type": 2,
			"vul_count": 1,
			"dt": 1635479109,
			"vuls": [{
				"safe_version": "5.2.9.RELEASE",
				"vulcve": "CVE-2020-5421",
				"vulcwe": "NVD-CWE-noinfo",
				"vulname": "Reflected File Download (RFD) Attack",
				"overview": "spring-web is vulnerable to Reflected File Download (RFD) attack. An incomplete fix of CVE-2015-5211 allows an attacker to bypass the protection against RFD attack via the `jsessionid` path parameter.\n\n",
				"teardown": "",
				"reference": "[{\"type\": \"GITHUB_FIX_COMMIT\", \"title\": \"\", \"url\": \"https://github.com/spring-projects/spring-framework/commit/dd011c991ce801660ec2be7979f3fc6462f29289\"}, {\"type\": \"VENDOR_DISCLOSURE\", \"title\": \"[ambari-commits] 20201019 [ambari] branch branch-2.7 updated: AMBARI-25571. Vulnerable Spring components in Ambari - CVE-2020-5398, CVE-2020-5421 (dlysnichenko) (#3246)\", \"url\": \"https://lists.apache.org/thread.html/r1c679c43fa4f7846d748a937955c7921436d1b315445978254442163@<commits.ambari.apache.org>\"}, {\"type\": \"VENDOR_DISCLOSURE\", \"title\": \"[ambari-dev] 20201019 [GitHub] [ambari] dlysnichenko merged pull request #3246: AMBARI-25571. Vulnerable Spring components in Ambari - CVE-2020-5398, CVE-2020-5421\", \"url\": \"https://lists.apache.org/thread.html/r8b496b1743d128e6861ee0ed3c3c48cc56c505b38f84fa5baf7ae33a@<dev.ambari.apache.org>\"}, {\"type\": \"VENDOR_DISCLOSURE\", \"title\": \"[ambari-dev] 20201019 [GitHub] [ambari] dlysnichenko opened a new pull request #3246: AMBARI-25571. Vulnerable Spring components in Ambari - CVE-2020-5398, CVE-2020-5421\", \"url\": \"https://lists.apache.org/thread.html/r9f13cccb214495e14648d2c9b8f2c6072fd5219e74502dd35ede81e1@<dev.ambari.apache.org>\"}, {\"type\": \"VENDOR_DISCLOSURE\", \"title\": \"[ambari-issues] 20201013 [jira] [Created] (AMBARI-25571) Vulnerable Spring components in Ambari - CVE-2020-5398, CVE-2020-5421\", \"url\": \"https://lists.apache.org/thread.html/r1eccdbd7986618a7319ee7a533bd9d9bf6e8678e59dd4cca9b5b2d7a@<issues.ambari.apache.org>\"}, {\"type\": \"VENDOR_DISCLOSURE\", \"title\": \"[ambari-issues] 20201021 [jira] [Resolved] (AMBARI-25571) Vulnerable Spring components in Ambari - CVE-2020-5398, CVE-2020-5421\", \"url\": \"https://lists.apache.org/thread.html/r5c95eff679dfc642e9e4ab5ac6d202248a59cb1e9457cfbe8b729ac5@<issues.ambari.apache.org>\"}, {\"type\": \"VENDOR_DISCLOSURE\", \"title\": \"[hive-dev] 20201022 [jira] [Created] (HIVE-24303) Upgrade spring framework to 4.3.29.RELEASE+ due to CVE-2020-5421\", \"url\": \"https://lists.apache.org/thread.html/rf00d8f4101a1c1ea4de6ea1e09ddf7472cfd306745c90d6da87ae074@<dev.hive.apache.org>\"}, {\"type\": \"VENDOR_DISCLOSURE\", \"title\": \"[hive-issues] 20201022 [jira] [Assigned] (HIVE-24303) Upgrade spring framework to 4.3.29.RELEASE+ due to CVE-2020-5421\", \"url\": \"https://lists.apache.org/thread.html/rc9efaf6db98bee19db1bc911d0fa442287dac5cb229d4aaa08b6a13d@<issues.hive.apache.org>\"}, {\"type\": \"VENDOR_DISCLOSURE\", \"title\": \"[hive-issues] 20201022 [jira] [Updated] (HIVE-24303) Upgrade spring framework to 4.3.29.RELEASE+ due to CVE-2020-5421\", \"url\": \"https://lists.apache.org/thread.html/r7e6a213eea7f04fc6d9e3bd6eb8d68c4df92a22e956e95cb2c482865@<issues.hive.apache.org>\"}, {\"type\": \"VENDOR_DISCLOSURE\", \"title\": \"[ignite-user] 20201117 Query on CVE-2020-5421\", \"url\": \"https://lists.apache.org/thread.html/raf7ca57033e537e4f9d7df7f192fa6968c1e49409b2348e08d807ccb@<user.ignite.apache.org>\"}, {\"type\": \"VENDOR_DISCLOSURE\", \"title\": \"[ignite-user] 20201119 Re: Query on CVE-2020-5421\", \"url\": \"https://lists.apache.org/thread.html/ra889d95141059c6cbe77dd80249bb488ae53b274b5f3abad09d9511d@<user.ignite.apache.org>\"}, {\"type\": \"VENDOR_DISCLOSURE\", \"title\": \"[pulsar-commits] 20201022 [GitHub] [pulsar] Ghatage opened a new pull request #8355: [Issue 8354][pulsar-io] Upgrade spring framework version to patch CVE-2020-5421\", \"url\": \"https://lists.apache.org/thread.html/r503e64b43a57fd68229cac4a869d1a9a2eac9e75f8719cad3a840211@<commits.pulsar.apache.org>\"}, {\"type\": \"VENDOR_DISCLOSURE\", \"title\": \"[pulsar-commits] 20201023 [GitHub] [pulsar] Ghatage commented on pull request #8355: [Issue 8354][pulsar-io] Upgrade spring framework version to patch CVE-2020-5421\", \"url\": \"https://lists.apache.org/thread.html/r918caad55dcc640a16753b00d8d6acb90b4e36de4b6156d0867246ec@<commits.pulsar.apache.org>\"}, {\"type\": \"VENDOR_DISCLOSURE\", \"title\": \"[pulsar-commits] 20201026 [GitHub] [pulsar] wolfstudy commented on pull request #8355: [Issue 8354][pulsar-io] Upgrade spring framework version to patch CVE-2020-5421\", \"url\": \"https://lists.apache.org/thread.html/r3589ed0d18edeb79028615080d5a0e8878856436bb91774a3196d9eb@<commits.pulsar.apache.org>\"}, {\"type\": \"VENDOR_DISCLOSURE\", \"title\": \"[pulsar-commits] 20201028 [GitHub] [pulsar] merlimat merged pull request #8355: [Issue 8354][pulsar-io] Upgrade spring framework version to patch CVE-2020-5421\", \"url\": \"https://lists.apache.org/thread.html/rb18ed999153ef0f0cb7af03efe0046c42c7242fd77fbd884a75ecfdc@<commits.pulsar.apache.org>\"}, {\"type\": \"VENDOR_DISCLOSURE\", \"title\": \"[ranger-dev] 20201007 Re: Review Request 72934: RANGER-3022: Upgrade Spring framework to version 4.3.29.RELEASE\", \"url\": \"https://lists.apache.org/thread.html/re014a49d77f038ba70e5e9934d400af6653e8c9ac110d32b1254127e@<dev.ranger.apache.org>\"}, {\"type\": \"OTHER\", \"title\": \"Vulnerability Disclosure\", \"url\": \"https://tanzu.vmware.com/security/cve-2020-5421\"}]",
				"level": "中危"
			}]
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

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|id||是|[int]|||
	|package_name||否|[string]|||
	|version||否|[string]|||
	|project_name||是|[string]|||
	|project_id||是|[string]|||
	|project_version||是|[string]|||
	|language||是|[string]|||
	|agent_name||是|[string]|||
	|signature_value||否|[string]|||
	|level||是|[string]|||
	|level_type||是|[string]|||
	|vul_count||否|[int]|||
	|dt||否|[int]|||
	|vuls| |是|[array]| || |

	| 参数名  | 说明 | 必填 | 类型 | 值可能性 | 示例 |
	| :------------ | :------------ | :------------ | :------------ | :------------ | :------------ |
	|safe_version| |是|[string]| || |
	|vulcve| |是|[string]| || |
	|vulcwe| |是|[string]| || |
	|vulname| |是|[string]| || |
	|overview| |是|[string]| || |
	|teardown| |是|[string]| || |
	|reference| |是|[string]| || |
	|level| |是|[string]| || |


