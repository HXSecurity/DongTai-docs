---
sidebar_position: 3
---

# 初始化自定义数据库
```bash
# 下载数据库文件
mkdir sqlDate && cd sqlDate/
curl http://public.huoxian.cn/iast/sql/mysqlBuild.sh  | bash

# 执行导入命令，输入数据库密码，完成刚刚下载的数据导入
cat *.sql | mysql -u<username> -h<url> -p --default-character-set=utf8mb4 dongtai_webapi
```

:::note 

手动导入增量数据库文件至洞态 Docker 镜像

```bash
docker exec -i $(docker_mysql_id) /bin/bash -c "mysql -uroot -pdongtai-iast --default-character-set=utf8mb4 dongtai_webapi " <
*.sql
```
:::
