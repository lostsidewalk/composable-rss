<template>
  <div v-if="serverMessage"
    class="alert m-4 text-center error dark"
  >
    {{ serverMessage }}
  </div>
</template>

<script>
export default {
  name: "AuthServerResponse",
  props: {
    serverMessage: { type: String, default: "" },
  },
};
</script>
