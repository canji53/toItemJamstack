<template>
  <main>
    <article>
      <BreadCrumbs :bread-crumbs="getBreadCrumbs()" />
      <ArticleTitle :title="title" />
      <ArticleDate :date="updatedAt" />
      <ArticleThumbnail :thumbnail-url="thumbnail.url" :alt="title" />
      <ContentBody :body="body" />
      <Hr />
      <Biography class="biography" />
    </article>
  </main>
</template>

<script>
import BreadCrumbs from "@/components/Molecules/BreadCrumbs"
import ArticleTitle from "@/components/Molecules/ArticleTitle"
import ArticleDate from "@/components/Molecules/ArticleDate"
import ArticleThumbnail from "@/components/Molecules/ArticleThumbnail"
import Hr from "@/components/Atoms/Hr"
import ContentBody from "@/components/Molecules/ContentBody"
import Biography from "@/components/Organisms/Biography"

export default {
  layout: "article",
  components: {
    BreadCrumbs,
    ArticleTitle,
    ArticleDate,
    ArticleThumbnail,
    Hr,
    ContentBody,
    Biography,
  },
  async asyncData(context) {
    return await context.app.$microcms.getAbout()
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

    & > .biography {
      margin: 32px auto;
    }
  }
}
</style>
