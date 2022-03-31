/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-02 14:59:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-31 10:49:32
 */
import './public-path';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import store from './store';
import routes from './router';

window.projectName = 'micro_vue2';

let instance = null;

async function render(props = {}) {
  const { container, routerBase } = props;
  instance = await createApp(App);
  const router = await createRouter({
    history: createWebHistory(`${routerBase}`),
    routes,
  });
  instance.use(store);
  instance.use(router);
  instance.mount(container ? container.querySelector('#app') : '#app');

  // eslint-disable-next-line no-underscore-dangle
  if (window.__POWERED_BY_QIANKUN__) {
    router.afterEach((to) => {
      const { meta, name, href } = to;
      props.mainStore.dispatch('menuList/invokeMicroRoute', {
        path: href,
        name,
        meta,
      });
    });
  }
}

// eslint-disable-next-line no-underscore-dangle
if (!window.__POWERED_BY_QIANKUN__) {
  render({ container: '', routerBase: '/micro_react' });
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.unmount();
}
