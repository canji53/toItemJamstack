<template>
  <section class="contactError">
    <P :text="error" />
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      required: false,
      default: "",
    },
  },
}
</script>

<style lang="scss">
.contactError {
  margin: 0 8px;

  > P {
    line-height: $base-font-size;
    font-size: $base-font-size;
    color: orangered;
  }
}
</style>
