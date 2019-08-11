- 初始化一个vue项目 vue init webpack 
- 安装axios 
- 安装vant组件库
- 安装koa




- 安装mongodb  mongoose //Mongoose是一个开源的封装好的实现Node和MongoDB数据通讯的数据建模库
- 安装glob //glob：node的glob模块允许你使用 * 等符号，来写一个glob规则，像在shell里一样，获取匹配对应规则文件。
- bcrypt的使用
简介: bcrypt是一种跨平台的文件加密工具。bcrypt 使用的是布鲁斯·施内尔在1993年发布的 Blowfish 加密算法。由它加密的文件可在所有支持的操作系统和处理器上进行转移。它的口令必须是8至56个字符，并将在内部被转化为448位的密钥。
- 安装bcrypt的使用  cnpm instal --save bcrypt --registry=https://registry.npm.taobao.org
- 安装koa-router npm install koa-router --save
- 安装koa-bodyparser中间件 cnpm install --save koa-bodyparser
- 安装koa2-cors中间件 (解决跨域问题) cnpm install --save koa2-cors
  安装完成后，记得要在service/index.js文件中引入和注册（使用）一下中间件：
  const cors = require('koa2-cors')
  app.use(cors()