<template>
    <v-dialog id="CDateRange" v-model="isOpen" persistent width="auto">
        <template #activator="{ attrs, on }">
            <v-text-field
                v-model="items"
                :append-icon="icons.mdiCalendar"
                clearable
                hide-details
                label="Datenbereich"
                readonly
                v-bind="attrs"
                v-on="on"
                @click:clear="() => $emit('input', [])"
            />
        </template>
        <v-date-picker v-model="items" color="primary" range scrollable>
            <v-spacer />
            <v-btn text @click="abort">Abbrechen</v-btn>
            <v-btn color="primary" text @click="save">OK</v-btn>
        </v-date-picker>
    </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiCalendar } from '@mdi/js'

const emits = defineEmits<{
    (e: 'input', value: string[]): void
}>()
const props = defineProps<{ value: string[] }>()

const icons = { mdiCalendar }
const isOpen = ref(false)
let items = props.value

const abort = () => {
    items = []
    close()
}
const close = () => {
    emits('input', items)
    isOpen.value = false
}
const save = () => close()
</script>
