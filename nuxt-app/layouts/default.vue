<template>
  <div>
    <header>
      <HeaderBar />
      <HeaderConceptImage />
    </header>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import HeaderBar from "@/components/Organisms/HeaderBar"
import HeaderConceptImage from "@/components/Organisms/HeaderConceptImage"
import Footer from "@/components/Organisms/Footer"

export default {
  components: {
    HeaderBar,
    HeaderConceptImage,
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

<style lang="scss" scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
}

header {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>
