<!-- TODO boilerplate component not needed -->
<!-- TODO boilerplate component not needed -->
<!-- TODO boilerplate component not needed -->
<!-- TODO boilerplate component not needed -->
<template>
  <c-tour :model-value="useTourStore().getFamily()" />
</template>

<script lang="ts" setup>
import CTour from 'components/pages/events/tours/CTour.vue'
import useTourStore from 'stores/events/Tour'
</script>
