<template>
  <div class="card">
    <div class="card-title pa-4">
      {{ $t('compRssPrivacyPolicy') }}
    </div>
    <div class="divider" />
    <div class="card-text">
      <div class="sheet">
        <div class="card m-4 elevation-6">
          <div class="card-title pa-4">
            {{ $t('whatInformationDoWeCollect') }}
          </div>
          <div class="card-subtitle">
            {{ $t('whatWeCollectSummary') }}
          </div>
          <div class="card-text">
            {{ $t('whatWeCollectDetails') }}
          </div>
        </div>
        <div class="card m-4 elevation-6">
          <div class="card-title pa-4">
            {{ $t('whatWeCollectImportantDetails') }}
          </div>
          <div class="card-subtitle">
            {{ $t('whatWeCollectFurtherDetails') }}
          </div>
          <div class="card-text">
            {{ $t('someCollectionIsAutomatic') }} {{ $t('automaticCollectionDetails') }}
          </div>
        </div>
        <div class="card m-4 elevation-6">
          <div class="card-title pa-4">
            {{ $t('howDoWeProcess') }}
          </div>
          <div class="card-subtitle">
            {{ $t('howDoWeProcessSummary') }}
          </div>
          <div class="card-text" />
        </div>
        <div class="card m-4 elevation-6">
          <div class="card-title pa-4">
            {{ $t('socialLogins') }}
          </div>
          <div class="card-subtitle">
            {{ $t('socialLoginsSummary') }}
          </div>
          <div class="card-text">
            {{ $t('socialLoginsDetails') }}
          </div>
        </div>
        <div class="card m-4 elevation-6">
          <div class="card-title pa-4">
            {{ $t('internationalInformationTransfers') }}
          </div>
          <div class="card-subtitle">
            {{ $t('internationalInformationTransfersSummary') }}
          </div>
          <div class="card-text">
            {{ $t('internationalInformationTransfersDetails') }} {{ $t('internationalInformationTransfersDetailsFurther')
            }}
          </div>
        </div>
        <div class="card m-4 elevation-6">
          <div class="card-title pa-4">
            {{ $t('whatAreYourPrivacyRights') }}
          </div>
          <div class="card-subtitle">
            {{ $t('yourPrivacyRightsSummary') }}
          </div>
          <div class="card-text">
            {{ $t('yourPrivacyRightsDetails') }}
          </div>
        </div>
        <div class="card m-4 elevation-6">
          <div class="card-title pa-4">
            {{ $t('yourConsent') }}
          </div>
          <div class="card-subtitle">
            {{ $t('yourConsentSummary') }}
          </div>
          <div class="card-text" />
        </div>
        <div class="card m-4 elevation-6">
          <div class="card-title pa-4">
            {{ $t('doWeMakeUpdates') }}
          </div>
          <div class="card-subtitle">
            {{ $t('doWeMakeUpdatesSummary') }}
          </div>
          <div class="card-text" />
        </div>
        <div class="card m-4 elevation-6">
          <div class="card-title pa-4">
            {{ $t('howCanYouContactUs') }}
          </div>
          <div class="card-subtitle">
            {{ $t('contactUsWithQuestionsViaEmail') }}
          </div>
          <div class="card-actions">
            <button size="small" type="text" @click="sendSupportMail">
              support@lostsidewalk.com
            </button>
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
};
</script>
