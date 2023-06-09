<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        <a href="" class="title__back" @click.stop.prevent="$router.back()">
          <img src="../assets/img/icon_back@2x.png" alt="" class="title__back__img">
        </a>
        <div class="title__content">
          <h5>{{userProfile.name}}</h5>
          <div class="title__content__count second-font">{{tweets.length}} 推文</div>
        </div>
      </div>

      <div class="info">
        <div class="info__top">
          <div class="info__top__cover">
            <img src="" alt="">
          </div>
          <div class="info__top__headshot">
            <img :src="userProfile.avatar" alt="">
          </div>
        </div>
        <!-- 若登入者 id 和 個人頁面 id 相同  -->
        <div
          v-if="userProfile.id === currentUser.id"
          class="info__btn"
        >
          <button
            class="info__btn__edit"
            @click.stop.prevent="showModal"
          >
          編輯個人資料
          </button>
        </div>

        <div
          v-else
          class="info__btn"
        >
          <a href="#" class="info__btn__msg">
            <img src="../assets/img/btn_msg@2x.png" alt="">
          </a>
          <a href="#" class="info__btn__notfi">
            <img src="../assets/img/btn_notfi@2x.png" alt="">
          </a>
          <button
            class="info__btn__follow"
            @click.stop.prevent="follow(userProfile.id)"
            v-if="!userProfile.followed"
          >
          追蹤
          </button>
          <button
            class="info__btn__unfollow"
            @click.stop.prevent="unFollow(userProfile.id)"
            v-else
          >
          取消追蹤
          </button>
        </div>

        <div class="info__text">
          <div class="info__text__heading">
            <h5>{{userProfile.name}}</h5>
            <div class="info__text__heading__account second-font">@{{userProfile.account}}</div>
          </div>
          <div class="info__text__intro">
            {{userProfile.introduction}}
          </div>
          <router-link :to="{name: 'follower', params: {id: userProfile.id}}">
            <div class="info__text__followship">
              <div class="info__text__followship__followings">
                {{followingsCount}} 個<span>跟隨中</span> 
              </div>
              <div class="info__text__followship__followers">
                {{followersCount}} 位<span>跟隨者</span>
              </div>
            </div>
          </router-link>
          
        </div>
      </div>

      <Tabs
        :tabs="['推文', '回覆', '喜歡的內容']"
        @after-choose="handleAfterChoose"
      />

      <TweetsList 
        :initial-tweets="tweets"
        v-if="chosenTab === '推文'"
      />

      <RepliesList 
        :initial-replies="replies"
        v-else-if="chosenTab === '回覆'"
      />

      <TweetsList :initialTweets="likes"
        v-else-if="chosenTab === '喜歡的內容'"
      />
    </div>
    <transition
      v-if="modalShow"
    >
      <EditUserModal
        @modalClose="closeModal"
        :initial-user="userProfile"
      />
    </transition>
    

  </div>
</template>

<script>
import EditUserModal from '../components/EditUserModal.vue'
import TweetsList from '../components/TweetsList.vue'
import RepliesList from '../components/RepliesList.vue'
import Tabs from '../components/Tabs.vue'
import userAPI from '../apis/users'
// import tweetAPI from '../apis/tweets'
import { mapState } from 'vuex'

