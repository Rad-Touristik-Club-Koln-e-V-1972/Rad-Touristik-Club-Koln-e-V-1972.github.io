<template>
  <c-tour :model-value="useTourStore().getBy(EEvent.RTF)" />
</template>

<script lang="ts" setup>
import CTour from 'components/pages/events/tours/CTour.vue'
import EEvent from 'src/models/enums/EEvent'
import useTourStore from 'stores/events/Tour'
</script>
