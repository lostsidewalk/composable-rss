<template>
    <BorderBox :title="this.title" :collapsible="true">
        <template #content>
            <div class="curl-request">
                <div>{{ $t('addMediaRequest') }}</div>
                <div>{{ $t('addMediaRequestDetails') }}</div>
                <AddMediaRequest />
                <div>{{ $t('responsePayloadWillLookLikeThis') }}</div>
                <AddMediaResponse />
                <div>{{ $t('addMediaResponseDetails') }}</div>
                <div>{{ $t('addMediaFeedAccess') }}</div>
                <AddMediaFeedPayload />
                <div>{{ $t('addMediaSummary') }}</div>
            </div>
        </template>
    </BorderBox>
</template>

<script>
import AddMediaRequest from './AddMediaRequest.vue';
import AddMediaResponse from './AddMediaResponse.vue';
import AddMediaFeedPayload from './AddMediaFeedPayload.vue';

export default {
    props: ["title"],
}
</script>
