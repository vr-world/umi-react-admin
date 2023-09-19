// 运行时配置
import type { RequestConfig } from 'umi';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

let extraRoutes: Array<any> = [
  {
    path: '/',
  },
  {
    name: '登录',
    path: '/login',
    component: './Login',
    hideInMenu: true,
  },
  {
    name: '客户管理',
    path: '/',
    component: '@/layouts/index',
    hideInBreadcrumb: true,
    routes: [
      {
        name: '客户列表',
        path: '/clue/list',
        component: './Clue/List',
        routes: [
          {
            name: '客户列表',
            path: '/clue/list',
            component: './Clue/List',
            hideInMenu: true,
          },
          {
            name: '客户详情',
            path: '/clue/detail',
            hideInMenu: true,
            component: './Clue/Detail',
          },
        ],
      },
    ],
  },
];

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
      // 每当 initialState?.currentUser?.userid 发生修改时重新执行 request
      // params: {
      //   userId: initialState?.currentUser?.userid,
      // },
      request: async () => {
        return extraRoutes;
      },
    },
    logout: () => { }, // do something
    rightRender:()=> { return ''; },// return string || ReactNode;
  };
};

// 请求配置
export const request: RequestConfig = {
  timeout: 1000,
  errorConfig: {
    errorHandler(){
    },
    errorThrower(){
    }
  },
  // 为 request 方法添加请求阶段的拦截器。
  requestInterceptors: [
    // 直接写一个 function，作为拦截器
    (url, options) =>
      {
        // do something
        return { url, options }
      },
    // 一个二元组，第一个元素是 request 拦截器，第二个元素是错误处理
    [(url, options) => {return { url, options }}, (error) => {return Promise.reject(error)}],
    // 数组，省略错误处理
    [(url, options) => {return { url, options }}]
  ],
  // 为 request 方法添加响应阶段的拦截器。
  responseInterceptors: [
    // 直接写一个 function，作为拦截器
    (response) =>
      {
        // 不再需要异步处理读取返回体内容，可直接在data中读出，部分字段可在 config 中找到
        const { data = {} as any, config } = response;
        // do something
        return response
      },
    // 一个二元组，第一个元素是 request 拦截器，第二个元素是错误处理
    [(response) => {return response}, (error) => {return Promise.reject(error)}],
    // 数组，省略错误处理
    [(response) => {return response}]
  ]
};

