import { apiHelper } from "../../utils/helpers";

export default {
  deleteTweet(tweetId) {
    return apiHelper.delete(`/admin/tweets/${tweetId}`)
  }
}