<template>
    <BorderBox :title="this.title" :collapsible="true">
        <template #content>
            <div class="curl-request">
                <div>{{ $t('setupAuthRequest') }}</div>
                <SetupAuthRequest />
                <div>{{ $t('responsePayloadWillLookLikeThis') }}</div>
                <SetupAuthResponse />
                <div>{{ $t('setupAuthResponseDetails') }}</div>
                <div>{{ $t('feedsNowRequireCreds') }}</div>
                <div>
                    <pre>curl -u &lt;username&gt;:&lt;password&gt; http://localhost:8081/feed/atom/me/spiders</pre>
                </div>
                <div>{{ $t('addCredsRequest') }}</div>
                <AddCredsRequest />
                <div>{{ $t('responsePayloadWillLookLikeThis') }}</div>
                <AddCredsResponse />
                <div>{{ $t('addCredsResponseDetails') }}</div>
                <div>{{ $t('setupAuthSummary') }}</div>
            </div>
        </template>
    </BorderBox>
</template>

<script>
import SetupAuthRequest from './SetupAuthRequest.vue';
import SetupAuthResponse from './SetupAuthResponse.vue';
import AddCredsRequest from '~/components/add-creds/AddCredsRequest.vue';
import AddCredsResponse from '~/components/add-creds/AddCredsResponse.vue';

export default {
    props: ["title"]
}
</script>
