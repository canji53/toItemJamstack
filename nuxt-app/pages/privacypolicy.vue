<template>
  <main>
    <article>
      <BreadCrumbs :bread-crumbs="getBreadCrumbs()" />
      <ArticleTitle :title="title" />
      <ArticleDate :date="updatedAt" />
      <ContentBody :body="body" />
    </article>
  </main>
</template>

<script>
import axios from "axios"

import BreadCrumbs from "@/components/Molecules/BreadCrumbs"
import ArticleTitle from "@/components/Molecules/ArticleTitle"
import ArticleDate from "@/components/Molecules/ArticleDate"
import ContentBody from "@/components/Molecules/ContentBody"

export default {
  layout: "article",
  components: {
    BreadCrumbs,
    ArticleTitle,
    ArticleDate,
    ContentBody,
  },
  async asyncData(context) {
    const { data } = await axios.get(
      "https://toitem.microcms.io/api/v1/policy",
      {
        headers: { "X-API-KEY": context.$config.microcmsApiKey },
      }
    )
    return data
  },
  methods: {
    getBreadCrumbs() {
      return [
        { text: "ホーム", to: "/" },
        { text: "/", to: "" },
        { text: `${this.title}`, to: "" },
      ]
    },
  },
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
  padding: 112px 0 128px 0;
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  & > article {
    width: $article-width;
    margin: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;

    // 600px > content
    @include max-screen($article-width) {
      width: 95%;
      justify-content: center;
    }
  }
}
</style>
