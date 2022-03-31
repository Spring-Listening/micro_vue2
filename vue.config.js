/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-01 17:51:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-31 10:48:55
 */
const { name } = require('./package.json');

module.exports = {
  publicPath: '/',
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    port: 4002, // 在.env中VUE_APP_PORT=7788，与父应用的配置一致
    headers: {
      'Access-Control-Allow-Origin': '*', // 主应用获取子应用时跨域响应头
    },
    disableHostCheck: true,
    historyApiFallback: true,
  },
};
