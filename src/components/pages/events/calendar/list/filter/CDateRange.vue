<template>
  <q-input :model-value="stringDate" clearable dense hide-hint label="Datenbereich" @click="popup = true" @clear="clear">
    <template #append>
      <q-icon class="cursor-pointer" :name="mdiCalendar">
        <q-popup-proxy v-model="popup" cover>
          <q-date v-model="modelValue" color="primary" mask="DD.MM.YYYY" range>
            <div class="items-center justify-end row">
              <q-btn v-close-popup label="Abbrechen" />
              <q-btn v-close-popup color="primary" label="OK" @click="save" />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { is } from 'quasar'
import { mdiCalendar } from '@quasar/extras/mdi-v7'

const modelValue = defineModel<string | { from: string; to: string }>({ required: true })

const popup = ref(false)
const stringDate = ref('')

const clear = () => {
  modelValue.value = ''
  stringDate.value = ''
}
const save = () => {
  stringDate.value = is.object(modelValue.value) ? `${modelValue.value.from} - ${modelValue.value.to}` : modelValue.value.toString()
}
</script>
