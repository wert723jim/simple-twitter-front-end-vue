<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__wrapper">
        <div class="modal__wrapper__header">
          <a href="" class="modal__wrapper__header__close" @click.stop.prevent="closeModal">
            <img src="../assets/img/icon_x_orange@2x.png" alt="">
          </a>
          <h5 class="modal__wrapper__header__title">編輯個人資料</h5>
          <div class="modal__wrapper__header__btn">
            <button>儲存</button>
          </div>
        </div>
        <div class="modal__wrapper__form">
          <form action="">
            <div class="modal__wrapper__form__top">
              <div class="modal__wrapper__form__top__cover">
                <img src="" alt="" class="modal__wrapper__form__top__cover__img">
                <div class="mask">
                  <div class="mask__btn">
                    <img src="../assets/img/icon_camera@2x.png" alt="" class="icon_camera">
                    <img src="../assets/img/icon_x_white@2x.png" alt="" class="icon_x">
                  </div>
                </div>
              </div>
              <div class="modal__wrapper__form__top__headshot">
                <div class="wrapper">
                  <img src="" alt="" class="modal__wrapper__form__top__headshot__img">
                  <div class="mask">
                    <img src="../assets/img/icon_camera@2x.png" alt="" class="icon_camera">
                  </div>
                </div>
              </div>
            </div>
            <div class="modal__wrapper__form__bottom">
              <div class="modal__wrapper__form__bottom__group">
                <label for="" class="second-font">名稱</label>
                <input type="text" value="John Doe">
              </div>
              <div class="name_count">8/50</div>
              <div class="modal__wrapper__form__bottom__group">
                <label for="" class="second-font">自我介紹</label>
                <textarea type="text" value="Jogn Doe"></textarea>
              </div>
              <div class="description_count">0/160</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('modalClose', false)
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
      display: flex;
      align-items: center;
      height: 57px;
      padding: 0 15px;

      &__title {
        margin-left: 32px;
      }

      &__close {
        
        img {
          width: 24px;
          height: 24px;
        }
      }

      &__btn {
        flex: 1;
        display: flex;
        justify-content: end;
        
        button {
          height: 40px;
          width: 64px;
          background: $brand-color;
          border-radius: 50px;
          color: white;
        }
      }
    }

    &__form {
      &__top {
        position: relative;
        margin-bottom: 80px;
        &__cover {
          position: relative;

          &:hover .mask {
            display: flex;
          }

          &__img {
            background: blue;
            width: 100%;
            height:200px;
          }

          .mask {
            position: absolute;
            display: none;
            align-items: center;
            justify-content: center;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, .5);

            &__btn {
              display: flex;
              gap: 32px;
              .icon_camera, .icon_x {
                width: 24px;
                height: 24px;
              }
            }
          }
        }

        &__headshot {
          position: absolute;
          left: 16px;
          bottom: -74px;
          height: 140px;
          width: 140px;
          border-radius: 140px;
          border: 4px solid white;
          background: yellow;

          &:hover .mask {
            display: flex;
          }
        
          .wrapper {
            position: relative;
            height: 100%;
            width: 100%
          }

          .mask {
            position: absolute;
            display: none;
            align-items: center;
            justify-content: center;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .5);
            border-radius: 140px;

            .icon_camera {
              width: 24px;
              height: 24px;
            }
          }
        }
      }

      &__bottom {
        padding: 16px;
        &__group {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2px 10.55px;
          border-radius: 2px;
          border-bottom: 2px solid #657786;
          height:54px;
          background: #F5F8FA;

          label {
            color: #696974;
            height: 26px;
          }

          textarea {
            border: none;
            outline: none;
            background: transparent;
          }
        }

        .name_count, .description_count {
          margin: 4px 0 8px 0;
          text-align: end;
        }
      }
    }
  }
}
</style>