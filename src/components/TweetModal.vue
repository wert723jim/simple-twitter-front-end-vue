<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__wrapper">
        <div class="modal__wrapper__header">
          <a href="" class="modal__wrapper__header__close" @click.stop.prevent="closeModal">
            <img src="../assets/img/icon_x_orange@2x.png" alt="">
          </a>
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
          <button for="tweet">推文</button>
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
      padding: 16px 15px;
      border-bottom: 1px solid #E6ECF0;

      &__close {
        
        img {
          width: 24px;
          height: 24px;
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