<template>
  <button
    class="auth-button elevation-1"
    :class="{ 'loading': isLoading }"
    @click="$emit('clicked')"
  >
    {{ label }}
    <div class="tooltip"
      v-if="tooltip"
      location="start"
      activator="parent"
      open-delay="2000"
      :aria-label="tooltip"
    >
      {{ tooltip }}
    </div>
  </button>
</template>

<script>
export default {
  name: "AuthButton",
  props: {
    label: { type: String, required: true },
    subLabel: { type: String, default: null },
    tooltip: { type: String, default: null },
    isLoading: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.auth-button {
  min-height: 3rem;
  font-weight: bold;
  padding: 1rem;
  max-width: fit-content;
}
</style>
