// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    host: '127.0.0.1',
    port: 3007
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    'dayjs-nuxt'
  ],

  // Frontend
  css: ['~/assets/css/index.scss'],
  vite: {
    esbuild: {
      drop: ['console', 'debugger']
    },
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  piniaPersistedstate: {
    cookieOptions: {
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'strict'
    }
  }
})
