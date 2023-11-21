<template>
    <!-- Using the API -->
    <div class="font-bold pt-4 pb-4">{{ $t('usingTheApi') }}</div>
    <!-- (using the API body) -->
    <div class="flex flex-col gap-4">
        <hr class="divider" />
        <div>{{ $t('useTheFollowingInstructions') }}</div>
        <!-- API requirements -->
        <ApiRequirements />
        <!-- create and publish your first feed -->
        <CreateAndPublishYourFirstFeed :title="$t('step1')" />
        <!-- step 2: setup authentication and add credentials -->
        <SetupAuthAndAddCreds :title="$t('step2')" />
        <!-- step 3: -->
        <AddContent :title="$t('step3')" />
        <!-- step 4: add an iTunes podcast to your post -->
        <AddPodcast :title="$t('step4')" />
        <!-- step 5: add medida -->
        <AddMedia :title="$t('step5')" />
        <!-- step 6: configure advanced options -->
        <ConfigureAdvancedOptions :title="$t('step6')" />
    </div>
</template>

<script setup>
import ApiRequirements from '~/components/api-requirements/ApiRequirements.vue'
import CreateAndPublishYourFirstFeed from '~/components/your-first-feed/CreateAndPublishYourFirstFeed.vue';
import SetupAuthAndAddCreds from '~/components/setup-auth/SetupAuthAndAddCreds.vue';
import AddContent from '~/components/add-content/AddContent.vue';
import AddPodcast from '~/components/add-podcast/AddPodcast.vue';
import AddMedia from '~/components/add-media/AddMedia.vue';
import ConfigureAdvancedOptions from '~/components/configure-advanced-options/ConfigureAdvancedOptions.vue'; 
</script>
