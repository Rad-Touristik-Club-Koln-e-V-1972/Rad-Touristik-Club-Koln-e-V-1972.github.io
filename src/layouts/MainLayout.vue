<template>
  <q-layout id="app" view="hHh Lpr lFf">
    <q-header class="bg-accent border text-secondary">
      <q-toolbar>
        <q-btn aria-label="Menu" dense flat :icon="mdiMenu" round @click="navDrawer = !navDrawer" />
        <q-toolbar-title class="text-center text-h5">
          Herzlich willkommen beim
          <br class="xs" />
          <span class="text-bold">RTC Köln e.V. <span class="text-primary">1972</span></span>
        </q-toolbar-title>
        <d-accessibility />
      </q-toolbar>
    </q-header>
    <c-navigation-drawer v-model="navDrawer" class="border" />
    <q-page-container class="border">
      <router-view v-slot="{ Component, route }">
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </q-page-container>
    <q-footer class="bg-accent border">
      <div class="justify-evenly md-hide row sm-hide xs-hide">
        <q-card v-for="it in useSponsorStore().all" :key="it.id" class="col-auto" flat>
          <a :href="it.url?.toString()" target="_blank">
            <q-img fit="contain" height="36px" :src="it.imageUrl?.toString()" width="100px" />
          </a>
        </q-card>
      </div>
      <div class="justify-between row text-body1 text-secondary q-px-xs">
        <div class="col-auto">
          <q-icon :name="mdiCopyright" size="sm" />
          2021 - {{ new Date().getFullYear() }} RTC Köln e.V. 1972
        </div>
        <div class="col-auto">
          <q-btn flat :to="{ name: 'imprint' }">Impressum</q-btn>
          <q-btn flat :to="{ name: 'privacy-and-security' }">Datenschutz</q-btn>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiCopyright, mdiMenu } from '@quasar/extras/mdi-v7'
import CNavigationDrawer from 'components/MainLayout/CNavigationDrawer.vue'
import DAccessibility from 'components/MainLayout/DAccessibility.vue'
import useSponsorStore from 'stores/Sponsor'

const navDrawer = ref(false)
</script>

<style lang="scss" scoped>
@media (max-width: $breakpoint-xs-max) {
  #app {
    background-size: 20px;
  }

  .border {
    margin-right: 20px;
  }
}

@media (max-width: $breakpoint-md-max) {
  #app {
    background-size: 30px;
  }

  .border {
    margin-right: 30px;
  }
}

@media (min-width: $breakpoint-lg-min) {
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
  background-image: url('assets/img/banner_vertikal.svg');
  background-position: top right;
  background-repeat: no-repeat;
}
</style>
