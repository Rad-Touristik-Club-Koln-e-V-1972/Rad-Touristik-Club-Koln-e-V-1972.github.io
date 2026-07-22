<template>
  <div ref="qrCodeRef" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useQuasar } from "quasar";
import QRCodeStyling from "qr-code-styling";
import { DrawType } from "qr-code-styling/lib/types";

// noinspection LocalVariableNamingConventionJS
const $q = useQuasar();

const { url } = defineProps<{ url: URL | undefined }>();

const qrCodeRef = ref();

const qrCodeDimension = $q.platform.is.mobile ? 279 : 300;
const qrCode = new QRCodeStyling({
  data: url?.toString(),
  height: qrCodeDimension,
  type: "svg" as DrawType,
  width: qrCodeDimension
});

onMounted(() => {
  qrCode.append(qrCodeRef.value);
});
</script>
