<template>
  <font-awesome-icon :icon="[type, icon]" />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      default: "fas",
    },
    icon: {
      type: String,
      required: true,
      default: "link",
    },
  },
}
</script>
