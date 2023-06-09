<template>
  <div class="card">
    <div class="card__cover">
      <img :src="user.cover" alt="">
    </div>
    <div class="card__head">
      <div class="card__head__img">
        <img :src="user.avatar" alt="">
      </div>
      <div class="card__head__heading">
        <div class="card__head__heading__name">
          {{user.name}}
        </div>
        <div class="card__head__heading__account">
          @{{user.account}}
        </div>
      </div>
    </div>
    <div class="card__info">
      <div class="card__info__active">
        <div class="card__info__active__tweets">
          <img src="../assets/img/icon_tweets@2x.png" alt="">
          <span>{{user.tweet_count}}</span> 
        </div>
        <div class="card__info__active__likes">
          <img src="../assets/img/icon_like@2x.png" alt="">
          <span>{{user.like_count}}</span> 
        </div>
      </div>
      <div class="card__info__follow">
        <div class="card__info__follow__followings">
          {{user.following_count}} 個追蹤中
        </div>
        <div class="card__info__follow__followers">
          {{user.follower_count}} 位追蹤者
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object
    }
  },
  data() {
    return {
      user: this.initialUser
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 210px;
  height: 314px;
  background: #F6F7F8;
  border-radius: 10px;

  &__cover {
    width: 100%;
    height: 140px;
    background: black;
    border-radius: 10px 10px 0 0;
    margin-bottom: 94px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px 10px 0 0;
    }
  }

  &__head {
    position: absolute;
    top: 64px;
    text-align: center;
    width: 100%;
    &__img {
      margin: 0 auto;
      bottom: -24px;
      width: 100px;
      height: 100px;
      background: gray;
      border-radius: 100px;
      border: 4px solid white;
      img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }
  }

  &__info {
    &__active {
      display: flex;
      gap: 16px;
      justify-content: center;
      margin-bottom: 8px;
      &__tweets {
        display: flex;
        align-items: center;
        img {
          width: 24px;
          height: 24px;
        }
      }

      &__likes {
        display: flex;
        align-items: center;
        img {
          width: 24px;
          height: 24px;
        }
      }
    }

    &__follow {
      display: flex;
      gap: 8px;
      justify-content: center;
    }
  }

  
}
</style>