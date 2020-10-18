<template>
  <section>
    <H1 :text="title" />
    <ul>
      <li v-for="(content, key) in contentList" :key="key">
        <ContentListCard :content="content" />
      </li>
    </ul>
  </section>
</template>

<script>
import H1 from "@/components/Atoms/H1"
import ContentListCard from "@/components/Molecules/ContentListCard"

export default {
  components: {
    H1,
    ContentListCard,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    contentList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  width: $column3-width; // 900px
  margin: 0 auto;
  padding: 24px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  // 900px > X > 600px
  @include screen($column3-width, $column2-width) {
    width: $column2-width;
  }

  // 600px > X
  @include max-screen($column2-width) {
    width: 100%;
  }

  & > h1 {
    margin: 12px auto;
    line-height: $middle-font-size;
    font-size: $middle-font-size;
    font-weight: normal;
    color: $base-color;
  }

  & > ul {
    margin: 12px auto;
    display: flex;
    flex-flow: row wrap;
    list-style-type: none;

    // 600px > X
    @include max-screen($column2-width) {
      justify-content: center;
    }
  }
}
</style>
