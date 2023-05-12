<template>
  <div class="container">
    <Navbar />
    <main>
      <h1>main</h1>
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100%;
  padding-left: 130px;
}

main {
  padding-left: 202px;
}
</style>