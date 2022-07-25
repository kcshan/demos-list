import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  routes: [
    {
      path: '/',
      redirect: '/demo1',
    },
    {
      name: '案例一',
      path: '/demo1',
      icon: 'smile',
      component: './Demo1',
    },
    {
      name: '案例二',
      path: '/demo2',
      icon: 'smile',
      component: './Demo2',
    },
    {
      name: '案例三',
      path: '/demo3',
      icon: 'smile',
      component: './Demo3',
    },
  ],
  npmClient: 'yarn',
});
