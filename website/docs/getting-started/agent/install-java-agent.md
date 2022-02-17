---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Java Agent

## 安装环境

* 作业系统: Windows/Linux/Unix

* JDK 版本: 1.6+

* Framework: Any

* 中间件: Any


### Spring-boot/Netty/Jetty

**安装**

1. 停止 **Springboot/Netty/Jetty** 服务，进入 **Springboot/Netty/Jetty** 目录（如：webapp1\_domain），新建文件夹 `iast-tool`，将下载的 `agent.jar` 放到 `iast-tool` 目录下。

2. 启动服务时，增加如下内容：

    ```bash
    -javaagent:"<server_root>/iast-tool/agent.jar"
    ```
* 完整启动方法参考示例： 

    ```bash
    java -javaagent:"<server_root>/iast-tool/agent.jar" -jar <server_root>/webapp1.jar </code>
    ```

**卸载**

1. 停止 **Springboot/Netty/Jetty** 服务，进入 **Springboot/Netty/Jetty** 目录（如：webapp1\_domain），删除文件夹 `iast-tool` 以及文件夹中的内容。


2. 下次启动 **Springboot/Netty/Jetty** 服务时正常启动即可


### Tomcat

<Tabs
className="java-tomcat-tabs"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'Windows', value: 'win'},
]}>

<TabItem value="linux">

**安装**

1. 停止 **Tomcat**，进入 **Tomcat** 根目录，新建文件夹 `iast-tool`，将下载的 `agent.jar` 放到 `iast-tool` 目录下。

2. 在 `tomcat/bin/catalina.sh`，`if [&quot;$1&quot; = &quot;debug&quot;]; then` 前面一行添加以下内容：

    ```shell title="/tomcat/bin/catalina.sh"
    if [ "$1" = "start" -o "$1" = "run" ]; then
    JAVA_OPTS="-javaagent:/${CATALINA_HOME}/iast-tool/agent.jar ${JAVA_OPTS}"
    fi
    ```

3. 启动应用服务器。

**卸载**

1. 停止 **Tomcat**，进入 **Tomcat** 根目录，删除文件夹 `iast-tool` 以及文件夹中的内容。

2. 在 `tomcat/bin/catalina.sh`，找到并删除以下内容：

    ```shell title="/tomcat/bin/catalina.sh"
    if [ "$1" = "start" -o "$1" = "run" ]; then
    JAVA_OPTS="-javaagent:/${CATALINA_HOME}/iast-tool/agent.jar ${JAVA_OPTS}"
    fi
    ```

</TabItem> 
<TabItem value="win">

**安装**

1. 停止 **Tomcat**，进入 **Tomcat** 根目录，新建文件夹 `iast-tool`，将下载的 `agent.jar` 放到 `iast-tool` 目录下。

2. 在 `tomcat/bin/catalina.bat`， `:setArgs` 后面一行添加以下内容：

    ```bash title="/tomcat/bin/catalina.bat"
    if "%ACTION%" == "start" set JAVA_OPTS="-javaagent:%CATALINA_HOME%\iast-tool\agent.jar" %JAVA_OPTS%
    ```

3. 启动应用服务器。

**卸载**

1. 停止 **Tomcat**，进入 **Tomcat** 根目录，删除文件夹 `iast-tool` 以及文件夹中的内容。

2. 在 `tomcat/bin/catalina.bat`，找到并删除以下内容：

    ```bash title="/tomcat/bin/catalina.bat"
    if "%ACTION%" == "start" set JAVA_OPTS="-javaagent:%CATALINA_HOME%\iast-tool\agent.jar" %JAVA_OPTS%
    ```

</TabItem>	
</Tabs>

### Jboss

<Tabs
className="java-jboss-tabs"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'Windows', value: 'win'},
]}>

<TabItem value="linux">

**安装**

1. 停止 **Jboss**，进入 **Jboss** 根目录，新建文件夹 `iast-tool`，将下载的 `agent.jar` 放到 `iast-tool` 目录下。

