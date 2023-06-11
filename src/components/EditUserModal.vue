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
            <button form="form" type="submit">儲存</button>
          </div>
        </div>
        <div class="modal__wrapper__form">
          <form action="" id="form" @submit.prevent.stop="handleSubmit">
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
                <label for="headshot">
                  <div class="headshot__wrapper">
                    <img :src="profile.avatar" alt="" class="modal__wrapper__form__top__headshot__img">
                    <div class="mask">
                      <img src="../assets/img/icon_camera@2x.png" alt="" class="icon_camera">
                    </div>
                  </div>
                </label>
                <input
                  type="file"
                  name="file"
                  ref="file"
                  id="headshot"
                  accept="image/*"
                  @change="handleFileChange"
                >
              </div>
            </div>
            <div class="modal__wrapper__form__bottom">
              <div class="modal__wrapper__form__bottom__group">
                <label for="" class="second-font">名稱</label>
                <input type="text" v-model="profile.name">
              </div>
              <div class="name_count">0/50</div>
              <div class="modal__wrapper__form__bottom__group">
                <label for="" class="second-font">自我介紹</label>
                <textarea type="text" v-model="profile.introduction">
                </textarea>
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
import imgurAPI from '../apis/imgur'
import userAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  props: {
    initialUser: {
      type: Object
    }
  },
  data() {
    return {
      file: '',
      profile: {
        name: '',
        account: '',
        avatar: '',
        cover: '',
        introduction: ""
      }
    }
  },
  // 若直接將 initialUser 賦值給 profile ，v-model 則會影響到 parent data，因此用created時直接賦值
  created() {
    this.profile = {
      ...this.profile,
      ...this.initialUser
    }
  },
  computed: {
    nameCount() {
      return this.profile.name.length
    },
    introductionCount() {
      return this.profile.introduction.length
    }
  },
  methods: {
    closeModal() {
      this.$emit('modalClose', false)
    },
    // 預覽上傳的圖片
    handleFileChange(e) {
      // console.log(this.$refs.file.files[0])
      // this.file = this.$refs.file.files[0]
      const { files } = e.target
      if (files.length === 0) {
        return
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.profile.avatar = imageURL
      }
    },
    async handleSubmit(e) {
      try {
        const formData = new FormData()
        formData.append('image', e.target.file.files[0])
        // 放回傳的 img URL
        let link = ''

        if(e.target.file.files[0]) {
          const { data } = await imgurAPI.uploadImage(formData)

          link = data.data.link
          
          if(!link) {
            throw new Error('Imgur img upload failed')
          }
        }
        
        await userAPI.updateUserById(this.profile.id, {
          name: this.profile.name,
          introduction: this.profile.introduction,
          avatar: link
        })

        Toast.fire({
          icon: 'success',
          title: '個人資料更改成功'
        })
      } catch(err) {
        console.log(err)
      }
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
        justify-content: flex-end;
        
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
          background-color: white;
          input {
            display: none;
          }

          &:hover .mask {
            display: flex;
          }
        
          &__wrapper {
            position: relative;
            height: 100%;
            width: 100%
          }

          &__img {
            width: 100%;
            height: 100%;
            border-radius: 100%;
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
            resize: none;
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