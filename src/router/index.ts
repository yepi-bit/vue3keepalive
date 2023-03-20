import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: "主页",
        keepAlive: true,
        index: 0,
        showHead: true // 是否影藏头部
      },
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: "关于",
        keepAlive: true,
        index: 1,
        showHead: true
      },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/async',
      name: 'async',
      meta: {
        title: "异步组件",
        keepAlive: true,
        index: 2,
        showHead: false
      },
      component: () => import('../views/asyncView.vue')
    }
  ]
})

// 白名单
const whiteList: string[] = ["/login"]; // no redirect whitelist
router.beforeEach((to, from, next) => {
  // const hasToken = getToken();
  const hasToken = true
  if (hasToken) {
    if (to.path === "/login") {
      next();
    } else {
      // const hasGetUserInfo = store.state.name;
      // if (hasGetUserInfo) {
      //   next();
      // } else {
      //   await store.dispatch('getInfo');
      //   next();
      // }
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next({
        path: "/login" // 验证失败，将会跳转到该路由
      });
    }
  }
});

export default router