declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string
    VUE_ROUTER_BASE: string | undefined
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined
  }
}

declare module '@quasar/app-vite/eslint'
