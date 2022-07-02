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
    rules: {
        // We neither use SSR nor allow users to dynamical add content.
        'vue/no-v-html': 'off',
        // https://palantir.github.io/tslint/rules/no-use-before-declare/
        // Since most modern TypeScript doesn’t use var,
        //  this rule is generally discouraged and is kept around for legacy purposes.
        //  It is slow to compute, is not enabled in the built-in configuration presets,
        //  and should not be used to inform TSLint design decisions.
        'no-use-before-define': 'off',
    },
}
