<template>
  <a :href="url" :rel="rel" :target="target" class="profileToFolioIcon">
    <Img :src="icon.src" :alt="icon.alt" />
  </a>
</template>

<script>
import Img from "@/components/Atoms/Img"

export default {
  components: {
    Img,
  },
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    rel: "noopener noreferrer",
    target: "_blank",
    icon: {
      src: "/tofolio.png",
      alt: "toFolioのアイコン",
    },
  }),
}
</script>

<style lang="scss" scoped>
.profileToFolioIcon {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  > Img {
    width: 15px;
    height: 15px;
    transition-duration: $transition-time;

    &:hover {
      opacity: $opacity-rate;
    }
  }
}
</style>
