<template>
    <div class="q-pa-md">
        <q-input dense :label="props.label" :model-value="props.modelValue ? useDateTime().format(new Date(props.modelValue), null, true) : ''" readonly>
            <template #append>
                <q-icon :name="mdiCalendar" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date
                            :model-value="props.modelValue"
                            :navigation-max-year-month="date.formatDate(props.max, 'YYYY/MM')"
                            :navigation-min-year-month="date.formatDate(props.min, 'YYYY/MM')"
                            @update:model-value="(value) => emits('update:modelValue', value)"
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
import { mdiCalendar } from '@quasar/extras/mdi-v7'
import useDateTime from 'src/utils/DateTime'
import { date } from 'quasar'

const emits = defineEmits<{ 'update:modelValue': [value: string] }>()
const props = defineProps({
    label: { default: '', type: String },
    max: { default: undefined, type: Date },
    min: { default: undefined, type: Date },
    modelValue: { required: true, type: String },
})
</script>
