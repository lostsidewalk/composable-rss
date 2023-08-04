<template>
    <Banner />

    <AuthPanel
      v-show="!isAuthenticated"
      :server-message="authServerMessage"
      :is-loading="loginIsLoading"
      @login="login"
    />

    <SubscriptionPanel v-show="isAuthenticated" />

    <DocsPanel />

    <Footer />
</template>

<script setup>
import { onMounted } from 'vue';
// import { ref, reactive, computed, watch, onBeforeUnmount, nextTick } from 'vue';
import { ref } from 'vue';

import { useAuthService } from '@/services/useAuthService.ts';
import { useI18n } from 'vue-i18n';

const {
  auth, isAuthenticated 
} = useAuthService();

onMounted(() => {
  refreshToken()
});

const authServerMessage = ref(null);
const loginIsLoading = ref(false);
const { t } = useI18n();

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

function refreshToken() {
    auth.getTokenSilently()
    .catch(() => {})
    .finally(() => {
      if (isAuthenticated.value) {
        console.log("app: authenticated on mount");
      } else {
        console.log("app: not authenticated on mount");
      }
    });
}
</script>
