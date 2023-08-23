<template>
  <input
    class="auth-text-field elevation-1 outlined rounded dense"
    autocomplete="false"
    :label="label"
    :aria-label="label"
    :placeholder="placeholder"
    :value="modelValue"
    :type="type ? type : 'text'"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "AuthTextField",
  props: {
    label: { type: String, required: true },
    type: { type: String, default: null },
    placeholder: { type: String, default: null },
    modelValue: { type: String, required: true },
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.auth-text-field {
  font-family: 'Russo One';
  flex-grow: 1;
  padding: 1rem;
  margin: 1rem;
}
</style>