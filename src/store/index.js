import Vue from 'vue'
import Vuex from 'vuex'

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
    fetchCurrentUser({ commit }) {
      // 呼叫 API 傳 accessToken 至後端驗證 accessToken 是否過期
      // 若過期則傳 refreshToken 至後端取得新的 accessToken，順便驗證 refreshToken 是否過期
      // 若 refreshToken 也過期，則需要重新登入
      const accessToken = localStorage.getItem('token')
      console.log(accessToken)
      if(accessToken) {
        const dummyUser = {
          id: 1,
          name: 'root',
          account: 'root',
          email: 'root@example.com',
          role: 'user'
        }

        const { id, name, account, email, role } = dummyUser
        commit('setCurrentUser', {
          id,
          name,
          account,
          email,
          role
        })
      }
    }
  },
  modules: {
  }
})
