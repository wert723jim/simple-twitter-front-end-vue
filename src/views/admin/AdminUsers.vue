<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        <h4>使用者列表</h4>
      </div>

      <div class="card-wrapper">
        <UserCard
          v-for="user in users"
          :key="user"
        />
      </div>


    </div>
    
  </div>
</template>

<script>
import UserCard from '../../components/UserCard.vue';

export default {

  components: {
    UserCard
  },
  data() {
    return {
      modalShow: false,
      users: [
        1,2,3,4,5,6,7,8,9,0
      ]
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