---
sidebar_position: 13
---
# Jenkins 集成 Dongtai Java Agent

## 设置Token

![Image](images/3fba6d59-bf78-4128-9e68-dd5d78f24591.png)

## Jenkinsfile 示例

``` yaml
def jar_name = 'DongTai-IAST-demo-0.0.1-SNAPSHOT.jar'
def host = 'ec2-52-81-65-86.cn-north-1.compute.amazonaws.com.cn'
def agent_path = '/home/ubuntu/agent.jar'
def project_name = 'hardy-project'
def download_url =  'curl -k -o ' + agent_path+ ' -X GET "https://iast.io/openapi/api/v1/agent/download?url=https://iast.io/openapi&language=java" -H "Authorization: Token  '

pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'mvn -B -DskipTests clean package' 
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
        stage('Upload jar') {   
            steps {
                sh "scp -i '/opt/deploy.pem' -o StrictHostKeyChecking=no  target/${jar_name}  ubuntu@${host}:/home/ubuntu/"
            }
        }
        // 下载 agent
        stage('Download Agent') {
            environment {
                 TOKEN  = credentials('dongtai_token')
                }
            steps {
                sh "ssh -i /opt/deploy.pem  ubuntu@${host} '${download_url}${TOKEN}\"'"
             }
        }
        //运行JAR包
        stage('Run') {
            steps {
                sh "ssh -i /opt/deploy.pem  ubuntu@${host} 'nohup java -javaagent:${agent_path} -Dproject.name=${project_name} -jar /home/ubuntu/${jar_name}  > ${jar_name}.log 2>&1 &'"
             }
        }
    }
}
```
