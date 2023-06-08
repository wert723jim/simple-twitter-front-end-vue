<template>
  <div class="list">
    <div
      class="list__post"
      v-for="reply in initialReplies"
      :key="reply.id"
    >
      <div class="list__post__headshot">
        <img :src="reply.reply_user.avatar" alt="">
      </div>
      <div class="list__post__info">
        <div class="list__post__info__user">
          <div class="list__post__info__user__name">
            {{reply.reply_user.name}}
          </div>
          <div class="list__post__info__user__decor second-font">
            <span>@{{reply.reply_user.account}}</span>
            &middot;
            <span>{{reply.createdAt | fromNow}}</span>
          </div>
        </div>
        <div class="list__post__info__replyto second-font" v-if="reply.tweet_user">
          回覆
          <router-link :to="{name: 'user', params: {id: reply.tweet_user.id}}">
            @{{reply.tweet_user.account}}
          </router-link>
        </div>
        <div class="list__post__info__content">
          {{reply.comment}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {fromNowFilter, emptyImageFilter} from '../utils/mixins'

export default {
  mixins: [fromNowFilter, emptyImageFilter],
  props: {
    initialReplies: {
      type: Array
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
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