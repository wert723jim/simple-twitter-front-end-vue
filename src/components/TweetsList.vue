<template>
  <div class="list">
    <div
      class="list__post"
      v-for="tweet in tweets"
      :key="tweet.id"
    >
      <div class="list__post__headshot">
        <img :src="tweet.User.avatar | emptyImage" alt="">
      </div>
      <div class="list__post__info">
        <div class="list__post__info__user">
          <div class="list__post__info__user__name">
            <router-link :to="{name: 'user', params: {id: tweet.User.id}}">
              {{tweet.User.name}}
            </router-link>
            
          </div>
          <div class="list__post__info__user__decor second-font">
            <span>@{{tweet.User.account}}</span>
            &middot;
            <span>{{tweet.createdAt | fromNow}}</span>
          </div>
          <div class="list__post__info__user__remove" v-if="currentUser.role === 'admin'">
            <form action="" id="tweet__list__form">
              <button
                @click.stop.prevent="removeTweet(tweet.id)"
              >
                <img src="../assets/img/icon_x_gray@2x.png" alt="">
              </button>
            </form>
          </div>
        </div>
        <router-link
         class="list__post__info__content"
         :to="{name: 'post', params: {id: tweet.id}}"
        >
          <div>
            {{ tweet.description }}
          </div>
        </router-link>
        
        <div class="list__post__info__box second-font">
          <a
            href="#"
            class="list__post__info__box__replies"
            @click.stop.prevent="showModal(tweet.id)"
          >
            <img src="../assets/img/icon_reply@2x.png" alt="">
            <span>{{ tweet.replyCount }}</span>
          </a>
          <a
            href="#"
            class="list__post__info__box__likes"
            @click.stop.prevent="addLike(tweet.id)"
            v-if="!tweet.liked"
          >
            <img src="../assets/img/icon_like@2x.png" alt="">
            <span>{{ tweet.likeCount }}</span>
          </a>
          <a
            href="#"
            class="list__post__info__box__likes"
            @click.stop.prevent="removeLike(tweet.id)"
            v-else
          >
            <img src="../assets/img/icon_liked@2x.png" alt="">
            <span>{{ tweet.likeCount }}</span>
          </a>
        </div>
      </div>
    </div>

    <transition>
      <ReplyModal
        v-if="modalShow"
        @modal-close="closeModal"
        :initial-reply-tweet-id="replyTweetId"
        @after-submit="handleAfterSubmit"
      />
    </transition>
  </div>
</template>

<script>
import ReplyModal from '../components/ReplyModal.vue'
import {fromNowFilter, emptyImageFilter} from '../utils/mixins'
import { mapState } from 'vuex'
import tweetAPI from '../apis/tweets'
import adminTweetAPI from '../apis/admin/tweets'
import { Toast } from '../utils/helpers'

export default {
  mixins: [fromNowFilter, emptyImageFilter],
  components: {
    ReplyModal
  },
  props: {
    initialTweets:{
      type: Array,
      required: true
    }
  },
  data() {
    return {
      modalShow: false,
      // 直接將傳進來的 initialTweets 賦值給 component 的 tweets
      tweets: this.initialTweets,
      replyTweetId: -1
    }
  },
  // 避免因時間差，而在渲染後才取得資料
  // 當有資料進來後，將資料重新填入
  watch: {
    initialTweets(newValue) {
      this.tweets = [
        ...newValue
    ]
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    showModal(tweetId) {
      this.modalShow = true
      this.replyTweetId = tweetId
    },
    closeModal() {
      this.modalShow = false
    },
    async handleAfterSubmit(comment) {
      try {
        console.log('tweetslist comment:', comment)
        console.log('tweetId:', this.replyTweetId)
        const tweetId = this.replyTweetId
        await tweetAPI.addReply(tweetId, comment)
        this.modalShow = false

        this.tweets = this.tweets.map(t => {
          if(t.id === this.replyTweetId) {
            return {
              ...t,
              replyCount: ++t.replyCount
            }
          }
          return t
        })

        Toast.fire({
          icon: 'success',
          title: '回覆成功'
        })
      } catch(err) {
        console.log(err)
      }
    },
    async addLike(tweetId) {
      try{
        await tweetAPI.likeTweet(tweetId)

        this.tweets = this.tweets.map(t => {
          if(t.id === tweetId) {
            return {
              ...t,
              likeCount: ++t.likeCount,
              liked: 1
            }
          }
          return t
        })


      } catch(err) {
        const message = err.message || err.response.data.message || err
        console.log(err.response.data.message)
        Toast.fire({
          icon: 'error',
          title: message
        })
        
      }
    },
    async removeLike(tweetId) {
      try {
        await tweetAPI.unlikeTweet(tweetId)

        this.tweets = this.tweets.map(t => {
          if(t.id === tweetId) {
            return {
              ...t,
              likeCount: --t.likeCount,
              liked: null
            }
          }
          return t
        })
        
      } catch(err) {
        console.log(err)
        const { message } = err.response.data
        Toast.fire({
          icon: 'error',
          title: message
        })
      }
    },
    async deleteTweet(tweetId) {
      try {
        await adminTweetAPI.deleteTweet(tweetId)
        this.tweets = this.tweets.filter(tweet => tweet.id !== tweetId)
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  &__post {
    position: relative;
    display: flex;
    padding: 16px 24px;
    border-bottom: 1px solid #E6ECF0;

    &__headshot {
      width: 50px;
      height: 50px;
      background: black;
      border-radius: 50px;
      
      img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
      }
    }

    &__info {
      margin-left: 8px;

      &__content {
        display: block;
        margin-bottom: 9px;
        text-decoration: none;
        color: #171725;
      }

      &__user {
        display: flex;
        margin-bottom: 10px;
        align-items: center;

        &__name {
          a {
            text-decoration: none;
          }
        }

        &__decor {
          margin-left: 8px;
          color: $secondary;
        }

        &__remove {
          position: absolute;
          right: 0;
          
          button {
            background: white;

            img {
              width: 24px;
              height: 24px;
            }
          }
        }
      }

      &__box {
        display: flex;
        gap: 40px;

        &__replies, &__likes {
          display: flex;
          color: $secondary;
          gap: 8px;
          text-decoration: none;

          img {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }

}
</style>