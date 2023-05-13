<template>
    <v-card-text id="CPerson">
        <v-row>
            <v-col>
                <v-text-field v-model="value.firstName" label="Vorname" @input="emitUpdate" />
            </v-col>
            <v-col>
                <v-text-field v-model="value.lastName" label="Nachname" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8">
                <v-text-field v-model="value.street" label="Straße" @input="emitUpdate" />
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="value.streetNumber" label="Nummer" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8">
                <v-text-field v-model="value.city" label="Stadt" @input="emitUpdate" />
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="value.zipCode" label="PLZ" @input="emitUpdate" />
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PersonalData from '~/models/entities/membership-registration/PersonalData'

const emits = defineEmits<{ (e: 'input', value: PersonalData): void }>()
const props = defineProps<{ value: PersonalData }>()

const value = ref(props.value ?? new PersonalData())

const emitUpdate = () => emits('input', value.value)
</script>
