<template>
    <v-autocomplete
        id="CCategories"
        :append-icon="icons.mdiFilter"
        clearable
        hide-details
        :items="Object.values(EEvent)"
        label="Kategorien"
        multiple
        :value="props.value"
        @input="emitInput"
    />
</template>

<script lang="ts" setup>
import { mdiFilter } from '@mdi/js'
import EEvent from '~/models/enums/EEvent'

const emits = defineEmits<{ (e: 'input', value: EEvent): void }>()
const props = defineProps<{ value: EEvent[] }>()

const icons = { mdiFilter }

const emitInput = (value: EEvent) => {
    emits('input', value)
}
</script>
