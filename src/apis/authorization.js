import { apiHelper } from "../utils/helpers";

export default {
  login({account, password}) {
    return apiHelper.post('/auth', {
      account,
      password
    })
  },
  logout() {
    return apiHelper.get('/logout')
  },
  // 把 cookie 內的 refresh token 丟回去驗證，成功則回傳一個 access token
  getAccessToken() {
    return apiHelper.get('/refresh')
  }
}