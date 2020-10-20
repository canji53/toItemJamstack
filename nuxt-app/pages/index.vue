<template>
  <main>
    <ContentList :title="latestTitle" :content-list="latestList" />
  </main>
</template>

<script>
import ContentList from "@/components/Organisms/ContentList"

export default {
  components: {
    ContentList,
  },
  async asyncData(context) {
    const limitation = 6
    const latest = await context.app.$microcms.getContentList(
      `limit=${limitation}`
    )
    return {
      latestTitle: "新着記事",
      latestList: latest.contents,
    }
  },
  head() {
    return {
      title: "ホーム",
    }
  },
}
</script>

<style lang="scss" scoped>
main {
  padding: 64px 0;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
}
</style>
