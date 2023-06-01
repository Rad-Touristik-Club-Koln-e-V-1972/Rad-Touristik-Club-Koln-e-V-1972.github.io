<template>
    <v-card-text id="CMiscellaneous">
        <v-row>
            <v-col>
                <v-radio-group v-model="_value.paymentMethod" dense label="Zahlungsweise (zutreffendes bitte ankreuzen):" mandatory row @input="emitUpdate">
                    <v-radio label="Lastschrifteinzug" value="Lastschrifteinzug" />
                    <v-radio label="Bar" value="Bar" />
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
                <v-text-field v-model="_value.iban" dense label="IBAN" @input="emitUpdate" />
            </v-col>
            <v-col>
                <v-text-field v-model="_value.bic" dense label="BIC" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field v-model="_value.creditInstitute" dense label="Kreditinstitut" @input="emitUpdate" />
            </v-col>
            <v-col>
                <v-text-field v-model="_value.bankholder" dense label="Kontoinhaber" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row v-if="_value.signature">
            <v-col>
                <v-text-field v-model="_value.signature.location" dense label="Ort" @input="emitUpdate" />
            </v-col>
            <v-col>
                <c-date-picker v-model="_value.signature.date" dense label="Datum" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row v-if="_value.signature">
            <v-col>
                <c-signature-form v-model="_value.signature.signature" label="Unterschrift Kontoinhaber" :readonly="readonly" @input="emitUpdate" />
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import CSignatureForm from '~/components/pages/membership-registration/CSignatureForm.vue'
import CDatePicker from '~/components/pages/membership-registration/personal-data/miscellaneous/CDatePicker.vue'
import MembershipFee from '~/models/entities/membership-registration/MembershipFee'

const emits = defineEmits<{ (e: 'input', value: MembershipFee): void }>()
const props = defineProps({
    readonly: { default: false, type: Boolean },
    value: { required: true, type: MembershipFee },
})

const _value = ref(props.value ?? new MembershipFee())

const emitUpdate = () => emits('input', _value.value)

watch(
    () => _value.value.iban,
    (currentValue) => {
        // Add spaces to IBAN
        _value.value.iban = currentValue
            .replace(/[^\dA-Z]/g, '')
            .replace(/(.{4})/g, '$1 ')
            .trim()
    }
)
</script>
