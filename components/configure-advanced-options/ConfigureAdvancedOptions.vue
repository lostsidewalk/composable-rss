<template>
  <BorderBox :title="this.title" :collapsible="true">
    <template #content>
      <div class="curl-request">
        <div>{{ $t("advancedOptionsRequest") }}</div>
        <ConfigureAdvancedOptionsRequest />
        <div>{{ $t("advancedOptionsFeedAccess") }}</div>
        <ConfigureAdvancedOptionsFeedPayload />
        <div>{{ $t("archivalAndPurgingRequest") }}</div>
        <ConfigureAdvancedOptionsArchivalAndPurgingRequest />
        <div>{{ $t("archivalAndPurgingSummary") }}</div>
      </div>
    </template>
  </BorderBox>
</template>

<script>
import ConfigureAdvancedOptionsRequest from './ConfigureAdvancedOptionsRequest.vue';
import ConfigureAdvancedOptionsFeedPayload from './ConfigureAdvancedOptionsFeedPayload.vue';
import ConfigureAdvancedOptionsArchivalAndPurgingRequest from './ConfigureAdvancedOptionsArchivalAndPurgingRequest.vue';

export default {
  props: ["title"],
};
</script>
