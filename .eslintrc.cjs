module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        'vue/setup-compiler-macros': true,
    },
    // Rules order is important, please avoid shuffling them
    extends: [
        // Base ESLint recommended rules
        'eslint:recommended',
        // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        // See https://eslint.vuejs.org/rules/#available-rules
        'plugin:vue/vue3-recommended',
        // https://github.com/prettier/eslint-config-prettier#installation
        'prettier',
    ],
    globals: {
        __QUASAR_SSR__: 'readonly',
        __QUASAR_SSR_CLIENT__: 'readonly',
        __QUASAR_SSR_PWA__: 'readonly',
        __QUASAR_SSR_SERVER__: 'readonly',
        __statics: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly',
        cordova: 'readonly',
        ga: 'readonly', // Google Analytics
        process: 'readonly',
    },
    // TODO WORKAROUND FOR https://github.com/quasarframework/quasar/issues/9455
    ignorePatterns: ['quasar.config.js'],
    // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
    // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
    // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
    parserOptions: {
        extraFileExtensions: ['.vue'],
        parser: require.resolve('@typescript-eslint/parser'),
        project: true,
        tsconfigRootDir: __dirname,
    },
    plugins: [
        // required to apply rules which need type information
        '@typescript-eslint',
        // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
        // required to lint *.vue files
        'vue',
        // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
        // Prettier has not been included as plugin to avoid performance impact
        // add it as an extension for your IDE
    ],
    // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
    // This option interrupts the configuration hierarchy at this file
    // Remove this if you have a higher level ESLint config file (it usually happens into a monorepos)
    root: true,
    // add your custom rules here
    rules: {
        // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
        '@typescript-eslint/no-var-requires': 'off',
        // allow debugger during development only
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-v-html': 'off',
    },
}
