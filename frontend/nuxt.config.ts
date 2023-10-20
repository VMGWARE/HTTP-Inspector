// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
