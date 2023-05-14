<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <FollowRecommend />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import FollowRecommend from './components/FollowRecommend.vue'
export default {
  components: {
    Navbar,
    FollowRecommend
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_normalize.scss';
@import '@/assets/scss/_app.scss';

#app {
  display: flex;
  padding: 0 130px;
  height: 100%;
}
</style>
