<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        <a href="#" class="title__back" @click.stop.prevent="$router.back()">
          <img src="../assets/img/icon_back@2x.png" alt="" class="title__back__img">
        </a>
        <div class="title__content">
          <h4>推文</h4>
        </div>
      </div>

      <div class="post">
        <div class="post__header">
          <div class="post__header__headshot">
            <img :src="postDetail.User.avatar" alt="">
          </div>
          <div class="post__header__info">
            <div class="post__header__info__name">
              {{postDetail.User.name}}
            </div>
            <div class="post__header__info__account second-font">
              @{{postDetail.User.account}}
            </div>
          </div>
        </div>
        <div class="post__content">
          <div class="post__content__text">
            {{postDetail.description}}
          </div>
          <div class="post__content__created second-font">
            <!-- 上午 10:05 &middot; 2023年5月16日 -->
            {{postDetail.createdAt}}
          </div>
        </div>
        <div class="post__count">
          <div class="post__count__replies">
            {{postDetail.replyCount}} <span>回覆</span>
          </div>
          <div class="post__count__likes">
            {{postDetail.likeCount}} <span>喜歡次數</span>
          </div>
        </div>
        <div class="post__btn">
          <a
            href=""
            class="post__btn__reply"
            @click.stop.prevent="showModal"
          >
            <img src="../assets/img/icon_reply@2x.png" alt="">
          </a>
          <div class="post__btn__like">
            <a 
              href=""
              v-if="!postDetail.liked"
              @click.stop.prevent="liked(postDetail.id)"
            >
              <img src="../assets/img/icon_like@2x.png" alt="">
            </a>
            <a 
              href=""
              v-else
              @click.stop.prevent="unliked(postDetail.id)"
            >
              <img src="../assets/img/icon_liked@2x.png" alt="">
            </a>
          </div>
        </div>
      </div>

      <RepliesList 
      :initial-replies="replies"
      />

      
    </div>
    <transition>
      <ReplyModal 
        v-if="modalShow"
        @modal-close="closeModal"
        :initial-reply-tweet-id="this.postDetail.id"
        @after-submit="handleAfterSubmit"
      />
    </transition>
  </div>
</template>

<script>
import ReplyModal from '../components/ReplyModal.vue'
import RepliesList from '../components/RepliesList.vue'
import tweetAPI from '../apis/tweets'
import { Toast } from '../utils/helpers'

export default {
  components: {
    ReplyModal,
    RepliesList
  },
  data() {
    return {
      modalShow: false,
      postDetail: {
        User:{}
      },
      replies: []
    }
  },
  created() {
    const {id: tweetId} = this.$route.params
    this.fetchTweet(tweetId)
    this.fetchReplies(tweetId)
  },
  methods: {
    showModal() {
      this.modalShow = true
    },
    closeModal() {
      this.modalShow = false
    },
    async fetchTweet(tweetId) {
      try {
        const { data } = await tweetAPI.getTweetById(tweetId)

        this.postDetail = data
      } catch(err) {
        console.log(err)
      }
    },
    async fetchReplies(tweetId) {
      try {
        const {data} = await tweetAPI.getAllReplies(tweetId)

        this.replies = data.map(t => t = {
          ...t,
          tweeter: {
            account: this.postDetail.User.account,
            id: this.postDetail.User.id
          } 
        })

      } catch(err) {
        console.log(err)
      }
      
    },
    async handleAfterSubmit(comment) {
      try {
        console.log('tweetslist comment:', comment)
        console.log('tweetId:', this.postDetail.id)
        const tweetId = this.postDetail.id
        await tweetAPI.addReply(tweetId, comment)
        this.postDetail.replyCount +=1
        this.modalShow = false
        Toast.fire({
          icon: 'success',
          title: '回覆成功'
        })
      } catch(err) {
        console.log(err)
      }
    },
    async liked(tweetId) {
      try {
        await tweetAPI.likeTweet(tweetId)

        this.postDetail = {
          ...this.postDetail,
          liked: 1,
          likeCount: ++this.postDetail.likeCount
        }
      } catch(err) {
        console.log(err)
      }
    },
    async unliked(tweetId) {
      try {
        await tweetAPI.unlikeTweet(tweetId)

        this.postDetail = {
          ...this.postDetail,
          liked: null,
          likeCount: --this.postDetail.likeCount
        }
      } catch(err) {
        console.log(err)
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
  display: flex;
  padding: 16px 0 17px 28px;
  border-bottom: 1px solid #E6ECF0;

  &__back {
    display: flex;
    align-items: center;

    &__img {
      width: 24px;
      height: 24px;
    }
    
  }

  &__content {
    display: flex;
    align-items: center;
    margin-left: 19px;
    // title: 75px = (height)41px + padding(16px + 17px) + border(1px)
    height: 41px;
  }
}

.post {
  padding: 16px;
  border-bottom: 1px solid #E6ECF0;

  &__header {
    display: flex;
    margin-bottom: 10px;

    &__headshot {
      img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background: black;
      }
    }

    &__info {
      margin-left: 8px;

      &__account {
        color: $secondary;
      }
    }
  }

  &__content {
    border-bottom: 1px solid #E6ECF0;

    &__text {
      margin-bottom: 8px;
    }

    &__created {
      margin-bottom: 8px;
      color: $secondary;
    }
  }

  &__count {
    display: flex;
    padding: 16px 0;
    gap: 24px;
    border-bottom: 1px solid #E6ECF0;

    span {
      color: $secondary;
    }
  }

  &__btn {
    display: flex;
    padding-top: 16px;
    gap: 128px;
  }
}
</style>