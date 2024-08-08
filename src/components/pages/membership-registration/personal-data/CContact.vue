<template>
  <q-card-section>
    <div class="row">
      <div class="col">
        <maz-phone-number-input
          v-model="modelValue.telePhoneNumber"
          v-model:country-code="modelValue.telePhoneCountryCode"
          no-flags
          :translations="{
            countrySelector: {
              error: 'Fehlerhafte Länderauswahl',
              placeholder: 'Landesvorwahl',
              searchPlaceholder: 'Ländersuche',
            },
            phoneInput: {
              placeholder: 'Telefonnummer',
              example: 'Beispiel :',
            },
          }"
        />
      </div>
      <div class="col-1" />
      <div class="col">
        <maz-phone-number-input
          v-model="modelValue.mobilePhoneNumber"
          v-model:country-code="modelValue.mobilePhoneCountryCode"
          no-flags
          :translations="{
            countrySelector: {
              error: 'Fehlerhafte Länderauswahl',
              placeholder: 'Landesvorwahl',
              searchPlaceholder: 'Ländersuche',
            },
            phoneInput: {
              placeholder: 'Handynummer',
              example: 'Beispiel :',
            },
          }"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-input v-model="modelValue.email" label="E-Mail" />
      </div>
    </div>
  </q-card-section>
</template>

<script lang="ts" setup>
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import MembershipPersonalData from 'src/models/entities/membership-registration/MembershipPersonalData'

const modelValue = defineModel<MembershipPersonalData>({ required: true })
</script>
