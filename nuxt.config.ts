// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
      public: {
          bucketUrl: process.env.BUCKET_URL
      }
  },
  modules: [
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt',
      // '@nuxt/supabase',
      '@vite-pwa/nuxt',
      'nuxt-icon'],
  pages: true
})