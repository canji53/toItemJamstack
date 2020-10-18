<template>
  <a :href="url" :rel="rel" :target="target" class="profileInstagramIcon">
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
      icon: "instagram",
    },
  }),
}
</script>

<style lang="scss" scoped>
.profileInstagramIcon {
  > svg {
    font-size: 15px;
    color: $base-color;
    transition-duration: $transition-time;

    &:hover {
      color: $instagram-color;
    }
  }
}
</style>
