<template>
  <nuxt-link :to="to" class="buttonAbout">
    <FontAwesome :type="fontawesome.type" :icon="fontawesome.icon" />
  </nuxt-link>
</template>

<script>
import FontAwesome from "@/components/Atoms/FontAwesome"

export default {
  components: {
    FontAwesome,
  },
  data: () => ({
    to: "/about",
    fontawesome: {
      type: "fas",
      icon: "info-circle",
    },
  }),
}
</script>

<style lang="scss" scoped>
.buttonAbout {
  > svg {
    font-size: 15px;
    color: $base-color;
    transition-duration: $transition-time;

    &:hover {
      opacity: $opacity-rate;
    }
  }
}
</style>
