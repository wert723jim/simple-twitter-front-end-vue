<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        <a href="" class="title__back" @click.stop.prevent="$router.back()">
          <img src="../assets/img/icon_back@2x.png" alt="" class="title__back__img">
        </a>
        <div class="title__content">
          <h5>John Doe</h5>
          <div class="title__content__count second-font">25 推文</div>
        </div>
      </div>

      <div class="info">
        <div class="info__top">
          <div class="info__top__cover">
            <img src="" alt="">
          </div>
          <div class="info__top__headshot">
            <img src="" alt="">
          </div>
        </div>

        <div class="info__btn">
          <button @click.stop.prevent="showModal">編輯個人資料</button>
        </div>

        <div class="info__text">
          <div class="info__text__heading">
            <h5>John Doe</h5>
            <div class="info__text__heading__account second-font">@heyjohn</div>
          </div>
          <div class="info__text__intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, fugiat?
          </div>
          <router-link to="/user/1/follower">
            <div class="info__text__followship">
              <div class="info__text__followship__followings">
                34 個<span>跟隨中</span> 
              </div>
              <div class="info__text__followship__followers">
                59 位<span>跟隨者</span>
              </div>
            </div>
          </router-link>
          
        </div>
      </div>

      <Tabs :tabs="['推文', '回覆', '喜歡的內容']"/>

      <TweetsList />
    </div>
    <transition>
      <EditUserModal
        v-if="modalShow"
        @modalClose="closeModal"
      />
    </transition>
  </div>
</template>

<script>
import EditUserModal from '../components/EditUserModal.vue'
import TweetsList from '../components/TweetsList.vue'
import Tabs from '../components/Tabs.vue'

export default {
  components: {
    EditUserModal,
    TweetsList,
    Tabs
  },
  data() {
    return {
      modalShow: false
    }
  },
  methods: {
    showModal() {
      this.modalShow = true
    },
    closeModal() {
      this.modalShow = false
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
    }
  }

  &__btn {
    // position: relative;
    margin-bottom: 16px;
    padding-right:16px;
    text-align: right;
    button {
      width: 128px;
      height: 40px;
      color: $brand-color;
      border: 1px solid $brand-color;
      background: white;
      border-radius: 50px;
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