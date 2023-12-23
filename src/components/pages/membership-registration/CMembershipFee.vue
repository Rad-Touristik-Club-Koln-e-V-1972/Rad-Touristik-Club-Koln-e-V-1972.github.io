<template>
    <q-card-section>
        <div class="row">
            <div class="col">
                <div class="q-px-sm">Zahlungsweise (zutreffendes bitte ankreuzen):</div>
                <div class="q-gutter-sm">
                    <q-radio v-model="value.paymentMethod" label="Lastschrifteinzug" val="Lastschrifteinzug" @update:model-value="emitUpdate" />
                    <q-radio v-model="value.paymentMethod" label="Bar" val="Bar" @update:model-value="emitUpdate" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                Hiermit ermächtige ich den <b>RTC Köln e.V. 1972</b> den Jahresbeitrag gemäß der aktuellen Beitragsordnung <b>jährlich</b> im Voraus zu Lasten meines Kontos bis auf
                Widerruf einzuziehen:
            </div>
        </div>
        <div class="row">
            <div class="col">
                <q-input v-model="value.iban" label="IBAN" @update:model-value="emitUpdate" />
            </div>
            <div class="col-1" />
            <div class="col">
                <q-input v-model="value.bic" label="BIC" @update:model-value="emitUpdate" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <q-input v-model="value.creditInstitute" label="Kreditinstitut" @update:model-value="emitUpdate" />
            </div>
            <div class="col-1" />
            <div class="col">
                <q-input v-model="value.bankholder" label="Kontoinhaber" @update:model-value="emitUpdate" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <q-input v-model="value.signature.location" label="Ort" @update:model-value="emitUpdate" />
            </div>
            <div class="col-1" />
            <div class="col">
                <c-date-picker v-model="value.signature.date" label="Datum" @update:model-value="emitUpdate" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <c-signature-form v-model="value.signature.signature" label="Unterschrift Kontoinhaber" @update:model-value="emitUpdate" />
            </div>
        </div>
    </q-card-section>
</template>

<script lang="ts" setup>
import { onMounted, ref, toValue, watch } from 'vue'
import CSignatureForm from 'components/pages/membership-registration/CSignatureForm.vue'
import CDatePicker from 'components/pages/membership-registration/personal-data/miscellaneous/CDatePicker.vue'
import MembershipFee from 'src/models/entities/membership-registration/MembershipFee'

const emits = defineEmits<{ 'update:modelValue': [value: MembershipFee] }>()
const props = defineProps<{ modelValue: MembershipFee }>()

const value = ref(new MembershipFee())

const emitUpdate = () => {
    emits('update:modelValue', toValue(value.value))
}

watch(
    () => value.value.iban,
    (currentValue) => {
        // Add spaces to IBAN
        value.value.iban = currentValue
            .replace(/[^\dA-Z]/g, '')
            .replace(/(.{4})/g, '$1 ')
            .trim()
    },
)

onMounted(() => {
    value.value = props.modelValue
})
</script>
