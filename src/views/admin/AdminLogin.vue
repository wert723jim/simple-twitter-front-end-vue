<template>
  <div class="container">
    <div class="brand">
      <div class="brand__img">
        <img src="../../assets/img/logo@2x.png" alt="">
      </div>
      <div class="brand__title">
        <h3>後台登入</h3>
      </div>
    </div>
    <form action="" class="form" @submit.prevent.stop="handleSubmit" id="admin__login__form">
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
      <router-link to="/login">前台登入</router-link>
    </div>
  </div>
</template>

<script>
import adminAuthAPI from '../../apis/admin/authorization'
import { Toast } from '../../utils/helpers'

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
        const {data} = await adminAuthAPI.login({
          account: this.account,
          password: this.password
        })

        localStorage.setItem('token', data.accessToken)

        this.$store.commit('setCurrentUser', data)

        Toast.fire({
          icon: 'success',
          title: '登入成功'
        })


        this.$router.push({name: 'admin-main'})
      } catch(err) {
        const message = err.response ? err.response.data.message : false || err.message
        Toast.fire({
          icon: 'error',
          title: message
        })
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
  justify-content: flex-end;
  margin-top: 16px;
  width: 100%;
  a {
    color: $primary;
  }
}
</style>