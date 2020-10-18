<template>
  <nav class="navList">
    <UlNuxtLink :items="navList" />
  </nav>
</template>

<script>
import UlNuxtLink from "@/components/Atoms/UlNuxtLink"

export default {
  components: {
    UlNuxtLink,
  },
  props: {
    navList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.navList {
  > ul {
    display: flex;
    flex-flow: row nowrap;
    list-style-type: none;

    > li {
      margin-left: 8px;
      font-size: $base-font-size;

      > a {
        line-height: $base-font-size;
        font-size: $base-font-size;
        color: $base-color;
      }
    }
  }
}
</style>
