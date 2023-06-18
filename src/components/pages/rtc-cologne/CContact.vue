<template>
    <q-card max-width="20em">
        <q-img fit="contain" :src="props.modelValue.imageUrl.toString()" />
        <q-card-section class="text-h6">{{ props.modelValue.name }}</q-card-section>
        <q-card-section class="text-subtitle1">{{ props.modelValue.position }}</q-card-section>
        <q-card-actions>
            <q-btn flat :href="`mailto:${props.modelValue.eMail}`" :icon="mdiEmailArrowRight" label=" E-Mail senden" />
        </q-card-actions>
    </q-card>
</template>

<script lang="ts" setup>
import { mdiEmailArrowRight } from '@quasar/extras/mdi-v7'
import Contact from 'src/models/entities/rtc-cologne/Contact'

const props = defineProps<{ modelValue: Contact }>()
</script>
