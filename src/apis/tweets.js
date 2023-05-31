import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  addTweet({description}) {
    return apiHelper.post('/tweets', {
      description
    },
    {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  },
  getAllTweet() {
    return apiHelper.get('/tweets')
  }
}