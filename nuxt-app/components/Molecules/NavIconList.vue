<template>
  <nav class="navIconList">
    <ul class="navIconList__list">
      <li class="navIconList__item">
        <ButtonAbout />
      </li>
      <li class="navIconList__item">
        <ButtonContact />
      </li>
    </ul>
  </nav>
</template>

<script>
import ButtonAbout from "@/components/Molecules/ButtonAbout"
import ButtonContact from "@/components/Molecules/ButtonContact"

export default {
  components: {
    ButtonAbout,
    ButtonContact,
  },
}
</script>

<style lang="scss">
.navIconList {
  &__list {
    display: flex;
    flex-flow: row nowrap;
    list-style-type: none;
  }

  &__item {
    margin-left: 16px;
  }
}
</style>
