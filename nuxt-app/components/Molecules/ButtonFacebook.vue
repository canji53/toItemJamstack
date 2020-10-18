<template>
  <a
    :href="getHref()"
    :rel="rel"
    :target="target"
    :title="getText()"
    class="buttonFacebook"
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
    rel: "nofollow",
    target: "_blank",
    fontawesome: {
      type: "fab",
      icon: "facebook-f",
    },
  }),
  methods: {
    getHref() {
      return `https://www.facebook.com/share.php?u=${this.url}&t=${this.title}`
    },
    getText() {
      return `${this.title}をシェア`
    },
  },
}
</script>

<style lang="scss" scoped>
.buttonFacebook {
  > svg {
    font-size: 15px;
    color: $base-color;
    transition-duration: $transition-time;

    &:hover {
      color: $facebook-color;
    }
  }
}
</style>
