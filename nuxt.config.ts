export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-tiptap-editor",
    "nuxt-tiptap-editor",
  ],
  css: ["v-calendar/style.css"],
  tiptap: {
    prefix: "Tiptap", // Prefixo para os componentes do Tiptap
  },
});
