// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      comprssApiUrl: 'http://localhost:8080',
      comprssOriginUrl: 'http://localhost:3000',
      feedgearsFeedUrl: 'http://localhost:8081',
    }
  },
})
