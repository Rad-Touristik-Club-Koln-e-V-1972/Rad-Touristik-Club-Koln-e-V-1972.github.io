<template>
  <c-tour fee-hints="* Die Fahrkarten werden als verschiedenfarbige Chips o.ä. am Start ausgegeben." :value="useTourStore().getBy(EEvent.Familientour)" />
</template>

<script lang="ts" setup>
import EEvent from 'src/models/enums/EEvent'
import CTour from 'components/pages/events/tours/CTour.vue'
import useTourStore from 'stores/events/Tour'
</script>
