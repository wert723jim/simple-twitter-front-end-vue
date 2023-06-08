<template>
  <div>
    <div 
      class="list"
      v-for="follow in follows"
      :key="follow.id"
    >
      <div class="list__user">
        <div class="list__user__headshot">
          <img :src="follow.avatar" alt="">
        </div>
        <div class="list__user__info">
          <div class="list__user__info__top">
            <div class="list__user__info__top__name">
              {{follow.name}}
            </div>
            <div>
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
            {{follow.introduction}}
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import userAPI from '../apis/users'

export default {
  props: {
    initialFollows: {
      type: Array
    }
  },
  data() {
    return {
      follows: this.initialFollows
    }
  },
  watch: {
    initialFollows(newValue) {
      this.follows = [
        ...newValue
    ]
    }
  },
  methods: {
    async followed(userId) {
      try {
        await userAPI.makeFollow(userId)

        this.follows = this.follows.map(follow => {
          if (follow.id === userId) {
            return {
              ...follow,
              followed: 1
            }
          }
          return follow
        })
      } catch(err) {
        console.log(err)
      }
    },
    async unFollow(userId) {
      try {
        await userAPI.unFollow(userId)
        
        this.follows = this.follows.map(follow => {
          if (follow.id === userId) {
            return {
              ...follow,
              followed: null
            }
          }
          return follow
        })
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list {

&__user {
  display: flex;
  padding: 16px 30px 16px 23px;
  border-bottom: 1px solid #E6ECF0;
  &__headshot {
    img {
      width: 50px;
      height: 50px;
      background: black;
      border-radius: 50px;
    }
  }

  &__info {
    width: 100%;
    margin-left: 8px;
    &__top {
      display: flex;
      justify-content: space-between;

      &__name {
        display: flex;
        align-items: center;
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