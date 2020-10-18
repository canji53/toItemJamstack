<template>
  <a
    :href="getHref()"
    :rel="rel"
    :target="target"
    :title="getText()"
    class="buttonPocket"
  >
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
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    rel: "",
    target: "_blank",
    fontawesome: {
      type: "fab",
      icon: "get-pocket",
    },
  }),
  methods: {
    getHref() {
      return `https://getpocket.com/edit?url=${this.url}&title=${this.title}`
    },
    getText() {
      return `${this.title}をシェア`
    },
  },
}
</script>

<style lang="scss" scoped>
.buttonPocket {
  > svg {
    font-size: 15px;
    color: $base-color;
    transition-duration: $transition-time;

    &:hover {
      color: $pocket-color;
    }
  }
}
</style>
