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
            <img src="" alt="">
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
            34 <span>回覆</span>
          </div>
          <div class="post__count__likes">
            808 <span>喜歡次數</span>
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
            <img src="../assets/img/icon_like@2x.png" alt="">
          </div>
        </div>
      </div>

      <div class="list">
        <div class="list__post">
          <div class="list__post__headshot">
            <img src="" alt="">
          </div>
          <div class="list__post__info">
            <div class="list__post__info__user">
              <div class="list__post__info__user__name">
                Apple
              </div>
              <div class="list__post__info__user__decor second-font">
                <span>@apple</span>
                &middot;
                <span>3小時</span>
              </div>
            </div>
            <div class="list__post__info__replyto second-font">
              回覆
              <router-link to="/user/1">
                @apple
              </router-link>
            </div>
            <div class="list__post__info__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, assumenda?
            </div>
          </div>
        </div>
        <div class="list__post">
          <div class="list__post__headshot">
            <img src="" alt="">
          </div>
          <div class="list__post__info">
            <div class="list__post__info__user">
              <div class="list__post__info__user__name">
                Apple
              </div>
              <div class="list__post__info__user__decor second-font">
                <span>@apple</span>
                &middot;
                <span>3小時</span>
              </div>
            </div>
            <div class="list__post__info__replyto second-font">
              回覆
              <router-link to="/user/1">
                @apple
              </router-link>
            </div>
            <div class="list__post__info__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quaerat.
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition>
      <ReplyModal 
        v-if="modalShow"
        @modalClose="closeModal"
      />
    </transition>
  </div>
</template>

<script>
import ReplyModal from '../components/ReplyModal.vue'
import tweetAPI from '../apis/tweets'

export default {
  components: {
    ReplyModal
  },
  data() {
    return {
      modalShow: false,
      postDetail: {}
    }
  },
  created() {
    const {id: tweetId} = this.$route.params
    this.fetchTweet(tweetId)
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

        console.log("res:", data)
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
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

.list {
  &__post {
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
        margin-bottom: 9px;
      }

      &__user {
        display: flex;
        margin-bottom: 8px;

        &__decor {
          margin-left: 8px;
          color: $secondary;
        }
      }

      &__replyto {
        margin-bottom: 8px;
        color: $secondary;

        a {
          text-decoration: none;
          color: $brand-color;
        }
      }
    }
  }

}
</style>