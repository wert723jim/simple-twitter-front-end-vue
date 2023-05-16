<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__wrapper">
        <div class="modal__wrapper__header">
          <a href="" class="modal__wrapper__header__close" @click.stop.prevent="closeModal">
            <img src="../assets/img/icon_x_orange@2x.png" alt="">
          </a>
        </div>
        <div class="modal__wrapper__post">
          <div class="modal__wrapper__post__headshot">
            <img src="" alt="">
            <!-- verticle line -->
          </div>
          <div class="modal__wrapper__post__detail">
            <div class="modal__wrapper__post__detail__heading">
              <div class="modal__wrapper__post__detail__heading__name">
                Apple
              </div>
              <div class="modal__wrapper__post__detail__heading__info second-font">
                <span>@apple</span>
                &middot;
                <span>3 小時</span>
              </div>
            </div>
            <div class="modal__wrapper__post__detail__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, at Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, explicabo.
            </div>
            <div class="modal__wrapper__post__detail__replyto second-font">
              <span>回覆給</span>
              <router-link to="#">@apple</router-link>
            </div>
          </div>
        </div>
        <div class="modal__wrapper__content">
          <div class="modal__wrapper__content__headshot">
            <img src="" alt="">
          </div>
          <div class="modal__wrapper__content__form">
            <form action="" id="tweet">
              <textarea
                name="desciption"
                placeholder="有什麼新鮮事?"
              >
              </textarea>
            </form>
          </div>
        </div>
        <div class="modal__wrapper__footer">
          <button for="tweet">回覆</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalShow: {
      type: Boolean
    }
  },
  methods: {
    closeModal() {
      this.$emit('modalClose')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 9998;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .5);
  padding: 56px 430px 0 336px;

  &__wrapper {
    background: #FFFFFF;
    border-radius: 14px;
    width: 100%;
    min-width: 515px;
    min-height: 300px;

    &__header {
      padding: 16px 15px;
      border-bottom: 1px solid #E6ECF0;

      &__close {
        
        img {
          width: 24px;
          height: 24px;
        }
      }
    }

    &__post {
      display: flex;
      padding: 16px 24px;

      &__headshot {
        position: relative;
        display: flex;
        justify-content: center;

        img {
          width: 50px;
          height: 50px;
          border-radius: 50px;
          background: black;
        }

        &::after {
          position: absolute;
          display: block;
          content: '';
          // headshot 50px + 16px
          top: 66px;
          bottom: -16px;
          width: 2px;
          background: #B5B5BE;
        }
          
      }    

      &__detail {
        margin-left: 8px;
        // 讓右側內容不擠壓到左邊的圖案
        // 或是直接將 img width height 寫死
        flex: 1;

        &__heading {
          display: flex;
          margin-bottom: 10px;

          &__info {
            margin-left: 8px;
            color: $secondary;
          }
        }

        &__description {
            margin-bottom: 11px;
        }

        &__replyto {

          span {
            color: $secondary;
          }
          
          a {
            text-decoration: none;
            color: $brand-color;
          }
        }
      }
    }

    &__content {
      display: flex;
      padding: 16px 24px;

      &__headshot {
        width: 50px;
        height: 50px;
        background: black;
        border-radius: 50px; 
      }

      &__form {
        margin-left: 8px;
        padding-top: 12px;
        flex: 1;

        textarea {
          border: none;
          outline: none;
          resize: none;
          width: 100%;
        }
      }
    }

    &__footer {
      padding: 16px;
      text-align: end;
      button {
        width: 64px;
        height: 40px;
        background: $brand-color;
        color: white;
        border-radius: 50px;
      }
    }
  }
}
</style>