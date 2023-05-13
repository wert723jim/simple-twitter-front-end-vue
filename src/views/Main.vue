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

      <div class="list">
        <div class="list__post">
          <div class="list__post__headshot">
            <img src="" alt="">
          </div>
          <div class="list__post__info">
            <div class="list__post__info__user">
              <div class="list__post__info__user__name">
                Apple
              </div>
              <div class="list__post__info__user__decor second-font">
                <span>@apple</span>
                &middot;
                <span>3小時</span>
              </div>
            </div>
            <div class="list__post__info__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quaerat.
            </div>
            <div class="list__post__info__box second-font">
              <div class="list__post__info__box__replies">
                <img src="../assets/img/icon_reply@2x.png" alt="">
                <span>13</span>
              </div>
              <div class="list__post__info__box__likes">
                <img src="../assets/img/icon_like@2x.png" alt="">
                <span>76</span>
              </div>
            </div>
          </div>
        </div>
        <div class="list__post">
          <div class="list__post__headshot">
            <img src="" alt="">
          </div>
          <div class="list__post__info">
            <div class="list__post__info__user">
              <div class="list__post__info__user__name">
                Apple
              </div>
              <div class="list__post__info__user__decor second-font">
                <span>@apple</span>
                &middot;
                <span>3小時</span>
              </div>
            </div>
            <div class="list__post__info__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quaerat.
            </div>
            <div class="list__post__info__box second-font">
              <div class="list__post__info__box__replies">
                <img src="../assets/img/icon_reply@2x.png" alt="">
                <span>13</span>
              </div>
              <div class="list__post__info__box__likes">
                <img src="../assets/img/icon_like@2x.png" alt="">
                <span>76</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
 
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  padding-left: 202px;
  padding-right: 297px;
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