<template>
  <div class="app" v-if="tokenRefreshAttemptComplete">
    <LogoutButton :disabled="!isAuthenticated" @logout="logout" />

    <Banner class="panel" />

    <div v-show="formToShow === 'email_verification'" class="panel alert m-4 text-center info dark">
      {{ t('youAreNowVerified') }}
    </div>

    <AuthPanel class="panel" v-show="!isAuthenticated && !formToShow" :server-message="authServerMessage"
      :is-loading="loginIsLoading" @login="login" @pw_reset="formToShow = 'pw_reset'"
      @register="formToShow = 'register'" />

    <RegistrationRequestPanel class="panel" v-show="!isAuthenticated && formToShow === 'register'"
      :server-message="registrationServerMessage" :is-loading="registrationIsLoading" @submit="submitRegistration"
      @pw_reset="formToShow = 'pw_reset'" @auth="formToShow = null" />

    <PasswordResetRequestPanel class="panel" v-show="!isAuthenticated && formToShow === 'pw_reset'"
      :server-message="pwResetServerMessage" :is-loading="pwResetIsLoading" @submit="submitPwReset"
      @register="formToShow = 'register'" @auth="formToShow = null" />

    <PasswordUpdatePanel class="panel" v-show="!isAuthenticated && formToShow === 'pw_update'"
      :server-message="pwUpdateServerMessage" :is-loading="pwUpdateIsLoading" @submit="submitPwUpdate" />

    <SettingsPanel class="panel" v-show="isAuthenticated" :account="roAccount" 
      :is-loading="roSettingsIsLoading" @exportData="exportData" @finalizeDeactivation="finalizeDeactivation"
      @initPasswordReset="initPasswordReset" @updateNotificationPreferences="updateNotificationPreferences"
      @emailApiKey="emailApiKey" />

    <AlertBox class="ml-8 mr-8 panel" v-if="roServerMessage" @dismissAlert="clearServerMessage">
      {{ roServerMessage }}
    </AlertBox>

    <AlertBox class="m-8 panel" :priority="'NONE'" :showDismiss="false">
      <div class="font-bold pb-4">{{ $t('whatIsComposableRSS') }}</div>
      <div class="flex flex-col gap-4 text-left">
        <hr class="divider" />
        <!-- What is ComposableRSS ?-->
        <div>
          ComposableRSS (cRSS) is a REST API that allows you to programatically create, publish, and fully manage
          syndicated web feeds (RSS 2.0 and ATOM 1.0 feeds), hosted on FeedGears RSS.
        </div>
        <div>
          ComposableRSS is fully user/community-suported. 
        </div>
        <div>
          This page explains the entire API and provides exampels of each type of interaction using cURL. Please click
          here for more information about using cURL.
        </div>
        <div>
          For advanced usage, the cRSS OpenAPI V3 specification is located <a href="#">here</a>. You can use the linked document
          to generate both
          client and server code in various languages to produce and consume the cRSS API. Please click here for more
          information about OpenAPI.
        </div>
      </div>
    </AlertBox>

    <AlertBox class="ml-8 mr-8 panel" v-if="showFirstTimeUsageAlert"
      @dismissAlert="suppressFirstTimeUsageAlert" priority="NONE">
      <div class="font-bold pb-4">{{ $t('gettingStarted') }}</div>
      <div class="flex flex-col gap-4">
        <hr />
        Examples are shown using cURL. Click here for more information about cURL. 
        <!-- step 1: API requirements -->
        <div class="flex flex-col gap-4 text-left">
          <div class="font-bold">STEP 1 - ACTIVATE YOUR API CREDENTIALS </div>
          <div class="outlined rounded border-2 p-4 flex flex-col gap-4 text-left overflow-auto">
            <div>{{ $t('apiRequiresTWoHeaderValues') }}</div>
            <div>
              <pre>X-ComposableRSS-API-Key <i>{{ isAuthenticated ? roAccount.apiKey : $t('apiKey') }}</i></pre>
            </div>
            <div>
              <pre>X-ComposableRSS-API-Secret <i>{{ $t('apiSecret') }}</i></pre>
            </div>
            <div>
              {{ $t('apiSecretHasBeeenMailed') }}
            </div>
            <div>
              {{ $t('basicQueryInstructions') }}
            </div>
            <div>
              <pre>curl -H "X-ComposableRSS-API-Key {{ isAuthenticated ? roAccount.apiKey : $t('apiKey') }}" \
