<template>
  <button class="login-with-google-btn elevation-1 shadow-md elevation-1 rounded" prepend-icon="fa-google" @click="googleOauth2()">
    <span style="white-space: normal;letter-spacing: normal;text-transform: none;">
      {{ $t('signinWithGoogle') }}
    </span>
    <div class="tooltip" location="end" activator="parent" open-delay="2000" :aria-label="$t('signinWithGoogle')">
      {{ $t('signinWithGoogle') }}
    </div>
  </button>
</template>

<script setup>
const compRssOriginUrl = import.meta.env.VITE_COMPRSS_API_URL;

function googleOauth2() {
  window.location = compRssOriginUrl + '/oauth2/authorize/google?redirect_uri=' + import.meta.env.VITE_COMPRSS_ORIGIN_URL + '/app';
}
</script>

<style scoped>
.login-with-google-btn {
  font-family: 'Russo One';
  padding: 1rem;
  width: 20vw;
  min-width: fit-content;
  user-select: none;
}
</style>