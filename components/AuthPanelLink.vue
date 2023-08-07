<template>
  <div class="pa-2">
    <button @click="$emit('go')" class="auth-panel-link">
      {{ message }}
    </button>
  </div>
</template>

<script>
export default {
  name: "AuthPanelLink",
  props: {
    message: { type: String, required: true },
  },
  emits: ['go'],
};
</script>

<style scoped>
.auth-panel-link {
  font-family: 'Russo One';
}

button {
    font-family: 'Russo One';
    padding: 1rem;
    max-width: fit-content;
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: 3px 3px 3px transparent;
    margin: .4rem;
}

button:hover, button:focus-visible {
    border: 1px solid lightgrey;
    box-shadow: 3px 3px 3px lightgrey;
}
</style>