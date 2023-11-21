<template>
    <BorderBox :title="this.title" :collapsible="true">
        <template #content>
            <div class="curl-request">
                <div>{{ $t('addPodcastRequest') }}
                </div>
                <AddPodcastRequest />
                <div>{{ $t('responsePayloadWillLookLikeThis')}}</div>
                <AddPodcastResponse />
                <div>
                    {{ $t('addPodcastResponseDetails') }}
                </div>
                <div>{{ $t('addEnclosureRequest') }}</div>
                <AddEnclosureRequest />
                <div>{{ $t('responsePayloadWillLookLikeThis')}}</div>
                <AddEnclosureResponse />
                <div>{{ $t('addPodcastFeedAccess') }}
                </div>
                <AddPodcastFeedPayload />
                <div>{{ $t('addPodcastSummary') }}</div>
            </div>
        </template>
    </BorderBox>
</template>

<script>
import AddPodcastRequest from './AddPodcastRequest.vue';
import AddPodcastResponse from './AddPodcastResponse.vue';
import AddPodcastFeedPayload from './AddPodcastFeedPayload.vue';
import AddEnclosureRequest from '~/components/add-enclosure/AddEnclosureRequest.vue';
import AddEnclosureResponse from '~/components/add-enclosure/AddEnclosureResponse.vue';

export default {
    props: ["title"],
}
</script>
