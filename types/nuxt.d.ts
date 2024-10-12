declare module 'nuxt/schema' {
  interface RuntimeConfig {
    KUN_DATABASE_URL: string

    REDIS_HOST: string
    REDIS_PORT: string
  }

  interface PublicRuntimeConfig {
    KUN_GALGAME_URL: string
    ACGNGAME_URL: string
  }
}

export {}
