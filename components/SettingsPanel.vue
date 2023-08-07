<template>
  <div class="settings-panel">
    <!-- row -->
    <div class="d-flex row text-center justify-center">
      <!-- col -->
      <div class="cols-12 cols-sm-10">
        <!-- card -->
        <div @mouseover="isHovering = true" @mouseleave="isHovering = false"
          :class="isHovering ? 'elevation-7' : 'elevation-6'" class="card flat">
          <!-- row -->
          <div class="row">
            <!-- col -->
            <div class="col cols-12">
              <!-- card-text -->
              <div class="card-text">
                <!-- banner (large) -->
                <div class="text-h5 text-center mt-4 logotext">
                  {{ $t("settings") }}
                </div>
                <!-- tab switcher -->
                <div class="d-flex justify-center gap-5 flex-wrap">
                  <button class="text settings-tab" @click="tabToShow = 'ACCOUNT'">{{ $t('account') }}</button>
                  <button class="text settings-tab" @click="tabToShow = 'NOTIFICATIONS'">{{ $t('notifications')
                  }}</button>
                  <button class="text settings-tab" @click="tabToShow = 'SUBSCRIPTION'">{{ $t('subscription') }}</button>
                </div>
                <!-- row -->
                <div class="row text-center">
                  <!-- col -->
                  <div class="col cols-12 cols-sm-8">
                    <div class="d-flex flex-col flex-wrap justify-center gap-1">
                      <!-- profile (tab 1)-->
                      <AccountSettings v-show="tabToShow === 'ACCOUNT'" :authProvider="authProvider"
                        :authProviderImgUrl="authProviderProfileImgUrl" @exportData="$emit('exportData')"
                        @finalizeDeactivation="$emit('finalizeDeactivation')"
                        @initPasswordReset="$emit('initPasswordReset')" />
                      <!-- email notifications (tab 2) -->
                      <div v-show="tabToShow === 'NOTIFICATIONS'" class="card m-4 elevation-6">
                        <div class="m-2 settings-option">
                          <input type="checkbox" id="enableAccountAlerts" v-model="enableAccountAlerts"
                            name="enableAccountAlerts" />
                          <label class="ml-1" for="enableAccountAlerts">{{ $t('enableAccountAlertsNotifications')
                          }}</label>
                        </div>
                        <div class="m-2 settings-option">
                          <input type="checkbox" id="enableProductNotifications" v-model="enableProductNotifications"
                            name="enableProductNotifications" />
                          <label class="ml-1" for="enableProductNotifications">{{ $t('enableProductNotifications')
                          }}</label>
                        </div>
                        <div class="divider" />
                        <div class="card-actions d-flex flex-col">
                          <!-- update notification preferences button -->
                          <button class="text settings-button" id="updateNotificationPreferences" size="small" @click="$emit('updateNotificationPreferences', {
                              enableAccountAlerts: enableAccountAlerts,
                              enableDailyFeedReport: enableDailyFeedReport,
                              enableProductNotifications: enableProductNotifications
                            })">{{ $t('updateNotificationPreferences') }}</button>
                        </div>
                      </div>
                      <!-- subscription (tab 3) -->
                      <SubscriptionSettings v-show="tabToShow === 'SUBSCRIPTION'" v-if="hasSubscription" :subscription="subscription" 
                        @cancelSubscription="$emit('cancelSubscription')" 
                        @resumeSubscription="$emit('resumeSubscription')" />
                      <!-- checkout (tab 3) -->
                      <div v-show="tabToShow === 'SUBSCRIPTION'" v-if="!hasSubscription" class="card m-4 elevation-6">
                        <div class="card-text d-flex flex-row">
                          <span class="m-4">{{ $t('supportComposableRSS') }}</span>
                        </div>
                        <div class="card-actions">
                          <button class="text settings-button" id="checkout" size="small" @click="$emit('submitOrder')">
                            {{ $t('checkout') }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsPanel",
  props: {
    account: { type: Object, default: {} },
    subscription: { type: Object, default: {} },
  },
  computed: {
    hasSubscription: function () {
            return this.subscription.status ? this.subscription.status.length > 0 : false;
        }
  },
  emits: [
    "exportData",
    "finalizeDeactivation",
    "initPasswordReset",
    "updateAccount",
    "updateNotificationPreferences",
    "toggleNotifications",
    "cancelSubscription",
    "resumeSubscription",
    "submitOrder",
  ],
  data() {
    return {
      username: '',
      emailAddress: '',
      authProvider: 'LOCAL',
      authProviderProfileImgUrl: null,
      authProviderUsername: '',
      enableAccountAlerts: true,
      enableDailyFeedReport: true,
      enableProductNotifications: true,
      showDeactivateUser: false,
      showResetPassword: false,
      isHovering: false,
      tabToShow: 'ACCOUNT', // 'NOTIFICATIONS' || 'SUBSCRIPTION' 
    }
  },
  mounted() {
    this.username = this.account.username;
    if (this.account.emailAddress) {
      this.emailAddress = this.account.emailAddress;
    }
    if (this.account.authProvider) {
      this.authProvider = this.account.authProvider;
    }
    this.authProviderProfileImgUrl = this.account.authProviderProfileImgUrl;
    if (this.account.authProviderUsername) {
      this.authProviderUsername = this.account.authProviderUsername;
    }
    let frameworkConfig = this.account.frameworkConfig;
    if (frameworkConfig) {
      let notifications = frameworkConfig.notifications;
      if (notifications) {
        this.enableAccountAlerts = this.isTrue(notifications.accountAlerts);
        this.enableDailyFeedReport = this.isTrue(notifications.dailyFeedReport);
        this.enableProductNotifications = this.isTrue(notifications.productNotifications);
      }
    }
  },
  methods: {
    isTrue(b) {
      if (!b) {
        return false;
      } else if (b.toLowerCase() === 'true') {
        return true;
      }
      return false;
    }
  }
}
</script>

<style scoped>
.logotext {
  font-family: "Russo One" !important;
}

.settings-panel {
  padding: 2rem;
}

.gap-1 {
  gap: 1rem;
}

.settings-tab {
  font-family: 'Russo One';
  padding: 1rem;
  max-width: fit-content;
  user-select: none;
  border-bottom: 1px solid transparent;
}

.settings-tab:hover,
.settings-tab:focus-visible {
  border-bottom: 1px solid lightgrey;
}
</style>
