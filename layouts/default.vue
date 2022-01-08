<!--
  - Created by Martin Dünkelmann on 08.01.22, 21:22
  - Copyright (c) 2022. All rights reserved.
  -
  - Last modified 08.01.22, 21:22
  -->

<template>
  <v-app id="DefaultView">
    <v-navigation-drawer app color="#ed5700" mini-variant mini-variant-width="30px" permanent right touchless>
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
      <v-app-bar-title>Homepage des RTC Köln 1972 e.V.</v-app-bar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app style="border-left: #ed5700 solid 10px; border-right: #ed5700 solid 30px">
      <span>&copy; {{ new Date().getFullYear() }} RTC Köln 1972 e.V.</span>
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

  @Watch('$vuetify.breakpoint.smAndDown')
  onMobileViewChanged(val: boolean) {
    if (val) {
      this.miniDrawer = true
    }
  }
}
</script>

<!--
<style scoped>
</style>
-->
