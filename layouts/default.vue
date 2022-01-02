<!--
  - Created by Martin Dünkelmann on 02.01.22, 11:58
  - Copyright (c) 2022. All rights reserved.
  -
  - Last modified 02.01.22, 11:58
  -->

<template>
  <v-app id="DefaultView">
    <v-navigation-drawer v-model="drawer" app bottom clipped>
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
    <v-app-bar app clipped-left dense flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-app-bar-title>Homepage des RTC Köln 1972 e.V.</v-app-bar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} RTC Köln 1972 e.V.</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DefaultView extends Vue {
  drawer = true
  items = [
    {
      icon: 'mdi-apps',
      title: 'Willkommen',
      to: '/',
    },
  ]

  right = true
  rightDrawer = false
}
</script>

<!--
<style scoped>
</style>
-->
