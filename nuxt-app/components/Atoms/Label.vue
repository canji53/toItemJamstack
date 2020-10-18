<template>
  <label :for="name">
    {{ text }}
    <span v-if="required">*</span>
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
