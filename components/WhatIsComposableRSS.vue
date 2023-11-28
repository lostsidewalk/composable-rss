<template>
    <!-- What is ComposableRSS? -->
    <div class="font-bold pb-4">{{ $t('whatIsComposableRss') }}</div>
    <div class="flex flex-col gap-4">
        <hr class="divider" />
        <div>
            {{ $t('composableRssIs') }}
        </div>
        <div class="flex flex-col gap-4">
            <div class="font-bold">{{ $t('useComposableRssTo') }}</div>

            <BorderBox :title="$t('createAndPublishFeedsTitle')">
                <template #content>
                    <div>
                        {{ $t('createAndPublishFeedsDetails') }}
                    </div>
                </template>
            </BorderBox>

            <BorderBox :title="$t('organizeAndPublishContentTitle')">
                <template #content>
                    <div class="feature-body">
                        {{ $t('organizeAndPublishContentDetails') }}
                    </div>
                    <div class="feature-body">
                        {{ $t('organizeAndPublishContentDetails2') }}
                    </div>
                </template>
            </BorderBox>

            <BorderBox :title="$t('manageFeedAuthenticationTitle')">
                <template #content>
                    <div class="feature-body">
                        {{ $t('manageFeedAuthenticationDetails') }}
                    </div>
                </template>
            </BorderBox>

            <BorderBox :title="$t('customizeContentExpirationTitle')">
                <template #content>
                    <div class="feature-body">
                        {{ $t('customizeContentExpirationDetails')}}
                    </div>
                </template>
            </BorderBox>

            <BorderBox :title="$t('publishITunesTitle')">
                <template #content>
                    <div class="feature-body">
                        {{ $t('publishITunesDetails') }}
                    </div>
                </template>
            </BorderBox>

            <BorderBox :title="$t('publishMediaRssTitle')">
                <template #content>
                    <div class="feature-body">
                        {{ $t('publishMediaRssDetails') }}
                    </div>
                </template>
            </BorderBox>

            <BorderBox
                :title="$t('supportOrganizationalNeedsTitle')">
                <template #content>
                    <div class="feature-body">
                        {{ $t('supportOrganizationalNeedsDetails') }}
                    </div>
                    <div class="feature-body">
                        {{ $t('supportOrganizationalNeedsDetails2') }}
                    </div>
                </template>
            </BorderBox>
        </div>
        <hr>
        <BorderBox :title="'ComposableRSS is free'">
            <template #content>
                <div>
                    {{ $t('composableRssIsFree') }}
                </div>
            </template>
        </BorderBox>
        <hr>
        <BorderBox :title="'OpenApi V3'">
            <template #content>
                <div>
                    {{ $t('openApiV3') }}
                </div>
                <div>
                    <a href="#" @click.prevent="downloadOpenAPIv3Spec">
                        <code>composable-rss-v1_openapiv3.json</code>
                    </a>
                </div>
            </template>
        </BorderBox>
    </div>
</template>

<script setup>
import axios from 'axios';

const downloadOpenAPIv3Spec = async () => {
  try {
    const response = await axios.get('/composable-rss-v1_openapiv3.json', { responseType: 'blob' });

    const blob = new Blob([response.data], { type: 'application/octet-stream' });
    const link = document.createElement('a');

    link.href = window.URL.createObjectURL(blob);
    link.download = 'composable-rss-v1_openapiv3.json';
    link.click();
  } catch (error) {
    console.error('Error downloading OpenAPIv3 spec:', error);
  }
};
</script>
