<template>
  <div class="container">
    <div class="brand">
      <div class="brand__img">
        <img src="../assets/img/logo@2x.png" alt="">
      </div>
      <div class="brand__title">
        <h3>建立你的帳號</h3>
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
        <label for="name" class="second-font">
          名稱
        </label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          placeholder="請輸入名稱"
          required
          autocomplete
          autofocus
        >
      </div>
      <div class="form__group">
        <label for="email" class="second-font">
          Email
        </label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          placeholder="請輸入Email"
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
      <div class="form__group">
        <label for="checkPassword" class="second-font">
          密碼確認
        </label>
        <input
          id="checkPassword"
          v-model="checkPassword"
          name="checkPassword"
          type="password"
          placeholder="請再次輸入密碼"
          required
          autocomplete
          autofocus
        >
      </div>
      <div class="form__btn">
        <button
          type="submit"
        >註冊</button>
      </div>
    </form>
    <div class="portal">
      <router-link to="login">取消</router-link>
    </div>
  </div>
</template>

<script>
import userAPI from '../apis/users'

export default {
  data() {
    return {
      account: '',
      name: '',
      email: '',
      password: '',
      checkPassword: ''
    }
  },
  methods: {
    async handleSubmit () {
      try {
        const res = await userAPI.addNewUser({
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password,
          checkPassword: this.checkPassword
        })

        console.log(res)
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
  justify-content: center;
  margin-top: 16px;
  width: 100%;
  a {
    color: $primary;
  }
}
</style>