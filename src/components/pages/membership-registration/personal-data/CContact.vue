<template>
    <v-card-text id="CContact">
        <v-row>
            <v-col>
                <v-text-field v-model="value.telephone" label="Telefon" @input="emitUpdate" />
            </v-col>
            <v-col>
                <v-text-field v-model="value.mobilePhone" label="Handy" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field v-model="value.email" label="E-Mail" @input="emitUpdate" />
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PersonalData from '~/models/entities/membership-registration/PersonalData'

const emits = defineEmits<{ (e: 'input', value: PersonalData): void }>()
const props = defineProps<{ value: PersonalData }>()

const value = ref(props.value ?? new PersonalData())

const emitUpdate = () => emits('input', value.value)
</script>
