<template>
  <v-app id="DefaultView">
    <v-navigation-drawer :mini-variant-width="`${$vuetify.breakpoint.smAndDown ? '30' : '40'}px`" app color="primary" mini-variant permanent right touchless>
      <template #img>
        <img alt="vertikales Banner" src="/banner_vertikal.svg" />
      </template>
    </v-navigation-drawer>
    <v-navigation-drawer :mini-variant="miniDrawer" app permanent style="border-left: var(--v-primary-base) solid 10px" touchless>
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
      <v-app-bar-nav-icon @click.stop="miniDrawer = !miniDrawer">
        <v-icon>{{ icons.mdiMenu }}</v-icon>
      </v-app-bar-nav-icon>
      <v-spacer />
      <v-app-bar-title>
        <div class="d-inline-block" style="text-align-last: justify">
          <span class="font-weight-bold text-sm-h5 text-subtitle-2" v-text="'Herzlich willkommen beim'" />
          <br />
          <span class="font-weight-bold text-sm-h4 text-subtitle-1">RTC Köln e.V. <span class="primary--text" v-text="'1972'" /></span>
        </div>
      </v-app-bar-title>
      <v-spacer />
      <template #extension>
        <v-tabs :show-arrows="$vuetify.breakpoint.smAndDown" align-with-title>
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
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app class="border-right text-caption text-sm-body-1" style="border-left: var(--v-primary-base) solid 10px; border-right: var(--v-primary-base) solid">
      <span v-text="'Copyright'" />
      <v-icon :small="$vuetify.breakpoint.smAndDown" left right>{{ icons.mdiCopyright }}</v-icon>
      <!-- Datum muss der Jahreszahl der erstmaligen veröffentlichung entsprechen!-->
      <span v-text="`2021 durch Rad-Touristik-Club Köln e.V. 1972`" />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { mdiCopyright, mdiHumanGreeting, mdiMenu } from '@mdi/js'
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class DefaultView extends Vue {
  icons = { mdiCopyright, mdiMenu }

  items = [
    {
      icon: mdiHumanGreeting,
      title: 'Willkommen',
      to: '/',
    },
  ]

  miniDrawer = false

  @Watch('$vuetify.breakpoint.smAndDown', { immediate: true })
  onMobileViewChanged(val: boolean) {
    this.miniDrawer = val
  }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .border-right {
    border-right-width: 30px !important;
  }
}

@media #{map-get($display-breakpoints, 'md-and-up')} {
  .border-right {
    border-right-width: 40px !important;
  }
}
</style>
