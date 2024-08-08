<template>
  <q-card flat>
    <q-card-section class="bg-primary text-accent text-h6">Der RTC Köln e.V. bietet Euch zwei Permanente</q-card-section>
    <q-card-section class="text-subtitle1">
      Wir haben zwei anspruchsvolle und landschaftlich reizvolle Strecken ausgearbeitet, die in der Rennradsaison (auch im Winter) alleine oder in der Gruppe und nach eigenem Einschätzungsvermögen abgefahren werden
      können.
    </q-card-section>
    <q-card-section>
      <div class="justify-center q-gutter-lg row">
        <div v-for="it in permanentsRepo.all()" :key="it.id" class="col-auto">
          <c-permanent :model-value="it" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { useRepo } from 'pinia-orm'
import CPermanent from 'components/pages/events/tours/CPermanent.vue'
import Permanent from 'src/models/entities/events/tours/Permanent'

const permanentsRepo = useRepo(Permanent)
</script>
