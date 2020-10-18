<template>
  <nav>
    <ul>
      <li>
        <ButtonTwitter :title="title" :url="url" />
      </li>
      <li>
        <ButtonFacebook :title="title" :url="url" />
      </li>
      <li>
        <ButtonHatebu :title="title" :url="url" />
      </li>
      <li>
        <ButtonPocket :title="title" :url="url" />
      </li>
      <li>
        <ButtonClipboard :url="url" />
      </li>
    </ul>
  </nav>
</template>

<script>
import ButtonTwitter from "@/components/Molecules/ButtonTwitter"
import ButtonFacebook from "@/components/Molecules/ButtonFacebook"
import ButtonPocket from "@/components/Molecules/ButtonPocket"
import ButtonHatebu from "@/components/Molecules/ButtonHatebu"
import ButtonClipboard from "@/components/Molecules/ButtonClipboard"

export default {
  components: {
    ButtonTwitter,
    ButtonFacebook,
    ButtonPocket,
    ButtonHatebu,
    ButtonClipboard,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  width: $aside-width;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  @include max-screen($container-width) {
    display: none;
  }

  > ul {
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    list-style-type: none;

    > li {
      margin: 0 0 32px 0;
    }
  }
}
</style>
