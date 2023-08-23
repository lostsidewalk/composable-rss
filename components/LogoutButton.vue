<template>
    <div>
        <button class="logout-button rounded shadow-md m-4" @click="$emit('logout')">{{ $t('logout') }}</button>
    </div>
</template>

<style scoped>
.logout-button {
    border: 1px solid slateblue;
    font-family: 'Russo One';
    padding: 1rem;
    min-width: fit-content;
    user-select: none;
    float: right;
}
</style>