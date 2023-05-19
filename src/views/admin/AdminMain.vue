<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        <h4>推文清單</h4>
      </div>

      <TweetsList />
    </div>
    
  </div>
</template>

<script>
import TweetsList from '../../components/TweetsList.vue'

export default {
  components: {
    TweetsList
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
  padding: 24px 0 24px 23px;
  border-bottom: 1px solid #E6ECF0;
}

</style>