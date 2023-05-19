<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        <h4>首頁</h4>
      </div>

      <div class="tweet">
        <div class="tweet__info">
          <div class="tweet__info__headshot">
            <img src="" alt="">
          </div>
          <div class="tweet__info__content">
            <input type="textarea" placeholder="有什麼新鮮事?">
          </div>
        </div>
        <div class="tweet__btn">
          <button>推文</button>
        </div>
      </div>

      <TweetsList />
    </div>
    
  </div>
</template>

<script>
import TweetsList from '../components/TweetsList.vue'

export default {
  components: {
    TweetsList
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
  padding: 24px 0 24px 23px;
  border-bottom: 1px solid #E6ECF0;
}

.tweet {
  padding: 16px 0;
  border-bottom: 10px solid #E6ECF0;

  &__info {
    display: flex;
    width: 90%;
    margin: 0 auto;
    &__headshot {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background: black;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        overflow: hidden;
      }
    }

    &__content {
      display: flex;
      align-items: center;
      padding-left: 8px;
      // width: 100%;

      input {
        width: 100%;
        ::placeholder {
          color: $secondary;
        }
      }
    }
  }
  
  &__btn {
    margin: 0 auto;
    text-align: end;
    width: 90%;

    button {
      width: 64px;
      height: 46px;
      border-radius: 50px;
      padding: 8px 16px;
      background: $brand-color;
      color: white;
      font-size: 16px;
      font-weight: 400;
      line-height: 30px;
    }
  }
}

</style>