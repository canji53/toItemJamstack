<template>
  <ul>
    <li v-for="(item, key) in items" :key="key">
      <nuxt-link :to="item.to">
        {{ item.text }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
