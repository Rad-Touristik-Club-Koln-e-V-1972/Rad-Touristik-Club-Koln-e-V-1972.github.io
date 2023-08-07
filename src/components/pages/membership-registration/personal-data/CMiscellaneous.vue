<template>
    <v-card-text id="CMiscellaneous">
        <v-row>
            <v-col>
                <c-date-picker
                    v-model="_value.birthdate"
                    dense
                    label="Geburtsdatum"
                    :max="new Date().toISOString()"
                    :min="dateTime.getHundredYearsAgo().toISOString()"
                    @input="emitUpdate"
                />
            </v-col>
            <v-col>
                <v-combobox v-model="_value.tShirtSize" dense :items="['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']" label="T-Shirt Größe" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <c-date-picker v-model="_value.entryDate" dense label="Eintritt (Datum)" :max="dateTime.getNextMonth().toISOString()" min="1972-10-30" @input="emitUpdate" />
            </v-col>
            <v-col>
                <v-checkbox v-model="_value.wantsBdrMembership" dense label="BDR-Beitritt" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field v-model="_value.specialNeeds" dense label="Besonderheiten" @input="emitUpdate" />
                <small>(bspw. Allergiker)</small>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-checkbox
                    v-model="_value.wantsAmateursportslicense"
                    dense
                    label="Ich beantrage hiermit die Breitensportlizenz (für die Teilnahme an den RTF)."
                    @input="emitUpdate"
                />
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import CDatePicker from '~/components/pages/membership-registration/personal-data/miscellaneous/CDatePicker.vue'
import PersonalData from '~/models/entities/membership-registration/PersonalData'
import useDateTime from '~/utils/DateTime'

const emits = defineEmits<(e: 'input', value: PersonalData) => void>()
const props = defineProps<{ value: PersonalData }>()

const dateTime = useDateTime()

const _value = ref()

const emitUpdate = () => emits('input', _value.value)

onMounted(() => {
    _value.value = props.value
})
</script>
