// TODO Workaround for https://github.com/vuejs/eslint-config-prettier/issues/7#issuecomment-1006761992
//  remove package @rushstack/eslint-patch if fixed
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    env: {
        browser: true,
        node: false,
    },
    extends: [
        'eslint:recommended',
        '@nuxtjs/eslint-config-typescript',
        '@vue/eslint-config-typescript/recommended',
        'plugin:nuxt/recommended',
        'plugin:vuetify/recommended',
        '@vue/eslint-config-prettier',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    root: true,
    // add your custom rules here
    rules: {
        // TODO WORKAROUND WITH AN app.vue TO layouts/app.vue AND error.vue TO layouts/error.vue UNTIL NUXT3 WITH NATIVE app.vue AND error.vue SUPPORT AND VUE-ROUTER IS USABLE
        //  SEE https://github.com/nuxt/bridge/issues/34 & https://github.com/nuxt/bridge/issues/415
        'vue/multi-word-component-names': 'off',
    },
}
