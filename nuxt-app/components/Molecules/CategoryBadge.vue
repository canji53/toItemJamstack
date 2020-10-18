<template>
  <section class="categoryBadge">
    {{ text }}
  </section>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.categoryBadge {
  padding: 6px;
  background-color: $concept-color;
  line-height: 11px;
  font-size: 11px;
  color: #fff;
  transition-duration: $transition-time;

  &:hover {
    opacity: $opacity-rate;
  }
}
</style>
