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

    <SettingsPanel class="panel" v-show="isAuthenticated" :account="roAccount" :is-loading="roSettingsIsLoading"
      @exportData="exportData" @finalizeDeactivation="finalizeDeactivation" @initPasswordReset="initPasswordReset"
      @updateNotificationPreferences="updateNotificationPreferences" @emailApiKey="emailApiKey" />

    <AlertBox class="m-8 mb-0 panel" v-if="roServerMessage" @dismissAlert="clearServerMessage">
      {{ roServerMessage }}
    </AlertBox>

    <AlertBox class="m-8 mb-0 panel" :priority="'NONE'" :showDismiss="false">
      <WhatIsComposableRSS />
    </AlertBox>

    <AlertBox v-if="showFirstTimeUsageAlert" class="m-8 mb-0 panel" priority="NONE"
      @dismissAlert="suppressFirstTimeUsageAlert">
      <GettingStarted />
    </AlertBox>

    <AlertBox class="m-8 mb-0 panel" priority="NONE" :showDismiss="false">
      <UsingTheApi />
    </AlertBox>

    <AlertBox class="m-8 mb-0 panel" :priority="'NONE'" :showDismiss="false">
      <AdditionalResources />
    </AlertBox>

    <Footer class="panel" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSeoMeta } from 'nuxt/app';
import { useHead } from 'nuxt/app';

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

useHead({
  htmlAttrs: { lang: 'en' },
  style: 'font-size: 12px',
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'img/icons/favicon-32x32.png' },
  ],
});

useSeoMeta({
  title: "ComposableRSS",
  ogTitle: "ComposableRSS",
  description: "ComposableRSS",
  ogDescription: "ComposableRSS",
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
  padding: .8rem;
  border: 1px solid darkgrey;
  border-radius: 5px;
  box-shadow: 1px 1px 1px grey;
  color: rgb(209 213 219);
  background-color: rgb(17 24 39);
  overflow: auto;
  width: 100%;
}

a {
  color: lightslategray;
}

a:hover,
a:focus-visible {
  text-decoration: underline;
}

.green {
  color: lightgreen;
}

.blue {
  color: lightskyblue;
}

.red {
  color: lightcoral;
}

.curl-request {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: .8rem;
}
</style>