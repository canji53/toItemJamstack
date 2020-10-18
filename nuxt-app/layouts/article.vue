<template>
  <div>
    <header>
      <HeaderBar />
    </header>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import HeaderBar from "@/components/Organisms/HeaderBar"
import Footer from "@/components/Organisms/Footer"

export default {
  components: {
    HeaderBar,
    Footer,
  },
  head() {
    return {
      link: [
        { rel: "canonical", href: process.env.baseUrl + this.$route.path },
      ],
    }
  },
}
</script>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
    "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic",
    Verdana, Meiryo, sans-serif;
}

header {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>
