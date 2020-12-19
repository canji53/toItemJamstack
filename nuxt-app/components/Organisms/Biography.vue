<template>
  <section class="Biography">
    <Img
      :src="profileImage.src"
      :alt="profileImage.alt"
      class="Biography__image"
    />
    <div class="Biography__description">
      <H1 :text="progileName" class="Biography__name" />
      <P :text="profileText" class="Biography__text" />
      <ul class="Biography__shareList">
        <li>
          <ProfileTwitterIcon :url="twitterUrl" />
        </li>
        <li>
          <ProfileInstagramIcon :url="instagramUrl" />
        </li>
        <li>
          <ProfileToLogIcon :url="tologUrl" />
        </li>
        <li>
          <ProfileToFolioIcon :url="tofolioUrl" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import H1 from "@/components/Atoms/H1"
import Img from "@/components/Atoms/Img"
import P from "@/components/Atoms/P"
import ProfileTwitterIcon from "@/components/Molecules/ProfileTwitterIcon"
import ProfileInstagramIcon from "@/components/Molecules/ProfileInstagramIcon"
import ProfileToLogIcon from "@/components/Molecules/ProfileToLogIcon"
import ProfileToFolioIcon from "@/components/Molecules/ProfileToFolioIcon"
import ProfileLocalingIcon from "@/components/Molecules/ProfileLocalingIcon"

export default {
  components: {
    H1,
    Img,
    P,
    ProfileTwitterIcon,
    ProfileInstagramIcon,
    ProfileToLogIcon,
    ProfileToFolioIcon,
    ProfileLocalingIcon,
  },
  data: () => ({
    profileImage: {
      src: "/profile.png",
      alt: "Canji",
    },
    progileName: "Canji",
    profileText: "エンジニアリングやガジェットをがちゃがちゃしたい人間",
    twitterUrl: "https://twitter.com/canji53",
    instagramUrl: "https://www.instagram.com/canji53/",
    tologUrl: "https://www.tolog.site",
    tofolioUrl: "https://canji53.github.io/toFolio/",
  }),
}
</script>

<style lang="scss" scoped>
.Biography {
  display: flex;
  flex-flow: row nowrap;

  &__image {
    margin-right: 16px;
    padding: 4px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: solid 1px $base-thin-color;
  }

  &__description {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
  }

  &__name {
    margin: 2px 0;
    line-height: 16px;
    font-size: 16px;
    color: $base-color;
  }

  &__text {
    margin: 2px 0;
    line-height: $base-line-height-size;
    font-size: $small-font-size;
    color: $base-color;
  }

  &__shareList {
    margin: 2px 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    list-style-type: none;

    > li {
      margin-right: 8px;
      font-size: 15px;
    }
  }
}
</style>
