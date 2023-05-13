<template>
    <v-card-text id="CMiscellaneous">
        <v-row>
            <v-col>
                <v-radio-group v-model="value.paymentMethod" label="Zahlungsweise (zutreffendes bitte ankreuzen):" mandatory row @input="emitUpdate">
                    <v-radio label="Lastschrifteinzug" value="Lastschrifteinzug"></v-radio>
                    <v-radio label="Bar" value="Bar"></v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                Hiermit ermächtige ich den <b>RTC Köln e.V. 1972</b> den Jahresbeitrag gemäß der aktuellen Beitragsordnung <b>jährlich</b> im Voraus zu Lasten meines Kontos bis auf
                Widerruf einzuziehen:
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field v-model="value.iban" dense label="IBAN" @input="emitUpdate" />
            </v-col>
            <v-col>
                <v-text-field v-model="value.bic" dense label="BIC" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field v-model="value.creditInstitute" dense label="Kreditinstitut" @input="emitUpdate" />
            </v-col>
            <v-col>
                <v-text-field v-model="value.bankholder" dense label="Kontoinhaber" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row v-if="value.signature">
            <v-col>
                <v-text-field v-model="value.signature.location" dense label="Ort" @input="emitUpdate" />
            </v-col>
            <v-col>
                <c-date-picker v-model="value.signature.date" dense label="Datum" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row v-if="value.signature">
            <v-col>
                <c-signature-form v-model="value.signature.signature" label="Unterschrift Kontoinhaber" @input="emitUpdate" />
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CSignatureForm from '~/components/pages/membership-registration/CSignatureForm.vue'
import CDatePicker from '~/components/pages/membership-registration/personal-data/miscellaneous/CDatePicker.vue'
import MembershipFee from '~/models/entities/membership-registration/MembershipFee'

const emits = defineEmits<{ (e: 'input', value: MembershipFee): void }>()
const props = defineProps<{ value: MembershipFee }>()

const value = ref(props.value ?? new MembershipFee())

const emitUpdate = () => emits('input', value.value)
</script>
