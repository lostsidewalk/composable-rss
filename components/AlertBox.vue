<template>
  <div class="p-4 bg-gray-100 rounded-lg shadow-md"
    :class="{ 'bg-blue-100': (priority === 'INFO'), 'bg-red-100': (priority === 'ERROR') }">
    <button v-if="showDismiss" @click="dismissAlert" class="float-right"
      :class="{ 'text-blue-500 hover:text-blue-800': (priority === 'INFO'), 'text-red-500 hover:text-red-800': (priority === 'ERROR') }">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <slot></slot>
  </div>
</template>
  
<script>
export default {
  props: {
    showDismiss: { type: Boolean, default: true },
    message: { type: String },
    priority: { type: String, default: 'ERROR' }
  },
  methods: {
    dismissAlert() {
      this.$emit('dismissAlert');
    },
  },
};
</script>
  