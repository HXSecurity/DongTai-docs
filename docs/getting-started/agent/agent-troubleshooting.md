---
sidebar_position: 8
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 排错指南

Agent 安装后会显示在 DongTai Server 管理服务中 **`系统配置 > Agent 管理`** 的引擎列表。

待 1 - 2 分钟刷新界面后，如果 Agent 没有显示在列表中，可按照以下步骤进行排查:

<Tabs
className="agent-troubleshooting-tabs"
defaultValue="java"
values={[
{label: 'Java Agent', value: 'java'},
{label: 'Python Agent', value: 'python'},
]}>

<TabItem value="java">

🚩 **检查 Agent 是否安装**

:::note 排查
```bash
# 运行查看是否反馈 agent.jar 的使用帮助
java -jar /temp/agent.jar
```

**如果没有显示回应，说明 Agent 没有正确安装，请重新下载 Agent 后再次安装。**
:::

🚩 **Agent 无法挂载**

:::note 排查

请确认 `agent.jar` 和应用的权限一致

:::

🚩 **加载 Agent 后，`scas` 和 `summary` 出现错误原因：`1040，Too Many Connections`**

:::note 排查

将数据库连接数调大

:::

</TabItem>
<TabItem value="python">

* 检查 Agent 是否安装

	```bash
	# 运行查看是否反馈 dongtai-agent-python 的使用帮助
	pip3 show dongtai_agent_python
	```

	**如果没有，说明 Agent 没有正确安装，请重新下载后再次安装。**

* 检测 Django/Flask 的中间件相关的修改是否已经增加，如没有请按[说明](install-python-agent#项目配置)进行修改。

* 应用启动时有错误信息，查看是否与 Agent 相关，若与 Agent 有关，请将错误信息回报给我们。

</TabItem>
</Tabs>

:::info 问题反馈

请前往 [GitHub Discussion](https://github.com/HXSecurity/DongTai/discussions/) 给工程师提交 issue，我们会及时给您回复。

:::