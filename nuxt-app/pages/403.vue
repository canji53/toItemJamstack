<template>
  <main>
    <section>
      <h1>403 Forbidden</h1>
      <p>お探しのページは表示できませんでした。</p>
      <nuxt-link to="/"> ホームに戻る </nuxt-link>
    </section>
  </main>
</template>

<script>
export default {
  layout: "article",
  head() {
    return {
      title: this.title,
      meta: [{ hid: "robots", name: "robots", content: "noindex" }],
    }
  },
}
</script>

<style lang="scss" scoped>
main {
  padding: 128px 0;
  margin: auto;
  flex-flow: row nowrap;
  justify-content: center;

  & > section {
    width: $article-width;
    margin: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    & > h1 {
      margin: 8px auto;
      line-height: $title-font-size;
      font-size: $title-font-size;
      color: $base-color;
    }

    & > p {
      margin: 8px auto;
      line-height: $base-font-size;
      font-size: $base-font-size;
      color: $base-color;
    }

    & > a {
      margin: 16px auto;
      line-height: $base-font-size;
      font-size: $base-font-size;
      color: $link-color;
    }
  }

  @include max-screen($article-width) {
    width: 95%;
    justify-content: center;
  }
}
</style>
