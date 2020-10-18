<template>
  <a :href="url" :rel="rel" :target="target" class="profileTwitterIcon">
    <FontAwesome :type="fontawesome.type" :icon="fontawesome.icon" />
  </a>
</template>

<script>
import FontAwesome from "@/components/Atoms/FontAwesome"

export default {
  components: {
    FontAwesome,
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
    fontawesome: {
      type: "fab",
      icon: "twitter",
    },
  }),
}
</script>

<style lang="scss" scoped>
.profileTwitterIcon {
  > svg {
    font-size: 15px;
    color: $base-color;
    transition-duration: $transition-time;

    &:hover {
      color: $twitter-color;
    }
  }
}
</style>
