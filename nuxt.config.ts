export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxt/eslint"],

  routeRules: {
    "/game/**": { ssr: false },
    "/play/**": { ssr: false },
  },

  pinia: {
    storesDirs: ["./app/stores/**"],
  },

  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        skipLibCheck: true,
        typeRoots: ["./node_modules/@types", "./node_modules/phaser/types"],
        lib: ["ESNext", "DOM", "DOM.Iterable"],
      },
    },
  },

  app: {
    head: {
      title: "QazOpoly",
    },
  },
});
