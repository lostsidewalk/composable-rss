<template>
  <div class="card m-4">
    <div class="card-text flex flex-row" :class="{ 'disable-overlay': showDeactivateUser }">
      <!-- profile image -->
      <img v-if="authProvider !== 'LOCAL' && authProviderProfileImgUrl" :src="authProviderProfileImgUrl"
        referrerpolicy="no-referrer" class="m-4 profile-img" :alt="$t('oAuth2ProfileImage')" height="96" max-height="96"
        max-width="96" />
      <img v-else src="~/assets/feedgears.png" referrerpolicy="no-referrer" class="m-4 profile-img" height="96"
        max-height="96" max-width="96" />
      <div class="flex flex-col text-left gap-1 m-4 flex-wrap overflow-auto profile-data">
        <span>{{ $t('yourEmailAddressIs', { emailAddress }) }}</span>
        <span>{{ $t('yourApiKeyIs', { apiKey }) }}</span>
        <hr />
        <span>{{ $t('youHaveXPostsInYQueues', { x: totalPosts, y: totalQueues }) }}</span>
        <span>{{ subscriptionStatus ? $t('subscriptionStatus', { status: 'NONE', started: 'NEVER' }) :
          $t('supportComposableRSS') }}</span>
      </div>
    </div>
    <AlertBox class="m-4" v-if="showFirstTimeUsageAlert && !showDeactivateUser"
      @dismissAlert="suppressFirstTimeUsageAlert" priority="INFO">
      <div class="flex flex-col gap-2 text-left">
        <div>{{ $t('apiRequiresTWoHeaderValues') }}</div>
        <div>
          <pre>&nbsp; X-ComposableRSS-API-Key {{ apiKey }}</pre>
        </div>
        <div>
          <pre>&nbsp; X-ComposableRSS-API-Secret <i>{{ $t('apiSecret') }}</i></pre>
        </div>
        <div>
          {{ $t('apiSecretHasBeeenMailed') }}
        </div>
        <div>
          {{ $t('instructionsLocatedBelow') }}
        </div>
      </div>
    </AlertBox>
    <AlertBox class="m-4" v-if="showDeactivateUser" :showDismiss="false">
      <div class="flex flex-col gap-4">
        <div>
          {{ $t('youAreAboutToPermanentlyDeactivateYourAccount') }}
        </div>
        <div>
          {{ $t('thanksForBeingPartOfComposableRSS') }}
        </div>
      </div>
    </AlertBox>
    <AlertBox class="m-4" v-if="showEmailApiKey" :showDismiss="false" :priority="'INFO'">
      {{ $t('weWillSendYourApiKeyViaEmail') }}
    </AlertBox>
    <div class="card-actions">
      <!-- deactivate account button -->
      <button class="settings-button rounded shadow-md" v-if="!showActions() && !showDeactivateUser" size="small"
        @click="showDeactivateUser = true">
        {{ $t('deactivateAccount') }}
      </button>
      <!-- download your data button -->
      <button class="settings-button rounded shadow-md" v-if="showDeactivateUser" size="small"
        @click="$emit('exportData')">
        {{ $t('downloadYourData') }}
      </button>
      <!-- permanently delete your account button -->
      <button class="settings-button rounded shadow-md" v-if="showDeactivateUser" size="small"
        @click="$emit('finalizeDeactivation')">
        {{ $t('permanentlyDeleteYourAccount') }}
      </button>
      <!-- cancel (deactivate account) button -->
      <button class="settings-button rounded shadow-md" v-if="showDeactivateUser" id="cancelDeactivateAccount"
        size="small" @click="showDeactivateUser = false">
        {{ $t('cancel') }}
      </button>

      <!-- reset password button (local) -->
      <button class="settings-button rounded shadow-md"
        v-if="authProvider === 'LOCAL' && !showActions() && !showResetPassword" size="small"
        @click="showResetPassword = true">
        {{ $t('resetPassword') }}
      </button>
      <!-- send password reset email -->
      <button class="settings-button rounded shadow-md" v-if="showResetPassword" size="small"
        @click="$emit('initPasswordReset')">
        {{ $t('sendPasswordResetEmail') }}
      </button>
      <!-- cancel (reset password) -->
      <button class="settings-button rounded shadow-md" v-if="showResetPassword" id="cancelResetPassword" size="small"
        @click="showResetPassword = false">
        {{ $t('cancel') }}
      </button>

      <!-- email API key button -->
      <button class="settings-button rounded shadow-md" v-if="!showActions() && !showEmailApiKey" size="small"
        @click="showEmailApiKey = true">
        {{ $t('emailApiKey') }}
      </button>
      <!-- send password reset email -->
      <button class="settings-button rounded shadow-md" v-if="showEmailApiKey" size="small" @click="$emit('emailApiKey')">
        {{ $t('sendApiKeyEmail') }}
      </button>
      <!-- cancel (email API key) -->
      <button class="settings-button rounded shadow-md" v-if="showEmailApiKey" id="cancelEmailApiKey" size="small"
        @click="showEmailApiKey = false">
        {{ $t('cancel') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    authProvider: { type: String, default: 'LOCAL' },
    authProviderProfileImgUrl: { type: String, required: false },
    emailAddress: { type: String, required: false, default: '' },
    apiKey: { type: String, required: false, default: '' },
    subscriptionStatus: { type: String },
    totalPosts: { type: Number, default: 0 },
    totalQueues: { type: Number, default: 0 },
  },
  mounted() {
    let a = localStorage.getItem('showFirstTimeUsageAlert');
    this.showFirstTimeUsageAlert = (a !== 'false');
  },
  emits: ["exportData", "finalizeDeactivation", "initPasswordReset", "emailApiKey"],
  data() {
    return {
      showDeactivateUser: false,
      showResetPassword: false,
      showEmailApiKey: false,
      showFirstTimeUsageAlert: false,
    };
  },
  methods: {
    showActions() {
      return this.showDeactivateUser || this.showResetPassword || this.showEmailApiKey;
    },
    suppressFirstTimeUsageAlert() {
      localStorage.setItem('showFirstTimeUsageAlert', false);
      this.showFirstTimeUsageAlert = false;
    }
  },
};
</script>

<style scoped>
.profile-img {
  height: 96px;
  width: 95px;
  border: 1px solid black;
  border-radius: 5px;
}

@media (max-width: 480px) {
  .profile-img {
    display: none;
  }
}

.profile-data {
  font-family: 'Russo One';
}

.disable-overlay {
  mix-blend-mode: darken;
}
</style>
