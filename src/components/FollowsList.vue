<template>
  <div>
    <div class="list" v-for="follow in follows" :key="follow.id">
      <div class="list__user">
        <div class="list__user__headshot">
          <img :src="follow.avatar" alt="" />
        </div>
        <div class="list__user__info">
          <div class="list__user__info__top">
            <div class="list__user__info__top__name">
              {{ follow.name }}
            </div>
            <!-- 如果 user 跟 登入者相同，則不顯示 button -->
            <div v-if="currentUser.id !== follow.id">
              <button
                class="list__user__info__top__follow"
                @click.stop.prevent="followed(follow.id)"
                v-if="!follow.followed"
              >
                追蹤
              </button>
              <button
                class="list__user__info__top__unfollow"
                @click.stop.prevent="unFollow(follow.id)"
                v-else
              >
                取消追蹤
              </button>
            </div>
          </div>
          <div class="list__user__info__introduction">
            {{ follow.introduction }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import userAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  props: {
    initialFollows: {
      type: Array,
    },
  },
  data() {
    return {
      follows: this.initialFollows,
    }
  },
  watch: {
    initialFollows(newValue) {
      this.follows = [...newValue]
    },
  },
  computed: {
    ...mapState(['currentUser']),
  },
  methods: {
    async followed(userId) {
      try {
        await userAPI.makeFollow(userId)

        this.follows = this.follows.map((follow) => {
          if (follow.id === userId) {
            return {
              ...follow,
              followed: 1,
            }
          }
          return follow
        })
      } catch (err) {
        const message = err.response
          ? err.response.data.message
          : false || err.message
        Toast.fire({
          icon: 'error',
          title: message,
        })
      }
    },
    async unFollow(userId) {
      try {
        await userAPI.unFollow(userId)

        this.follows = this.follows.map((follow) => {
          if (follow.id === userId) {
            return {
              ...follow,
              followed: null,
            }
          }
          return follow
        })
      } catch (err) {
        const message = err.response
          ? err.response.data.message
          : false || err.message
        Toast.fire({
          icon: 'error',
          title: message,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.list {
  &__user {
    display: flex;
    padding: 16px 30px 16px 23px;
    border-bottom: 1px solid #e6ecf0;
    &__headshot {
      img {
        width: 50px;
        height: 50px;
        background: red;
        border-radius: 50px;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-left: 8px;
      &__top {
        display: flex;
        justify-content: space-between;

        &__name {
          display: flex;
          align-items: center;
          // 若 button no render，則要給名字高度，不然空間會被壓縮
          height: 40px;
        }

        &__follow {
          margin-bottom: 8px;
          width: 64px;
          height: 40px;
          border-radius: 50px;
          background: white;
          color: $brand-color;
          border: 1px solid $brand-color;
        }

        &__unfollow {
          margin-bottom: 8px;
          width: 96px;
          height: 40px;
          border-radius: 50px;
          background: $brand-color;
          color: white;
          border: none;
        }
      }
    }
  }
}
</style>
