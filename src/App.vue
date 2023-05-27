<template>
  <div id="app">
    <!-- 成功登入後才顯示 -->
    <Navbar v-if="currentUser.role === 'user' || isAuthenticated"/>
    <router-view/>
    <!-- 成功登入後才顯示 -->
    <FollowRecommend v-if="currentUser.role === 'user' || isAuthenticated"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import FollowRecommend from './components/FollowRecommend.vue'
import { mapState } from 'vuex';
export default {
  components: {
    Navbar,
    FollowRecommend
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
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
