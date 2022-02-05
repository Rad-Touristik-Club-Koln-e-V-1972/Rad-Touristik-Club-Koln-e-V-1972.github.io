/*
 * Created by Martin Dünkelmann on 06.02.22, 15:57
 * Copyright (c) 2022. All rights reserved.
 *
 * Last modified 06.02.22, 15:57
 */

import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // TODO WORKAROUND FOR https://github.com/nuxt/framework/issues/886 https://github.com/nuxt/framework/pull/2652
  ssr: true,
  // ssr: false, // Disable Server Side rendering since the targeted webserver doesn't run Node.JS

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Rad-Touristik-Club Köln e.V. 1972',
    title: 'Rad-Touristik-Club Köln e.V. 1972',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // TODO ERROR REPORTED https://github.com/nuxt-community/vuetify-module/issues/492
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['@/assets/variables.scss'],
    optionsPath: '@/vuetify.options.ts',
    treeShake: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/vuetify/],
  },
})
