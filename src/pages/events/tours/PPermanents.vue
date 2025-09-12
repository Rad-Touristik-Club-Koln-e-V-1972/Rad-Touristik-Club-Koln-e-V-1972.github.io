<template>
  <q-card flat>
    <q-card-section class="bg-primary text-accent text-h6">Der RTC Köln e.V. bietet euch {{ permanents.length }} Permanente</q-card-section>
    <q-card-section class="text-subtitle1">
      Wir haben {{ permanents.length }} anspruchsvolle und landschaftlich reizvolle Strecken ausgearbeitet, die in der Rennradsaison (auch im Winter) alleine oder in der Gruppe und nach eigenem Einschätzungsvermögen
      abgefahren werden können.
    </q-card-section>
    <q-card-section>
      <div class="justify-center q-gutter-lg row">
        <div v-for="it in permanents" :key="it.id" class="col-auto">
          <c-permanent :model-value="it" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import CPermanent from 'components/pages/events/tours/CPermanent.vue'
import useTourStore from 'stores/events/Tour'

const permanents = useTourStore().permanents
</script>
