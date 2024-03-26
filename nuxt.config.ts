// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    host: '127.0.0.1',
    port: 1007,
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@pinia-plugin-persistedstate/nuxt',
    'dayjs-nuxt',
    'nuxt-icon',
    'nuxt-typed-router',
    '@nuxtjs/color-mode',
  ],
})
