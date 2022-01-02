<!--
  - Created by Martin Dünkelmann on 03.01.22, 00:47
  - Copyright (c) 2022. All rights reserved.
  -
  - Last modified 03.01.22, 00:47
  -->

<template>
  <v-app id="DefaultView">
    <v-navigation-drawer app color="white" mini-variant permanent right>
      <template #img>
        <img alt="vertikales Banner" src="/banner_vertikal.svg" />
      </template>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="drawer" app bottom>
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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon>
        <v-avatar @click="drawer = !drawer">
          <v-img alt="logo" src="/logo720px.png" />
        </v-avatar>
      </v-btn>
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
      icon: 'mdi-human-greeting',
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
