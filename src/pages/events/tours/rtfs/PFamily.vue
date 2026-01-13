<template>
  <c-tour disabled="disabled" fee-hints="* Die Fahrkarten werden als verschiedenfarbige Chips am Start ausgegeben." :model-value="useTourStore().getFamily()" />
  <q-dialog :model-value="true" persistent>
    <!-- TODO Remove code until next Forsbachtour in 2026 -->
    <q-card>
      <q-card-section class="bg-primary text-accent text-h6">Die FORSBACHTOUR 2026 ist am am 31. Mai 2026!</q-card-section>
      <q-card-section>
        Weitere Informationen folgen!
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
import useTourStore from 'stores/events/Tour'
</script>
