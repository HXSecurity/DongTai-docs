---
sidebar_position: 4
---

# PHP Agent

:::tip
[靶场参考](../../introduction/detection#测试靶场)
:::

## 安装环境

* PHP 版本: 7.\*、8.0.9 +

## 安装 Agent

1.  手动解压缩 `php-agent-test.tar.gz`，里面有三个文件，分别是：`dongtai_php_agent.so`、 `policy.json` & `dongtai-php-property.ini`

2.  复制 `dongtai_php_agent.so` 到 PHP 安装环境中的 extension 中。

	:::tip
	
	`policy.json` 的路径可以在 `dongtai-php-property.ini` 中修改 `hook.json.path` 对应的路径，默认为: `/var/www/php-agent/policy.json`。

	:::

3.  `dongtai-php-property.ini` 放在 PHP 的配置文件夹中，如: `conf.d`, `php`，`–m` 查看是否安装成功。

	:::tip

	如果没有 `dongtai_php_agent`，去掉 `dongtai-php-property.ini` 中 `extension=dongtai_php_agent` 的注释，重新查看。

	:::

4.  通过终端，可以调用本地 php 文件测试结果，也可以进入[靶场](https://github.com/jinghao1/phpvul)测试。

	:::tip

	* 执行 `php –v`，正常显示 PHP 版本信息。
	* `php –m` 查看会有 dongtai\_php\_agent，即安装成功。

	:::