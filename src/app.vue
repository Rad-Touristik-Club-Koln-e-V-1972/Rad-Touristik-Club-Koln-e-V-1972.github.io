<template>
    <v-app id="app">
        <v-system-bar app class="font-weight-bold justify-center" color="accent--text primary">Vorschau der neuen Website</v-system-bar>
        <v-app-bar app class="border" color="accent" flat height="100%">
            <v-row class="justify-space-between">
                <v-col cols="auto">
                    <v-app-bar-nav-icon @click.stop="navDrawer = !navDrawer" />
                </v-col>
                <v-col cols="auto">
                    <!--TODO WORKAROUND for  https://github.com/vuetifyjs/vuetify/issues/13455. Replace v-app-bar-title with v-toolbar-title.-->
                    <v-toolbar-title class="d-inline-block" style="text-align-last: justify">
                        <span class="font-weight-bold text-sm-h6 text-md-h5 text-subtitle-2">Herzlich willkommen beim</span>
                        <br />
                        <span class="font-weight-bold text-sm-h5 text-md-h4 text-subtitle-1">RTC Köln e.V. <span class="primary--text" v-text="1972" /></span>
                    </v-toolbar-title>
                </v-col>
                <v-col v-show="!vuetify?.breakpoint.xsOnly" cols="auto">
                    <c-countdown />
                </v-col>
            </v-row>
        </v-app-bar>
        <c-navigation-drawer v-model="navDrawer" />
        <v-main class="border main">
            <c-slideshow height="200" :value="useSlideshowStore().all" />
            <Nuxt />
        </v-main>
        <v-footer class="border text-body-2 text-sm-body-1 text-xl-h6">
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
import CSlideshow from '~/components/CSlideshow.vue'
import { useSlideshowStore } from '~/store/Slideshow'

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy.$vuetify)

const icons = { mdiCopyright }
const navDrawer = ref(false)
</script>

<style lang="scss" scoped>
#app {
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
