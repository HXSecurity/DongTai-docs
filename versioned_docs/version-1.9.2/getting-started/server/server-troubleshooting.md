---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 排错指南

<Tabs
className="server-troubleshooting-tabs"
defaultValue="docker-compose"
values={[
{label: 'Docker Compose', value: 'docker-compose'},
{label: 'Kubernetes', value: 'k8s'},
{label: 'Helm', value: 'helm'},
]}>

<TabItem value="docker-compose">

🚩 **部署遇到 502**

:::note 排查

查看 `dongtai-webapi` 日志，一般是 `dongtai-webapi` 没有正常工作，可能是由数据库的配置错误导致

:::


</TabItem>
<TabItem value="k8s">

	💡Coming Soon

</TabItem>
<TabItem value="helm">

	💡Coming Soon

</TabItem>
</Tabs>