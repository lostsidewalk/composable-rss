<template>
    <BorderBox :title="this.title" :collapsible="true">
        <template #content>
            <div class="curl-request">
                <div>{{ $t('addContentRequest') }}</div>
                <AddContentRequest />
                <div>{{ $t('responsePayloadWillLookLikeThis') }}</div>
                <AddContentResponse />
                <div>{{ $t('addContentResponseDetails') }}</div>
                <PostStatusUpdateRequest />
                <div>{{ $t('responsePayloadWillLookLikeThis') }}</div>
                <PostStatusUpdateResponse /> 
                <div>{{ $t('updateQueueStatusDetails') }}</div>
                <QueueStatusUpdateRequest />
                <div>{{ $t('responsePayloadWillLookLikeThis') }}</div>
                <QueueStatusUpdateResponse />
                <div>{{ $t('addContentPublishResponseDetails') }}</div>
                <div>{{ $t('addContentFeedAccess') }}</div>
                <AddContentFeedPayload />
                <div>{{ $t('addContentSummary') }}</div>
            </div>
        </template>
    </BorderBox>
</template>

<script>
import AddContentRequest from './AddContentRequest.vue';
import AddContentResponse from './AddContentResponse.vue';
import AddContentFeedPayload from './AddContentFeedPayload.vue';

export default {
    props: ["title"]
}
</script>
