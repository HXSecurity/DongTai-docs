# 商业版部署文档

### 一、iast部署使用（1.14.0+）
:::info 使用 iastctl 安装优点：
 - redis密码变更为随机密码.
 - security_secret_key 变更为随机数.
 - 启动时会自动生成xray等转换器token.
1. 执行用户需要有sudo权限。
2. 低于1.13.0版本使用会有不兼容问题，需要手动升级至1.13.0，推荐新用户部署使用。
3. 旧用户单节点部署的用户只支持使用 docker-compose -p dongtai  部署的用户。
4. 旧用户三节点部署的用户只支持指定vm1,vm2,vm3做项目名的用户使用。
      - docker-compose -p vm1      (server节点)
      - docker-compose -p vm2      (mysql节点)
      - docker-compose -p vm3      (检测节点)
5. 旧用户升级使用需要先使用 ./iastctl iast apply 配置，再执行 ./iastctl iast upgrade 更新。
6. 进入iast安装包执行如下命令安装。
:::

##### 1. 一键安装
```
(解压后，进入安装包目录执行)
 ./iastctl iast apply
```

##### 2. 使用 iastctl iast apply 时的配置

###### 单节点配置
```
? 请输入您要使用的网段 (默认 172.31.200.0/24):       不变更网段直接回车使用默认即可
? 请输入您要使用的域名 (默认 http://127.0.0.1:8000): （分享链接域名）
? 请输入您的sca地址 (默认 https://sca.huoxian.cn/): （填写sca域名）
? 请输入您的sca_token (不使用sca检测留空):           （sca_token ,不使用云端sca直接回车）
? 请输入您的scale数量 (默认1) : 2                   （server部署数量，扩容数）
```

###### 三节点额外配置
```
? 请输入第2台服务器的ip (用于部署mysql, redis):       输入服务器内网IP
? 请输入ssh端口号(默认 22):                         （直接回车使用默认）
? 请输入用户名(默认 root):                          （直接回车使用默认）
? 请输入密码 (密钥留空即可):                         （直接回车使用默认）
? 请输入第3台服务器的ip (用于部署检测组件):            输入服务器内网IP
? 请输入ssh端口号 (默认 22):                        （直接回车使用默认）
? 请输入用户名 (默认 root):                         （直接回车使用默认）
? 请输入密码 (密钥留空即可):                         （直接回车使用默认）
```
更新完成后会自动生成DAST转换器token

##### 3. 更新配置信息
```
  //重新配置apply时输入的配置（不会执行导入镜像）
  ./iastctl iast config
```


##### 4. 启动iast服务
```
  ./iastctl iast start
  ```

##### 5. 停止iast服务
```
  ./iastctl iast stop
```

##### 5. 更新iast服务
```
  //更新iast（低于1.13.0版本使用会有不兼容问题，需要手动升级至1.13.0）
  ./iastctl iast upgrade
```



### 二、sca部署使用（2.0.5+）

:::info sca 部署：
(解压后，进入安装包目录执行)
:::

##### 部署
```
./iastctl sca apply
```
更新
```
./iastctl sca upgrade
```
启动
```
./iastctl sca start
```
停止
```
./iastctl sca stop
```


### 三、attach使用 [ beta ]

##### 插桩本机docker中的java服务
```
./iastctl attach docker
```

##### 插桩本机中的java服务
```
./iastctl attach localhost
```


### 四、使用日志监控 ERROR 日志
```
1.需要先修改logstash把agent发送到es中才可以监控.
2.在配置文件中填写部署的es配置, 以及要监控的索引, 然后配置飞书机器人接收
```

在当前目录创建配置文件 config.yaml
```
cat <<EOF > config.yaml
elasticsearch:
  useEs7: true #开启检测
  hosts: ["http://127.0.0.1:9200"] #es地址
  index: "iast_index_*" #要检测的索引

webhook:
  minute: 1 # 检测间隔时间
  size: 5   # 每次检测查询数据量条数
  # 要发送的飞书地址
  feishu: https://open.feishu.cn/open-apis/bot/v2/hook/xxxxxxxxxxxxxxxxxxxxxxxxxxxx
EOF
```

运行任务
```
./iastctl run monitor
```