-H "X-ComposableRSS-API-Secret ..." \
https://api.composablerss.com/[endpoint]</pre>
            </div>
          </div>
        </div>
        <!-- step 2: -->
        <div class="flex flex-col gap-4 text-left">
          <div class="font-bold">STEP 2 - CREATE AND PUBLISH YOUR FIRST FEED</div>
          <div class="outlined rounded border-2 p-4 flex flex-col gap-4 text-left">
            <div>{{ $t('createAndPublishYourFirstFeed') }}</div>
          </div>
        </div>
        <!-- step 3: -->
        <div class="flex flex-col gap-4 text-left">
          <div class="font-bold">STEP 3 - ADD CONTENT TO YOUR FEED</div>
          <div class="outlined rounded border-2 p-4 flex flex-col gap-4 text-left">
            <div>{{ $t('addContentToYourFeed') }}</div>
          </div>
        </div>
        <!-- step 4: -->
        <div class="flex flex-col gap-4 text-left">
          <div class="font-bold">STEP 4 - ADD MEDIA TO YOUR FEED USING THE POST MEDIA MODULE</div>
          <div class="outlined rounded border-2 p-4 flex flex-col gap-4 text-left">
            <div>{{ $t('addMediaToYourFeed') }}</div>
          </div>
        </div>
        <!-- step 5: -->
        <div class="flex flex-col gap-4 text-left">
          <div class="font-bold">STEP 5 - ADD A PODCAST TO YOUR FEED USING THE ITUNES MODULE AND ENCLOSURES</div>
          <div class="outlined rounded border-2 p-4 flex flex-col gap-4 text-left">
            <div>{{ $t('addAPodcastToYourFeed') }}</div>
          </div>
        </div>
        <!-- step 6: -->
        <div class="flex flex-col gap-4 text-left">
          <div class="font-bold">STEP 6 - SETUP AUTHENTICATED USERS</div>
          <div class="outlined rounded border-2 p-4 flex flex-col gap-4 text-left">
            <div>{{ $t('setupAuthentication') }}</div>
          </div>
        </div>
        <!-- step 7: -->
        <div class="flex flex-col gap-4 text-left">
          <div class="font-bold">STEP 6 - CONFIGURE ADVANCED OPTIONS</div>
          <div class="outlined rounded border-2 p-4 flex flex-col gap-4 text-left">
            <div>{{ $t('configureAdvancedOptions') }}</div>
          </div>
        </div>
      </div>
    </AlertBox>

    <AlertBox class="m-8 panel" :priority="'NONE'" :showDismiss="false">
      <div class="font-bold pb-4">{{ $t('additionalResources') }}</div>
      <div class="flex flex-col gap-4 text-left">
        <hr class="divider" />
      </div>
    </AlertBox>

    <Footer class="panel" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import { useAuthService } from '@/services/useAuthService.ts';
import { useSettingsService } from '@/services/useSettingsService.js';
import { useNotifications } from '@/composable/useNotifications';

const route = useRoute();

const { t } = useI18n();

const {
  auth, isAuthenticated
} = useAuthService();

const notification = useNotifications({ t });

const {
  roServerMessage,
  clearServerMessage,
} = notification;

const {
  roAccount,
  roSettingsIsLoading,
  // 
  openSettings,
  exportData,
  finalizeDeactivation,
  initPasswordReset,
  emailApiKey,
  updateNotificationPreferences,
} = useSettingsService({
  auth,
  t, // i18n 
  notification,
});

function isValidTarget(target) {
  return target === 'register' ||
    target === 'pw_update' ||
    target === 'pw_reset' ||
    target === 'email_verification';
}

// server response 
const authServerMessage = ref(null);
const registrationServerMessage = ref(null); // 
const pwResetServerMessage = ref(null); // 
const pwUpdateServerMessage = ref(null); // 
// loading indicator 
const loginIsLoading = ref(false);
const registrationIsLoading = ref(false);
const pwResetIsLoading = ref(false);
const pwUpdateIsLoading = ref(false);
// form to display 
const formToShow = ref(null);
// 
const tokenRefreshAttemptComplete = ref(false);
// 
const showFirstTimeUsageAlert = ref(false);

onMounted(() => {
  console.log('route query: ' + JSON.stringify(route.query));
  let target = route.query['target'];
  formToShow.value = isValidTarget(target) ? target : null;
  // 
  let a = localStorage.getItem('showFirstTimeUsageAlert');
  showFirstTimeUsageAlert.value = (a !== 'false');
  // 
  refreshToken()
});