2. 进入 `jboss/bin/standalone.sh`，在 `# Display our environment` 前面一行添加如下内容：

    ```shell title="/jboss/bin/standalone.sh"
    JAVA_OPTS="-javaagent:/${JBOSS_HOME}/iast-tool/agent.jar ${JAVA_OPTS}"
    ```

3. 第三步：启动应用服务器。

**卸载**

1. 停止 **Jboss**，进入 **Jboss** 根目录，删除文件夹 `iast-tool` 以及文件夹中的内容。

2. 在 `jboss/bin/standalone.sh`，找到并删除以下内容：

    ```shell title="/jboss/bin/standalone.sh"
    JAVA_OPTS="-javaagent:/${JBOSS_HOME}/iast-tool/agent.jar ${JAVA_OPTS}"
    ```

</TabItem> 
<TabItem value="win">

**安装**

1. 停止 **Jboss**，进入 **Jboss** 根目录，新建文件夹 `iast-tool`，将下载的 `agent.jar` 放到 `iast-tool` 目录下。

2. 在 `jboss/bin/standalone.bat`， `:set JAVA_OPTS=-Dprogram.name=%PROGNAME% %JAVA_OPTS%` 后面一行添加以下内容：

    ```bash title="/jboss/bin/standalone.bat"
    set JAVA_OPTS=-javaagent:%JBOSS_HOME%\iast-tool\agent.jar %JAVA_OPTS%
    ```

3. 启动应用服务器。

**卸载**

1. 停止 **Jboss**，进入 **Jboss** 根目录，删除文件夹 `iast-tool` 以及文件夹中的内容。

2. 在 `jboss/bin/standalone.bat`，找到并删除以下内容：

    ```bash title="/jboss/bin/standalone.bat"
    set JAVA_OPTS=-javaagent:%JBOSS_HOME%\iast-tool\agent.jar %JAVA_OPTS%
    ```

</TabItem>	
</Tabs>

### WebLogic

<Tabs
className="java-weblogic-tabs"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'Windows', value: 'win'},
]}>

<TabItem value="linux">

**安装**

1. 停止 **WebLogic** 对应域的服务，进入 **WebLogic** 对应域的根目录（域启动脚本 `startWeblogic.sh` 中的 `DOMAIN_HOME` 的值），新建一个 `iast-tool` 文件夹，将下载的 `agent.jar` 放到 `iast-tool` 目录下。

2. 进入对应服务域目录的 `/bin/startWebLogic.sh`，在 `JAVA_OPTIONS="${SAVE_JAVA_OPTIONS}"` 后面一行添加如下内容：

    ```shell title="/bin/startWebLogic.sh"
    JAVA_OPTIONS="$JAVA_OPTIONS -javaagent:${DOMAIN_HOME}/iast-tool/agent.jar"
    ```

3. 启动应用服务器。

**卸载**

1. 停止 **WebLogic** 对应域的服务，进入 **WebLogic** 对应域的根目录（域启动脚本 `startWeblogic.sh` 中的 `DOMAIN_HOME` 的值），删除文件夹 `iast-tool` 以及文件夹中的内容。

2. 进入对应服务域目录的 `/bin/startWebLogic.sh`，找到并删除以下内容：

    ```shell title="/bin/startWebLogic.sh"
    JAVA_OPTIONS="$JAVA_OPTIONS -javaagent:${DOMAIN_HOME}/iast-tool/agent.jar"
    ```

</TabItem> 
<TabItem value="win">

**安装**

1. 停止 **WebLogic** 对应域的服务，进入 **WebLogic** 对应域的根目录（域启动脚本 `startWeblogic.sh` 中的 `DOMAIN_HOME` 的值），新建一个 `iast-tool` 文件夹，将下载的 `agent.jar` 放到 `iast-tool` 目录下。

