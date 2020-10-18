<template>
  <section class="headerBar">
    <SiteTitle :title="title" class="headerBar__siteTitle" />
    <NavIconList class="headerBar__navIconList" />
  </section>
</template>

<script>
import SiteTitle from "@/components/Molecules/SiteTitle"
import NavIconList from "@/components/Molecules/NavIconList"

export default {
  components: {
    SiteTitle,
    NavIconList,
  },
  data: () => ({
    title: `${process.env.siteName}`,
  }),
}
</script>

<style lang="scss" scoped>
.headerBar {
  width: $container-width;
  height: 50px;
  padding-bottom: 10px;
  position: fixed;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;

  &__siteTitle {
    margin: auto auto 0 44px;
  }

  &__navIconList {
    margin: auto 10px 0 auto;
  }

  @include max-screen($container-width) {
    width: 100%;
    justify-content: center;

    &__siteTitle {
      margin: auto auto 0 auto;
    }

    &__navIconList {
      display: none;
    }
  }
}
</style>
