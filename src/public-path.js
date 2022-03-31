/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-01 17:53:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-02 15:48:58
 */
/* eslint-disable */
(function () {
  // 用来判断是否运行在乾坤的框架下
  // if (process.env.NODE_ENV === "development") {
  //   // eslint-disable-next-line
  //   __webpack_public_path__ = `//localhost:8082/micro_react`;
  //   return;
  // }
  if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
}());
