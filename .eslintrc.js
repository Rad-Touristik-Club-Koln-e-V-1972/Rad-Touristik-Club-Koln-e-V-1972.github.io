module.exports = {
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/recommended', 'plugin:nuxt/recommended', 'prettier'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
    },
    plugins: ['vue'],
    root: true,
    // add your custom rules here
    rules: {
        'vue/multi-word-component-names': 'off',
        // We neither use SSR nor allow users to dynamical add content.
        'vue/no-v-html': 'off',
    },
}
