<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        <h4>首頁</h4>
      </div>

      <div class="tweet">
        <form action="" @submit.prevent.stop="addTweet" id="tweet__form">
          <div class="tweet__info">
            <div class="tweet__info__headshot">
              <img :src="currentUser.avatart" alt="">
            </div>
            <div class="tweet__info__content">
              <textarea  placeholder="有什麼新鮮事?" v-model="description"></textarea>
            </div>
          </div>
          <div class="tweet__btn">
            <button type="submit">推文</button>
          </div>
        </form>
      </div>

      <TweetsList
        :initial-tweets="tweets"
      />
    </div>
    
  </div>
</template>

<script>
import TweetsList from '../components/TweetsList.vue'
import tweetAPI from '../apis/tweets'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default {
  components: {
    TweetsList
  },
  data() {
    return {
      modalShow: false,
      tweets: [],
      description: ''
    }
  },
  created() {
    this.fetchAllTweets()
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    showModal() {
      this.modalShow = true
    },
    closeModal() {
      this.modalShow = false
    },
    async fetchAllTweets() {
      try {
        const { data } = await tweetAPI.getAllTweet()

        this.tweets = data
      } catch(err) {
        console.log(err)
      }
    },
    async addTweet() {
      try{
        // 檢驗字數
        if (!this.description.trim()) throw new Error('推文不可為空白!')
        const { data } = await tweetAPI.addTweet({
          description: this.description
        })

        // this.fetchAllTweets()
        const { tweet_id } = data
        
        // 從頭開始加入元素
        // 因資料庫id 有可能因為刪除而出現不連號
        this.tweets.unshift({
          User: {
            ...this.currentUser
          },
          createdAt: Date.now(),
          description: this.description,
          likeCount: 0,
          likes: null,
          id: tweet_id
        })

        this.description = ''

        Toast.fire({
          icon: 'success',
          title: '推文成功'
        })
      } catch(err) {
        // const { message } = err.response.data
        // console.log(err.response)
        // let message = ''
        const message = err.response ? err.response.data.message : false || err.message
        Toast.fire({
          icon: 'error',
          title: message
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  padding-left: 202px;
  padding-right: 24px;
}

.wrapper {
  width: 100%;
  height: 100%;
  border-left: 1px solid #E6ECF0;
  border-right: 1px solid #E6ECF0;
}

.title {
  padding: 24px 0 24px 23px;
  border-bottom: 1px solid #E6ECF0;
}

.tweet {
  padding: 16px 0;
  border-bottom: 10px solid #E6ECF0;

  &__info {
    display: flex;
    width: 90%;
    margin: 0 auto;
    &__headshot {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background: black;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        overflow: hidden;
      }
    }

    &__content {
      display: flex;
      align-items: center;
      padding-left: 8px;
      // width: 100%;

      textarea {
        border: none;
        outline: none;
        resize: none;
        width: 100%;
        ::placeholder {
          color: $secondary;
        }
      }
    }
  }
  
  &__btn {
    margin: 0 auto;
    text-align: end;
    width: 90%;

    button {
      width: 64px;
      height: 46px;
      border-radius: 50px;
      padding: 8px 16px;
      background: $brand-color;
      color: white;
      font-size: 16px;
      font-weight: 400;
      line-height: 30px;
    }
  }
}

</style>