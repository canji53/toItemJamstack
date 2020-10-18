<template>
  <section class="copyright">&copy;<P :text="copyright" /></section>
</template>

<script>
import P from "@/components/Atoms/P"

export default {
  components: {
    P,
  },
  props: {
    copyright: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.copyright {
  display: flex;
  flex-flow: row nowrap;
  line-height: $small-font-size;
  font-size: $small-font-size;
  color: $base-color;

  > p {
    margin-left: 4px;
  }
}
</style>
