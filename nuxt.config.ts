// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/sitemap",
    "@zadigetvoltaire/nuxt-gtm"
  ],
  gtm: {
    id: 'UA-85677153-3'
  },
  site: {
    url: 'https://samuelolaegbe.netlify.app',
    name: 'Samuel Olaegbe | Software Engineer',
  },
})