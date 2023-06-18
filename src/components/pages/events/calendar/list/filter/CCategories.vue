<template>
    <q-select
        clearable
        dense
        hide-hint
        label="Kategorien"
        :model-value="props.modelValue"
        multiple
        :options="Object.values(EEvent)"
        @update:model-value="(value) => emits('update:modelValue', value)"
    >
        <template #append>
            <q-icon :name="mdiFilter" />
        </template>
    </q-select>
</template>

<script lang="ts" setup>
import { mdiFilter } from '@quasar/extras/mdi-v7'
import EEvent from 'src/models/enums/EEvent'

const emits = defineEmits<{ 'update:modelValue': [value: EEvent] }>()
const props = defineProps<{ modelValue: EEvent[] }>()
</script>
