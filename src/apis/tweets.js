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
  },
  getTweetById(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}`)
  },
  addReply(tweetId, comment) {
    return apiHelper.post(`/tweets/${tweetId}/replies`,{
      comment
    })
  },
  getAllReplies(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}/replies`)
  },
  likeTweet(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/like`)
  },
  unlikeTweet(tweetId) {
    return apiHelper.post(`tweets/${tweetId}/unlike`)
  }
}