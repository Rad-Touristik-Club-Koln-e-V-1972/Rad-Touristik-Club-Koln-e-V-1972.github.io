<template>
    <v-card-text id="CMiscellaneous">
        <v-row>
            <v-col>
                <c-date-picker
                    v-model="value.birthdate"
                    label="Geburtsdatum"
                    :max="new Date().toISOString()"
                    :min="dateTime.getHundredYearsAgo().toISOString()"
                    @input="emitUpdate"
                />
            </v-col>
            <v-col>
                <v-text-field v-model="value.tShirtSize" label="T-Shirt Größe" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <c-date-picker v-model="value.entryDate" label="Eintritt (Datum)" :max="dateTime.getNextMonth().toISOString()" min="1972-10-30" @input="emitUpdate" />
            </v-col>
            <v-col>
                <v-checkbox v-model="value.wantsBdrMembership" label="BDR-Beitritt" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field v-model="value.specialNeeds" label="Besonderheiten" @input="emitUpdate" />
                <small>(bspw. Allergiker)</small>
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CDatePicker from '~/components/pages/membership-registration/personal-data/miscellaneous/CDatePicker.vue'
import PersonalData from '~/models/entities/membership-registration/PersonalData'
import useDateTime from '~/utils/DateTime'

const emits = defineEmits<{ (e: 'input', value: PersonalData): void }>()
const props = defineProps<{ value: PersonalData }>()

const dateTime = useDateTime()

const value = ref(props.value ?? new PersonalData())

const emitUpdate = () => emits('input', value.value)
</script>
