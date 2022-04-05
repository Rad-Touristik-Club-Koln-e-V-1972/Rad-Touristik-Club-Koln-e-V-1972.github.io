<template>
  <v-app id="DefaultView">
    <v-navigation-drawer :mini-variant-width="rightBannerWidth" app color="primary" mini-variant permanent right touchless>
      <template #img>
        <img alt="vertikales Banner" src="@/assets/img/banner_vertikal.svg" />
      </template>
    </v-navigation-drawer>
    <v-navigation-drawer :mini-variant="miniNavDrawer" app permanent style="border-left: var(--v-primary-base) solid 10px" touchless>
      <v-list>
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
    <v-app-bar app color="secondary" flat>
      <v-app-bar-nav-icon @click.stop="miniNavDrawer = !miniNavDrawer">
        <v-icon v-text="icons.mdiMenu" />
      </v-app-bar-nav-icon>
      <v-spacer />
      <!--TODO WORKAROUND for  https://github.com/vuetifyjs/vuetify/issues/13455. Replace v-app-bar-title with v-toolbar-title.-->
      <v-toolbar-title>
        <div class="d-inline-block" style="text-align-last: justify">
          <span class="font-weight-bold text-sm-h5 text-subtitle-2" v-text="'Herzlich willkommen beim'" />
          <br />
          <span class="font-weight-bold text-sm-h4 text-subtitle-1">RTC Köln e.V. <span class="primary--text" v-text="'1972'" /></span>
        </div>
      </v-toolbar-title>
      <v-spacer />
      <template #extension>
        <v-tabs :show-arrows="isMobileScreen" align-with-title>
          <v-tab>Startseite</v-tab>
          <v-tab>Über uns</v-tab>
          <v-tab>Kontakt</v-tab>
          <v-tab>RTF/CTF</v-tab>
          <v-tab>Galerie</v-tab>
          <v-tab>Touren-Tipps</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col>
            <c-slideshow />
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col><Nuxt /></v-col>
          <v-col cols="3"><c-sponsors /></v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer :style="`border-left: var(--v-primary-base) solid 10px; border-right: var(--v-primary-base) solid ${rightBannerWidth}`" app class="text-caption text-sm-body-1">
      <span v-text="'Copyright'" />
      <v-icon :small="isMobileScreen" left right v-text="icons.mdiCopyright" />
      <!-- Datum muss der Jahreszahl der erstmaligen veröffentlichung entsprechen!-->
      <span v-text="`2021 durch Rad-Touristik-Club Köln e.V. 1972`" />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { mdiCopyright, mdiHumanGreeting, mdiMenu } from '@mdi/js'
import { Component, Vue, Watch } from 'vue-property-decorator'
import CSlideshow from '~/components/layouts/default/CSlideshow.vue'
import CSponsors from '~/components/layouts/default/CSponsors.vue'

@Component({ components: { CSlideshow, CSponsors } })
export default class DefaultView extends Vue {
  icons = { mdiCopyright, mdiMenu }

  isMobileScreen = false

  items = [
    {
      icon: mdiHumanGreeting,
      title: 'Willkommen',
      to: '/',
    },
  ]

  miniNavDrawer = false

  rightBannerWidth = '30px'

  @Watch('$vuetify.breakpoint.smAndDown', { immediate: true })
  onMobileViewChanged(val: boolean) {
    this.isMobileScreen = val
    this.miniNavDrawer = val
    // noinspection MagicNumberJS
    this.rightBannerWidth = `${val ? 30 : 40}px`
  }
}
</script>

<style lang="scss" scoped></style>
