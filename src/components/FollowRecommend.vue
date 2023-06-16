<template>
  <div class="container">
    <div class="followship__wrapper">
      <div class="title">
        <h4>推薦跟隨</h4>
      </div>
      <div class="list">
        <div v-for="user in users" :key="user.id">
          <div class="list__user" v-if="currentUser.id !== user.id">
            <div class="list__user__img">
              <img :src="user.avatar" alt="" />
            </div>
            <div class="list__user__info">
              <div class="list__user__info__name">
                <router-link :to="{ name: 'user', params: { id: user.id } }">
                  {{ user.name }}
                </router-link>
              </div>
              <div
                class="list__user__info__account second-font"
                :title="user.account"
              >
                @{{ user.account }}
              </div>
            </div>
            <div class="list__user__btn" v-if="currentUser.id !== user.id">
              <button
                class="list__user__btn__follow"
                v-if="!user.followed"
                @click.stop.prevent="followed(user.id)"
              >
                追隨
              </button>
              <button
                class="list__user__btn__unFollow"
                v-else
                @click.stop.prevent="unFollowed(user.id)"
              >
                取消追隨
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminAPI from '../apis/admin/users'
import userAPI from '../apis/users'
import { mapState } from 'vuex'
import { Toast } from '../utils/helpers'

export default {
  data() {
    return {
      users: [],
    }
  },
  created() {
    this.fetchUsers()
  },
  computed: {
    ...mapState(['currentUser']),
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.getAllUser()

        let topTen = []

        topTen.push(data[0])

        for (let i = 1; i < data.length; i++) {
          // 將長度儲存，以免在下面 for 迴圈時，topTen 長度會不斷變長
          const nowLength = topTen.length
          for (let t = 0; t < nowLength; t++) {
            if (data[i].follower_count >= topTen[t].follower_count) {
              topTen.splice(t, 0, data[i])
              break
            }
            if (t + 1 === nowLength) {
              topTen.push(data[i])
            }
          }
        }
        this.users = topTen.slice(0, 10)
      } catch (err) {
        console.log(err)
      }
    },
    async followed(userId) {
      try {
        await userAPI.makeFollow(userId)

        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              followed: 1,
            }
          }
          return user
        })
        console.log('followed', userId)
      } catch (err) {
        const message = err.response
          ? err.response.data.message
          : false || err.message
        Toast.fire({
          icon: 'error',
          title: message,
        })
      }
    },
    async unFollowed(userId) {
      try {
        await userAPI.unFollow(userId)

        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              followed: null,
            }
          }
          return user
        })
        console.log('unFollowed', userId)
      } catch (err) {
        const message = err.response
          ? err.response.data.message
          : false || err.message
        Toast.fire({
          icon: 'error',
          title: message,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.followship__wrapper {
  margin-top: 16px;
  width: 273px;
  background: #fafafb;
}

.title {
  padding: 24px;
  border-bottom: 1px solid #e6ecf0;
}

.list {
  &__user {
    display: flex;
    padding: 16px;

    &__img {
      display: flex;
      overflow: hidden;
      width: 50px;
      height: 50px;
      background: black;
      border-radius: 50%;
      object-fit: cover;
    }

    &__info {
      display: flex;
      flex-direction: column;
      margin-left: 8px;
      justify-content: center;

      a {
        text-decoration: none;
        color: black;
      }

      &__account {
        color: $secondary;
        width: 115px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    &__btn {
      // flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      &__follow {
        display: block;
        color: $brand-color;
        background: white;
        border: 1px solid $brand-color;
        width: 64px;
        height: 40px;
        border-radius: 50px;
      }

      &__unFollow {
        width: 96px;
        height: 40px;
        border-radius: 50px;
        background: $brand-color;
        color: white;
        border: none;
      }
    }
  }
}
</style>
