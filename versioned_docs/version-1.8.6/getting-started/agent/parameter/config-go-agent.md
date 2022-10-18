---
sidebar_position: 4
---

# Go Agent

## 配置文件 
### 参数表

| 参数名  | 说明     | 类型  |可选参数   |预设值    |
| :--------|:--------|:--------| :--------| :--------|
| `DongtaiGoProjectName`        | 设置项目名称 | String  |名称保证唯一   | Demo Project          |
| `DongtaiGoProjectVersion`     | 设置项目版本       | String      |应用版本号    | V1.0                  |
| `DongtaiGoProjectCreate`      | 设置是否自动创建项目   | Boolean    |`true` or `false`     | false                 |


### 用例

```bash
go run -gcflags "all=-N -l" main.go -DongtaiGoProjectVersion="版本" -DongtaiGoProjectName="项目名" -DongtaiGoProjectCreate="true"
```

