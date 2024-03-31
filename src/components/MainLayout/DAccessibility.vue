<template>
  <q-btn aria-label="Behindertenhilfe" flat dense round :icon="mdiWheelchair" @click="dialog = true" />
  <q-dialog v-model="dialog" persistent>
    <q-card>
      <q-card-section class="bg-primary text-accent text-h6">Barrierefreiheit</q-card-section>
      <q-card-section>
        <q-toggle v-model="legasthenie" style="font-family: OpenDyslexic, sans-serif" label="Legasthenie" @click="switchFont()" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn v-close-popup color="primary" label="Schließen" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeMount, ref } from 'vue'
import { mdiWheelchair } from '@quasar/extras/mdi-v7'

const dialog = ref(false)
const legasthenie = ref(false)

const switchFont = () => {
  const font = legasthenie.value ? 'OpenDyslexic' : 'Bahnschrift'

  document.getElementById('app')?.style.setProperty('font-family', font)

  window.document.querySelectorAll('[class*="text"]').forEach((element) => {
    ;(element as HTMLElement).style.setProperty('font-family', font)
  })
}

onBeforeMount(() =>
  nextTick(() => {
    switchFont()
  }),
)
</script>
