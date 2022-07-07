<template>
    <v-text-field id="CSearch" :value="props.value" :append-icon="icons.mdiMagnify" clearable hide-details label="Suche" @input="(it) => emits('input', it)" />
</template>

<script lang="ts" setup>
import { mdiMagnify } from '@mdi/js'

const emits = defineEmits<{
    (e: 'input', value: string): void
}>()
const props = defineProps<{ value: string }>()

const icons = { mdiMagnify }
</script>

<style lang="scss" scoped />
