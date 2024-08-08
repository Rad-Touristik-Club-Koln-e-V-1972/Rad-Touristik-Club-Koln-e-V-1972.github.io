<template>
  <q-card-section>
    <div class="row">
      <div class="col">
        <c-date-picker v-model="modelValue.birthdate" label="Geburtsdatum" :max="new Date()" :min="date.addToDate(new Date(), { years: -100 })" />
      </div>
      <div class="col-1" />
      <div class="col">
        <q-select v-model="modelValue.tShirtSize" label="T-Shirt Größe" :options="['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <c-date-picker v-model="modelValue.entryDate" label="Eintritt (Datum)" :max="date.addToDate(new Date(), { month: 1 })" :min="date.buildDate({ year: 1972, month: 10, date: 30 })" />
      </div>
      <div class="col-1" />
      <div class="col">
        <q-checkbox v-model="modelValue.wantsBdrMembership" label="BDR-Beitritt" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-input v-model="modelValue.specialNeeds" label="Besonderheiten" />
        <small>(bspw. Allergiker)</small>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-checkbox v-model="modelValue.wantsAmateursportslicense" label="Ich beantrage hiermit die Breitensportlizenz (für die Teilnahme an den RTF)." />
      </div>
    </div>
  </q-card-section>
</template>

<script lang="ts" setup>
import { date } from 'quasar'
import CDatePicker from 'components/pages/membership-registration/personal-data/miscellaneous/CDatePicker.vue'
import MembershipPersonalData from 'src/models/entities/membership-registration/MembershipPersonalData'

const modelValue = defineModel<MembershipPersonalData>({ required: true })
</script>
