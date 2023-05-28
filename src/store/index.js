import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from '../apis/users'
import authAPI from '../apis/authorization'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      account: '',
      role: ''
    },
    isAuthenticated: false
  },
  getters: {
  },
  mutations: {
    setCurrentUser (state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者登入狀態改為 true
      state.isAuthenticated = true
    }
  },
  actions: {
    // 在 actions 中可以透過參數方式取得 commit 的方法
    async fetchCurrentUser({ commit }) {
      try {
        // 呼叫 API 傳 accessToken 至後端驗證 accessToken 是否過期
        const { data } = await userAPI.getMyInfo()
        const { id, name, account, email, role } = data
        commit('setCurrentUser', {
          id,
          name,
          account,
          email,
          role
        })
      } catch(err) {
        // console.log(err)
        // 若 access token 過期則傳 refreshToken 至後端取得新的 accessToken，順便驗證 refreshToken 是否過期
        // 將過期的 local storage 移除
        localStorage.removeItem('token')
        this.dispatch('getAccessToken')
      } 
    },
    async getAccessToken() {
      try {
        const { data } = await authAPI.getAccessToken()
        localStorage.setItem('token', data)
        this.dispatch('fetchCurrentUser')
      } catch(err) {
        console.log(err)
        // 若 refreshToken 也過期，則需要重新登入，轉至登入頁
      }
    }
  },
  modules: {
  }
})
