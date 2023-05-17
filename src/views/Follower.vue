<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        <a href="" class="title__back" @click.stop.prevent="$router.back()">
          <img src="../assets/img/icon_back@2x.png" alt="" class="title__back__img">
        </a>
        <div class="title__content">
          <h5>John Doe</h5>
          <div class="title__content__count second-font">25 推文</div>
        </div>
      </div>

      <!-- list tabs -->
      <Tabs :tabs="['追蹤者', '正在追蹤' ]"/>

      <div class="list">
        <div class="list__user">
         <div class="list__user__headshot">
          <img src="" alt="">
         </div>
         <div class="list__user__info">
          <div class="list__user__info__top">
            <div class="list__user__info__top__name">
              Apple
            </div>
            <div class="list__user__info__top__btn">
              <button>追蹤</button>
            </div>
          </div>
          <div class="list__user__info__introduction">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, porro!
          </div>
         </div>
        </div>
      </div>
      <div class="list">
        <div class="list__user">
         <div class="list__user__headshot">
          <img src="" alt="">
         </div>
         <div class="list__user__info">
          <div class="list__user__info__top">
            <div class="list__user__info__top__name">
              <span>Apple</span>
            </div>
            <div class="list__user__info__top__btn">
              <button>追蹤</button>
            </div>
          </div>
          <div class="list__user__info__introduction">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, porro!
          </div>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from '../components/Tabs.vue'

export default {
  components: {
    Tabs
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
  display: flex;
  padding: 16px 0 17px 28px;
  border-bottom: 1px solid #E6ECF0;

  &__back {
    display: flex;
    align-items: center;

    &__img {
      width: 24px;
      height: 24px;
    }
    
  }

  &__content {
    display: flex;
    flex-direction: column;
    margin-left: 19px;
    // title: 75px = (height)41px + padding(16px + 17px) + border(1px)
    height: 41px;

    &__count {
      color: $secondary;
    }
  }
}

.list {

  &__user {
    display: flex;
    padding: 16px 30px 16px 23px;
    border-bottom: 1px solid #E6ECF0;
    &__headshot {
      img {
        width: 50px;
        height: 50px;
        background: black;
        border-radius: 50px;
      }
    }

    &__info {
      margin-left: 8px;
      &__top {
        display: flex;
        justify-content: space-between;

        &__name {
          display: flex;
          align-items: center;
        }

        &__btn {
          margin-bottom: 8px;
          button {
            width: 64px;
            height: 40px;
            border-radius: 50px;
            background: white;
            color: $brand-color;
            border: 1px solid $brand-color;
          }
        }
      }
    }
  }
}
</style>