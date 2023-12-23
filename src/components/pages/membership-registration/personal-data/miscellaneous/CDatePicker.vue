<template>
    <div class="q-pa-md">
        <q-input dense :label="props.label" :model-value="modelValue ? useDateTime().format(new Date(modelValue), null, true) : ''" readonly>
            <template #append>
                <q-icon :name="mdiCalendar" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date
                            :model-value="modelValue"
                            :navigation-max-year-month="date.formatDate(props.max, 'YYYY/MM')"
                            :navigation-min-year-month="date.formatDate(props.min, 'YYYY/MM')"
                        >
                            <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                        </q-date>
                    </q-popup-proxy>
                </q-icon>
            </template>
        </q-input>
    </div>
</template>

<script lang="ts" setup>
import { defineModel } from 'vue'
import { date } from 'quasar'
import { mdiCalendar } from '@quasar/extras/mdi-v7'
import useDateTime from 'src/utils/DateTime'

const modelValue = defineModel<string>({ required: true })
const props = withDefaults(defineProps<{ label?: string; max?: Date; min?: Date }>(), {
    label: '',
    max: undefined,
    min: undefined,
})
</script>
