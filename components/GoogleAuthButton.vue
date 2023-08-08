<template>
  <button class="login-with-google-btn flex-grow-1 elevation-1 outlined" prepend-icon="fa-google" @click="googleOauth2()">
    <span style="white-space: normal;letter-spacing: normal;text-transform: none;">
      {{ $t('signinWithGoogle') }}
    </span>
    <div class="tooltip" location="end" activator="parent" open-delay="2000" :aria-label="$t('signinWithGoogle')">
      {{ $t('signinWithGoogle') }}
    </div>
  </button>
</template>

<script setup>
const compRssOriginUrl = import.meta.env.VITE_COMPRSS_ORIGIN_URL;

function googleOauth2() {
  window.location = compRssOriginUrl + '/oauth2/authorize/google?redirect_uri=' + process.env.VUE_APP_COMPRSS_ORIGIN_URL + '/app';
}
</script>

<style scoped>
.login-with-google-btn {
  font-family: 'Russo One';
  padding: 1rem;
  max-width: fit-content;
}
</style>