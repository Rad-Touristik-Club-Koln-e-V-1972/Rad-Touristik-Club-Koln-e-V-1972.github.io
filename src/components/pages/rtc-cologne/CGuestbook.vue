<template>
    <q-card style="max-width: 20em">
        <q-card-section class="bg-secondary text-accent text-subtitle1">
            <div v-if="props.modelValue.date" v-text="useDateTime().format(props.modelValue.date)" />
            <div v-text="`${props.modelValue.name} via ${ESource[props.modelValue.source]}`" />
            <div v-text="`${[props.modelValue.organization, props.modelValue.location].filter((it) => it).join(', ')} `" />
            <div v-if="!isCategoryRTC" v-text="`Event: ${EEvent[props.modelValue.category]}`" />
        </q-card-section>
        <q-card-section v-if="props.modelValue.title" class="bg-primary text-accent text-h6">{{ props.modelValue.title }}</q-card-section>
        <q-card-section v-if="props.modelValue.text || props.modelValue.imageUrls?.length">
            <div v-if="props.modelValue.text">
                <span class="text-pre-wrap" v-html="props.modelValue.text" />
            </div>
            <c-slideshow v-if="props.modelValue.imageUrls?.length" :gallery-entries="props.modelValue.imageUrls" height="200px" />
        </q-card-section>
        <q-expansion-item v-if="props.modelValue.answer" class="text-secondary" expand-separator label="Details">
            <q-card flat>
                <q-card-section>
                    <span class="text-pre-wrap">
                        <b>RTC Köln:</b> <i>{{ props.modelValue.answer }}</i>
                    </span>
                </q-card-section>
            </q-card>
        </q-expansion-item>
    </q-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import CSlideshow from 'components/pages/CSlideshow.vue'
import GuestbookEntry from 'src/models/entities/rtc-cologne/guestbook/GuestbookEntry'
import EEvent from 'src/models/enums/EEvent'
import ESource from 'src/models/enums/rtc-cologne/guestbook/ESource'
import useDateTime from 'src/utils/DateTime'

const props = defineProps<{ modelValue: GuestbookEntry }>()

const isCategoryRTC = computed(() => props.modelValue.category === EEvent.RTC)
</script>
