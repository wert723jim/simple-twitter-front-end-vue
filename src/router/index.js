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

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if(currentUser && currentUser.role !== 'admin') {
    next('/404')
    return
  }
  next()
}

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
    component: () => import('../views/admin/AdminUsers.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLogin
  },
  {
    path: '/admin/main',
    name: 'admin-main',
    component: () => import('../views/admin/AdminMain'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/main'
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
  // 將 localstorage 中儲存的 access token 取出
  const tokenInLocalStorage = localStorage.getItem('token')
  // 將 vuex 中儲存的 access token 取出
  const tokenInStore = store.state.currentUser.accessToken
  // access token 是否有效的旗標，預設為 false(無效)/true(有效)
  // 將旗標與 vuex isAuthenticated 旗標綁定
  // Write-only variables are not considered as used.
  // eslint-disable-next-line no-unused-vars
  let accessTokenValid = store.state.isAuthenticated
  // refresh token 是否有效的旗標，預設為 false(無效)/true(有效)
  // eslint-disable-next-line no-unused-vars
  // let refreshTokenValid = false
  // 如果有 localStorage 的 accessToken 和 vuex 的 accessToken 不同的話才驗證 access token ，減少不必要的 request
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    // 使用vuex actions ，會回傳 true/false，來確認 access token 是否有效
    // 使用 async await 可以將 fetchCurrentUser return 的值取出
    accessTokenValid = await store.dispatch('getAccessToken')
  }
  // // 如果 access token 無效的話
  // if (!accessTokenValid) {
  //   // 傳送 refresh token 至後端，取得 access token 
  //   accessTokenValid = await store.dispatch('getAccessToken')
  // }
  // 不需要 access token 之頁面
  const pathWithoutAccessToken = ['login', 'admin-login', 'regist']
  // 若 accessTokenValid 為 false，且不是轉址到登入頁，則轉址到登入頁，若是要去登入頁則不用進入
  if (!accessTokenValid && !pathWithoutAccessToken.includes(to.name)) {
    next('/login')
    return
  }
  // 若 accessTokenValid 為 true，無法進入 不需要 access token 
  if (accessTokenValid && pathWithoutAccessToken.includes(to.name)) {
    next('/')
    return
  }
  next()
})

export default router
