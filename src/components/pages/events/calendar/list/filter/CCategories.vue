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
        @input="emitUpdate"
    />
</template>

<script lang="ts" setup>
import { mdiFilter } from '@mdi/js'
import EEvent from '~/models/enums/EEvent'

const emits = defineEmits<{ (e: 'input', value: EEvent): void }>()
const props = defineProps<{ value: EEvent[] }>()

const icons = { mdiFilter }

const emitUpdate = (modelValue: EEvent) => {
    emits('input', modelValue)
}
</script>
