<template>
  <section class="inputName">
    <div class="inputName__label">
      <Label :name="name" :text="text" :required="required" />
    </div>
    <Input
      :form="form"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      @input="$emit('input', $event)"
    />
  </section>
</template>

<script>
import Label from "@/components/Atoms/Label"
import Input from "@/components/Atoms/Input"

export default {
  components: {
    Label,
    Input,
  },
  props: {
    form: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    name: "name",
    text: "お名前",
    type: "text",
    placeholder: "",
    required: true,
    autofocus: true,
    autocomplete: "off",
  }),
}
</script>

<style lang="scss">
.inputName {
  width: 100%;
  display: flex;
  flex-flow: column;

  &__label {
    margin: 0 0 0 8px;

    > label {
      color: $base-color;
      font-size: $base-font-size;

      > span {
        color: orangered;
      }
    }
  }

  > input {
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
