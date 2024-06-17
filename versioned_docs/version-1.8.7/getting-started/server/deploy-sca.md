---
sidebar_position: 5
---
import Highlight from '@site/src/components/Highlight';

# 获取token

:::info 如何获取 sca-token

添加小助理，获取唯一token，若文档内容无法搜索和解决您的问题，我们会及时给您回复

* 尊敬的客户， 您好！扫下方的二维码，可以加入官方客户群获取产品相关技术支持！
也可以拨打400-688-9582联系我们

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






