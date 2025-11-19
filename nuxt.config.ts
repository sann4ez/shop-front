// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_URL || "",
      APP_DOMAIN: process.env.NUXT_APP_DOMAIN || "",
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxt/fonts",
    "dayjs-nuxt",
    "nuxt-typed-router",
     "@pinia/nuxt",
    "nuxt-easy-lightbox",
  ],
  fonts: {
    families: [{ name: "montserrat", provider: "google" }],
  },
  css: ["~/assets/scss/global.scss"],
  srcDir: "src/",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/_reset.scss" as *;
            @use "~/assets/scss/_vars.scss" as *;
            @use "~/assets/scss/_mixins.scss" as *;
            @use "~/assets/scss/_base.scss" as *;
            @use "~/assets/scss/_header.scss" as *;
          `,
        },
      },
    },
  },
});
