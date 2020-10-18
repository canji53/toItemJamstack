<template>
  <nav class="contentsOfTable">
    <ul class="contentsOfTable__list">
      <li
        v-for="heading in headingList"
        :key="heading.id"
        class="contentsOfTable__item"
      >
        <n-link v-scroll-to="`#${heading.id}`" to class="contentsOfTable__link">
          {{ heading.text }}
        </n-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    headingList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.contentsOfTable {
  width: $aside-width;

  @include max-screen($container-width) {
    display: none;
  }

  &__list {
    width: $aside-width;
    padding-left: 24px;
    position: fixed;
    top: 35%;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    list-style-type: none;
  }

  &__item {
    margin-bottom: 8px;
    line-height: 15px;
    font-size: 11px;
  }

  &__link {
    color: $base-color;
    transition-duration: $transition-time;

    &:hover {
      opacity: $opacity-rate;
    }
  }
}
</style>
