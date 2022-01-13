<!--
  - Created by Martin Dünkelmann on 13.01.22, 02:32
  - Copyright (c) 2022. All rights reserved.
  -
  - Last modified 13.01.22, 02:32
  -->

<template>
  <v-app id="DefaultView">
    <v-navigation-drawer app color="accent" mini-variant mini-variant-width="30px" permanent right touchless>
      <template #img>
        <img alt="vertikales Banner" src="/banner_vertikal.svg" />
      </template>
    </v-navigation-drawer>
    <v-navigation-drawer :mini-variant="miniDrawer" app permanent style="border-left: #ed5700 solid 10px" touchless>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :to="item.to" exact router>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dense flat>
      <v-app-bar-nav-icon @click.stop="miniDrawer = !miniDrawer" />
      <v-spacer />
      <v-app-bar-title style="flex-wrap: wrap">
        <span class="font-weight-bold text-subtitle-2 text-sm-h6 text-no-wrap">Herzlich willkommen beim</span>
        <br v-if="$vuetify.breakpoint.smAndDown" />
        <span class="font-weight-bold text-subtitle-1 text-sm-h5 text-no-wrap">RTC KÖLN e.V. <span class="club-color-accent">1972</span></span>
      </v-app-bar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app style="border-left: #ed5700 solid 10px; border-right: #ed5700 solid 30px">
      <span>&copy; {{ new Date().getFullYear() }} Rad-Touristik-Club Köln e.V. 1972</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class DefaultView extends Vue {
  miniDrawer = false
  items = [
    {
      icon: 'mdi-human-greeting',
      title: 'Willkommen',
      to: '/',
    },
  ]

  @Watch('$vuetify.breakpoint.smAndDown', { immediate: true })
  onMobileViewChanged(val: boolean) {
    this.miniDrawer = val
  }
}
</script>

<style lang="scss">
.club-color-accent {
  color: var(--v-accent-base);
}
</style>
