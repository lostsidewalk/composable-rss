<template>
    <div class="tab-container">
        <div class="tab-label p-2">
            {{ $t('httpRequest') }}
        </div>
        <slot name="code" />
    </div>
</template>

<style scoped>
.tab-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.tab-label {
    text-align: right;
    border-top: 1px solid lightgray;
    color: grey;
    font-size: smaller;
    font-family: sans-serif;
    border-bottom: 0px;
    border-radius: 5px;
    user-select: none;
}
</style>