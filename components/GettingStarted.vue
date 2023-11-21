<template>
    <!-- Getting started -->
    <div class="font-bold pt-4 pb-4">{{ $t('gettingStarted') }}</div>
    <!-- Getting started body -->
    <div class="flex flex-col gap-4 text-left">
        <hr class="divider" />
        <div>
            <div class="pb-4">
                {{ $t('imagesAreAvailable') }}
            </div>
            <div class="pb-4">
                {{ $t('toDeployThePlatform') }}
            </div>
            <div class="pb-4">
                <pre>curl -OL https://raw.githubusercontent.com/lostsidewalk/composable-rss-app/main/docker-compose.yml.sample
  docker-compose -f docker-compose.yml.sample up</pre>
            </div>
            <div class="pb-4">
                <i>{{ $t('pleaseAddressComments') }}</i>
            </div>
            <div class="pb-4">{{ $t('onceUpAndRunning')}}</div>
            <div class="pb-4 pl-2">
                <span class="red">*</span> {{ $t('uiAccessDesc') }}
            </div>
            <div class="pb-4 pl-2">
                <span class="red">*</span> {{ $t('apiAccessDesc') }}
            </div>
            <div class="pb-4 pl-2">
                <span class="red">*</span> {{ $t('feedAccessDesc') }}
            </div>
        </div>
    </div>
</template>
