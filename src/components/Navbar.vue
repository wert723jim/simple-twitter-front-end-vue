<template>
  <nav>
    <div class="brand_img">
      <router-link to="/">
        <img src="../assets/img/logo@2x.png" alt="">
      </router-link>
    </div>
    <div class="list">
      <div class="list__group">
        <router-link to="/main" class="list__group__link">
          <img src="../assets/img/main@2x.png" alt="" class="list__group__link__img">
          <img src="../assets/img/main-c@2x.png" alt="" class="list__group__link__img--active">
          <!-- <span class="list__group__link__text">首頁</span> -->
        </router-link>
      </div>
      <div class="list__group">
        <router-link :to="{name: 'user', params: {id: currentUser.id}}" class="list__group__link">
          <img src="../assets/img/profile@2x.png" alt="" class="list__group__link__img">
          <img src="../assets/img/profile-c@2x.png" alt="" class="list__group__link__img--active">
          <!-- <span class="list__group__link__text">個人資料</span> -->
        </router-link>
      </div>
      <div class="list__group">
        <router-link to="/user/1/setting" class="list__group__link">
          <img src="../assets/img/setting@2x.png" alt="" class="list__group__link__img">
          <img src="../assets/img/setting-c@2x.png" alt="" class="list__group__link__img--active">
          <!-- <span class="list__group__link__text">設定</span> -->
        </router-link>
      </div>
    </div>
    <div class="btn">
      <!-- create modal -->
      <button @click="showModal">
        推文
      </button>
    </div>
    <div class="logout">
        <a href="" @click.stop.prevent="logout">
          <img src="../assets/img/logout@2x.png" alt="" class="logout__link">
        </a>
    </div>

    <transition>
      <TweetModal
        :modalShow="modalShow"
        v-if="modalShow"
        @modalClose="closeModal"
      />
    </transition>
  </nav>
</template>

<script>
import TweetModal from '../components/TweetModal.vue'
import authAPI from '../apis/authorization'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default {
  components: {
    TweetModal
  },
  data() {
    return {
      modalShow: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    showModal() {
      this.modalShow = true
    },
    closeModal() {
      this.modalShow = false
      // 重整頁面去觸發 tweet list component 的 fetch all tweets api
      this.$router.go()
    },
    async logout() {
      try {
        await authAPI.logout()

        this.$store.commit('revokeAuthentication')
        
        Toast.fire({
          icon: 'success',
          title: '登出成功'
        })

        this.$router.push({name: 'login'})
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  // 設定為最上層，popup modal 才不會被遮住
  z-index: 9997;
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
}
.brand_img {
  padding-left: 8px;
  padding-top: 8px;
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
  }
}

.list {
  width: 178px;
  &__group {
    padding-left: 16px;
    height: 58px;
    display: flex;
    align-items: center;
    &__link {
      display: inline-block;
      height: 26px;

      &__img {
        display: block;
        width: 100%;
        height: 100%;

        &--active {
          display: none;
          width: 100%;
          height: 100%;
        }
      }
    }
    // 按鈕圖案變換，藉由router-link點選後給予的class : router-link-exact-active 
    .router-link-exact-active {
      .list__group__link__img {
        display: none;
      }
      .list__group__link__img--active {
        display: block;
      }
    }
  }
}

.btn {
  button {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    padding: 8px 24px;
    background: $brand-color;
    color: white;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }
}

.logout {
  flex: 1;
  display: flex;
  align-items: flex-end;
  padding-left: 16px;
  padding-bottom: 16px;

  &__link {
    height: 26px;
  }
}
</style>