/*
 * Created by Martin Dünkelmann on 05.02.22, 14:35
 * Copyright (c) 2022. All rights reserved.
 *
 * Last modified 05.02.22, 14:34
 */

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'plugin:vue/recommended', 'plugin:vuetify/base', 'plugin:prettier-vue/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'warn',
  },
}
