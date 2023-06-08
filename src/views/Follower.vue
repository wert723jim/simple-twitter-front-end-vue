<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        <a href="" class="title__back" @click.stop.prevent="$router.back()">
          <img src="../assets/img/icon_back@2x.png" alt="" class="title__back__img">
        </a>
        <div class="title__content">
          <h5>{{userProfile.name}}</h5>
          <div class="title__content__count second-font">25 推文</div>
        </div>
      </div>

      <!-- list tabs -->
      <Tabs 
        :tabs="['追蹤者', '正在追蹤' ]"
        @after-choose="handleAfterChoose"
      />
      <!-- <div v-show="chosenTab === '追蹤者'">
        <div 
          class="list"
          v-for="follower in followers"
          :key="follower.id"
        >
          <div class="list__user">
          <div class="list__user__headshot">
            <img :src="follower.avatar" alt="">
          </div>
          <div class="list__user__info">
            <div class="list__user__info__top">
              <div class="list__user__info__top__name">
                {{follower.name}}
              </div>
              <div>
                <button
                  class="list__user__info__top__follow"
                  @click.stop.prevent="follow(follower.id)"
                  v-if="!follower.followed"
                >
                追蹤
                </button>
                <button
                  class="list__user__info__top__unfollow"
                  @click.stop.prevent="unFollow(follower.id)"
                  v-else
                >
                取消追蹤
                </button>
              </div>
            </div>
            <div class="list__user__info__introduction">
              {{follower.introduction}}
            </div>
          </div>
          </div>
        </div>
      </div>
      <div v-show="chosenTab === '正在追蹤'">
        <div 
          class="list"
          v-for="following in followings"
          :key="following.id"
        >
          <div class="list__user">
          <div class="list__user__headshot">
            <img :src="following.avatar" alt="">
          </div>
          <div class="list__user__info">
            <div class="list__user__info__top">
              <div class="list__user__info__top__name">
                <span>{{following.name}}</span>
              </div>
              <div>
                <button
                  class="list__user__info__top__follow"
                  @click.stop.prevent="follow(following.id)"
                  v-if="!following.followed"
                >
                追蹤
                </button>
                <button
                  class="list__user__info__top__unfollow"
                  @click.stop.prevent="unFollow(following.id)"
                  v-else
                >
                取消追蹤
                </button>
              </div>
            </div>
            <div class="list__user__info__introduction">
              {{following.introduction}}
            </div>
          </div>
          </div>
        </div>
      </div> -->

      <FollowsList
        :initial-follows="followers"
        v-if="chosenTab === '追蹤者'"
      />

      <FollowsList 
        :initial-follows="followings"
        v-else
      />

    </div>
  </div>
</template>

<script>
import Tabs from '../components/Tabs.vue'
import userAPI from '../apis/users'
import FollowsList from '../components/FollowsList.vue'


export default {
  components: {
    Tabs,
    FollowsList
  },
  data() {
    return {
      userProfile: {},
      followings: [],
      followers: [],
      chosenTab: '追蹤者'
    }
  },
  created() {
    const {id: userId} = this.$route.params
    this.fetchProfile(userId)
    // fetchFollowings 需在前面，因為 fetch followers 有用到 fetchFollowings 的資料
    this.fetchFollowings(userId)
    this.fetchFollowers(userId)
  },
  beforeRouterUpdate(to, from, next) {
    const {id: userId} = to.params
    this.fetchProfile(userId)
    this.fetchFollowers(userId)
    this.fetchFollowings(userId)
    next()
  },
  computed: {
    isFollowerFollowed: {
      get() {
        let followingsArray = this.followings.map(f => {
          return f.id
        })
        return this.followers.map(follower => {
          return {
            ...follower,
            followed: followingsArray.includes(follower.id)
          }
        })
      },
      set() {

      }
    }
  },
  methods: {
    showModal() {
      this.modalShow = true
    },
    closeModal() {
      this.modalShow = false
    },
    async fetchProfile(userId) {
      try {
        const { data } = await userAPI.getUserById(userId)

        this.userProfile = data
      } catch(err) {
        console.log(err)
      }
    },
    async fetchFollowers(userId) {
      try {
        const { data } = await userAPI.getUserFollowers(userId)

        this.followers = data
      } catch(err) {
        console.log(err)
      }
    },
    async fetchFollowings(userId) {
      try {
        const { data } = await userAPI.getUserFollowings(userId)
        
        this.followings = data
      } catch(err) {
        console.log(err)
      }
    },
    handleAfterChoose(tab) {
      if (tab === '追蹤者') {
        this.chosenTab = tab
        this.fetchFollowers(this.userProfile.id)
      } else if (tab === '正在追蹤') {
        this.chosenTab = tab
        this.fetchFollowings(this.userProfile.id)
      }
    },
    async follow(userId) {
      try {
        await userAPI.makeFollow(userId)

        this.followings = this.followings.map(following => {
          if (following.id === userId) {
            return {
              ...following,
              followed: 1
            }
          }
          return following
        })
      } catch(err) {
        console.log(err)
      }
    },
    async unFollow(userId) {
      try {
        await userAPI.unFollow(userId)
        
        this.followings = this.followings.map(following => {
          if (following.id === userId) {
            return {
              ...following,
              followed: null
            }
          }
          return following
        })
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
    flex-direction: column;
    margin-left: 19px;
    // title: 75px = (height)41px + padding(16px + 17px) + border(1px)
    height: 41px;

    &__count {
      color: $secondary;
    }
  }
}

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