<template>
    <v-card-text id="CContact">
        <v-row>
            <v-col>
                <v-text-field v-model="_value.telephone" dense label="Telefon" @input="emitUpdate" />
            </v-col>
            <v-col>
                <v-text-field v-model="_value.mobilePhone" dense label="Handy" @input="emitUpdate" />
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
import { ref } from 'vue'
import PersonalData from '~/models/entities/membership-registration/PersonalData'

const emits = defineEmits<{ (e: 'input', value: PersonalData): void }>()
const props = defineProps<{ value: PersonalData }>()

const _value = ref(props.value)

const emitUpdate = () => emits('input', _value.value)
</script>
