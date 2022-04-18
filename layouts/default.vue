<template>
  <v-app id="DefaultView">
    <v-app-bar app class="border" color="secondary" flat>
      <v-app-bar-nav-icon @click.stop="navDrawer = !navDrawer">
        <v-icon v-text="icons.mdiMenu" />
      </v-app-bar-nav-icon>
      <v-spacer />
      <!--TODO WORKAROUND for  https://github.com/vuetifyjs/vuetify/issues/13455. Replace v-app-bar-title with v-toolbar-title.-->
      <v-toolbar-title>
        <div class="d-inline-block" style="text-align-last: justify">
          <span class="font-weight-bold text-sm-h6 text-md-h5 text-subtitle-2" v-text="'Herzlich willkommen beim'" />
          <br />
          <span class="font-weight-bold text-sm-h5 text-md-h4 text-subtitle-1">RTC Köln e.V. <span class="primary--text" v-text="'1972'" /></span>
        </div>
      </v-toolbar-title>
      <v-spacer />
      <template #extension>
        <c-navigation-tabs />
      </template>
    </v-app-bar>
    <c-navigation-drawer v-model="navDrawer" />
    <v-main class="border main">
      <c-slideshow />
      <v-row dense>
        <v-col cols="10"><Nuxt /></v-col>
        <v-col cols="2"><c-sponsors /></v-col>
      </v-row>
    </v-main>
    <v-footer app class="border text-body-2 text-sm-body-1 text-xl-h6">
      <div class="text-no-wrap">
        <v-icon :small="$vuetify.breakpoint.mobile" v-text="icons.mdiCopyright" />
        <!-- Datum muss der Jahreszahl der erstmaligen veröffentlichung entsprechen!-->
        2021 Rad-Touristik-Club Köln e.V. 1972
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { mdiCopyright, mdiMenu } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'
import CNavigationDrawer from '@/components/layouts/default/CNavigationDrawer.vue'
import CNavigationTabs from '@/components/layouts/default/CNavigationTabs.vue'
import CSlideshow from '@/components/layouts/default/CSlideshow.vue'
import CSponsors from '@/components/layouts/default/CSponsors.vue'

export default defineComponent({
  components: {
    CNavigationDrawer,
    CNavigationTabs,
    CSlideshow,
    CSponsors,
  },
  setup() {
    return {
      icons: {
        mdiCopyright,
        mdiMenu,
      },
      navDrawer: false,
    }
  },
})
</script>

<style lang="scss" scoped>
#DefaultView {
  background-attachment: fixed;
  background-color: #ed5700;
  background-image: url('assets/img/banner_vertikal.svg');
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
