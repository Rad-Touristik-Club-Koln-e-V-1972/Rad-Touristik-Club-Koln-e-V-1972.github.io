// TODO Workaround for https://github.com/vuejs/eslint-config-prettier/issues/7#issuecomment-1006761992
//  remove package @rushstack/eslint-patch if fixed
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    env: {
        browser: true,
        node: false,
    },
    extends: ['eslint:recommended', '@nuxtjs/eslint-config-typescript', 'plugin:vuetify/recommended', 'plugin:nuxt/recommended', '@vue/eslint-config-prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    root: true,
    // add your custom rules here
    rules: {},
}
