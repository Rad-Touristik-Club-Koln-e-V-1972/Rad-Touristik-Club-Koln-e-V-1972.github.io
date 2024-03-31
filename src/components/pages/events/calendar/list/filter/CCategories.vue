<template>
  <q-select v-model="modelValue" clearable dense hide-hint label="Kategorien" multiple :options="Object.values(EEvent)" @clear="modelValue = []">
    <template #append>
      <q-icon :name="mdiFilter" />
    </template>
  </q-select>
</template>

<script lang="ts" setup>
import { defineModel } from 'vue'
import { mdiFilter } from '@quasar/extras/mdi-v7'
import EEvent from 'src/models/enums/EEvent'

const modelValue = defineModel<EEvent[]>({ required: true })
</script>
