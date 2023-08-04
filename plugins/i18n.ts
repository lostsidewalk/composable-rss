import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en: {
        "composableRss": "ComposableRSS",
        "authentication": "Authentication",
        "subscription": "Subscription", 
        "apiDocs": "API Documentation", 
        "footer": "Footer", 
        // 
        "loginToComposableRss": "Login to ComposableRSS",
        "username": "Username",
        "password": "Password",
        "login": "Login",
        "accountRecoveryHere": "-- account recovery here --",
        "registerHere": "-- register here --",
        "privacyPolicy": "Privacy Policy",
        "signinWithGoogle": "Sign-In with Google",
        // 
        "usernameAndPasswordAreRequired": "Username and password are required",
        "usernameIsRequired": "Username is required",
        "passwordIsRequired": "Password is required",
        "somethingHorribleHappened": "Something horrible happened"
      }
    }
  })

  vueApp.use(i18n)
})