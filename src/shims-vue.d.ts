/// <reference types="vite/client" />

// Mocks all files ending in `.vue` showing them as plain Vue instances
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}

// TODO WORKAROUND UNTIL vuejs/eslint-plugin-vue v10 See https://github.com/vuejs/eslint-plugin-vue/issues/2166 & https://github.com/vuejs/eslint-plugin-vue/issues/2124
declare module 'eslint-plugin-vue'
