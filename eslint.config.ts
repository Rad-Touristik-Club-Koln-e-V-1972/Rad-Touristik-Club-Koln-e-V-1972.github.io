import vueEslintConfigPrettier from '@vue/eslint-config-prettier'
import vueEslintConfigTS from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    name: 'ignores',
    ignores: ['.github/**', '.husky/**', '.idea/**', '.quasar/**', 'dist/**', 'node_modules/**', 'patches/**', 'src-capacitor/**', 'src-cordova/**', 'quasar.config.*.temporary.compiled*'],
  },
  ...pluginVue.configs['flat/essential'],
  ...vueEslintConfigTS({ extends: ['strictTypeChecked', 'stylisticTypeChecked'] }),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2025,
        ...globals.nodeBuiltin,
        Capacitor: 'readonly',
        __QUASAR_SSR_CLIENT__: 'readonly',
        __QUASAR_SSR_PWA__: 'readonly',
        __QUASAR_SSR_SERVER__: 'readonly',
        __QUASAR_SSR__: 'readonly',
        __statics: 'readonly',
        chrome: 'readonly',
        cordova: 'readonly',
        // Google Analytics
        ga: 'readonly',
        process: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue'],
        project: true,
        sourceType: 'module',
      },
    },
  },
  {
    name: 'rules',
    rules: {
      'vue/no-v-html': 'off',
    },
  },
  vueEslintConfigPrettier,
]
