<template>
    <q-card-section>
        <div class="row">
            <div class="col">
                Mit dieser Erklärung trete ich dem <b>RTC Köln e.V. 1972</b> bei.
                <br />
                Durch den Beitritt entstehen gegenüber dem <b>RTC Köln e.V. 1972</b> keinerlei finanzielle, materielle sowie sonstige Forderungsansprüche.
                <br />
                Die Mitgliedschaft kann bis 30. September eines Jahres zum Jahresende gekündigt werden.
                <br />
                Eine Erstattung von bereits gezahlten Beträgen ist nicht möglich.
                <br />
                Mit dem Beitritt erkenne ich die aktuelle Satzung und die damit verbundenen Geschäftsordnungen des <b>RTC Köln e.V. 1972</b> an.
            </div>
        </div>
        <div class="row">
            <div class="col">
                <q-input v-model="value.location" label="Ort" @update:model-value="emitUpdate" />
            </div>
            <div class="col">
                <c-date-picker v-model="value.date" label="Datum" @update:model-value="emitUpdate" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <c-signature-form v-model="value.signature" label="Unterschrift (Bei Minderjährigen: Unterschrift des Erziehungsberechtigten)" @update:model-value="emitUpdate" />
            </div>
        </div>
    </q-card-section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import CSignatureForm from 'components/pages/membership-registration/CSignatureForm.vue'
import CDatePicker from 'components/pages/membership-registration/personal-data/miscellaneous/CDatePicker.vue'
import Signature from 'src/models/entities/membership-registration/Signature'

const emits = defineEmits<{ 'update:modelValue': [value: Signature] }>()
const props = defineProps<{ modelValue: Signature }>()

const value = ref(new Signature())

const emitUpdate = () => {
    emits('update:modelValue', value.value)
}

onMounted(() => {
    value.value = props.modelValue
})
</script>
