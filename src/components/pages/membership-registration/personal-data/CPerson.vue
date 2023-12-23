<template>
    <q-card-section>
        <div class="row">
            <div class="col">
                <q-input v-model="modelValue.firstName" label="Vorname" />
            </div>
            <div class="col-1" />
            <div class="col">
                <q-input v-model="modelValue.lastName" label="Nachname" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <q-input v-model="modelValue.street" label="Straße" />
            </div>
            <div class="col-1" />
            <div class="col-3">
                <q-input v-model="modelValue.streetNumber" label="Hausnummer" />
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <q-input v-model="modelValue.zipCode" label="Postleitzahl" @change="updateCity" />
            </div>
            <div class="col-1" />
            <div class="col">
                <q-input v-model="modelValue.city" label="Stadt" />
            </div>
        </div>
    </q-card-section>
</template>

<script lang="ts" setup>
import { defineModel } from 'vue'
import plzToCity from 'postleitzahlen/data/plz.full.json'
import PersonalData from 'src/models/entities/membership-registration/PersonalData'

const modelValue = defineModel<PersonalData>({ required: true })

const updateCity = () => (modelValue.value.city = (plzToCity as Record<string, string[]>)[modelValue.value.zipCode][0] ?? '')
</script>
