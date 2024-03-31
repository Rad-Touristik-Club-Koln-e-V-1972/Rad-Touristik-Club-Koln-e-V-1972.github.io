<template>
  <q-btn class="absolute z-max" color="primary" :icon="mdiMagnifyPlus" text-color="accent" @click="dialog = true" />
  <q-dialog v-model="dialog" class="z-top" maximized persistent>
    <q-card flat>
      <q-btn class="fixed-top-right z-max" color="primary" :icon="mdiClose" text-color="accent" @click="dialog = false" />
      <q-img :src="props.modelValue.toString()" />
    </q-card>
  </q-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { mdiClose, mdiMagnifyPlus } from '@quasar/extras/mdi-v7'

const props = defineProps<{ modelValue: URL }>()

const dialog = ref(false)
</script>
