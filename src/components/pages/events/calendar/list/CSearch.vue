<template>
  <q-input v-model="modelValue" clearable debounce="500" dense hide-hint label="Suche">
    <template #append>
      <q-icon :name="mdiMagnify" />
    </template>
  </q-input>
</template>

<script lang="ts" setup>
import { mdiMagnify } from '@quasar/extras/mdi-v7'

const modelValue = defineModel<string | number | null>()
</script>
