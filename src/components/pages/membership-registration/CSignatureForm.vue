<template>
    <div class="row">
        <canvas id="signature" height="100" style="background-color: #d3d3d3" width="467" />
        <q-btn color="primary" flat :icon-right="mdiPenRemove" size="xl" square @click="signaturePad.clear()" />
    </div>
    <br />
    <small>{{ props.label }}</small>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { mdiPenRemove } from '@quasar/extras/mdi-v7'
import SignaturePad from 'signature_pad'

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
const props = defineProps<{ label: string; modelValue: string }>()

let canvas, signaturePad: SignaturePad

onMounted(async () => {
    canvas = document.querySelector('canvas')
    signaturePad = new SignaturePad(canvas)

    if (props.modelValue) await signaturePad.fromDataURL(props.modelValue)

    signaturePad.addEventListener('endStroke', () => {
        emit('update:modelValue', signaturePad.toDataURL())
    })
})
</script>
