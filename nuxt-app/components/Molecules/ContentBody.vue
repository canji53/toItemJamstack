<template>
  <section class="contentBody" v-html="body" />
</template>

<script>
export default {
  props: {
    body: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.contentBody {
  width: 100%;
  margin: 32px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  color: $base-color;

  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    margin: 24px 0;
  }

  & > h1 {
    font-size: 24px;
  }

  & > h2 {
    font-size: 20px;
  }

  & > h3 {
    font-size: 16px;
  }

  & > h4,
  & > h5,
  & > h6 {
    font-size: 14px;
  }

  & > p {
    margin: 16px 0;
    line-height: 30px;
    font-size: 14px;

    & > a {
      color: $link-color;
    }

    & > img {
      width: 100%;
      object-fit: cover;
    }
  }

  & > ul,
  & > ol {
    margin: 16px 0;
    padding-left: 20px;
    font-size: 14px;
    color: $base-color;

    & > li {
      margin-bottom: 8px;
      line-height: 30px;

      & > a {
        color: $link-color;
      }
    }
  }

  & > blockquote {
    margin: 16px 0;
    padding: 16px;
    line-height: 30px;
    font-size: 14px;
    background-color: $thin-color;

    & > a {
      color: $link-color;
    }
  }

  & > pre {
    margin: 16px 0;
    width: 100%;
    padding: 16px;
    background-color: $base-color;

    & > code {
      font-size: 12px;
      color: #f9f9f9;
    }
  }

  // 600px > x
  @include max-screen($article-width) {
    & > h1,
    & > h2,
    & > h3,
    & > h4,
    & > h5,
    & > h6 {
      margin: 20px 0;
    }

    & > h1 {
      font-size: 20px;
    }

    & > h2 {
      font-size: 18px;
    }

    & > h3 {
      font-size: 16px;
    }

    & > h4,
    & > h5,
    & > h6 {
      font-size: 14px;
    }

    & > p {
      margin: 12px 0;
      font-size: 12px;
    }

    & > ul,
    & > ol {
      margin: 12px 0;
      font-size: 12px;

      & > li {
        margin-bottom: 4px;
      }
    }

    & > blockquote {
      margin: 12px 0;
      font-size: 12px;
    }

    & > pre {
      margin: 12px 0;

      & > code {
        font-size: 12px;
      }
    }
  }
}
</style>
