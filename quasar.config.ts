/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js
import { configure } from 'quasar/wrappers'

import IRoute from 'src/models/entities/navigation/IRoute.ts'
import routes from 'src/router/routes.ts'

// TODO Workaround until a better solution for generating the sitemap is found.
const generateRoutes = () => {
    const ret: string[] = []

    const mainRoutes = routes.at(0)
    if (mainRoutes?.children) {
        const rootPath = mainRoutes.path
        // Avoid "//" at the beginning of the path if the root is "/".
        ret.push(...generateRoutesHelper(rootPath === '/' ? '' : rootPath, mainRoutes.children))
    }

    // Remove duplicated "/" route.
    return ret.filter((route) => route !== '/')
}

// TODO Workaround until a better solution for generating the sitemap is found.
const generateRoutesHelper = (rootPath: string, children: IRoute[]) => {
    const ret: string[] = []

    children.forEach((child) => {
        if (child.children) ret.push(...generateRoutesHelper(`${rootPath}/${child.path}`, child.children))
        else if (child.name && !child.path.includes('/:')) ret.push(`${rootPath}/${child.path}`)
    })

    return ret
}

export default configure(function (/* ctx */) {
    return {
        // animations: 'all', // --- includes all animations
        // https://v2.quasar.dev/options/animations
        animations: 'all',
        build: {
            vitePlugins: [[require('vite-plugin-sitemap'), { dynamicRoutes: generateRoutes(), hostname: 'https://www.rtc-koeln.de', outDir: 'dist/spa' }]],
            vueRouterMode: 'history',
        },
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
