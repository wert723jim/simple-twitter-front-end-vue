<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        <h4>使用者列表</h4>
      </div>

      <div class="card-wrapper">
        <UserCard
          v-for="user in users"
          :key="user.id"
          :initial-user="user"
        />
      </div>


    </div>
    
  </div>
</template>

<script>
import UserCard from '../../components/UserCard.vue';
import adminUserAPI from '../../apis/admin/users'

export default {

  components: {
    UserCard
  },
  data() {
    return {
      modalShow: false,
      users: []
    }
  },
  created() {
    this.fetchAllUsers()
  },
  methods: {
    showModal() {
      this.modalShow = true
    },
    closeModal() {
      this.modalShow = false
    },
    async fetchAllUsers() {
      try {
        const { data } = await adminUserAPI.getAllUser()

        this.users = data
      } catch(err) {
        console.log(err)
      }
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
  padding: 24px 0 24px 23px;
  border-bottom: 1px solid #E6ECF0;
}

.card-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
}
</style>