// TODO: use this method somewhere (button) 
function logout() {
  auth.logout()
    .catch((error) => {
      console.error("unable to logout due to: " + error);
    }).finally(() => {
      console.log("auth: logout complete");
    });
}

function login(loginRequest) {
  let username = loginRequest.username;
  let password = loginRequest.password;
  authServerMessage.value = null;
  if (!username && !password) {
    authServerMessage.value = t("usernameAndPasswordAreRequired");
    return;
  }
  if (!username && password) {
    authServerMessage.value = t("usernameIsRequired");
    return;
  }
  if (username && !password) {
    authServerMessage.value = t("passwordIsRequired");
    return;
  }

  loginIsLoading.value = true;
  auth.loginWithSupplied(username, password, false)
    .then(() => {
      authServerMessage.value = null;
    })
    .catch((error) => {
      authServerMessage.value = error;
      if (!authServerMessage.value) {
        authServerMessage.value = t("somethingHorribleHappened");
      }
    })
    .finally(() => {
      loginIsLoading.value = false;
    });
}

function submitRegistration(registrationRequest) {
  let username = registrationRequest.username;
  let email = registrationRequest.email;
  let password = registrationRequest.password;
  let userType = registrationRequest.userType;
  registrationServerMessage.value = null;
  if (!username || !email || !password) {
    registrationServerMessage.value = t('registrationRequirements');
    return;
  }

  registrationIsLoading.value = true;
  auth.registerWithSupplied(username, email, password, userType)
    .then((response) => {
      auth.loginWithSupplied(response.username, response.password, false)
        .then(() => {
          formToShow.value = null;
        })
        .catch((error) => {
          registrationServerMessage.value = error;
        })
        .finally(() => {
          registrationIsLoading.value = false;
        });
    })
    .catch((error) => {
      registrationServerMessage.value = error;
    })
    .finally(() => {
      registrationIsLoading.value = false;
    });
}

function submitPwReset(pwResetRequest) {
  let username = pwResetRequest.username;
  let email = pwResetRequest.email;
  pwResetServerMessage.value = null;
  if (!username || !email) {
    pwResetServerMessage.value = t('pwResetRequestMessage');
    return;
  }

  pwResetIsLoading.value = true;
  auth.pwResetWithSupplied(username, email)
    .then(() => {
      pwResetServerMessage.value = t('checkEmailForFurther');
    })
    .catch((error) => {
      pwResetServerMessage.value = error;
    })
    .finally(() => {
      pwResetIsLoading.value = false;
    });
}

function submitPwUpdate(pwUpdateRequest) {
  let newPassword = pwUpdateRequest.newPassword;
  let newPasswordConfirmed = pwUpdateRequest.newPasswordConfirmed;
  pwUpdateServerMessage.value = null;
  if (!newPassword || !newPasswordConfirmed) {
    return;
  }

  pwUpdateIsLoading.value = true;
  auth.pwUpdateWithSupplied(newPassword.value, newPasswordConfirmed.value)
    .then(() => {
      pwUpdateServerMessage.value = t('pwUpdated');
    })
    .catch((error) => {
      pwUpdateServerMessage.value = error;
    })
    .finally(() => {
      pwUpdateIsLoading.value = false;
    });
}

function refreshToken() {
  auth.getTokenSilently()
    .catch(() => { })
    .finally(() => {
      if (isAuthenticated.value) {
        console.log("app: authenticated on mount");
      } else {
        console.log("app: not authenticated on mount");
      }
      tokenRefreshAttemptComplete.value = true;
    });
}

function suppressFirstTimeUsageAlert() {
  localStorage.setItem('showFirstTimeUsageAlert', false);
  showFirstTimeUsageAlert.value = false;
}

watch(isAuthenticated, (newIsAuthenticated) => {
  if (newIsAuthenticated) {
    openSettings();
  } else {
    // TODO: discard settings 
  }
});

</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  contain: content;
}

/* TODO: relocate to main */
.panel {
  min-width: 310px;
}
</style>

<style>
pre {
  margin: .4rem;
  padding: .8rem;
  border: 1px solid darkgrey;
  border-radius: 3px;
  box-shadow: 1px 1px 1px grey;
  color: rgb(209 213 219);
  background-color: rgb(17 24 39);
  overflow: auto;
}
</style>