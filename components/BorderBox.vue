<template>
    <div class="flex flex-col gap-4 text-left">
        <div class="outlined rounded border-2 p-4 flex flex-col gap-4 text-left overflow-auto">
            <div v-if="this.title" class="font-bold">
                <button v-if="this.collapsible" class="toggle-button" @click="isCollapsed = !isCollapsed">
                    {{ isCollapsed ? '+' : '-' }}
                </button>
                {{ this.title }}
            </div>
            <!-- slot -->
            <slot v-if="!collapsible || !isCollapsed" name="content" />
        </div>
    </div>
</template>

<script>
export default {
    name: "BorderBox",
    props: ["title", "collapsible"],
    data() {
        return {
            isCollapsed: false,
        }
    }
}
</script>

<style scoped>
.toggle-button {
    color: darkgrey;
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: .3rem .5rem;
    margin-right: .5rem;
    box-shadow: 1px 1px 1px lightgrey;
}

.toggle-button:hover,
toggle-button:focus-visible {
    box-shadow: 1px 1px 1px grey;
}
</style>
