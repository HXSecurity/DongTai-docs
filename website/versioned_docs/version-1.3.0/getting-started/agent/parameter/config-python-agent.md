---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Python Agent

## 配置文件 
### 参数表

* <font color="FF0070"><strong> debug </strong></font>

  |<div style={{paddingRight : '100px'}}>属性</div>  |<div style={{paddingRight : '580px'}}>值</div> |  
  |:----------|:---------------------------------|
  |生效方式 | 配置文件修改 |
  |参数类型 | Boolean |
  |来源 | 配置文件 |
  |可选参数 | `true` or `false`|
  |默认值  | false |
  |参数说明 | 开启后会在日志记录 Agent 详细运转日志 |

* <font color="FF0070"><strong> iast.server.token </strong></font>

  |<div style={{paddingRight : '100px'}}>属性</div>  |<div style={{paddingRight : '580px'}}>值</div> |  
  |:----------|:---------------------------------|
  |生效方式 | 配置文件修改 |
  |参数类型 | 字符串 |
  |来源 | 配置文件 |
  |可选参数 | |
  |默认值  | 洞态 IAST 用户 Token |
  |参数说明 | 切换 Agent 所属用户 |

* <font color="FF0070"><strong> iast.server.url </strong></font>

  |<div style={{paddingRight : '100px'}}>属性</div>  |<div style={{paddingRight : '580px'}}>值</div> |  
  |:----------|:---------------------------------|
  |生效方式 | 配置文件修改 |
  |参数类型 | 字符串 |
  |来源 | 配置文件 |
  |可选参数 | |
  |默认值  | https://iast.huoxian.cn/openapi |
  |参数说明 | 洞态 IAST 服务部署地址 |

* <font color="FF0070"><strong> iast.server.interval </strong></font>

  |<div style={{paddingRight : '100px'}}>属性</div>  |<div style={{paddingRight : '580px'}}>值</div> |  
  |:----------|:---------------------------------|
  |生效方式 | 配置文件修改 |
  |参数类型 | 整型 |
  |来源 | 配置文件 |
  |可选参数 | 5 - 120 (秒) |
  |默认值  | 10 |
  |参数说明 | Agent 存活心跳，数据上报间隔时间 |

* <font color="FF0070"><strong> project.name </strong></font>

  |<div style={{paddingRight : '100px'}}>属性</div>  |<div style={{paddingRight : '580px'}}>值</div> |  
  |:----------|:---------------------------------|
  |生效方式 | 配置文件修改 |
  |参数类型 | 字符串 |
  |来源 | 配置文件 |
  |可选参数 | 格式：中文、英文字母大小写、数字、\@等组合，长度20以内，名称保证唯一  |
  |默认值  | Demo Project |
  |参数说明 | 项目名称 |

* <font color="FF0070"><strong> project.version </strong></font>

  |<div style={{paddingRight : '100px'}}>属性</div>  |<div style={{paddingRight : '580px'}}>值</div> |  
  |:----------|:---------------------------------|
  |生效方式 | 配置文件修改 |
  |参数类型 | 字符串 |
  |来源 | 配置文件 |
  |可选参数 | 自定义即可 |
  |默认值  | v1.0 |
  |参数说明 | 项目版本号 |

* <font color="FF0070"><strong> engine.version </strong></font>

  |<div style={{paddingRight : '100px'}}>属性</div>  |<div style={{paddingRight : '580px'}}>值</div> |  
  |:----------|:---------------------------------|
  |生效方式 | 配置文件修改 |
  |参数类型 | 字符串 |
  |来源 | 配置文件 |
  |可选参数 | 自定义即可 |
  |默认值  | v1.3.0 |
  |参数说明 | 引擎版本号 |

* <font color="FF0070"><strong> engine.name </strong></font>

  |<div style={{paddingRight : '100px'}}>属性</div>  |<div style={{paddingRight : '580px'}}>值</div> |  
  |:----------|:---------------------------------|
  |生效方式 | 配置文件修改 |
  |参数类型 | 字符串 |
  |来源 | 配置文件 |
  |可选参数 | 自定义即可 |
  |默认值  |   |
  |参数说明 | 引擎名称 |

