import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  addNewUser({account, name, email, password, checkPassword}) {
    return apiHelper.post('/users', {
      account,
      name,
      email,
      password,
      checkPassword
    })
  },
  // 檢驗 access token 是否過期，並回傳使用者資料
  getMyInfo() {
    return apiHelper.get('/myInfo', {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  }
}