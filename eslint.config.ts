import js from '@eslint/js'
import pluginQuasar from '@quasar/app-vite/eslint'
import vueEslintConfigPrettier from '@vue/eslint-config-prettier'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default defineConfigWithVueTs(
  {
    name: 'ignores',
    ignores: ['.github/**', '.husky/**', '.idea/**', 'patches/**'],
  },
  ...pluginQuasar.configs.recommended(),
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.ts', '**/*.vue'],
    rules: {
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    },
  },
  vueTsConfigs.strictTypeChecked,
  vueTsConfigs.strictTypeChecked,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2025,
        ...globals.nodeBuiltin,
        process: 'readonly', // process.env.*
        ga: 'readonly', // Google Analytics
        cordova: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly', // BEX related
        browser: 'readonly', // BEX related
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
      // allow debugger during development only
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },
  {
    files: ['src-pwa/custom-service-worker.ts'],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
      },
    },
  },
  vueEslintConfigPrettier,
)
