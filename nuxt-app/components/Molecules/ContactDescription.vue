<template>
  <section class="contactDescription">
    <p>
      {{ title }}
      へのご質問や、その他案件に関するご相談やご依頼をお待ちしております。
    </p>
    <p>お気軽にお問い合わせください。</p>
  </section>
</template>

<script>
export default {
  data: () => ({
    title: process.env.siteName,
  }),
}
</script>

<style lang="scss">
.contactDescription {
  margin: 0 8px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  > p {
    margin: 8px 0;
    font-size: $base-font-size;
    color: $base-color;
  }
}
</style>
