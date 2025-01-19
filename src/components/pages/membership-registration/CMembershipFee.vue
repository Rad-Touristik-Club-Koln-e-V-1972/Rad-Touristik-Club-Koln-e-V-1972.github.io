<template>
  <q-card-section>
    <div class="row">
      <div class="col">
        <div class="q-px-sm">Zahlungsweise (zutreffendes bitte ankreuzen):</div>
        <div class="q-gutter-sm">
          <q-radio v-model="modelValue.paymentMethod" label="Lastschrifteinzug" val="Lastschrifteinzug" />
          <q-radio v-model="modelValue.paymentMethod" label="Bar" val="Bar" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">Hiermit ermächtige ich den <b>RTC Köln e.V. 1972</b> den Jahresbeitrag gemäß der aktuellen Beitragsordnung <b>jährlich</b> im Voraus zu Lasten meines Kontos bis auf Widerruf einzuziehen:</div>
    </div>
    <div class="row">
      <div class="col">
        <q-input v-model="modelValue.iban" label="IBAN" />
      </div>
      <div class="col-1" />
      <div class="col">
        <q-input v-model="modelValue.bic" label="BIC" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-input v-model="modelValue.creditInstitute" label="Kreditinstitut" />
      </div>
      <div class="col-1" />
      <div class="col">
        <q-input v-model="modelValue.bankholder" label="Kontoinhaber" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-input v-model="modelValue.signature.location" label="Ort" />
      </div>
      <div class="col-1" />
      <div class="col">
        <c-date-picker v-model="modelValue.signature.date" label="Datum" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <c-signature-form v-model="modelValue.signature.signature" label="Unterschrift Kontoinhaber" />
      </div>
    </div>
  </q-card-section>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import CSignatureForm from 'components/pages/membership-registration/CSignatureForm.vue'
import CDatePicker from 'components/pages/membership-registration/personal-data/miscellaneous/CDatePicker.vue'
import type MembershipFee from 'src/models/entities/membership-registration/MembershipFee'

const modelValue = defineModel<MembershipFee>({ required: true })

watch(
  () => modelValue.value.iban,
  (currentValue) => {
    // Add spaces to IBAN
    modelValue.value.iban = currentValue
      .replace(/[^\dA-Z]/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim()
  },
)
</script>
