/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

const { configure } = require('quasar/wrappers')

module.exports = configure(function (/* ctx */) {
    return {
        // animations: 'all', // --- includes all animations
        // https://v2.quasar.dev/options/animations
        animations: 'all',
        // app boot file (/src/boot)
        // --> boot files are part of "main.js"
        // https://v2.quasar.dev/quasar-cli-vite/boot-files
        boot: ['vue-masonry-wall'],
        // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#css
        css: ['app.scss'],
        // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#devServer
        devServer: {
            open: true, // opens browser window automatically
        },
        // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/configuring-electron
        electron: {
            builder: {
                // https://www.electron.build/configuration/configuration
                appId: 'rad-touristik-club-koln-e-v-1972.github.io',
            },
            bundler: 'packager', // 'packager' or 'builder'
            inspectPort: 5858,
        },
        // https://github.com/quasarframework/quasar/tree/dev/extras
        extras: ['mdi-v7'],
        // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#framework
        framework: {
            config: {
                screen: {
                    bodyClasses: true,
                },
            },
            iconSet: 'mdi-v7', // Quasar icon set
            lang: 'de', // Quasar language pack
            plugins: ['Loading'],
        },
        // https://v2.quasar.dev/quasar-cli-vite/developing-pwa/configuring-pwa
        pwa: {
            injectPwaMetaTags: true,
            manifestFilename: 'manifest.json',
            swFilename: 'sw.js',
            useCredentialsForManifestTag: false,
            workboxMode: 'generateSW', // or 'injectManifest'
        },
        // https://v2.quasar.dev/quasar-cli-vite/developing-ssr/configuring-ssr
        ssr: {
            prodPort: 3000, // The default port that the production server should use
            // (gets superseded if process.env.PORT is specified at runtime)
            pwa: false,
            middlewares: [
                'render', // keep this as last one
            ],
        },
    }
})
