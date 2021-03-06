import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://github.com/nuxt-community/router-module
        '@nuxtjs/router',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        // https://go.nuxtjs.dev/vuetify
        [
            '@nuxtjs/vuetify',
            {
                // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
                customVariables: ['~/assets/variables.scss'],
                defaultAssets: false,
                iconfont: 'mdiSvg',
                optionsPath: '~/plugins/vuetify.options.ts',
                treeShake: true,
            },
        ],
        // https://github.com/vuejs/pinia/tree/v2/packages/nuxt
        ['@pinia/nuxt'],
    ],
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        htmlAttrs: { lang: 'de' },
        title: 'Rad-Touristik-Club Köln e.V. 1972',
    },
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    // TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177
    plugins: [{ src: '~/plugins/vue-masonry-wall' }],
    srcDir: 'src/',
    ssr: false,
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
})
