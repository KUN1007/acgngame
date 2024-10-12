// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  compatibilityDate: '2024-10-12',

  devServer: {
    host: '127.0.0.1',
    port: 3007
  },

  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/color-mode',
    'dayjs-nuxt'
  ],

  // Frontend
  css: ['~/assets/css/index.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
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
