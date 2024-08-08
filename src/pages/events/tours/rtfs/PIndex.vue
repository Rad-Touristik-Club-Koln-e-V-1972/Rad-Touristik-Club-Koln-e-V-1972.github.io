<template>
  <c-tour v-if="rtf" :model-value="rtf" />
</template>

<script lang="ts" setup>
import { useRepo } from 'pinia-orm'
import CTour from 'components/pages/events/tours/CTour.vue'
import EEvent from 'src/models/enums/EEvent'
import EventsRepository from 'stores/events/tours/EventsRepository'

const eventsRepo = useRepo(EventsRepository)

const rtf = eventsRepo.getByCategory(EEvent.RTF)
</script>
