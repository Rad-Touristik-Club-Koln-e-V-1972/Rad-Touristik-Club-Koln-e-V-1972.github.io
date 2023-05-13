<template>
    <v-card-text id="CPerson">
        <v-row>
            <v-col>
                <v-text-field v-model="_value.firstName" dense label="Vorname" @input="emitUpdate" />
            </v-col>
            <v-col>
                <v-text-field v-model="_value.lastName" dense label="Nachname" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8">
                <v-text-field v-model="_value.street" dense label="Straße" @input="emitUpdate" />
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="_value.streetNumber" dense label="Nummer" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-text-field v-model="_value.zipCode" dense label="PLZ" @change="updateCity" @input="emitUpdate" />
            </v-col>
            <v-col cols="8">
                <v-text-field v-model="_value.city" dense label="Stadt" @input="emitUpdate" />
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import plzToCity from 'postleitzahlen/data/plz.full.json'
import PersonalData from '~/models/entities/membership-registration/PersonalData'

const emits = defineEmits<{ (e: 'input', value: PersonalData): void }>()
const props = defineProps<{ value: PersonalData }>()

const _value = ref(props.value)

const emitUpdate = () => emits('input', _value.value)

const updateCity = () => (_value.value.city = (plzToCity as Record<string, string[]>)[_value.value.zipCode]?.[0] ?? '')
</script>
