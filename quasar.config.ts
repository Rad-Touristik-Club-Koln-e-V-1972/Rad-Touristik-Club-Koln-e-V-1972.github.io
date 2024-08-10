/* eslint-env node */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

import { configure } from 'quasar/wrappers'
import type { RouteRecordRaw } from 'vue-router'
import routes from 'src/router/routes'

const generateRootRoute = () => {
  const mainRoutes = routes[0]
  let ret: string[] = []

  // Avoid "//" at the beginning of the path if the root is "/".
  if (mainRoutes?.children) ret = generateRoutesHelper(mainRoutes.path === '/' ? '#' : `${mainRoutes.path}#`, mainRoutes.children)

  return ret
}

const generateRoutesHelper = (rootPath: string, children: RouteRecordRaw[]) => {
  const ret: string[] = []

  children.forEach((child) => {
    if (child.children) ret.push(...generateRoutesHelper(`${rootPath}/${child.path}`, child.children))
    else if (child.name && !child.path.includes('/:')) ret.push(`${rootPath}/${child.path}`)
  })

  return ret
}

export default configure((/*ctx*/) => ({
  // animations: 'all', // --- includes all animations
  // https://v2.quasar.dev/options/animations
  animations: 'all',

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-browser-extensions/configuring-bex
  bex: {
    // contentScripts: ['my-content-script'],
    // extendBexManifestJson (json) {},
    // extendBexScriptsConf (esbuildConf) {},
  },

  // app boot file (/src/boot)
  // --> boot files are part of "main.js"
  // https://v2.quasar.dev/quasar-cli-vite/boot-files
  boot: ['vue-masonry-wall'],

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#build
  build: {
    // analyze: true,
    // distDir
    // env: {},
    // extendViteConf (viteConf) {},
    // ignorePublicFolder: true,
    // minify: false,
    // polyfillModulePreload: true,
    // publicPath: '/',
    target: {
      // browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
      // node: 'node20',
    },
    // rebuildCache: true, // rebuilds Vite/linter/etc cache on startup
    // viteVuePluginOptions: {},
    vitePlugins: [
      [
        'vite-plugin-checker',
        {
          eslint: {
            dev: {
              // TODO --flag unstable_ts_config WORKAROUND FOR https://eslint.org/docs/latest/use/configure/configuration-files#typescript-configuration-files
              overrideConfig: { flags: ['unstable_ts_config'] },
            },
            lintCommand: 'eslint',
            useFlatConfig: true,
          },
          vueTsc: {
            tsconfigPath: 'tsconfig.vue-tsc.json',
          },
        },
        { server: false },
      ],
      [
        'vite-plugin-sitemap',
        {
          dynamicRoutes: generateRootRoute(),
          hostname: 'https://www.rtc-koeln.de',
          outDir: 'dist/spa',
        },
      ],
    ],
    // vueDevtools,
    // vueOptionsAPI: false,
    // vueRouterBase,
    vueRouterMode: 'hash', // available values: 'hash', 'history'
  },

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-capacitor-apps/configuring-capacitor
  capacitor: {
    hideSplashscreen: true,
  },

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-cordova-apps/configuring-cordova
  cordova: {
    // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
  },

  // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#css
  css: ['font.scss'],

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#devServer
  devServer: {
    // https: true
    open: true, // opens browser window automatically
  },

  // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/configuring-electron
  electron: {
    builder: {
      // https://www.electron.build/configuration/configuration
      appId: 'rad-touristik-club-koln-e-v-1972.github.io',
    },
    bundler: 'packager', // 'packager' or 'builder'
    // extendElectronMainConf (esbuildConf) {},
    // extendElectronPreloadConf (esbuildConf) {},
    // extendPackageJson (json) {},
    // specify the debugging port to use for the Electron app when running in development mode
    inspectPort: 5858,
    packager: {
      // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
      // OS X / Mac App Store
      // appBundleId: '',
      // appCategoryType: '',
      // osxSign: '',
      // protocol: 'myapp://path',
      // Windows only
      // win32metadata: { ... }
    },
    // Electron preload scripts (if any) from /src-electron, WITHOUT file extension
    preloadScripts: ['electron-preload'],
  },

  // https://github.com/quasarframework/quasar/tree/dev/extras
  extras: [
    // 'eva-icons',
    // 'fontawesome-v6',
    // 'ionicons-v4',
    // 'line-awesome',
    // 'material-icons', // optional, you are not bound to it
    // 'mdi-v7',
    // 'roboto-font', // optional, you are not bound to it
    // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!
    // 'themify',
  ],

  // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#framework
  framework: {
    config: {
      screen: {
        bodyClasses: true,
      },
    },

    // For special cases outside of where the auto-import strategy can have an impact
    // (like functional components as one of the examples),
    // you can manually specify Quasar components/directives to be available everywhere:
    //
    // components: [],
    // directives: [],

    iconSet: 'svg-mdi-v7', // Quasar icon set
    lang: 'de', // Quasar language pack

    // Quasar plugins
    plugins: [],
  },

  // https://v2.quasar.dev/quasar-cli-vite/prefetch-feature
  // preFetch: true,

  // https://v2.quasar.dev/quasar-cli-vite/developing-pwa/configuring-pwa
  pwa: {
    // extendGenerateSWOptions (cfg) {},
    // extendInjectManifestOptions (cfg) {},
    // extendManifestJson (json) {},
    // extendPWACustomSWConf (esbuildConf) {},
    // injectPwaMetaTags: false,
    // manifestFilename: 'manifest.json'
    // swFilename: 'sw.js',
    // useCredentialsForManifestTag: true,
    workboxMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
  },

  // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#sourcefiles
  // sourceFiles: {
  //   rootComponent: 'src/App.vue',
  //   router: 'src/router/index',
  //   store: 'src/store/index',
  //   pwaRegisterServiceWorker: 'src-pwa/register-service-worker',
  //   pwaServiceWorker: 'src-pwa/custom-service-worker',
  //   pwaManifestFile: 'src-pwa/manifest.json',
  //   electronMain: 'src-electron/electron-main',
  //   electronPreload: 'src-electron/electron-preload'
  //   bexManifestFile: 'src-bex/manifest.json
  // },

  // https://v2.quasar.dev/quasar-cli-vite/developing-ssr/configuring-ssr
  ssr: {
    // extendPackageJson (json) {},
    // extendSSRWebserverConf (esbuildConf) {},
    // manualPostHydrationTrigger: true,
    // manualStoreHydration: true,
    // manualStoreSerialization: true,
    // manualStoreSsrContextInjection: true,
    middlewares: [
      'render', // keep this as last one
    ],
    prodPort: 3000, // The default port that the production server should use
    // (gets superseded if process.env.PORT is specified at runtime)
    pwa: false,
    // pwaExtendGenerateSWOptions (cfg) {},
    // pwaExtendInjectManifestOptions (cfg) {}
    // pwaOfflineHtmlFilename: 'offline.html', // do NOT use index.html as name!
    // will mess up SSR
  },
}))
