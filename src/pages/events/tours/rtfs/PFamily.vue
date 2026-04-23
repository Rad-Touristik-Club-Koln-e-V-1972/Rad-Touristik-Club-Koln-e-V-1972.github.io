<template>
  <c-tour :model-value="useTourStore().getFamily()" fee-hints="* Die Fahrkarten werden als verschiedenfarbige Chips am Start ausgegeben." />
</template>

<script lang="ts" setup>
import CTour from 'components/pages/events/tours/CTour.vue'
import useTourStore from 'stores/events/Tour'
</script>
