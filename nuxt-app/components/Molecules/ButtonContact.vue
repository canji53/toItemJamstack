<template>
  <nuxt-link :to="to" class="buttonContact">
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
    to: "/contact",
    fontawesome: {
      type: "fas",
      icon: "paper-plane",
    },
  }),
}
</script>

<style lang="scss" scoped>
.buttonContact {
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
