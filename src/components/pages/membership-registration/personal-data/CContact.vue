<template>
    <v-card-text id="CContact">
        <v-row>
            <v-col>
                <MazPhoneNumberInput
                    :default-country-code="_value.telePhoneCountryCode"
                    :default-phone-number="_value.telePhoneNumber"
                    no-flags
                    no-validation
                    :translations="{
                        countrySelectorError: 'Fehlerhafte Länderauswahl',
                        countrySelectorLabel: 'Landesvorwahl',
                        example: 'Beispiel :',
                        phoneNumberLabel: 'Telefon',
                    }"
                    @update="emitTelePhoneUpdate"
                />
            </v-col>
            <v-col>
                <MazPhoneNumberInput
                    :default-country-code="_value.mobilePhoneCountryCode"
                    :default-phone-number="_value.mobilePhoneNumber"
                    no-flags
                    no-validation
                    :translations="{
                        countrySelectorError: 'Fehlerhafte Länderauswahl',
                        countrySelectorLabel: 'Landesvorwahl',
                        example: 'Beispiel :',
                        phoneNumberLabel: 'Handy',
                    }"
                    @update="emitMobilePhoneUpdate"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field v-model="_value.email" dense label="E-Mail" @input="emitUpdate" />
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { MazPhoneNumberInput } from 'maz-ui'
import PersonalData from '~/models/entities/membership-registration/PersonalData'

const emits = defineEmits<(e: 'input', value: PersonalData) => void>()
const props = defineProps<{ value: PersonalData }>()

const _value = ref()

const emitMobilePhoneUpdate = (event: { countryCode: string; phoneNumber: string }) => {
    _value.value.mobilePhoneCountryCode = event.countryCode
    _value.value.mobilePhoneNumber = event.phoneNumber
    emitUpdate()
}
const emitTelePhoneUpdate = (event: { countryCode: string; phoneNumber: string }) => {
    _value.value.telePhoneCountryCode = event.countryCode
    _value.value.telePhoneNumber = event.phoneNumber
    emitUpdate()
}
const emitUpdate = () => emits('input', _value.value)

onMounted(() => {
    _value.value = props.value
})
</script>
