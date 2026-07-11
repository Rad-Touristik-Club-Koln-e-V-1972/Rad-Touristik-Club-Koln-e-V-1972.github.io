// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import * as fs from "node:fs";
import * as path from "node:path";
import { defineConfig } from "#q-app";

// TODO Workaround für
//  https://github.com/jbaubree/vite-plugin-sitemap/issues/91
//  https://github.com/jbaubree/vite-plugin-pages-sitemap/issues/814
const generateRootRoute = () => {
  const filePath = path.resolve(process.cwd(), "src/router/typed-router.d.ts");

  if (!fs.existsSync(filePath)) {
    console.log(
      "⚠️ typed-router.d.ts existiert noch nicht. Sitemap wird beim nächsten Build generiert."
    );
    return [];
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");

  const routeRegex = /'(\/[^']*)':\s*RouteRecordInfo/g;
  const routes = new Set<string>(); // Set verhindert doppelte Einträge nach der Bereinigung
  let match;

  while ((match = routeRegex.exec(fileContent)) !== null) {
    let routePath = match[1];

    if (!routePath) {
      continue;
    }

    // 1. Entfernt alle runden Klammern samt Inhalt – z.B. /(index)/about -> //about
    routePath = routePath.replace(/\([^)]*\)/g, "");

    // 2. Bereinigt doppelte Schrägstriche, die durch das Löschen entstanden sind – z.B. //about -> /about
    routePath = routePath.replace(/\/+/g, "/");

    // 3. Entfernt einen trailing Slash am Ende, außer es ist die Root-Route – z.B. /about/ -> /about
    if (routePath.length > 1 && routePath.endsWith("/")) {
      routePath = routePath.slice(0, -1);
    }

    // Filtert dynamische Parameter-Routen (/[id]) und Wildcards heraus
    if (
      !routePath.includes("[") &&
      !routePath.includes("]") &&
      !routePath.includes(":") &&
      !routePath.includes("error")
    ) {
      routes.add(routePath);
    }
  }

  // Wandelt das Set zurück in ein Array um
  return Array.from(routes);
};

