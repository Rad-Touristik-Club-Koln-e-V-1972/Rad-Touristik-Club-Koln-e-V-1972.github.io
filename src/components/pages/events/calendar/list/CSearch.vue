<template>
    <v-text-field id="CSearch" :append-icon="icons.mdiMagnify" clearable hide-details label="Suche" :value="props.value" @input="emitInput" />
</template>

<script lang="ts" setup>
import { mdiMagnify } from '@mdi/js'

const emits = defineEmits<{ (e: 'input', value: string): void }>()
const props = defineProps<{ value: string }>()

const icons = { mdiMagnify }

const emitInput = (value: string) => {
    emits('input', value)
}
</script>
