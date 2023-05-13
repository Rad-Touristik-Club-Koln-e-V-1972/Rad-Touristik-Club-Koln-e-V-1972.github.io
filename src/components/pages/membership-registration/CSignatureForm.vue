<template>
    <div id="CSignatureForm">
        <vue-signature-pad ref="signaturePad" height="100px" :options="{ onEnd }" style="background: #d3d3d3" width="500px" />
        <br />
        <small>{{ props.label }}</small>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VueSignaturePad } from 'vue-signature-pad'

const emits = defineEmits<{ (e: 'input', value: string): void }>()
const props = defineProps<{ label: string }>()

const signaturePad = ref<VueSignaturePad>()

const onEnd = () => emits('input', signaturePad.value?.saveSignature().data ?? '')
</script>
