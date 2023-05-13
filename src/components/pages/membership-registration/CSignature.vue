<template>
    <v-card-text id="CSignature">
        <v-row>
            <v-col>
                <small>
                    Mit dieser Erklärung trete ich dem <b>RTC Köln e.V. 1972</b> bei.
                    <br />
                    Durch den Beitritt entstehen gegenüber dem <b>RTC Köln e.V. 1972</b> keinerlei finanzielle, materielle sowie sonstige Forderungsansprüche.
                    <br />
                    Die Mitgliedschaft kann bis 30. September eines Jahres zum Jahresende gekündigt werden.
                    <br />
                    Eine Erstattung von bereits gezahlten Beträgen ist nicht möglich.
                    <br />
                    Mit dem Beitritt erkenne ich die aktuelle Satzung und die damit verbundenen Geschäftsordnungen des <b>RTC Köln e.V. 1972</b> an.
                </small>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field v-model="_value.location" dense label="Ort" @input="emitUpdate" />
            </v-col>
            <v-col>
                <c-date-picker v-model="_value.date" dense label="Datum" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <c-signature-form
                    v-model="_value.signature"
                    label="Unterschrift (Bei Minderjährigen: Unterschrift des Erziehungsberechtigten)"
                    :readonly="readonly"
                    @input="emitUpdate"
                />
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CSignatureForm from '~/components/pages/membership-registration/CSignatureForm.vue'
import CDatePicker from '~/components/pages/membership-registration/personal-data/miscellaneous/CDatePicker.vue'
import Signature from '~/models/entities/membership-registration/Signature'

const emits = defineEmits<{ (e: 'input', value: Signature): void }>()
const props = defineProps({
    readonly: { default: false, type: Boolean },
    value: { required: true, type: Signature },
})

const _value = ref(props.value ?? new Signature())

const emitUpdate = () => emits('input', _value.value)
</script>
