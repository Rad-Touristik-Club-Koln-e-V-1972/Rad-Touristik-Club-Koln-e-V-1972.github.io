<template>
    <q-input :model-value="props.modelValue" clearable debounce="500" dense hide-hint label="Suche" @update:model-value="(value) => emits('update:modelValue', value)">
        <template #append>
            <q-icon :name="mdiMagnify" />
        </template>
    </q-input>
</template>

<script lang="ts" setup>
import { mdiMagnify } from '@quasar/extras/mdi-v7'

const emits = defineEmits<{ 'update:modelValue': [value: string | number | null] }>()
const props = defineProps<{ modelValue?: string }>()
</script>
