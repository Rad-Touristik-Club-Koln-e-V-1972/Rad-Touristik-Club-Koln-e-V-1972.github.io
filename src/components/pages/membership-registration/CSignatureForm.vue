<template>
  <div>
    <div class="row">
      <canvas :id height="100" style="background-color: #d3d3d3" width="467" />
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

const modelValue = defineModel<string>({ required: true })
const props = defineProps<{ label: string }>()

const id = uid()
let signaturePad: SignaturePad

onMounted(async () => {
  const canvas = document.getElementById(id)

  if (canvas) {
    signaturePad = new SignaturePad(canvas as HTMLCanvasElement)

    if (modelValue.value) await signaturePad.fromDataURL(modelValue.value)

    signaturePad.addEventListener('endStroke', () => (modelValue.value = signaturePad.toDataURL()))
  }
})
</script>
