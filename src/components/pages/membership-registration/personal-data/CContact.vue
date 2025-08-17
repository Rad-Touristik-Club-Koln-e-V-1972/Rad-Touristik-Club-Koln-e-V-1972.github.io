<template>
  <q-card-section>
    <div class="row">
      <div class="col">
        <maz-input-phone-number v-model="modelValue.telePhoneNumber" v-model:country-code="modelValue.telePhoneCountryCode" no-flags />
      </div>
      <div class="col-1" />
      <div class="col">
        <maz-input-phone-number v-model="modelValue.mobilePhoneNumber" v-model:country-code="modelValue.mobilePhoneCountryCode" no-flags />
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
import { MazInputPhoneNumber } from 'maz-ui/components'
import type PersonalData from 'src/models/entities/membership-registration/PersonalData'

const modelValue = defineModel<PersonalData>({ required: true })
</script>
