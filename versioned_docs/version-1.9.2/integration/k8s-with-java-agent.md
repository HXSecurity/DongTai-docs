---
sidebar_position: 1
---
# Kubernetes 集成 Dongtai Java Agent

## 简介

一个完整的 Dongtai IAST 服务包括两大部分：

1. Dongtai Backend
2. Dongtai Agent

其中 Dongtai Backend部分的获取方式有两种：

1. Dongtai使用洞态官方提供的 `SaaS` 版本；[链接](https://iast.io/)

)
2. 使用 `Docker-Compose` 或者 `Kubernetes` 完成私有化安装；[安装文档](https://github.com/HXSecurity/DongTai/tree/main/deploy)

 有了Dongtai Backend以后，就拥有了漏洞数据的收集、存储、分析、检测、管理的能力，剩下的问题就是怎么去获取漏洞数据。
 这篇文章主要介绍如何在 `Kubernetes` 和 `Docker` 环境中安装 `Java Agent`。

## Kubernetes 环境安装流程

### 思路

在 `Kubernetes` 里安装 `Java Agent` 的主要流程如下:

 1. 获取对应版本的Agent: 从 `Dongtai Backend` 管理页面下载;
 2. 将 `Agent` 拷贝到业务服务容器中:
 3. 启动业务服务时候将 `Agent` 加入到启动参数中;

所以, 让业务容器获取Agent的常见方式:

 1. 将下载的Agent打包成一个单独的镜像,在业务Pod启动的时候使用 `initContainer` 拷贝到业务容器;
 2. 打包专用的业务镜像的时候,将 `Agent` 一同打包进去;
 3. 部署业务服务的时候直接在 `initContainer` 中下载,这是本文介绍的方式;

### 准备

- 一个Kubernetes集群;
- 一个目标业务服务的镜像: dongtai/dongtai-java-agent-demo:0.0.1,将被部署在集群的default命名空间中;
- 假设我们通过上述某一种方式获得了Dongtai Backend服务;

### 获取 Agent

可以在Dongtai Backend管理页面获取下载Agent的链接.
步骤:

1. 点击页面右上角 「+ Add Agent」;
2. 在「下载探针」部分可以直接下载或者获取下载链接;
![Image](images/87a5e09e-ce78-4409-9435-e875b1cf958c.png)

### 安装

这里主要利用 `Kubernetes` 提供的 `initContainer` 的特性实现 `Agent` 的挂载和安装.
> 关于initContainer可以参考 [官网文档](https://kubernetes.io/zh/docs/concepts/workloads/pods/init-containers/)

假设Agent下载链接如下:

```shell
curl -X GET "http://192.168.2.169:8000/api/v1/agent/download?url=http://192.168.2.169:8000&language=java" -H 'Authorization: Token 88cab3057e199b95cb0780e2a8ab4771c8874acd' -o agent.jar -k
```

可以在initContainer里直接下载agent.jar ,将下载链接修改成对应的initContainer yaml 如下:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: dongtai-java-agent-demo
  name: dongtai-java-agent-demo
spec:
  selector:
    matchLabels:
      app: dongtai-java-agent-demo
  template:
    metadata:
      labels:
        app: dongtai-java-agent-demo
    spec:
      volumes:
        - name: dongtai-iast-agent
          emptyDir: {}
      initContainers:
        - name: agent-init-container
          image: curlimages/curl
          volumeMounts:
            - name: dongtai-iast-agent
              mountPath: /tmp
          args:
            - "-k"
            - "-X"
            - "GET"
            - "http://192.168.2.169:8000/api/v1/agent/download?url=http://192.168.2.169:8000&language=java"
            - "-H"
            - "Authorization: Token f267bd77db9b7f39ccf0ac4843232938bc7a6eca"
            - "-o"
            - "/tmp/agent.jar"
      containers:
        - name: app-container
          image: dongtai/dongtai-java-agent-demo:0.0.1
          volumeMounts:
            - name: dongtai-iast-agent
              mountPath: /agent
          env:
            - name: JAVA_TOOL_OPTIONS
              value: "-javaagent:/agent/agent.jar"
```

> 注意yaml文件中的url和token的格式.

等待容器 RUNNING 后,查看日志:
![Image](images/f651d9fc-3376-4724-a362-5acba2e5cb2e.png)

日志显示 Dongtai Agent 已经安装成功。
