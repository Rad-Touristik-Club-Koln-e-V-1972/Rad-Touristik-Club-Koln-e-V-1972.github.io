<template>
    <q-card-section>
        <div class="row">
            <div class="col">
                <maz-phone-number-input
                    v-model="modelValue.telePhoneNumber"
                    :default-country-code="modelValue.telePhoneCountryCode"
                    :default-phone-number="modelValue.telePhoneNumber"
                    no-flags
                    no-validation
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
                    @country-code="emitTelePhoneUpdate"
                />
            </div>
            <div class="col-1" />
            <div class="col">
                <maz-phone-number-input
                    v-model="modelValue.mobilePhoneNumber"
                    :default-country-code="modelValue.mobilePhoneCountryCode"
                    :default-phone-number="modelValue.mobilePhoneNumber"
                    no-flags
                    no-validation
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
                    @country-code="emitMobilePhoneUpdate"
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
import { defineModel } from 'vue'
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import PersonalData from 'src/models/entities/membership-registration/PersonalData'

const modelValue = defineModel<PersonalData>({ required: true })

const emitMobilePhoneUpdate = (countryCode: string) => {
    modelValue.value.mobilePhoneCountryCode = countryCode
}
const emitTelePhoneUpdate = (countryCode: string) => {
    modelValue.value.telePhoneCountryCode = countryCode
}
</script>
