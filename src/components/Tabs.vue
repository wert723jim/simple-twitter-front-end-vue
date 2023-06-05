<template>
  <nav>
    <div class="list">
        <a
          href="#"
          :class="['list__link', {active: tab === chosenTab}]"
          v-for="tab in tabs"
          :key="tab"
          @click.stop.prevent="chooseTab(tab)"
        >
          <span>{{tab}}</span>
        </a>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  created() {
    // 預設選第一個tab
    this.chosenTab = this.tabs[0]
  },
  data() {
    return {
      chosenTab: ''
    }
  },
  methods: {
    chooseTab(tab) {
      this.chosenTab = tab
      this.$emit('after-choose', this.chosenTab)
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  border-bottom: 1px solid #E6ECF0;

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 52px;
    width:130px;
    text-decoration: none;
    color: #657786;
    border-bottom: 2px solid white;
  }

  .active {
    color: $brand-color;
    border-bottom: 2px solid $brand-color;
  }
}
</style>