<template>
  <a :href="url" :rel="rel" :target="target" class="profileLocalingIcon">
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
      src: "/localing.png",
      alt: "Localingのアイコン",
    },
  }),
}
</script>

<style lang="scss" scoped>
.profileLocalingIcon {
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
