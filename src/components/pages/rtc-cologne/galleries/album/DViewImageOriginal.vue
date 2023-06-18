<template>
    <q-btn color="primary" :icon="mdiMagnifyPlus" style="position: absolute; z-index: 2" text-color="accent" @click="dialog = true" />
    <q-dialog v-model="dialog" maximized persistent>
        <q-card flat>
            <q-btn color="primary" :icon="mdiClose" style="position: fixed; right: 0; z-index: 1" text-color="accent" @click="dialog = false" />
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
