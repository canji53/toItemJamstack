<template>
  <section class="contactResponse">
    <P :text="response" />
  </section>
</template>

<script>
export default {
  props: {
    response: {
      type: String,
      required: false,
      default: "",
    },
  },
}
</script>

<style lang="scss">
.contactResponse {
  > P {
    line-height: 16px;
    font-size: $base-font-size;
    color: orangered;
  }
}
</style>
