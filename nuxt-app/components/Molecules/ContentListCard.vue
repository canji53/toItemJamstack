<template>
  <article>
    <div class="thumbnail">
      <nuxt-link :to="`/${content.id}`">
        <Img :src="content.thumbnail.url" :alt="content.title" />
        <Span :text="isCategory(content.category)" />
      </nuxt-link>
    </div>
    <Time :date="toFormat(content.publishedAt)" />
    <div class="title">
      <nuxt-link :to="`/${content.id}`">
        <H1 :text="content.title" />
      </nuxt-link>
    </div>
  </article>
</template>

<script>
import dayjs from "dayjs"

import Img from "@/components/Atoms/Img"
import Span from "@/components/Atoms/Span"
import Time from "@/components/Atoms/Time"
import H1 from "@/components/Atoms/H1"

export default {
  components: {
    Img,
    Span,
    Time,
    H1,
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
    isCategory(category) {
      return category !== null ? category.text : "Uncategory"
    },
  },
}
</script>

<style lang="scss" scoped>
article {
  width: 280px;
  margin: 20px 10px;
  display: flex;
  flex-flow: column nowrap;

  & > .thumbnail {
    margin: 8px 0;
    position: relative;
    transition-duration: $transition-time;

    &:hover {
      opacity: $opacity-rate;
    }

    & > a {
      & > img {
        width: 100%;
        height: 175px;
        object-fit: cover;
      }

      & > span {
        padding: 6px;
        position: absolute;
        top: 6px;
        left: 6px;
        line-height: $small-font-size;
        font-size: $small-font-size;
        color: #fff;
        background-color: $concept-color;
      }
    }
  }

  & > time {
    margin: 2px 0;
    line-height: $small-font-size;
    font-size: $small-font-size;
    color: $base-color;
  }

  & > .title {
    margin: 4px 0;

    & > a {
      color: $base-color;
      transition-duration: $transition-time;

      &:hover {
        color: $hover-color;
      }

      & > h1 {
        line-height: $base-line-height-size;
        font-size: $base-font-size;
        font-weight: normal;
      }
    }
  }
}
</style>
