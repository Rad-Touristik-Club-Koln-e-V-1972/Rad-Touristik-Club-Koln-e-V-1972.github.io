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
                    <v-toolbar-title class="d-inline-block" style="text-align-last: center">
                        <span class="font-weight-bold text-sm-h5 text-md-h4 text-subtitle-1" v-text="'Herzlich willkommen beim'" />
                        <br />
                        <span class="font-weight-bold text-sm-h4 text-md-h3 text-h6">RTC Köln e.V. <span class="primary--text" v-text="1972" /></span>
                    </v-toolbar-title>
                </v-col>
            </v-row>
        </v-app-bar>
        <c-navigation-drawer v-model="navDrawer" :class="vuetify?.breakpoint.mobile ? '' : 'border'" />
        <v-main class="border main">
            <Nuxt />
        </v-main>
        <v-footer class="border text-caption text-sm-body-2 text-xl-h6">
            <div class="text-no-wrap">
                <v-icon left>{{ icons.mdiCopyright }}</v-icon>
                <!-- Datum muss der Jahreszahl der erstmaligen veröffentlichung entsprechen!-->
                2021 Rad-Touristik-Club Köln e.V. 1972
            </div>
        </v-footer>
    </v-app>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue'
import { mdiCopyright } from '@mdi/js'
import CNavigationDrawer from '~/components/layouts/default/CNavigationDrawer.vue'

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy.$vuetify)

const icons = { mdiCopyright }
const navDrawer = ref(!vuetify.value?.breakpoint.mobile ?? false)
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

@media #{map-get($display-breakpoints, 'lg-and-down')} {
    #app {
        background-size: 30px;
    }

    .border {
        margin-right: 30px;
    }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
    #app {
        background-size: 20px;
    }

    .border {
        margin-right: 20px;
    }
}

@media #{map-get($display-breakpoints, 'lg-and-up')} {
    #app {
        background-size: 40px;
    }

    .border {
        margin-right: 40px;
    }
}

#app {
    background-attachment: fixed;
    background-color: var(--v-primary-base);
    background-image: url('@/assets/img/banner_vertikal.svg');
    background-position: top right;
    background-repeat: no-repeat;
}

.main {
    background-color: white;
}
</style>
