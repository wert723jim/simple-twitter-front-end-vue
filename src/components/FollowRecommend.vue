<template>
  <div class="container">
    <div class="followship__wrapper">
      <div class="title">
        <h4>推薦跟隨</h4>
      </div>
      <div class="list">
        <div class="list__user">
          <div class="list__user__img">
            <img src="" alt="">
          </div>
          <div class="list__user__info">
            <div class="list__user__info__name">
              Pizza Hut
            </div>
            <div class="list__user__info__account second-font">
              @pizzahut
            </div>
          </div>
          <div class="list__user__follow-btn">
            <button>追隨</button>
          </div>
        </div>
        <div class="list__user">
          <div class="list__user__img">
            <img src="" alt="">
          </div>
          <div class="list__user__info">
            <div class="list__user__info__name">
              Pizza Hut
            </div>
            <div class="list__user__info__account second-font">
              @pizzahut
            </div>
          </div>
          <div class="list__user__follow-btn">
            <button>追隨</button>
          </div>
        </div>
        <div class="list__user">
          <div class="list__user__img">
            <img src="" alt="">
          </div>
          <div class="list__user__info">
            <div class="list__user__info__name">
              Pizza Hut
            </div>
            <div class="list__user__info__account second-font">
              @pizzahut
            </div>
          </div>
          <div class="list__user__follow-btn">
            <button>追隨</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.followship__wrapper {
  margin-top: 16px;
  width: 273px;
  background: #FAFAFB;
}

.title {
  padding: 24px;
  border-bottom: 1px solid #E6ECF0;
}

.list {
  &__user {
    display: flex;
    padding: 16px;

    &__img {
      width: 50px;
      height: 50px;
      background: black;
      border-radius: 50px;
    }

    &__info {
      display: flex;
      flex-direction: column;
      margin-left: 8px;
      justify-content: center;

      &__account {
        color: $secondary;
      }
    }

    &__follow-btn {
      flex: 1;
      display: flex;
      justify-content: end;
      align-items: center;

      button {
        display: block;
        color: $brand-color;
        background: white;
        border: 1px solid $brand-color;
        width: 64px;
        height: 40px;
        border-radius: 50px;
      }
    }
  }
}
</style>