import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  srcDir: "src/",
  components: [
    "~/components",
    // { path: "~/sts-modules/login/components", prefix: "login" },
  ],
  app: {
    head: {
      // titleTemplate: "sts" + " - %s",
      // title: "sts",
      meta: [],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/fonts/phosphor/style.css",
        },
      ],
      style: [],
      noscript: [],
    },
  },
  build: {
    transpile: ["vuetify", "vue-sonner"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config: any) => {
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: ["~/assets/main.scss", "~/assets/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
