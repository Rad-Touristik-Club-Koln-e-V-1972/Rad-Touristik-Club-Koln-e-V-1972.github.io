<template>
  <c-tour v-if="familyTour" :model-value="familyTour" />
</template>

<script lang="ts" setup>
import { useRepo } from 'pinia-orm'
import CTour from 'components/pages/events/tours/CTour.vue'
import EEvent from 'src/models/enums/EEvent'
import EventsRepository from 'stores/events/tours/EventsRepository'

const eventsRepo = useRepo(EventsRepository)

const familyTour = eventsRepo.getByCategory(EEvent.Familientour)
</script>
