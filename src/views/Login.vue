<template>
  <div class="container">
    <div class="brand">
      <div class="brand__img">
        <img src="../assets/img/logo@2x.png" alt="">
      </div>
      <div class="brand__title">
        <h3>登入 Alphitter</h3>
      </div>
    </div>
    <form action="" class="form" @submit.prevent.stop="handleSubmit">
      <div class="form__group">
        <label for="account" class="second-font">
          帳號
        </label>
        <input
          id="account"
          v-model="account"
          name="account"
          type="text"
          placeholder="請輸入帳號"
          required
          autocomplete
          autofocus
        >
      </div>
      <div class="form__group">
        <label for="" class="second-font">
          密碼
        </label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          placeholder="請輸入密碼"
          required
        >
      </div>
      <div class="form__btn">
        <button
          type="submit"
        >登入</button>
      </div>
    </form>
    <div class="portal">
      <router-link to="/regist">註冊</router-link>
      &middot;
      <router-link to="/admin/login">後台登入</router-link>
    </div>
  </div>
</template>

<script>
import authAPI from '../apis/authorization'

export default {
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit () {
      try {
        // 登入成功取得 access token 和 使用者資料
        const { data } = await authAPI.login({
          account: this.account,
          password: this.password
        })
        //將 access token 存入 local storage
        localStorage.setItem('token', data.accessToken)
        // 將使用者資訊使用 mutation 傳入 Vuex
        this.$store.commit('setCurrentUser', data)

        this.$router.push({name: 'main'})
        console.log(data)
      } catch(err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 356px;
  padding-top: 64px;
  margin: 0 auto;
}
.brand {
  margin-bottom: 40px;

  &__img {
    margin-bottom: 24px;
    text-align: center;

    img {
      height: 50px;
      width: 50px;
    }
  }
}

.form {
  &__group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 32px;
    padding: 2px 10.55px;
    border-radius: 2px;
    border-bottom: 2px solid #657786;
    height:54px;
    background: #F5F8FA;

    label {
      color: #696974;
      height: 26px;
    }
  }
  &__btn {

    button {
      margin-top: 8px;
      width: 356px;
      height: 46px;
      border-radius: 50px;
      padding: 8px 24px;
      background: $brand-color;
      color: white;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
    }
  }
}

.portal {
  display: flex;
  justify-content: end;
  margin-top: 16px;
  width: 100%;
  a {
    color: $primary;
  }
}
</style>