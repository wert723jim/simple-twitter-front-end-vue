<template>
  <nav>
    <div class="brand_img">
      <router-link to="main">
        <img src="../assets/img/logo@2x.png" alt="">
      </router-link>
    </div>
    <div class="list">
      <div class="list__group">
        <router-link to="main" class="list__group__link">
          <img src="../assets/img/main@2x.png" alt="" class="list__group__link__img">
          <!-- <span class="list__group__link__text">首頁</span> -->
        </router-link>
      </div>
      <div class="list__group">
        <router-link to="profile" class="list__group__link">
          <img src="../assets/img/profile@2x.png" alt="" class="list__group__link__img">
          <!-- <span class="list__group__link__text">個人資料</span> -->
        </router-link>
      </div>
      <div class="list__group">
        <router-link to="setting" class="list__group__link">
          <img src="../assets/img/setting@2x.png" alt="" class="list__group__link__img">
          <!-- <span class="list__group__link__text">設定</span> -->
        </router-link>
      </div>
    </div>
    <div class="btn">
      <!-- create modal -->
      <button>
        推文
      </button>
    </div>
    <div class="logout">
        <router-link to="logout">
          <img src="../assets/img/logout@2x.png" alt="" class="logout__link">
        </router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
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