<template>
  <input
    :form="form"
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :required="required"
    :autofocus="autofocus"
    :autocomplete="autocomplete"
    :readonly="readonly"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    form: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "https://example.com/feed",
    },
    value: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      required: true,
      default: true,
    },
    autofocus: {
      type: Boolean,
      required: false,
      default: false,
    },
    autocomplete: {
      type: String,
      required: false,
      default: "on",
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
