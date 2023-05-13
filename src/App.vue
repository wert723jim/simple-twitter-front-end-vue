<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_normalize.scss';
@import '@/assets/scss/_app.scss';

#app {
  padding: 0 130px;
  height: 100%;
}
</style>
