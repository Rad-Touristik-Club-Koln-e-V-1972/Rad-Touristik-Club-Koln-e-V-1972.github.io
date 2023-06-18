<template>
    <q-input :model-value="stringDate" clearable dense hide-hint label="Datenbereich" @click="popup = true" @clear="clear">
        <template #append>
            <q-icon class="cursor-pointer" :name="mdiCalendar">
                <q-popup-proxy v-model="popup" cover>
                    <q-date v-model="value" color="primary" mask="DD.MM.YYYY" range>
                        <div class="items-center justify-end row">
                            <q-btn v-close-popup label="Abbrechen" />
                            <q-btn v-close-popup color="primary" label="OK" @click="save" />
                        </div>
                    </q-date>
                </q-popup-proxy>
            </q-icon>
        </template>
    </q-input>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { is } from 'quasar'
import { mdiCalendar } from '@quasar/extras/mdi-v7'

const emits = defineEmits<{ 'update:modelValue': [value: string | { from: string; to: string }] }>()
const props = defineProps<{ modelValue: string | { from: string; to: string } }>()

const value = ref<string | { from: string; to: string }>('')
const popup = ref(false)
const stringDate = ref('')

const clear = () => {
    stringDate.value = ''
    value.value = ''
    emits('update:modelValue', '')
}
const save = () => {
    stringDate.value = is.object(value.value) ? `${value.value.from} - ${value.value.to}` : `${value.value}`
    emits('update:modelValue', value.value)
}

onMounted(() => {
    value.value = props.modelValue
})
</script>
