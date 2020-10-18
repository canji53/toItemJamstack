<template>
  <button :type="type" :form="form" @click="$emit('click')">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "button",
    },
    form: {
      type: String,
      required: false,
      default: "dummy",
    },
  },
}
</script>
