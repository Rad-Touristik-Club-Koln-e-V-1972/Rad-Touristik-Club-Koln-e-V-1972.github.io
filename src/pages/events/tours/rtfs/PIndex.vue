<template>
  <c-tour disabled="disabled" :model-value="useTourStore().getBy(EEvent.RTF)" />
  <q-dialog :model-value="true" persistent>
    <!-- TODO Remove code until next Forsbachtour in 2026 -->
    <q-card>
      <q-card-section class="bg-primary text-accent text-h6">Die FORSBACHTOUR 2025 fällt aus!</q-card-section>
      <q-card-section>
        Es tut uns unendlich leid, aber es soll regnerisch und stürmisch werden und eure Sicherheit liegt uns am Herzen.
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
import CTour from 'components/pages/events/tours/CTour.vue'
import EEvent from 'src/models/enums/EEvent'
import useTourStore from 'stores/events/Tour'
</script>
