---
sidebar_position: 5
---
import Highlight from '@site/src/components/Highlight';

# 获取token

:::info 如何获取 sca-token

请扫描下方二维码，申请Token

  <img src="/img/docs/getting-started/server/addGroup.png" width="18%"/>
:::


## 1.进入dtctl目录配置token

```bash
cd DongTai/deploy/docker-compose/
```

## 2.修改配置文件config-tutorial.ini

```bash
修改文件第39行替换为自己的token：

token = 121212121212-1234-1234-1234-123444444444
```

## 3.重新启动洞态iast

```bash
./dtctl remove
./dtctl install

ok ！
```






