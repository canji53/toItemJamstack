<template>
  <H1 :text="title" />
</template>

<script>
import H1 from "@/components/Atoms/H1"

export default {
  comments: {
    H1,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 8px auto 8px 0;
  font-size: $title-font-size;
  color: $base-color;
}
</style>
