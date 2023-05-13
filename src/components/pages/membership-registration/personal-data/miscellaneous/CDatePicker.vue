<template>
    <v-menu id="CDatePicker" v-model="menu" :close-on-content-click="false" min-width="auto" offset-y transition="scale-transition">
        <template #activator="{ on, attrs }">
            <v-text-field
                :dense="dense"
                :label="props.label"
                :prepend-icon="mdiCalendar"
                readonly
                :value="props.value ? useDateTime().format(new Date(props.value), null, true) : ''"
                v-bind="attrs"
                v-on="on"
            />
        </template>
        <v-date-picker :active-picker.sync="activePicker" :max="props.max" :min="props.min" :value="props.value" @input="emitUpdate" />
    </v-menu>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { mdiCalendar } from '@mdi/js'
import useDateTime from '~/utils/DateTime'

const emits = defineEmits<{ (e: 'input', value: string): void }>()
const props = defineProps({
    dense: { default: false, type: Boolean },
    label: { default: '', type: String },
    max: { default: '', type: String },
    min: { default: '', type: String },
    value: { required: true, type: String },
})

const activePicker = ref()
const menu = ref()

const emitUpdate = (modelValue: string) => emits('input', modelValue)

watch(
    () => menu.value,
    () => setTimeout(() => (activePicker.value = 'YEAR'))
)
</script>
