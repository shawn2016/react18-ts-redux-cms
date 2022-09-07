# react18-ts-redux-cms

## 项目介绍

出于学习&方便以后搭建react框架,主要涉及：
## 技术分布

- react18
- typescript
- react-router-dom v6 --路由
- react-particles -- 粒子效果
- react-redux redux --状态管理
- redux-persist --redux状态持久化
- redux-thunk --处理redux异步
- antd -- 组件库
- axios --网络请求封装
- draft-js -- 富文本编辑器
- echarts --可视化图表
- immutable -- 状态储存优化
- nprogress -- 页头加载进度效果
- styled-components -- css in js
- moment --时间处理工具库

## 进入项目
```bash
cd react18-ts-redux-cms
```

## 安装依赖

```bash
yarn
```
## 启动项目

```bash
yarn dev
```
## 安装json-server
```bash
npm i json-server -g
```

## 启动后端服务

```bash
json-server --watch public/db.json --port 5000
```

## 注意事项
当我们需要通过接口执行删除操作来调试的时候，会删除本地的json数据，这时候的正确做法是: 先打开db.json然后再通过接口发送，确认删除成功后回到db.json 执行撤销操作ctrl+z 数据就不会丢失了。

## 项目展示

![alt](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4376f41bbb1440ba84836cb94f33315d~tplv-k3u1fbpfcp-watermark.image?)
![alt](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0389fa8f207f45ccb2401d4b1c515ec2~tplv-k3u1fbpfcp-watermark.image?)


## End

学习自：https://gitee.com/kang0916/react18-v6-cms

欢迎大家给他star!