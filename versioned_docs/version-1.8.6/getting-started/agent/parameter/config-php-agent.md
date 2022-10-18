---
sidebar_position: 3
---
# PHP Agent

## 配置文件 
### 参数表

| 参数名  | 说明    | 类型  | 可选参数   |预设值    |
| :--------|:--------|:--------| :--------| :--------|
| `dongtai.project.name`        | 设置项目名称 | String  |名称保证唯一   | DemoPHPProject          |
| `dongtai.project.version`     | 设置项目版本       | String      |应用版本号    | V1.0.0                  |
| `dongtai.project.auto_create`     | 自动创建项目      | Boolean      |0, 1  | 0             |
| `dongtai.iast.server.token`    | 切换 Agent 所属用户                                 | String  |        | 洞态 IAST 用户 Token     |
| `dongtai.iast.server.url`      | 洞态 IAST 服务部署地址                  | String   | URL 格式      | |
| `dongtai.iast.service.report.interval`  | Agent 存活心跳，数据上报间隔时间                 | Integer   | 5 - 120 (秒)     | 15      |
| `dongtai.engine.name`        | Agent 名称 | String  |Agent 名称   | dongtai-agent-php      |
| `dongtai.debug`           | 调试模式  | Boolean   |0, 1       | 0              |
| `dongtai.log.path`        | 指定日志文件所在目录        | String |任意有读写权限的目录    |  /var/log/dongtai_agent_php.log	  |

### 用例

```bash title="dongtai_agent_php.ini"
extension=dongtai_agent_php.so

dongtai.debug=0
dongtai.iast.server.url=https://iast-test.huoxian.cn/openapi
dongtai.iast.server.token=926e831c8a6effa03eaee90d2caa6d336fb5a7dc
dongtai.iast.service.report.interval=15
dongtai.engine.name=61862e3851934b9d96f34808e6354a5a
dongtai.project.name=DemoPHPProject
dongtai.project.version=v1.0
dongtai.project.auto_create=0
dongtai.policy.path="/tmp/dongtai_agent_php-policy.json"
dongtai.log.path="/var/log/dongtai_agent_php.log"
```