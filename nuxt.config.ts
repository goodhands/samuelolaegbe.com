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
    id: 'GTM-K3JCQ48T'
  },
  site: {
    url: 'https://samuelolaegbe.netlify.app',
    name: 'Samuel Olaegbe | Software Engineer',
    title: 'Samuel Olaegbe | Software Engineer',
  },
})