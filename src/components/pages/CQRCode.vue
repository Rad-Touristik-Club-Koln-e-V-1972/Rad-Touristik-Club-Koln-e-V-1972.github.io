<template>
  <div ref="qrCodeRef" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useQuasar } from 'quasar'
import QRCodeStyling from 'qr-code-styling'

// noinspection LocalVariableNamingConventionJS
const $q = useQuasar()

const { url } = defineProps<{ url: URL }>()

const qrCodeRef = ref()

const qrCodeDimension = $q.platform.is.mobile ? 279 : 300
const qrCode = new QRCodeStyling({ data: url.toString(), height: qrCodeDimension, type: 'svg', width: qrCodeDimension })

onMounted(() => {
  qrCode.append(qrCodeRef.value)
})
</script>
