<template>
  <Time :date="toFormat(date)" />
</template>

<script>
import dayjs from "dayjs"
import Time from "@/components/Atoms/Time"

export default {
  comments: {
    Time,
  },
  props: {
    date: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      required: false,
      default: "YYYY/MM/DD",
    },
  },
  methods: {
    toFormat(date) {
      return dayjs(date).format(this.format)
    },
  },
}
</script>

<style lang="scss" scoped>
time {
  margin: 0 0 0 auto;
  line-height: $small-font-size;
  font-size: $small-font-size;
  color: $base-color;
}
</style>
