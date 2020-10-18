<template>
  <section class="textBody">
    <div class="textBody__label">
      <Label :name="name" :text="text" :required="required" />
    </div>
    <Textarea
      :form="form"
      :name="name"
      :rows="rows"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :required="required"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :value="body"
      @input="$emit('input', $event)"
    />
  </section>
</template>

<script>
import Label from "@/components/Atoms/Label"
import Textarea from "@/components/Atoms/Textarea"

export default {
  components: {
    Label,
    Textarea,
  },
  props: {
    form: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    name: "body",
    maxlength: 400,
    text: "本文",
    placeholder: "ここに本文を記入してください。（400文字以内）",
    rows: 8,
    required: true,
    autofocus: false,
    autocomplete: "off",
  }),
}
</script>

<style lang="scss">
.textBody {
  width: 100%;
  display: flex;
  flex-flow: column;

  &__label {
    margin: 8px 0 4px 8px;

    > label {
      color: $base-color;
      font-size: $base-font-size;

      > span {
        color: orangered;
      }
    }
  }

  > textarea {
    padding: 8px;
    border-bottom: solid $thin-color 1px;
    font-size: $base-font-size;
    color: $base-color;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition-duration: $transition-time;

    &::placeholder {
      color: $base-thin-color;
    }

    &:focus {
      outline: none;
      border-bottom: solid $base-thin-color 1px;
    }
  }
}
</style>
