module.exports = {
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/recommended', 'plugin:vuetify/recommended', 'plugin:nuxt/recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
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
