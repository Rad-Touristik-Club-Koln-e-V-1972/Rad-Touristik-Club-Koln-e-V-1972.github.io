<template>
  <q-layout id="app" view="hHh Lpr lFf">
    <q-header class="bg-accent border text-secondary">
      <q-toolbar>
        <q-btn
          :icon="mdiMenu"
          aria-label="Menu"
          dense
          flat
          round
          @click="navDrawer = !navDrawer"
        />
        <q-toolbar-title class="text-center text-h5">
          Herzlich willkommen beim
          <br class="xs" />
          <span class="text-bold"
            >RTC Köln e.V. <span class="text-primary">1972</span></span
          >
        </q-toolbar-title>
        <d-accessibility />
      </q-toolbar>
    </q-header>
    <c-navigation-drawer v-model="navDrawer" class="border" />
    <q-page-container class="border">
      <router-view v-slot="{ Component, route }">
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </q-page-container>
    <q-footer class="bg-accent border">
      <div class="justify-evenly md-hide row sm-hide xs-hide">
        <q-card
          v-for="it in useSponsorStore().all"
          :key="it.id"
          class="col-auto"
          flat
        >
          <a :href="it.url?.toString()" target="_blank">
            <q-img
              :src="it.imageUrl?.toString()"
              fit="contain"
              height="36px"
              width="100px"
            />
          </a>
        </q-card>
      </div>
      <div class="justify-between row text-body1 text-secondary q-px-xs">
        <div class="col-auto">
          <q-icon :name="mdiCopyright" size="sm" />
          2021 - {{ new Date().getFullYear() }} RTC Köln e.V. 1972
        </div>
        <div class="col-auto">
          <q-btn :to="{ path: '/imprint' }" flat>Impressum</q-btn>
          <q-btn :to="{ path: '/privacy-and-security' }" flat>
            Datenschutz
          </q-btn>
        </div>
      </div>
    </q-footer>
  </q-layout>
  <q-dialog v-if="nextRTF" :model-value="isNextRTFSoon" persistent>
    <q-card>
      <q-card-section class="bg-primary text-accent text-h6"
        >!Forsbachtour News!</q-card-section
      >
      <q-card-section>
        Die Forsbachtour ist am {{ useDateTime().format(nextRTF.start) }}!
        <br />
        <br />
        Euer RTC KÖLN e.V. 1972
      </q-card-section>
      <q-card-actions align="right">
        <q-btn v-close-popup color="primary" label="Schließen" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { mdiCopyright, mdiMenu } from "@quasar/extras/mdi-v7";
import CNavigationDrawer from "@/components/MainLayout/CNavigationDrawer.vue";
import DAccessibility from "@/components/MainLayout/DAccessibility.vue";
import useSponsorStore from "@/stores/Sponsor";
import useCalendarStore from "@/stores/events/Calendar";
import useDateTime from "@/utils/DateTime";

const navDrawer = ref(false);

const calendarStore = useCalendarStore();

const nextRTF = calendarStore.nextRTF;
const isNextRTFSoon = calendarStore.isNextRtfInDays(30);
</script>

<style lang="scss" scoped>
:global(.screen--xs) {
  #app {
    background-size: 20px;
  }
  .border {
    margin-right: 20px;
  }
}

:global(.screen--xs),
:global(.screen--sm),
:global(.screen--md) {
  #app {
    background-size: 30px;
  }
  .border {
    margin-right: 30px;
  }
}

:global(.screen--lg),
:global(.screen--xl) {
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
  background-image: url("@/assets/img/banner_vertikal.svg");
  background-position: top right;
  background-repeat: no-repeat;
}
</style>
