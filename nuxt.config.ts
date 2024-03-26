// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    host: '127.0.0.1',
    port: 3000
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon',
    'nuxt-typed-router',
    '@nuxtjs/color-mode'
  ],

  // Frontend
  css: ['~/assets/css/index.scss'],
  vite: {
    esbuild: {
      drop: ['console', 'debugger']
    }
  },
  piniaPersistedstate: {
    cookieOptions: {
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'strict'
    }
  }
})
