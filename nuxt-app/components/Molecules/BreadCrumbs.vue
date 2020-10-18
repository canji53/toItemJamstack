<template>
  <nav>
    <ul>
      <li v-for="bread in breadCrumbs" :key="bread.text">
        <span v-if="bread.to">
          <nuxt-link :to="bread.to">
            {{ bread.text }}
          </nuxt-link>
        </span>
        <span v-else>
          {{ bread.text }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    breadCrumbs: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  // 600px > content
  @include max-screen($article-width) {
    display: none;
  }

  & > ul {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    list-style-type: none;

    & > li {
      margin-right: 8px;
      font-size: $small-font-size;

      & > span {
        color: $base-color;

        & > a {
          color: $base-color;
          transition-duration: $transition-time;

          &:hover {
            opacity: $opacity-rate;
          }
        }
      }
    }
  }
}
</style>
