import { apiHelper } from '../utils/helpers'
import { Toast } from '../utils/helpers'

export default {
  login({ account, password }) {
    return apiHelper.post('/auth', {
      account,
      password,
    })
  },
  logout() {
    return apiHelper.get('/logout')
  },
  // 把 cookie 內的 refresh token 丟回去驗證，成功則回傳一個 access token
  getAccessToken() {
    return apiHelper.get('/refresh')
  },
  googleLogin({ id_token }) {
    return apiHelper.post('/auth/google', { id_token })
  },
  async loginWithToast(Vue, fnName, params) {
    try {
      // 登入成功取得 access token 和 使用者資料
      const { data } = await this[fnName](params)
      //將 access token 存入 local storage
      localStorage.setItem('token', data.accessToken)
      // 將使用者資訊使用 mutation 傳入 Vuex
      Vue.$store.commit('setCurrentUser', data)
      Toast.fire({
        icon: 'success',
        title: '登入成功',
      })
      Vue.$router.push({ name: 'main' })
    } catch (err) {
      console.log(err)
      const message = err.response
        ? err.response.data.message
        : false || err.message
      Toast.fire({
        icon: 'error',
        title: message,
      })
    }
  },
}
