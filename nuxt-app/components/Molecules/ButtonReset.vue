<template>
  <section class="buttonReset">
    <Button :text="text" :type="type" :form="form" />
  </section>
</template>

<script>
import Button from "@/components/Atoms/Button"

export default {
  components: {
    Button,
  },
  props: {
    form: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    text: "クリア",
    type: "reset",
  }),
}
</script>

<style lang="scss">
.buttonReset {
  > button {
    padding: 6px 40px;
    font-size: 11px;
    font-weight: bold;
    border: solid 1px $thin-color;
    transition-duration: $transition-time;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:hover {
      border: solid 1px $base-thin-color;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
