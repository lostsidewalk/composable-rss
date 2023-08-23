<template>
  <div class="card">
    <div class="card-title pa-4">{{ $t('compRssPrivacyPolicy') }}</div>
    <div class="divider" />
    <div class="card-text">
      <div class="sheet">
        <div v-for="section in privacyPolicySections" :key="section.id">
          <div class="card m-4 elevation-6 shadow-md">
            <div class="card-title pa-4">{{ section.title }}</div>
            <div class="card-subtitle">{{ section.subtitle }}</div>
            <div class="card-text">{{ section.text }}</div>
          </div>
        </div>
        <div class="card m-4 elevation-6">
          <div class="card-title pa-4">{{ $t('howCanYouContactUs') }}</div>
          <div class="card-subtitle">{{ $t('contactUsWithQuestionsViaEmail') }}</div>
          <div class="card-actions">
            <button size="small" type="text" @click="sendSupportMail">{{ $t('supportEmail') }}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card-actions">
      <button size="small" :text="$t('dismiss')" @click="$emit('dismiss')" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PrivacyPolicyPanel",
  emits: ["dismiss"],
  methods: {
    sendSupportMail() {
      window.open('mailto:support@lostsidewalk.com', '_blank');
    },
  },
  data() {
    return {
      privacyPolicySections: [
        {
          id: 1,
          title: this.$t('whatInformationDoWeCollect'),
          subtitle: this.$t('whatWeCollectSummary'),
          text: this.$t('whatWeCollectDetails'),
        },
        {
          id: 2,
          title: this.$t('whatWeCollectImportantDetails'),
          subtitle: this.$t('whatWeCollectFurtherDetails'),
          text: `${this.$t('someCollectionIsAutomatic')} ${this.$t('automaticCollectionDetails')}`,
        },
        {
          id: 3,
          title: this.$t('howDoWeProcess'),
          subtitle: this.$t('howDoWeProcessSummary'),
          text: '',
        },
        {
          id: 4,
          title: this.$t('socialLogins'),
          subtitle: this.$t('socialLoginsSummary'),
          text: this.$t('socialLoginsDetails'),
        },
        {
          id: 5,
          title: this.$t('internationalInformationTransfers'),
          subtitle: this.$t('internationalInformationTransfersSummary'),
          text: `${this.$t('internationalInformationTransfersDetails')} ${this.$t('internationalInformationTransfersDetailsFurther')}`,
        },
        {
          id: 6,
          title: this.$t('whatAreYourPrivacyRights'),
          subtitle: this.$t('yourPrivacyRightsSummary'),
          text: this.$t('yourPrivacyRightsDetails'),
        },
        {
          id: 7,
          title: this.$t('yourConsent'),
          subtitle: this.$t('yourConsentSummary'),
          text: '',
        },
        {
          id: 8,
          title: this.$t('doWeMakeUpdates'),
          subtitle: this.$t('doWeMakeUpdatesSummary'),
          text: '',
        },
      ],
    };
  },
};
</script>
