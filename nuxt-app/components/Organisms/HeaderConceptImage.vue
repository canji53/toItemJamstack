<template>
  <section>
    <Img :src="src" :alt="alt" />
  </section>
</template>

<script>
import Img from "@/components/Atoms/Img"

export default {
  components: {
    Img,
  },
  data: () => ({
    src: "/concept.svg",
    alt: "コンセプトイメージ",
  }),
}
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: $concept-color;

  img {
    height: 350px;
    object-fit: cover;

    @include max-screen($container-width) {
      width: 100%;
    }
  }
}
</style>
