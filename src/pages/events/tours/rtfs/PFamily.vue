<template>
  <c-tour fee-hints="* Die Fahrkarten werden als verschiedenfarbige Chips o.ä. am Start ausgegeben." :value="useTourStore().getFamily()" />
</template>

<script lang="ts" setup>
import CTour from 'components/pages/events/tours/CTour.vue'
import useTourStore from 'stores/events/Tour'
</script>
