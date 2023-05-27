<template>
    <div id="CSignatureForm">
        <img v-if="readonly" alt="Unterschrift" height="50px" :src="props.value" />
        <v-row v-else>
            <vue-signature-pad ref="signaturePad" height="100px" :options="{ backgroundColor: '#d3d3d3', onEnd }" width="500px" />
            <v-btn icon x-large @click="signaturePad?.clearSignature()">
                <v-icon color="primary" right x-large>{{ mdiPenRemove }}</v-icon>
            </v-btn>
        </v-row>
        <br />
        <small>{{ props.label }}</small>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiPenRemove } from '@mdi/js'
import { VueSignaturePad } from 'vue-signature-pad'

const emits = defineEmits<{ (e: 'input', value: string): void }>()
const props = defineProps({
    label: { required: true, type: String },
    readonly: { default: false, type: Boolean },
    value: { required: true, type: String },
})

const signaturePad = ref<VueSignaturePad>()

const onEnd = () => emits('input', signaturePad.value?.saveSignature('image/svg+xml')?.data ?? '')
</script>
