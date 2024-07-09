<template>
  <q-card-section>
    <div class="row">
      <div class="col">
        <q-checkbox v-model="modelValue.isMember" label="Ich bin bereits Mitglied beim Bund Deutscher Radfahrer (bei Vereinswechsel bitte unbedingt angeben)" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-input v-model="modelValue.number" label="BDR-Mitgliedsnummer" />
      </div>
      <div class="col">
        <c-date-picker v-model="modelValue.date" label="Mitglied seit" />
      </div>
    </div>
  </q-card-section>
</template>

<script lang="ts" setup>
import CDatePicker from 'components/pages/membership-registration/personal-data/miscellaneous/CDatePicker.vue'
import BdrMembership from 'src/models/entities/membership-registration/BdrMembership'

const modelValue = defineModel<BdrMembership>({ required: true })
</script>