export default {
  components: {
    EditUserModal,
    TweetsList,
    Tabs,
    RepliesList
  },
  data() {
    return {
      modalShow: false,
      userProfile: {
        id: -1,
        name: '',
        account: '',
        email: '',
        introduction: '',
        avatar: '',
        followed: null
      },
      chosenTab: '推文',
      tweets: [],
      replies: [],
      likes: [],
      followersCount: -1,
      followingsCount: -1
    }
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchProfile(userId)
    this.fetchUserTweets(userId)
    this.fetchUserTweetReplies(userId)
    this.fetchUserLikes(userId)
    this.fetchFollowers(userId)
    this.fetchFollowings(userId)
  },
  computed: {
    ...mapState(['currentUser'])
  },
  // 只要 route 變動就執行，避免 route 將 user/:id 都視為同一個路由
  beforeRouteUpdate(to, from, next) {
    const {id: userId} = to.params
    this.fetchProfile(userId)
    this.fetchUserTweets(userId)
    this.fetchUserTweetReplies(userId)
    this.fetchUserLikes(userId)
    this.fetchFollowers(userId)
    this.fetchFollowings(userId)
    next()
  },
  methods: {
    showModal() {
      this.modalShow = true
    },
    closeModal(changed) {
      this.modalShow = false
      if(changed) this.$router.go()
    },
    async fetchProfile(userId) {
      try {
        const { data } = await userAPI.getUserById(userId)

        const { id, name, account, email, introduction, avatar, followed } = data

        this.userProfile = {
          id,
          name,
          account,
          email,
          introduction,
          avatar,
          followed
        }

      } catch(err) {
        console.log(err)
      }
    },
    async fetchUserTweets(userId) {
      try {
        const { data } = await userAPI.getUserTweets(userId)

        this.tweets = data
      } catch(err) {
        console.log(err)
      }
    },
    async fetchUserTweetReplies(userId) {
      try{
        const {data} = await userAPI.getUserTweetReply(userId)

        this.replies = data
      } catch(err) {
        console.log(err)
      }
    },
    async fetchUserLikes(userId) {
      try {
        const { data } = await userAPI.getUserLikes(userId)

        this.likes = data
      } catch(err) {
        console.log(err)
      }
    },
    handleAfterChoose(tab) {
      this.chosenTab = tab
      const { id: userId } = this.$route.params
      if (tab === '推文') {
        this.fetchUserTweets(userId)
      } else if(tab === '回覆') {
        this.fetchUserTweetReplies(userId)
      } else if (tab === '喜歡的內容') {
        this.fetchUserLikes(userId)
      }
    },
    async follow() {
      try {
        await userAPI.makeFollow(this.userProfile.id)

        this.userProfile.followed = 1
        this.followersCount += 1
      } catch(err) {
        console.log(err)
      }
    },
    async unFollow() {
      try {
        await userAPI.unFollow(this.userProfile.id)

        this.userProfile.followed = null
        this.followersCount -= 1
      } catch(err) {
        console.log(err)
      }
    },
    async fetchFollowers(userId) {
      try {
        const { data } = await userAPI.getUserFollowers(userId)

        this.followersCount = data.length
      } catch(err) {
        console.log(err)
      }
    },
    async fetchFollowings(userId) {
      try {
        const { data } = await userAPI.getUserFollowings(userId)
        
        this.followingsCount = data.length
      } catch(err) {
        console.log(err)
      }
    },
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

.info {
  &__top {
    position: relative;
    // 避免擋到 Navbar popup TweetModal
    z-index: -1;

    &__cover {
      margin-bottom: 16px;
      height: 200px;
      background: black;
    }

    &__headshot {
      position: absolute;
      left: 16px;
      bottom: -72px;
      width: 140px;
      height: 140px;
      border-radius: 140px;
      background: blue;
      border: 4px solid #FFFFFF;

      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }
  }

  &__btn {
    // position: relative;
    display: flex;
    margin-bottom: 16px;
    padding-right:16px;
    justify-content: flex-end;
    gap: 16px;

    a {
      width: 40px;
      height: 40px;

      img {
        height: 100%;
        width: 100%;
      }
    }

    &__edit {
      width: 128px;
      height: 40px;
      color: $brand-color;
      border: 1px solid $brand-color;
      background: white;
      border-radius: 50px;
    }

    &__follow {
      width: 64px;
      height: 40px;
      color: $brand-color;
      border: 1px solid $brand-color;
      background: white;
      border-radius: 50px;
    }

    &__unfollow {
      width: 96px;
      height: 40px;
      border-radius: 50px;
      background: $brand-color;
      color: white;
      border: none;
    }
  }

  &__text {
    padding-left: 16px;

    &__heading {
      margin-bottom: 6px;

      &__account {
        color: $secondary;
      }
    }

    &__intro {
      margin-bottom: 8px;
    }

    a {
      text-decoration: none;
      color: #171725;
    }

    &__followship {
      display: flex;
      gap: 20px;
      margin-bottom: 16px;
      

      span {
        color: $secondary;
      }
    }
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
        margin-bottom: 10px;

        &__decor {
          margin-left: 8px;
          color: $secondary;
        }
      }

      &__box {
        display: flex;
        gap: 40px;

        &__replies, &__likes {
          display: flex;
          color: $secondary;
          gap: 8px;

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