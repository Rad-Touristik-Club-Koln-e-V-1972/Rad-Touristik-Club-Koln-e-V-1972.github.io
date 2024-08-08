<template>
  <q-drawer v-model="modelValue" bordered show-if-above>
    <div class="column justify-between full-height q-py-xs">
      <div class="col column justify-start q-pb-md">
        <c-countdown class="col-auto" />
        <q-scroll-area class="col q-pt-md">
          <q-list>
            <c-navigation-entry v-for="it in navigationRepo.getByType(ENavigation.Navigation)" :key="it.id" :model-value="it" />
          </q-list>
        </q-scroll-area>
      </div>
      <div class="col-auto column justify-between">
        <div class="col text-center text-subtitle1">Folge uns auf</div>
        <div class="col row text-center">
          <div v-for="{ color, icon, id, target, url } in navigationRepo.getByType(ENavigation.Social_Media)" :key="id" class="col">
            <q-btn flat :href="url?.toString()" :icon round :target :text-color="color" />
          </div>
        </div>
      </div>
    </div>
  </q-drawer>
</template>

<script lang="ts" setup>
import { useRepo } from 'pinia-orm'
import CCountdown from 'components/MainLayout/CNavigationDrawer/CCountdown.vue'
import CNavigationEntry from 'components/MainLayout/CNavigationDrawer/CNavigationEntry.vue'
import ENavigation from 'src/models/enums/ENavigation'
import NavigationRepository from 'stores/NavigationRepository'

const modelValue = defineModel<boolean>({ required: true })

const navigationRepo = useRepo(NavigationRepository)
</script>
