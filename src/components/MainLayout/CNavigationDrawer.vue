<template>
  <q-drawer v-model="modelValue" bordered show-if-above>
    <div class="column justify-between full-height q-py-xs">
      <div class="col column justify-start q-pb-md">
        <c-countdown class="col-auto" />
        <q-scroll-area class="col q-pt-md">
          <d-write-message />
          <q-list>
            <c-navigation-entry v-for="it in navigationStore.allNavigation" :key="it.id" :model-value="it" />
          </q-list>
        </q-scroll-area>
      </div>
      <div class="col-auto column justify-between">
        <div class="col text-center text-subtitle1">Folge uns auf</div>
        <div class="col row text-center">
          <div v-for="{ color, icon, id, target, url } in navigationStore.allSocialMedia" :key="id" class="col">
            <q-btn flat :href="url?.toString()" :icon round :target :text-color="color" />
          </div>
        </div>
      </div>
    </div>
  </q-drawer>
</template>

<script lang="ts" setup>
import CCountdown from 'components/MainLayout/CNavigationDrawer/CCountdown.vue'
import CNavigationEntry from 'components/MainLayout/CNavigationDrawer/CNavigationEntry.vue'
import DWriteMessage from 'components/MainLayout/CNavigationDrawer/DWriteMessage.vue'
import useNavigationStore from 'stores/Navigation'

const modelValue = defineModel<boolean>({ required: true })

const navigationStore = useNavigationStore()
</script>
