'use strict'
// webpack-merge:合并2个配置文件对象并生成一个新的配置文件
// 类似于ES6的Object.assign()方法。
// 如果合并过程中遇到冲突的属性，第二个参数的属性值会覆盖第一个参数的属性值
const merge = require('webpack-merge')
// webpack.base.conf.js与webpack.dev.conf.js和webpack.prod.conf.js的合并也用到了webpack-merge
// Vue-cli将一些通用的配置抽出来放在一个文件内（webpack.base.conf.js）
// 在不同的环境配置不同的代码，最后使用webpack-merge来进行合并，减少重复代码
const prodEnv = require('./prod.env')
// 导出另一个对象，属性为当前的Node环境，值为"development"（开发环境）
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
