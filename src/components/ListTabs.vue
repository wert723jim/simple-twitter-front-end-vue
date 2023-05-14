<template>
  <nav>
    <div class="list">
        <router-link to="#" class="list__link active">
          <span>推文</span>
        </router-link>
        <router-link to="#" class="list__link">
          <span>回覆</span>
        </router-link>
        <router-link to="#" class="list__link">
          <span>喜歡的內容</span>
        </router-link>
    </div>
  </nav>
</template>

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