2. 进入对应服务域目录的 `/bin/startWebLogic.cmd`，在 `set CLASSPATH=%SAVE\_CLASSPATH%` 后面一行添加如下内容：

    ```bash title="/bin/startWebLogic.cmd"
    set JAVA_OPTIONS=%JAVA_OPTIONS% -javaagent:"%DOMAIN_HOME%\iast-tool\agent.jar"
    ```

3. 启动应用服务器。

**卸载**

1. 停止 **WebLogic** 对应域的服务，进入 **WebLogic** 对应域的根目录（域启动脚本 `startWeblogic.cmd` 中的 `DOMAIN_HOME` 的值），删除文件夹 `iast-tool` 以及文件夹中的内容。

2. 进入对应服务域目录的 `/bin/startWebLogic.cmd`，找到并删除以下内容：

    ```bash title="/bin/startWebLogic.cmd"
    set JAVA_OPTIONS=%JAVA_OPTIONS% -javaagent:"%DOMAIN_HOME%\iast-tool\agent.jar"
    ```

</TabItem>	
</Tabs>

### Websphere

**安装**

1. 进入 **Websphere** 根目录，新建文件夹 `iast-tool`，将下载的 `agent.jar` 放到 `iast-tool` 目录下。

2. 进入 WebSphere WEB 端的管理后台，在控制台左侧的导航栏里，选择 **`Server > Server Types > WebSphere Application Server`**。

    ![Image](/img/docs/getting-started/java-websphere-1.png "")

3. 选择需要安装 Agent 的应用程序服务器，点击进入管理页面。并在新页面下方找到 **`Server Infrastructure > Process definition`**。

    ![Image](/img/docs/getting-started/java-websphere-2.png "")

3. 点击 **`Additional Properties > Java Virtual Machine`** 进入JVM启动参数编辑界面。

    ![Image](/img/docs/getting-started/java-websphere-3.png "")

4. 找到 **`Generic JVM arguments`**, 添加以下配置并保存：

    ```bash
    -javaagent:${WAS_INSTALL_ROOT}/iast-tool/agent.jar
    ```

5. 重启对应修改后的应用 server。

**卸载**

1. 停止 **Websphere** 上添加过 `iast-tool` 的应用 server，进入 **Websphere** 根目录，删除文件夹 `iast-tool` 以及文件夹中的内容。

2. 打开 Websphere 对应的应用 server 配置 Java Virtual Machine 选项的界面

3. 删除 `-javaagent:${WAS\_INSTALL\_ROOT}/iast-tool/agent.jar` 后并保存。

### Resin

:::tip

`RESIN_HOME` : iast-tool 文件夹的绝对路径

:::

<Tabs
className="java-resin-tabs"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'Windows', value: 'win'},
]}>

<TabItem value="linux">

**安装**

1. 停止 **Resin**，进入 **Resin** 根目录，新建文件夹 `iast-tool`，将下载的 `agent.jar` 放到 `iast-tool` 目录下。

2. 进入 `resin/conf/resin.properties`，在 `jvm\_args : -Xmx2048m -XX:MaxPermSize=256m` 后面添加如下内容：

    ```bash title="/resin/conf/resin.properties"
    -javaagent:${RESIN_HOME}/iast-tool/agent.jar
    ```

3. 启动应用服务器。

**卸载**

1. 停止 **Resin**，进入 **Resin** 根目录，删除文件夹 `iast-tool` 以及文件夹中的内容。

2. 进入 `resin/conf/resin.properties`，找到并删除以下内容：

    ```bash title="/resin/conf/resin.properties"
    -javaagent:${RESIN_HOME}/iast-tool/agent.jar
    ```

</TabItem> 
<TabItem value="win">

**安装**

1. 停止 **Resin**，进入 **Resin** 根目录，新建文件夹 `iast-tool`，将下载的 `agent.jar` 放到 `iast-tool` 目录下。

2. 进入 `resin/conf/resin.properties`，在 `jvm\_args : -Xmx2048m -XX:MaxPermSize=256m` 后面添加如下内容：

    ```bash title="/resin/conf/resin.properties"
    -javaagent:%RESIN_HOME%\iast-tool\agent.jar
    ```

