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
        <v-tabs :show-arrows="$vuetify.breakpoint.mobile" align-with-title>
          <v-tab>Startseite</v-tab>
          <v-tab>Über uns</v-tab>
          <v-tab>Kontakt</v-tab>
          <v-tab>RTF/CTF</v-tab>
          <v-tab>Galerie</v-tab>
          <v-tab>Touren-Tipps</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="navDrawer" bottom app temporary>
      <v-list nav dense>
        <v-list-item v-for="(item, index) in items" :key="index" :to="item.to" exact router>
          <v-list-item-action>
            <v-icon v-text="item.icon" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="border main">
      <c-slideshow />
      <v-row dense>
        <v-col><Nuxt /></v-col>
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
import { mdiCopyright, mdiHumanGreeting, mdiMenu } from '@mdi/js'
import { Component, Vue } from 'vue-property-decorator'
import CSlideshow from '~/components/layouts/default/CSlideshow.vue'
import CSponsors from '~/components/layouts/default/CSponsors.vue'

@Component({ components: { CSlideshow, CSponsors } })
export default class DefaultView extends Vue {
  icons = { mdiCopyright, mdiMenu }

  items = [
    {
      icon: mdiHumanGreeting,
      title: 'Willkommen',
      to: '/',
    },
  ]

  navDrawer = false
}
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
