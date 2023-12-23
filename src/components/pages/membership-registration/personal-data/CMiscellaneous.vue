<template>
    <q-card-section>
        <div class="row">
            <div class="col">
                <c-date-picker
                    v-model="value.birthdate"
                    label="Geburtsdatum"
                    :max="new Date()"
                    :min="date.addToDate(new Date(), { years: -100 })"
                    @update:model-value="emitUpdate"
                />
            </div>
            <div class="col-1" />
            <div class="col">
                <q-select v-model="value.tShirtSize" label="T-Shirt Größe" :options="['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']" @update:model-value="emitUpdate" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <c-date-picker
                    v-model="value.entryDate"
                    label="Eintritt (Datum)"
                    :max="date.addToDate(new Date(), { month: 1 })"
                    :min="date.buildDate({ year: 1972, month: 10, date: 30 })"
                    @update:model-value="emitUpdate"
                />
            </div>
            <div class="col-1" />
            <div class="col">
                <q-checkbox v-model="value.wantsBdrMembership" label="BDR-Beitritt" @update:model-value="emitUpdate" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <q-input v-model="value.specialNeeds" label="Besonderheiten" @update:model-value="emitUpdate" />
                <small>(bspw. Allergiker)</small>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <q-checkbox
                    v-model="value.wantsAmateursportslicense"
                    label="Ich beantrage hiermit die Breitensportlizenz (für die Teilnahme an den RTF)."
                    @update:model-value="emitUpdate"
                />
            </div>
        </div>
    </q-card-section>
</template>

<script lang="ts" setup>
import { onMounted, ref, toValue } from 'vue'
import { date } from 'quasar'
import CDatePicker from 'components/pages/membership-registration/personal-data/miscellaneous/CDatePicker.vue'
import PersonalData from 'src/models/entities/membership-registration/PersonalData'

const emits = defineEmits<{ 'update:modelValue': [value: PersonalData] }>()
const props = defineProps<{ modelValue: PersonalData }>()

const value = ref(new PersonalData())

const emitUpdate = () => {
    emits('update:modelValue', toValue(value.value))
}

onMounted(() => {
    value.value = props.modelValue
})
</script>
