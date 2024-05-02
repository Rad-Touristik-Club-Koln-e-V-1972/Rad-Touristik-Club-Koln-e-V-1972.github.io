<template>
  <div>
    <div class="row">
      <canvas :id="id" height="100" style="background-color: #d3d3d3" width="467" />
      <q-btn color="primary" flat :icon-right="mdiPenRemove" size="xl" square @click="signaturePad.clear()" />
    </div>
    <br />
    <small>{{ props.label }}</small>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { uid } from 'quasar'
import { mdiPenRemove } from '@quasar/extras/mdi-v7'
import SignaturePad from 'signature_pad'

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const props = defineProps<{ label: string; modelValue: string }>()

let id = uid()
let signaturePad: SignaturePad

onMounted(async () => {
  const canvas = document.getElementById(id)

  if (canvas) {
    signaturePad = new SignaturePad(canvas as HTMLCanvasElement)

    if (props.modelValue) await signaturePad.fromDataURL(props.modelValue)

    signaturePad.addEventListener('endStroke', () => {
      emit('update:modelValue', signaturePad.toDataURL())
    })
  }
})
</script>
