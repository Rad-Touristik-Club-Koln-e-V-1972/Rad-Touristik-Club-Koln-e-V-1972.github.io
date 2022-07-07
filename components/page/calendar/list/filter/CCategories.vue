<template>
    <v-autocomplete
        id="CCategories"
        :value="props.value"
        :append-icon="icons.mdiFilter"
        clearable
        hide-details
        :items="Object.values(EEvent)"
        label="Kategorien"
        multiple
        @input="(it) => emits('input', it)"
    />
</template>

<script lang="ts" setup>
import { mdiFilter } from '@mdi/js'
import EEvent from '@/models/enums/EEvent'

const emits = defineEmits<{
    (e: 'input', value: EEvent): void
}>()
const props = defineProps<{ value: EEvent[] }>()

const icons = { mdiFilter }
</script>

<style lang="scss" scoped />