* <font color="FF0070"><strong> log.log_path </strong></font>

  |<div style={{paddingRight : '100px'}}>属性</div>  |<div style={{paddingRight : '580px'}}>值</div> |  
  |:----------|:---------------------------------|
  |生效方式 | 配置文件修改 |
  |参数类型 | 字符串 |
  |来源 | 配置文件 |
  |可选参数 | 自定义即可 |
  |默认值  | ./dongtai_py_agent.log |
  |参数说明 | Agent 日志文件路径 |
  
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
### 参数

* <font color="FF0070"><strong> PROJECT_NAME </strong></font>

  |<div style={{paddingRight : '100px'}}>属性</div>  |<div style={{paddingRight : '580px'}}>值</div> |  
  |:----------|:---------------------------------|
  |生效方式 | 配置环境变量，优先级高于 Agent 配置文件 |
  |参数类型 | 字符串 |
  |来源 | 环境变量 |
  |可选参数 | 格式：中文、英文字母大小写、数字、\@等组合，长度20以内，名称保证唯一  |
  |默认值  | Demo Project |
  |参数说明 | 项目名称 |

* <font color="FF0070"><strong> PROJECT_VERSION </strong></font>

  |<div style={{paddingRight : '100px'}}>属性</div>  |<div style={{paddingRight : '580px'}}>值</div> |  
  |:----------|:---------------------------------|
  |生效方式 | 配置环境变量，优先级高于 Agent 配置文件 |
  |参数类型 | 字符串 |
  |来源 | 环境变量 |
  |可选参数 | 自定义即可  |
  |默认值  | v1.0.0 |
  |参数说明 | 项目版本号 |

* <font color="FF0070"><strong> ENGINE_NAME </strong></font>

  |<div style={{paddingRight : '100px'}}>属性</div>  |<div style={{paddingRight : '580px'}}>值</div> |  
  |:----------|:---------------------------------|
  |生效方式 | 配置环境变量，优先级高于 Agent 配置文件 |
  |参数类型 | 字符串 |
  |来源 | 环境变量 |
  |可选参数 | 自定义即可  |
  |默认值  |  |
  |参数说明 | 引擎名称 |


* <font color="FF0070"><strong> DEBUG </strong></font>

  |<div style={{paddingRight : '100px'}}>属性</div>  |<div style={{paddingRight : '580px'}}>值</div> |  
  |:----------|:---------------------------------|
  |生效方式 | 配置环境变量配置 DEBUG=1 |
  |参数类型 | 整型 |
  |来源 | 环境变量 |
  |可选参数 | `1` or `0` |
  |默认值  | 0 |
  |参数说明 | 开启后会在日志记录 Agent 详细运转日志 |

* <font color="FF0070"><strong> LOG_PATH </strong></font>

  |<div style={{paddingRight : '100px'}}>属性</div>  |<div style={{paddingRight : '580px'}}>值</div> |  
  |:----------|:---------------------------------|
  |生效方式 | 配置环境变量配置 DEBUG=1 |
  |参数类型 | 整型 |
  |来源 | 环境变量 |
  |可选参数 | 自定义即可 |
  |默认值  | ./dongtai_py_agent.log |
  |参数说明 | Agent 日志文件路径 |

* <font color="FF0070"><strong> AUTO_CREATE_PROJECT </strong></font>

  |<div style={{paddingRight : '100px'}}>属性</div>  |<div style={{paddingRight : '580px'}}>值</div> |  
  |:----------|:---------------------------------|
  |生效方式 | 配置环境变量配置 DEBUG=1 |
  |参数类型 | 字符串 |
  |来源 | 环境变量 |
  |可选参数 | `1` or `0` |
  |默认值  | 0 |
  |参数说明 | 自动创建项目；`1`：开启，`0`：关闭 |

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



