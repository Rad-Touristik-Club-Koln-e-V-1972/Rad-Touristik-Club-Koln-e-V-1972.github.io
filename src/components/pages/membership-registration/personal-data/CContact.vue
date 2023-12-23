<template>
    <q-card-section>
        <div class="row">
            <div class="col">
                <maz-phone-number-input
                    v-model="value.telePhoneNumber"
                    :default-country-code="value.telePhoneCountryCode"
                    :default-phone-number="value.telePhoneNumber"
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
                    v-model="value.mobilePhoneNumber"
                    :default-country-code="value.mobilePhoneCountryCode"
                    :default-phone-number="value.mobilePhoneNumber"
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
                <q-input v-model="value.email" label="E-Mail" @update:model-value="emitUpdate" />
            </div>
        </div>
    </q-card-section>
</template>

<script lang="ts" setup>
import { onMounted, ref, toValue } from 'vue'
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import PersonalData from 'src/models/entities/membership-registration/PersonalData'

const emits = defineEmits<{ 'update:modelValue': [value: PersonalData] }>()
const props = defineProps<{ modelValue: PersonalData }>()

const value = ref(new PersonalData())

const emitMobilePhoneUpdate = (countryCode: string) => {
    value.value.mobilePhoneCountryCode = countryCode
    emitUpdate()
}
const emitTelePhoneUpdate = (countryCode: string) => {
    value.value.telePhoneCountryCode = countryCode
    emitUpdate()
}
const emitUpdate = () => {
    emits('update:modelValue', toValue(value.value))
}

onMounted(() => {
    value.value = props.modelValue
})
</script>
