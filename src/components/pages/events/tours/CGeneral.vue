<template>
  <div class="justify-center row">
    <q-card class="col-auto" style="max-width: 40em">
      <q-card-section class="bg-primary text-accent text-h6">Vorwort</q-card-section>
      <q-card-section>
        <span class="text-pre-wrap" v-html="props.text" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ text: string }>()
</script>
