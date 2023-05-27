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
  }
}