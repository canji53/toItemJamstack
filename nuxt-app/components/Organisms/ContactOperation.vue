<template>
  <section class="contactOperation">
    <div class="contactOperation__reset">
      <ButtonReset :form="form" />
    </div>
    <div class="contactOperation__submit">
      <ButtonSubmit :form="form" />
    </div>
  </section>
</template>

<script>
import ButtonReset from "@/components/Molecules/ButtonReset"
import ButtonSubmit from "@/components/Molecules/ButtonSubmit"

export default {
  components: {
    ButtonReset,
    ButtonSubmit,
  },
  props: {
    form: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.contactOperation {
  display: flex;
  flex-flow: row nowrap;

  &__reset {
    margin-right: 8px;
  }
}
</style>
