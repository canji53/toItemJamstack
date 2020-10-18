<template>
  <nav>
    <ul>
      <li v-for="(link, key) in linkList" :key="key">
        <nuxt-link :to="link.to">
          {{ link.text }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    linkList: [
      { text: "ホーム", to: "/" },
      { text: `${process.env.siteName}について`, to: "/about" },
      { text: "コンタクト", to: "/contact" },
      { text: "プライバシーポリシー", to: "/privacypolicy" },
    ],
  }),
}
</script>

<style lang="scss" scoped>
nav {
  & > ul {
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;

    & > li {
      margin: 0 8px;
      font-size: $small-font-size;

      & > a {
        font-size: $small-font-size;
        line-height: $small-font-size;
        color: $base-color;
        transition-duration: $transition-time;

        &:hover {
          color: $hover-color;
        }
      }
    }
  }
}
</style>
