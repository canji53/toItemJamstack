<template>
  <button class="buttonClipboard" @click="onCopy">
    <FontAwesome :type="fontawesome.type" :icon="fontawesome.icon" />
  </button>
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
    fontawesome: {
      type: "fas",
      icon: "link",
    },
  }),
  methods: {
    onCopy() {
      this.$copyText(this.url)
    },
  },
}
</script>

<style lang="scss" scoped>
.buttonClipboard {
  > svg {
    font-size: 15px;
    color: $base-color;
    transition-duration: $transition-time;

    &:hover {
      color: $clipboard-color;
    }
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
  }
}
</style>
