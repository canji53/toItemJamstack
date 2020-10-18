<template>
  <nuxt-link :to="to">
    <h1 class="siteTitle">
      {{ title }}
    </h1>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    to: "/",
  }),
}
</script>

<style lang="scss" scoped>
.siteTitle {
  line-height: 20px;
  font-size: 20px;
  color: $base-color;
}
</style>
