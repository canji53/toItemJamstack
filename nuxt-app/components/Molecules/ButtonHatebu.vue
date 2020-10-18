<template>
  <a
    :href="getHref()"
    :rel="rel"
    :target="target"
    :title="getText()"
    class="buttonFacebook"
  >
    B!
  </a>
</template>

<script>
export default {
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
  }),
  methods: {
    getHref() {
      return `https://b.hatena.ne.jp/add?mode=confirm&url=${this.url}&title=${this.title}`
    },
    getText() {
      return `${this.title}をシェア`
    },
  },
}
</script>

<style lang="scss" scoped>
.buttonFacebook {
  font-family: Helvetica, Arial, Roboto, "Hiragino Fixed", "Hiragino Sans",
    sans-serif;
  font-weight: bold;
  font-size: 15px;
  color: $base-color;
  transition-duration: $transition-time;

  &:hover {
    color: $hatebu-color;
  }
}
</style>
