<template>
  <a
    :href="getHref()"
    :rel="rel"
    :target="target"
    :title="getText()"
    class="buttonTwitter"
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
      icon: "twitter",
    },
  }),
  methods: {
    getHref() {
      return `//twitter.com/share?text=${this.title}&url=${this.url}&via=canji53`
    },
    getText() {
      return `${this.title}をシェア`
    },
  },
}
</script>

<style lang="scss" scoped>
.buttonTwitter {
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
