<template>
  <main>
    <ShareBar :title="content.title" :url="getCanonical()" />
    <Content :content="content" />
    <ContentsOfTable :heading-list="headingList" />
  </main>
</template>

<script>
import cheerio from "cheerio"

import Content from "@/components/Organisms/Content"
import ShareBar from "@/components/Organisms/ShareBar"
import ContentsOfTable from "@/components/Organisms/ContentsOfTable"

export default {
  layout: "article",
  components: {
    Content,
    ShareBar,
    ContentsOfTable,
  },
  async asyncData(context) {
    /**
     * 記事情報を取得
     */
    const content = await context.app.$microcms.getContent(context.params.slug)

    /**
     * 目次用にheadingを整形
     */
    const $ = cheerio.load(content.body)
    const headings = $("h1, h2, h3").toArray()
    const toc = headings.map((content) => ({
      text: content.children[0].data,
      id: content.attribs.id,
      name: content.name,
    }))

    return {
      content: content,
      headingList: toc,
    }
  },
  methods: {
    getCanonical() {
      return `${process.env.baseUrl}/${this.content.id}`
    },
  },
  head() {
    return {
      title: this.content.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.content.description,
        },
        // ogp
        { hid: "og:type", property: "og:type", content: "article" },
        { hid: "og:url", property: "og:url", content: this.getCanonical() },
        { hid: "og:title", property: "og:title", content: this.content.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.content.description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.content.thumbnail.url,
        },
        // twitter
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.content.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.content.description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.content.thumbnail.url,
        },
      ],
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
}
</style>
