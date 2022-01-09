/*
 * Created by Martin Dünkelmann on 10.01.22, 00:36
 * Copyright (c) 2022. All rights reserved.
 *
 * Last modified 10.01.22, 00:36
 */

import { defineNuxtConfig } from '@nuxt/bridge'
import colors from 'vuetify/es5/util/colors'

export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  ssr: false, // Disable Server Side rendering since the targeted webserver doesn't run Node.JS

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

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      options: { customProperties: true },
      themes: {
        dark: {
          primary: colors.shades.black,
          accent: '#ed5700',
          secondary: colors.shades.white,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: colors.shades.white,
          accent: '#ed5700',
          secondary: colors.shades.black,
          info: colors.teal.darken1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
    treeShake: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
})
