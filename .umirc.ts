import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  fastRefresh: true,
  mfsu: {},
  layout: {
    title: '管理系统',
    // locale: true,
    // logo: 'https://oss.bm001.com/auntalipay/img/icon-tel.png',
  },
  locale: {
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  clientLoader: {},
  npmClient: 'yarn'
});
