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
  },
  getUserById(userId) {
    return apiHelper.get(`/users/${userId}`)
  },
  updateUserById(userId, {...setting}) {
    return apiHelper.put(`/users/${userId}`, {
      ...setting
    })
  },
  getUserTweets(userId) {
    return apiHelper.get(`/users/${userId}/tweets`)
  },
  getUserTweetReply(userId) {
    return apiHelper.get(`/users/${userId}/replied_tweets`)
  },
  getUserLikes(userId) {
    return apiHelper.get(`/users/${userId}/likes`)
  },
  getUserFollowers(userId) {
    return apiHelper.get(`/users/${userId}/followers`)
  },
  getUserFollowings(userId) {
    return apiHelper.get(`/users/${userId}/followings`)
  }
}