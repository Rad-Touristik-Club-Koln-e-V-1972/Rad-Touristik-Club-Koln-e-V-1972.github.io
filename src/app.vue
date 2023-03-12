<template>
    <v-app id="app">
        <v-app-bar app class="border" clipped-left color="accent" flat height="100%">
            <v-app-bar-nav-icon @click.stop="navDrawer = !navDrawer" />
            <!--TODO WORKAROUND for  https://github.com/vuetifyjs/vuetify/issues/13455. Replace v-app-bar-title with v-toolbar-title.-->
            <v-toolbar-title class="text-center" style="width: 100%">
                <span class="accessibility font-weight-bold text-sm-h5 text-md-h4 text-subtitle-1" v-text="'Herzlich willkommen beim'" />
                <br />
                <span class="accessibility font-weight-bold text-sm-h4 text-md-h3 text-h6">RTC Köln e.V. <span class="primary--text" v-text="1972" /></span>
            </v-toolbar-title>
            <c-accessibility />
        </v-app-bar>
        <c-navigation-drawer v-model="navDrawer" :class="vuetify?.breakpoint.mobile ? '' : 'border'" />
        <v-main class="border main">
            <Nuxt />
        </v-main>
        <v-footer app class="border text-caption text-sm-body-2 text-xl-h6">
            <div class="text-no-wrap">
                <v-icon left>{{ icons.mdiCopyright }}</v-icon>
                2021 - {{ new Date().getFullYear() }} Rad-Touristik-Club Köln e.V. 1972
            </div>
            <v-spacer />
            <v-btn text :to="{ name: 'imprint' }">Impressum</v-btn>
            <v-btn text :to="{ name: 'privacyandsecurity' }">Datenschutz</v-btn>
        </v-footer>
        <d-popup />
    </v-app>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue'
import { mdiCopyright } from '@mdi/js'
import CAccessibility from '~/components/layouts/default/CAccessibility.vue'
import CNavigationDrawer from '~/components/layouts/default/CNavigationDrawer.vue'
import DPopup from '~/components/layouts/default/DPopup.vue'

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
