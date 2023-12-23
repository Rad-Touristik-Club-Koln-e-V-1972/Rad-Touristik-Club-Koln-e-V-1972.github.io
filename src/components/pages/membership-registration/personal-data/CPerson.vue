<template>
    <q-card-section>
        <div class="row">
            <div class="col">
                <q-input v-model="value.firstName" label="Vorname" @update:model-value="emitUpdate" />
            </div>
            <div class="col-1" />
            <div class="col">
                <q-input v-model="value.lastName" label="Nachname" @update:model-value="emitUpdate" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <q-input v-model="value.street" label="Straße" @update:model-value="emitUpdate" />
            </div>
            <div class="col-1" />
            <div class="col-3">
                <q-input v-model="value.streetNumber" label="Hausnummer" @update:model-value="emitUpdate" />
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <q-input v-model="value.zipCode" label="Postleitzahl" @change="updateCity" @update:model-value="emitUpdate" />
            </div>
            <div class="col-1" />
            <div class="col">
                <q-input v-model="value.city" label="Stadt" @update:model-value="emitUpdate" />
            </div>
        </div>
    </q-card-section>
</template>

<script lang="ts" setup>
import { onMounted, ref, toValue } from 'vue'
import plzToCity from 'postleitzahlen/data/plz.full.json'
import PersonalData from 'src/models/entities/membership-registration/PersonalData'

const emits = defineEmits<{ 'update:modelValue': [value: PersonalData] }>()
const props = defineProps<{ modelValue: PersonalData }>()

const value = ref(new PersonalData())

const emitUpdate = () => {
    emits('update:modelValue', toValue(value.value))
}

const updateCity = () => (value.value.city = (plzToCity as Record<string, string[]>)[value.value.zipCode][0] ?? '')

onMounted(() => {
    value.value = props.modelValue
})
</script>
