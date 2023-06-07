<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__wrapper">
        <div class="modal__wrapper__header">
          <a href="" class="modal__wrapper__header__close" @click.stop.prevent="closeModal">
            <img src="../assets/img/icon_x_orange@2x.png" alt="">
          </a>
        </div>
        <div class="modal__wrapper__post">
          <div class="modal__wrapper__post__headshot">
            <img :src="tweet.User.avatar" alt="">
            <!-- verticle line -->
          </div>
          <div class="modal__wrapper__post__detail">
            <div class="modal__wrapper__post__detail__heading">
              <div class="modal__wrapper__post__detail__heading__name">
                {{tweet.User.name}}
              </div>
              <div class="modal__wrapper__post__detail__heading__info second-font">
                <span>@{{tweet.User.account}}</span>
                &middot;
                <span>{{tweet.createdAt | fromNow}}</span>
              </div>
            </div>
            <div class="modal__wrapper__post__detail__description">
              {{tweet.description}}
            </div>
            <div class="modal__wrapper__post__detail__replyto second-font">
              <span>回覆給</span>
              <router-link to="#">@{{tweet.User.account}}</router-link>
            </div>
          </div>
        </div>
        <div class="modal__wrapper__content">
          <div class="modal__wrapper__content__headshot">
            <img src="" alt="">
          </div>
          <div class="modal__wrapper__content__form">
            <form action="" id="comment" @submit.stop.prevent="handleSubmit">
              <textarea
                name="comment"
                placeholder="有什麼新鮮事?"
                v-model="comment"
              >
              </textarea>
            </form>
          </div>
        </div>
        <div class="modal__wrapper__footer">
          <button form="comment" type="submit">回覆</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tweetAPI from '../apis/tweets'
import { mapState } from 'vuex'
import { fromNowFilter } from '../utils/mixins'
export default {
  mixins: [fromNowFilter],
  props: {
    initialReplyTweetId: {
      type: Number
    }
  },
  data() {
    return {
      tweet: {
        User:{}
      },
      comment: ''
    }
  },
  created() {
    this.fetchTweetById()
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    closeModal() {
      this.$emit('modal-close')
    },
    async fetchTweetById() {
      try {
        const {data} = await tweetAPI.getTweetById(this.initialReplyTweetId)

        this.tweet = data
      } catch(err) {
        console.log(err)
      }
    },
    handleSubmit() {
      this.$emit('after-submit', this.comment)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 9998;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .5);
  padding: 56px 430px 0 336px;

  &__wrapper {
    background: #FFFFFF;
    border-radius: 14px;
    width: 100%;
    min-width: 515px;
    min-height: 300px;

    &__header {
      padding: 16px 15px;
      border-bottom: 1px solid #E6ECF0;

      &__close {
        
        img {
          width: 24px;
          height: 24px;
        }
      }
    }

    &__post {
      display: flex;
      padding: 16px 24px;

      &__headshot {
        position: relative;
        display: flex;
        justify-content: center;

        img {
          width: 50px;
          height: 50px;
          border-radius: 50px;
          background: black;
        }

        &::after {
          position: absolute;
          display: block;
          content: '';
          // headshot 50px + 16px
          top: 66px;
          bottom: -16px;
          width: 2px;
          background: #B5B5BE;
        }
          
      }    

      &__detail {
        margin-left: 8px;
        // 讓右側內容不擠壓到左邊的圖案
        // 或是直接將 img width height 寫死
        flex: 1;

        &__heading {
          display: flex;
          margin-bottom: 10px;

          &__info {
            margin-left: 8px;
            color: $secondary;
          }
        }

        &__description {
            margin-bottom: 11px;
        }

        &__replyto {

          span {
            color: $secondary;
          }
          
          a {
            text-decoration: none;
            color: $brand-color;
          }
        }
      }
    }

    &__content {
      display: flex;
      padding: 16px 24px;

      &__headshot {
        width: 50px;
        height: 50px;
        background: black;
        border-radius: 50px; 
      }

      &__form {
        margin-left: 8px;
        padding-top: 12px;
        flex: 1;

        textarea {
          border: none;
          outline: none;
          resize: none;
          width: 100%;
        }
      }
    }

    &__footer {
      padding: 16px;
      text-align: end;
      button {
        width: 64px;
        height: 40px;
        background: $brand-color;
        color: white;
        border-radius: 50px;
      }
    }
  }
}
</style>