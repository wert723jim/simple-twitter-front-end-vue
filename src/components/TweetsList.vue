<template>
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
        <router-link to="/post/1" class="list__post__info__content">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quaerat.
          </div>
        </router-link>
        
        <div class="list__post__info__box second-font">
          <a
            href="#"
            class="list__post__info__box__replies"
            @click.stop.prevent="showModal"
          >
            <img src="../assets/img/icon_reply@2x.png" alt="">
            <span>13</span>
          </a>
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

    <transition>
      <ReplyModal
        v-if="modalShow"
        @modalClose="closeModal"
      />
    </transition>
  </div>
</template>

<script>
import ReplyModal from '../components/ReplyModal.vue'

export default {
  components: {
    ReplyModal
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
        display: block;
        margin-bottom: 9px;
        text-decoration: none;
        color: #171725;
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
          text-decoration: none;

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