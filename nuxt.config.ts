// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/Portofolio',
  },
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss']
})
