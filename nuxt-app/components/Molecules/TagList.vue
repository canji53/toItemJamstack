<template>
  <nav class="tagList">
    <ul class="tagList__list">
      <li v-for="(tag, key) in tagList" :key="key" class="tagList__item">
        {{ tag.text }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    tagList: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.tagList {
  &__list {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    list-style-type: none;
  }

  &__item {
    margin-right: 8px;
    line-height: 11px;
    font-size: 11px;
  }
}
</style>
