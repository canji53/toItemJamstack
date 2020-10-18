<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
      default: "",
    },
  },
}
</script>
