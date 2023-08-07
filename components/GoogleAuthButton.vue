<template>
  <button
    class="login-with-google-btn flex-grow-1 elevation-1 outlined"
    prepend-icon="fa-google"
    @click="googleOauth2()"
  >
    <span style="white-space: normal;letter-spacing: normal;text-transform: none;">
      {{ $t('signinWithGoogle') }}
    </span>
    <div class="tooltip"
      location="end"
      activator="parent"
      open-delay="2000"
      :aria-label="$t('signinWithGoogle')"
    >
      {{ $t('signinWithGoogle') }}
    </div>
  </button>
</template>

<script>
export default {
  name: "GoogleAuthButton",
  methods: {
    googleOauth2() {
      window.location=process.env.VUE_APP_COMPRSS_API_URL + '/oauth2/authorize/google?redirect_uri=' + process.env.VUE_APP_COMPRSS_ORIGIN_URL + '/app';
    },
  }
}
</script>

<style scoped>
.login-with-google-btn {
  font-family: 'Russo One';
  padding: 1rem;
  max-width: fit-content;
}
</style>