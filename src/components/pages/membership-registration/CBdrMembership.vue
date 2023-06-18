<template>
    <q-card-section>
        <div class="row">
            <div class="col">
                <q-checkbox
                    v-model="value.isMember"
                    label="Ich bin bereits Mitglied beim Bund Deutscher Radfahrer (bei Vereinswechsel bitte unbedingt angeben)"
                    @update:model-value="emitUpdate"
                />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <q-input v-model="value.number" label="BDR-Mitgliedsnummer" @update:model-value="emitUpdate" />
            </div>
            <div class="col">
                <c-date-picker v-model="value.date" label="Mitglied seit" @update:model-value="emitUpdate" />
            </div>
        </div>
    </q-card-section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import BdrMembership from 'src/models/entities/membership-registration/BdrMembership'
import CDatePicker from 'components/pages/membership-registration/personal-data/miscellaneous/CDatePicker.vue'

const emits = defineEmits<{ 'update:modelValue': [value: BdrMembership] }>()
const props = defineProps<{ modelValue: BdrMembership }>()

const value = ref(new BdrMembership())

const emitUpdate = () => {
    emits('update:modelValue', value.value)
}

onMounted(() => {
    value.value = props.modelValue
})
</script>
