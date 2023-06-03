<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        <h4>帳戶設定</h4>
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
        >
      </div>
      <div class="form__btn">
        <button
          type="submit"
        >儲存</button>
      </div>
    </form>

    </div>
  </div>
</template>

<script>
import userAPI from '../apis/users'
import { Toast } from '../utils/helpers'

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
  created() {
    this.fetchProfile()
  },
  methods: {
    async handleSubmit() {
      try {

        const {id: userId} = this.$route.params
        if (this.password !== this.checkPassword) throw new Error('密碼確認錯誤')

        await userAPI.updateUserById(userId, {
          account: this.account,
          name: this.name,
          email: this.email
        })

        Toast.fire({
          icon: 'success',
          title: '更改成功'
        })

        this.router.push({name: 'user', params: {
          id: userId
        }})
      } catch(err) {
        console.log(err)
        const { data } = err.response
        Toast.fire({
          icon: 'error',
          title: data.message
        })
      }
    },
    async fetchProfile() {
      try {
        const {id: userId} = this.$route.params
        const { data } = await userAPI.getUserById(userId)
        const { account, name, email } = data

        this.account = account
        this.name = name
        this.email = email

      } catch(err) {
        console.log(err)
      }
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
  padding: 24px 0 24px 23px;
  border-bottom: 1px solid #E6ECF0;
}

.form {
  width: 639px;
  padding: 24px;
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
    text-align: end;

    button {
      margin-top: 8px;
      width: 88px;
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

</style>