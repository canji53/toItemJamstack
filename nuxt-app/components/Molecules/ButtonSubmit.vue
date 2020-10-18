<template>
  <section class="buttonSubmit">
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
    text: "送信",
    type: "submit",
  }),
}
</script>

<style lang="scss">
.buttonSubmit {
  > button {
    padding: 6px 24px;
    font-size: 11px;
    font-weight: bold;
    color: #fff;
    background-color: $concept-color;
    border: solid $concept-color 1px;
    transition-duration: $transition-time;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:hover {
      background-color: $concept-hover-color;
      border: solid $concept-hover-color 1px;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
