import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'
import NotFound from '../views/NotFound.vue'
import AdminLogin from '../views/admin/AdminLogin.vue'
// 引用 vuex store
import store from '../store/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/regist',
    name: 'regist',
    component: Regist
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import ('../views/Post.vue')
  },
  {
    path: '/user/:id/follower',
    name: 'follower',
    component: () => import('../views/Follower.vue')
  },
  {
    path: '/user/:id/setting',
    name: 'setting',
    component: () => import('../views/Setting.vue')
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/User.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/admin/AdminUsers.vue')
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLogin
  },
  {
    path: '/admin',
    name: 'admin-root',
    component: () => import('../views/admin/AdminMain.vue')
  },
  {
    // 若沒有找到對應 path ，都會跑來這個 route
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  // 將 access token 取出
  const token = localStorage.getItem('token')
  // access token 是否有效的旗標，預設為 false(無效)/true(有效)
  // Write-only variables are not considered as used.
  // eslint-disable-next-line no-unused-vars
  let accessTokenValid = false
  // refresh token 是否有效的旗標，預設為 false(無效)/true(有效)
  // eslint-disable-next-line no-unused-vars
  // let refreshTokenValid = false
  // 如果有 token 的話才驗證 access token 
  if (token) {
    // 使用vuex actions ，會回傳 true 
    // 使用 async await 可以將 fetchCurrentUser return 的值取出
    accessTokenValid = await store.dispatch('fetchCurrentUser')
  }
  // 如果 access token 無效的話
  if (!accessTokenValid) {
    // 傳送 refresh token 至後端，取得 access token 
    accessTokenValid = await store.dispatch('getAccessToken')
  }
  // 若 accessTokenValid 為 false，且不是轉址到登入頁，則轉址到登入頁，若是要去登入頁則不用進入
  if (!accessTokenValid && to.name !== 'login') {
    next('/login')
    return
  }
  next()
})

export default router
