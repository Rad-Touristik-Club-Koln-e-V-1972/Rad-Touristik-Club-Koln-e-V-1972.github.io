/*
 * Created by Martin Dünkelmann on 30.12.21, 22:53
 * Copyright (c) 2021. All rights reserved.
 *
 * Last modified 30.12.21, 22:53
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
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['error'],
      },
    ],
  },
}
