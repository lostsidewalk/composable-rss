<template>
    <div>
        <button class="logout-button rounded m-4" :class="{ 'shadow-md': !disabled }" @click="$emit('logout')"
            :disabled="disabled">{{ $t('logout') }}</button>
    </div>
</template>

<script>
export default {
    props: {
        disabled: { type: Boolean, default: false }
    }
}
</script>

<style scoped>
.logout-button {
    border: 1px solid slateblue;
    font-family: 'Russo One';
    padding: 1rem;
    min-width: fit-content;
    user-select: none;
    float: right;
}

.logout-button:disabled {
    color: slategray;
    border: 1px solid slategray;
}
</style>