export default defineConfig((/*ctx*/) => ({
  // https://v2.quasar.dev/quasar-cli-vite/prefetch-feature
  // preFetch: true,

  // app boot file (/src/boot)
  // --> boot files are part of "main.js"
  // https://v2.quasar.dev/quasar-cli-vite/boot-files
  boot: ["maz-ui"],

  // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#css
  css: ["app.scss"],

  // https://github.com/quasarframework/quasar/tree/dev/extras
  extras: [
    // 'ionicons-v4',
    // 'mdi-v7'
    // 'fontawesome-v7',
    // 'eva-icons',
    // 'themify',
    // 'line-awesome',
    // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!
    // 'roboto-font', // optional, you are not bound to it
    // 'material-icons', // optional, you are not bound to it
  ],

  // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#build
  build: {
    target: {
      // browser: 'baseline-widely-available',
      // node: 'node22'
    },

    typescript: {
      strict: true,
      vueShim: true
      // extendTsConfig (tsConfig) {}
    },

    // https://v2.quasar.dev/quasar-cli-vite/page-routing-with-vue-router#filename-based-routing
    filenameBasedRouting: true,

    vueRouterMode: "hash", // available values: 'hash', 'history'
    // vueRouterBase,
    // vueDevtools,

    // publicPath: '/',
    // define: {},
    // defineEnv: {}
    // ignorePublicFolder: true,
    // minify: false,
    // distDir

    // extendViteConf (viteConf) {},
    // viteVuePluginOptions: {},

    vitePlugins: [
      [
        "vite-plugin-sitemap",
        {
          dynamicRoutes: generateRootRoute(),
          hostname: "https://www.rtc-koeln.de",
          outDir: "dist/spa"
        }
      ]
    ]
  },

  // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#devserver
  devServer: {
    // https: true,
    open: true // opens browser window automatically
  },

  // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#framework
  framework: {
    config: {
      screen: {
        bodyClasses: true
      }
    },

    iconSet: "svg-mdi-v7", // Quasar icon set
    lang: "de", // Quasar language pack

    // For special cases outside of where the auto-import strategy can have an impact
    // (like functional components as one of the examples),
    // you can manually specify Quasar components/directives to be available everywhere:
    //
    // components: [],
    // directives: [],

    // Quasar plugins
    plugins: []
  },

  // animations: 'all', // --- includes all animations
  // https://v2.quasar.dev/options/animations
  animations: "all",

  // https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#sourcefiles
  // sourceFiles: {
  //   rootComponent: 'src/App.vue',
  //   router: 'src/router/index',
  //   store: 'src/store/index',
  //   pwaRegisterServiceWorker: 'src-pwa/register-sw',
  //   pwaServiceWorker: 'src-pwa/sw/custom-sw',
  //   pwaManifestFile: 'src-pwa/manifest.json',
  //   electronMain: 'src-electron/electron-main',
  //   electronPreload: 'src-electron/electron-preload'
  //   bexManifestFile: 'src-bex/manifest.json
  // },

  // https://v2.quasar.dev/quasar-cli-vite/developing-ssr/configuring-ssr
  ssr: {
    prodPort: 3000, // The default port that the production server should use
    // (gets superseded if import.meta.env.PORT is specified at runtime)

    middlewares: [
      "render" // keep this as last one
    ],

    // extendSSRPackageJson (pkgJson) {},
    // extendSSRWebserverConf (rolldownConf) {},

    // manualStoreSerialization: true,
    // manualStoreSsrContextInjection: true,
    // manualStoreHydration: true,
    // manualPostHydrationTrigger: true,

    pwa: false
    // pwaOfflineHtmlFilename: 'offline.html', // do NOT use index.html as name!

    // extendSSRGenerateSWOptions (cfg) {},
    // extendSSRInjectManifestOptions (cfg) {}
  },

  // https://v2.quasar.dev/quasar-cli-vite/developing-pwa/configuring-pwa
  pwa: {
    workboxMode: "GenerateSW" // 'GenerateSW' or 'InjectManifest'
    // swFilename: 'sw.js',
    // manifestFilename: 'manifest.json',
    // extendPWAManifestJson (json) {},
    // useCredentialsForManifestTag: true,
    // injectPWAMetaTags: false,
    // extendPWACustomSWConf (rolldownConf) {},
    // extendPWAGenerateSWOptions (cfg) {},
    // extendPWAInjectManifestOptions (cfg) {},
    // extendPWASwTsConfig (tsConfig) {}
  },

  // https://v2.quasar.dev/quasar-cli-vite/developing-cordova-apps/configuring-cordova
  cordova: {},

  // https://v2.quasar.dev/quasar-cli-vite/developing-capacitor-apps/configuring-capacitor
  capacitor: {
    hideSplashscreen: true
  },

  // https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/configuring-electron
  electron: {
    // extendElectronMainConf (rolldownConf) {},
    // extendElectronPreloadConf (rolldownConf) {},
    // extendElectronPackageJson (pkgJson) {},

    // Electron preload scripts (if any) from /src-electron, WITHOUT file extension
    preloadScripts: ["electron-preload"],

    // specify the debugging port to use for the Electron app when running in development mode
    inspectPort: 5858,

    bundler: "packager", // 'packager' or 'builder'

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

    builder: {
      // https://www.electron.build/configuration

      appId: "rad-touristik-club-koln-e-v-1972.github.io"
    }
  },

  // https://v2.quasar.dev/quasar-cli-vite/developing-browser-extensions/configuring-bex
  bex: {
    // extendBexScriptsConf (rolldownConf) {},
    // extendBexManifestJson (json) {},

    /**
     * The list of extra scripts (js/ts) not in your bex manifest that you want to
     * compile and use in your browser extension. Maybe dynamic use them?
     *
     * Each entry in the list should be a relative filename to /src-bex/
     *
     * @example [ 'my-script.ts', 'sub-folder/my-other-script.js' ]
     */
    extraScripts: []
  }
}));
