<template>
    <div class="tab-container">
        <div class="tab-labels">
            <div class="tab-label p-2" @click="this.selectedTab = 'RSS'"
                :class="{ 'tab-label-selected': this.selectedTab === 'RSS' }">
                RSS
            </div>
            <div class="tab-label p-2" @click="this.selectedTab = 'ATOM'"
                :class="{ 'tab-label-selected': this.selectedTab === 'ATOM' }">
                ATOM
            </div>
            <div class="tab-label p-2" @click="this.selectedTab = 'JSON'"
                :class="{ 'tab-label-selected': this.selectedTab === 'JSON' }">
                JSON
            </div>
        </div>
        <slot name="rss20" v-if="this.selectedTab === 'RSS'" />
        <slot name="atom10" v-if="this.selectedTab === 'ATOM'" />
        <slot name="json" v-if="this.selectedTab === 'JSON'" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedTab: 'RSS',
        }
    }
}
</script>

<style scoped>
.tab-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.tab-labels {
    display: flex;
    flex-direction: row;
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

.tab-label-selected {
    font-weight: bold;
}

.tab-label:hover,
.tab-label:focus-visible {
    cursor: pointer;
    text-decoration: underline;
}</style>