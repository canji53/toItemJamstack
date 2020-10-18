<template>
  <article class="content">
    <BreadCrumbs
      :bread-crumbs="getBreadcrumbs()"
      class="content__breadcrumbs"
    />
    <CategoryBadge :text="content.category.text" class="content__category" />
    <H1 :text="content.title" class="content__title" />
    <header class="content__header">
      <TagList :tag-list="content.tags" class="content__tagList" />
      <Time :date="toFormat(content.updatedAt)" class="content__updated" />
    </header>
    <Img
      :src="content.thumbnail.url"
      :alt="content.title"
      class="content__thumbnail"
    />
    <ContentBody :body="content.body" />
    <Hr />
    <Biography class="content__Biography" />
    <Hr />
  </article>
</template>

<script>
import dayjs from "dayjs"

import Time from "@/components/Atoms/Time"
import H1 from "@/components/Atoms/H1"
import Img from "@/components/Atoms/Img"
import Hr from "@/components/Atoms/Hr"
import BreadCrumbs from "@/components/Molecules/BreadCrumbs"
import CategoryBadge from "@/components/Molecules/CategoryBadge"
import TagList from "@/components/Molecules/TagList"
import ContentBody from "@/components/Molecules/ContentBody"
import Biography from "@/components/Organisms/Biography"

export default {
  components: {
    Time,
    H1,
    Img,
    Hr,
    BreadCrumbs,
    CategoryBadge,
    TagList,
    ContentBody,
    Biography,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toFormat(date) {
      return dayjs(date).format("YYYY/MM/DD")
    },
    getBreadcrumbs() {
      return [
        { text: "ホーム", to: "/" },
        { text: "/", to: "" },
        { text: this.content.title, to: "" },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  width: $article-width;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  // 600px > content
  @include max-screen($article-width) {
    width: 95%;
    justify-content: center;
  }

  &__breadcrumbs {
    margin: 0 0 8px 0;
  }

  &__header {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
  }

  &__category {
    margin: 0 auto 0 0;
  }

  &__updated {
    margin: 4px 0 4px auto;
    line-height: 11px;
    font-size: 11px;
    color: $base-color;
  }

  &__title {
    margin: 8px 0;
    font-size: 20px;
    color: $base-color;
  }

  &__tagList {
    margin: 4px 0;
  }

  &__thumbnail {
    margin: 32px 0;
    width: 100%;
    object-fit: cover;
  }

  &__Biography {
    margin: 32px auto;
  }
}
</style>
