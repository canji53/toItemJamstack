<template>
  <Img :src="thumbnailUrl" :alt="alt" />
</template>

<script>
import H1 from "@/components/Atoms/H1"

export default {
  comments: {
    H1,
  },
  props: {
    thumbnailUrl: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  margin: 32px 0;
  width: 100%;
  object-fit: cover;
}
</style>
