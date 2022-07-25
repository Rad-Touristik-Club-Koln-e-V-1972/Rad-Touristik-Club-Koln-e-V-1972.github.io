<template>
    <v-app id="app">
        <v-app-bar app class="border" color="accent" flat height="100%">
            <template #default>
                <v-row class="justify-space-between">
                    <v-col cols="auto">
                        <v-app-bar-nav-icon @click.stop="navDrawer = !navDrawer" />
                    </v-col>
                    <v-col cols="auto">
                        <!--TODO WORKAROUND for  https://github.com/vuetifyjs/vuetify/issues/13455. Replace v-app-bar-title with v-toolbar-title.-->
                        <v-toolbar-title class="d-inline-block" style="text-align-last: justify">
                            <span class="font-weight-bold text-sm-h6 text-md-h5 text-subtitle-2">Herzlich willkommen beim</span>
                            <br />
                            <span class="font-weight-bold text-sm-h5 text-md-h4 text-subtitle-1">RTC Köln e.V. <span class="primary--text">1972</span></span>
                        </v-toolbar-title>
                    </v-col>
                    <v-col v-show="!vuetify?.breakpoint.xsOnly" cols="auto">
                        <c-countdown />
                    </v-col>
                </v-row>
            </template>
            <template #extension>
                <c-navigation-tabs />
            </template>
        </v-app-bar>
        <c-navigation-drawer v-model="navDrawer" />
        <v-main class="border main">
            <c-slideshow height="200" :value="slideshowItems" />
            <v-row dense>
                <v-col cols="10">
                    <Nuxt />
                </v-col>
                <v-col cols="2">
                    <c-sponsors />
                </v-col>
            </v-row>
        </v-main>
        <v-footer app class="border text-body-2 text-sm-body-1 text-xl-h6">
            <div class="text-no-wrap">
                <v-icon>{{ icons.mdiCopyright }}</v-icon>
                <!-- Datum muss der Jahreszahl der erstmaligen veröffentlichung entsprechen!-->
                2021 Rad-Touristik-Club Köln e.V. 1972
            </div>
        </v-footer>
    </v-app>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue'
import { mdiCopyright } from '@mdi/js'
import CCountdown from '~/components/layouts/default/CCountdown.vue'
import CNavigationDrawer from '~/components/layouts/default/CNavigationDrawer.vue'
import CNavigationTabs from '~/components/layouts/default/CNavigationTabs.vue'
import CSlideshow from '~/components/layouts/default/CSlideshow.vue'
import CSponsors from '~/components/layouts/default/CSponsors.vue'

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy.$vuetify)

const icons = { mdiCopyright }
const navDrawer = ref(false)
const slideshowItems = [
    'https://content.rtc-koeln.de/layouts/default/slideshow/b0a3d468-828d-474d-9380-e568a38fad89.jpg',
    'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_0037.jpg',
    'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_2225.jpg',
    'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4226.jpg',
    'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4235.jpg',
    'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4241.jpg',
    'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4252.jpg',
    'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4256.jpg',
    'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4483.jpg',
    'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4495.jpg',
    'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4497.jpg',
    'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4502.jpg',
    'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4507.jpg',
    'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4508.jpg',
    'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4515.jpg',
]
</script>

<style lang="scss" scoped>
#DefaultView {
    background-attachment: fixed;
    background-color: var(--v-primary-base);
    background-image: url('@/assets/img/banner_vertikal.svg');
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 30px;
}

.border {
    margin-left: 10px;
    margin-right: 30px;
}

.main {
    background-color: white;
}
</style>
