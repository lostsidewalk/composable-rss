<template>
    <BorderBox :title="this.title" :collapsible="true">
        <template #content>
            <div class="curl-request">
                <div>{{ $t('createQueueRequest') }}</div>
                <CreateQueueRequest />
                <div>{{ $t('responsePayloadWillLookLikeThis') }}</div>
                <CreateQueueResponse />
                <div>{{ $t('createQueueResponseDetails') }}</div>
                <div>{{ $t('createQueueFeedAccess') }}</div>
                <CreateQueueFeedPayload />
                <div>{{ $t('createQueueSummary') }}</div>
            </div>
        </template>
    </BorderBox>
</template>

<script>
import CreateQueueFeedPayload from '~/components/create-queue/CreateQueueFeedPayload.vue';
import CreateQueueRequest from '~/components/create-queue/CreateQueueRequest.vue';
import CreateQueueResponse from '~/components/create-queue/CreateQueueResponse.vue';

export default {
    props: ["title"],
}
</script>
