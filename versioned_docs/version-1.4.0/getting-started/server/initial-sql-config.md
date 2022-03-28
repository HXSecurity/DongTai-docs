---
sidebar_position: 3
---

# 初始化自定义数据库
```bash
# 下载数据库文件
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/db.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/rule.sql
wget https://huoqi-public.oss-cn-beijing.aliyuncs.com/iast/sql/sca.sql
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

# 执行导入命令，输入数据库密码，完成刚刚下载的数据导入
cat *.sql | mysql -u<username> -h<url> -p --default-character-set=utf8mb4 dongtai_webapi
```