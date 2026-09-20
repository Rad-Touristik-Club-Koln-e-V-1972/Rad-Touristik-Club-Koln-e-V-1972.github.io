<template>
  <c-tour :model-value="useTourStore().getBy(EEvent.RTF_Saison_Finale)" />
</template>

<script lang="ts" setup>
import CTour from "@/components/pages/events/tours/CTour.vue";
import useTourStore from "@/stores/events/Tour";
import EEvent from "@/models/enums/EEvent";
</script>
