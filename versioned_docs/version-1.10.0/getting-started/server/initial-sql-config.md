---
sidebar_position: 3
---

# 初始化自定义数据库
```bash
# 下载数据库文件
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/db.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20210731-release-1.0.0.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20210817-release-1.0.2.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20210831-release-1.0.3.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20210918-release-1.0.4.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20211009-release-1.0.5.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20211022-release-1.0.6.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20211105-release-1.1.0.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20211120-release-1.1.1.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20211123-release-1.1.2.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20211203-release-1.1.3.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20211218-release-1.1.4.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20211230-release-1.2.0.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20220111-release-1.3.0.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20220218-release-1.3.1.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20220316-release-1.4.0.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20220407-release-1.5.0.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20220407-release-1.6.0.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20220515-release-1.7.0.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20220607-release-1.8.0.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20220607-release-1.8.2.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20220805-release-1.8.3.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20220805-release-1.8.4.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20220914-release-1.8.5.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20220928-release-1.8.6.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20221024-release-1.8.7.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20221024-release-1.9.0.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20221126-release-1.9.1.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20221216-release-1.9.2.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20230213-release-1.9.3.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/update-20230319-release-1.10.0.sql.sql


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
