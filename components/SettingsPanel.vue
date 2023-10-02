<template>
  <div class="settings-panel m-8">
    <div class="flex row text-center justify-center">
      <div class="flex-grow cols-sm-10">
        <div @mouseover="isHovering = true" @mouseleave="isHovering = false"
          :class="{ 'elevation-7': isHovering, 'elevation-6': !isHovering }" class="card flat shadow-md">
          <div class="row">
            <div class="col flex-grow">
              <div class="card-title">{{ $t("settings") }}</div>
              <div class="card-text">
                <div class="row gap-5">
                  <div class="col flex-grow cols-sm-8 m-4">
                    <button class="settings-tab rounded shadow-md" @click="setTab('ACCOUNT')"
                      :class="{ 'active': tabToShow === 'ACCOUNT' }">
                      {{ $t('account') }}
                    </button>
                    <button class="settings-tab rounded shadow-md" @click="setTab('NOTIFICATIONS')"
                      :class="{ 'active': tabToShow === 'NOTIFICATIONS' }">
                      {{ $t('notifications') }}
                    </button>
                    <button class="settings-tab rounded shadow-md" @click="setTab('SUPPORT')"
                      :class="{ 'active': tabToShow === 'SUPPORT' }">
                      {{ $t('supportComposableRSS') }}
                    </button>
                  </div>
                </div>
                <div class="row text-center">
                  <div class="col flex-grow cols-sm-8">
                    <div class="flex flex-col flex-wrap justify-center gap-1">
                      <AccountSettings v-show="tabToShow === 'ACCOUNT'" v-if="account" :authProvider="account.authProvider"
                        :authProviderProfileImgUrl="account.authProviderProfileImgUrl" @exportData="$emit('exportData')"
                        :emailAddress="account.emailAddress"
                        :apiKey="account.apiKey"
                        :totalPosts="1"
                        :totalQueues="2"
                        @finalizeDeactivation="$emit('finalizeDeactivation')"
                        @initPasswordReset="$emit('initPasswordReset')" @emailApiKey="$emit('emailApiKey')" />
                      <div v-show="tabToShow === 'NOTIFICATIONS'" class="card m-4">
                        <div class="m-2 settings-option">
                          <input type="checkbox" id="enableAccountAlerts" v-model="enableAccountAlerts"
                            name="enableAccountAlerts" />
                          <label class="ml-1" for="enableAccountAlerts">
                            {{ $t('enableAccountAlertsNotifications') }}
                          </label>
                        </div>
                        <div class="divider" />
                        <div class="card-actions">
                          <button class="settings-button rounded shadow-md" id="updateNotificationPreferences"
                            size="small" @click="updateNotificationPreferences">
                            {{ $t('updateNotificationPreferences') }}
                          </button>
                        </div>
                      </div>
                      <div v-show="tabToShow === 'SUPPORT'" class="card m-4">
                        <div class="card-text flex flex-row">
                          <span class="m-4">{{ $t('supportComposableRSS') }}</span>
                        </div>
                        <div class="card-actions">
                          <button class="settings-button rounded shadow-md" id="supportUsOnPatreon" size="small"
                            @click="goToPatreon">
                            {{ $t('supportUsOnPatreon') }}
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
  },
  emits: [
    "exportData",
    "finalizeDeactivation",
    "initPasswordReset",
    "emailApiKey",
    "updateAccount",
    "updateNotificationPreferences",
    "toggleNotifications",
  ],
  data() {
    return {
      enableAccountAlerts: true,
      isHovering: false,
      tabToShow: "ACCOUNT", // 'NOTIFICATIONS' || 'SUPPORT'
    };
  },
  methods: {
    setTab(tab) {
      this.tabToShow = tab;
    },
    updateNotificationPreferences() {
      this.$emit("updateNotificationPreferences", {
        enableAccountAlerts: this.enableAccountAlerts,
      });
    },
    goToPatreon() {
      window.location='https://www.patreon.com/lostsidewalk';
    },
  },
};
</script>

<style scoped>
.gap-1 {
  gap: 1rem;
}

.settings-tab {
  font-family: 'Russo One';
  padding: 1rem;
  margin: .4rem;
  max-width: fit-content;
  user-select: none;
  border: 1px solid slateblue;
}

.settings-tab.active {
  background-color: lightgray;
}
</style>
