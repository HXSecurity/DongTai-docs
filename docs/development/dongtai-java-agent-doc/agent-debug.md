---
sidebar_position: 7
---

# Agent 调试

1. 构建好即将调试的 Agent，构建方式请查看 [Agent 构建](maven-build)
2. 使用 IDE 打开 Agent 代码，推荐 IntelliJ IDEA

3. 使用 Remote JVM Debug 功能

   ![Image](images/springtest_config.png)

4. 进行配置

   ![Image](images/remote_debug.png)

   :::note 参数
   - Host：运行该项目的远程IP
   - Port：远程 IP 的端口
   - Command：远程主机在启动 Java 应用时需要添加的参数
   :::

5. 配置应用的启动命令

   ```
   java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 -Ddongtai.server.package=false -javaagent:/path/to/dongtai-agent.jar -jar app.jar
   ```

   :::note 参数
   - -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005：JVM Remote Debug 参数
   - dongtai.server.package=false：不要从洞态Server端下载agent依赖包，避免调试时断点和源码对应不上
   - -javaagent:/path/to/agent.jar：被远程 Debug 的DongTAi-iast-agent
   - app.jar：使用 agent 启动的 JAVA 应用
   :::

6. 返回 IDEA 界面，点击 debug 启动标志开始调试 Agent