3. 启动应用服务器。

**卸载**

1. 停止 **Resin**，进入 **Resin** 根目录，删除文件夹 `iast-tool` 以及文件夹中的内容。

2. 进入 `resin/conf/resin.properties`，找到并删除以下内容：

    ```bash title="/resin/conf/resin.properties"
    -javaagent:%RESIN_HOME%\iast-tool\agent.jar
    ```

</TabItem>	
</Tabs>

### 东方通

:::tip

`TWNT_HOME` : iast-tool文件夹的绝对路径

:::

<Tabs
className="java-TWNT-tabs"
defaultValue="linux"
values={[
{label: 'Linux', value: 'linux'},
{label: 'Windows', value: 'win'},
]}>

<TabItem value="linux">

**安装**

1. 停止 **TongWeb**，进入 **TongWeb** 根目录，新建文件夹 `iast-tool`，将下载的 `agent.jar` 放到 `iast-tool` 目录下。

2. 进入 `TongWeb/bin/startserver.sh`，在 `if [ "${ACTION}" = "start" ] ; then` 后面添加如下内容：

    ```shell title="/TongWeb/bin/startserver.sh"
    JAVA_OPTS="-javaagent:/${TWNT_HOME}/iast-tool/agent.jar ${JAVA_OPTS}"
    ```

3. 启动应用服务器。

**卸载**

1. 停止 **TongWeb**，进入 **TongWeb** 根目录，删除文件夹 `iast-tool` 以及文件夹中的内容。

2. 进入 `TongWeb/bin/startserver.sh`，找到并删除以下内容：

    ```shell title="/TongWeb/bin/startserver.sh"
    JAVA_OPTS="-javaagent:/${TWNT_HOME}/iast-tool/agent.jar ${JAVA_OPTS}"
    ```

</TabItem> 
<TabItem value="win">

**安装**

1. 停止 **TongWeb**，进入 **TongWeb** 根目录，新建文件夹 `iast-tool`，将下载的 `agent.jar` 放到 `iast-tool` 目录下。

2. 进入 `TongWeb/bin/startserver.bat`，在 `if [ "${ACTION}" = "start" ] ; then` 后面添加如下内容：

    ```bash title="/TongWeb/bin/startserver.bat"
    if "%ACTION%" == "start" set JAVA_OPTS="-javaagent:%TWNT_HOME%\iast-tool\agent.jar" %JAVA_OPTS%
    ```

3. 启动应用服务器。

**卸载**

1. 停止 **TongWeb**，进入 **TongWeb** 根目录，删除文件夹 `iast-tool` 以及文件夹中的内容。

2. 进入 `TongWeb/bin/startserver.bat`，找到并删除以下内容：

    ```bash title="/TongWeb/bin/startserver.bat"
    if "%ACTION%" == "start" set JAVA_OPTS="-javaagent:%TWNT_HOME%\iast-tool\agent.jar" %JAVA_OPTS%
    ```

</TabItem>	
</Tabs>

## 资源：参数配置

:::info

* `-Dproject.create=true` 为可选参数，将自动创建项目。
* `-Dproject.name=<application name>` 为可选参数， `<application name>` 与创建的项目名称保持一致，将自动关联至项目；默认值为 `Demo Project`。
* `-Dproject.version=<version>` 为可选参数，会自动创建项目及版本。

如果不配置上述参数，也可进入项目管理中进行手工绑定。


:::

## 资源：27 秒安装 Agent

:::info

* 配置环境变量：`JAVA\_TOOL\_OPTIONS=-javaagent:agent.jar`

* Linux 命令：`export JAVA\_TOOL\_OPTIONS=-javaagent:agent.jar`

* 该方案适用于批量测试，快速配置 Agent。

[参考资源：27-second hack to install a Java agent](https://www.rookout.com/blog/27-second-hack-to-install-a-java-agent)

:::

