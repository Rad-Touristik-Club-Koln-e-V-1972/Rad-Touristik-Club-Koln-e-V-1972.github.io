<template>
    <v-card-text id="CMiscellaneous">
        <v-row>
            <v-col>
                <v-checkbox
                    v-model="_value.isMember"
                    dense
                    label="Ich bin bereits Mitglied beim Bund Deutscher Radfahrer (bei Vereinswechsel bitte unbedingt angeben)"
                    @input="emitUpdate"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field v-model="_value.number" dense label="BDR-Mitgliedsnummer" @input="emitUpdate" />
            </v-col>
            <v-col>
                <c-date-picker v-model="_value.date" dense label="Mitglied seit" @input="emitUpdate" />
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BdrMembership from '~/models/entities/membership-registration/BdrMembership'
import CDatePicker from '~/components/pages/membership-registration/personal-data/miscellaneous/CDatePicker.vue'

const emits = defineEmits<{ (e: 'input', value: BdrMembership): void }>()
const props = defineProps<{ value: BdrMembership }>()

const _value = ref(props.value)

const emitUpdate = () => emits('input', _value.value)
</script>
