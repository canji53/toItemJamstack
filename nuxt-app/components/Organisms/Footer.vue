<template>
  <footer>
    <FooterNav class="nav" />
    <Copyright :copyright="copyright" class="copyright" />
  </footer>
</template>

<script>
import FooterNav from "@/components/Organisms/FooterNav"
import Copyright from "@/components/Molecules/Copyright"

export default {
  components: {
    FooterNav,
    Copyright,
  },
  data: () => ({
    copyright: `2020 ${process.env.siteName}`,
  }),
}
</script>

<style lang="scss" scoped>
footer {
  margin: 24px auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & > .nav,
  & > .copyright {
    margin: 6px 0;
  }
}
</style>
