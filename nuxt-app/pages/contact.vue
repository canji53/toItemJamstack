<template>
  <main class="contact">
    <BreadCrumbs :bread-crumbs="getBreadCrumbs()" class="breadcrumbs" />
    <H1 :text="title" class="title" />
    <ContactForm />
  </main>
</template>

<script>
import BreadCrumbs from "@/components/Molecules/BreadCrumbs"
import H1 from "@/components/Atoms/H1"
import ContactForm from "@/components/Organisms/ContactForm"

export default {
  layout: "article",
  components: {
    BreadCrumbs,
    H1,
    ContactForm,
  },
  data: () => ({
    title: "お問い合わせ",
  }),
  methods: {
    getBreadCrumbs() {
      return [
        { text: "ホーム", to: "/" },
        { text: "/", to: "" },
        { text: "お問い合わせ", to: "" },
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
.contact {
  width: $article-width;
  padding: 112px 0 128px 0;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;

  // 600px > content
  @include max-screen($article-width) {
    width: 95%;
    justify-content: center;
  }
}

.breadcrumbs {
  width: 95%;
  margin: 0 8px 16px 8px;
}

.title {
  width: 95%;
  margin: 8px 8px 20px 8px;
  line-height: 20px;
  font-size: 20px;
  color: $base-color;
}
</style>
