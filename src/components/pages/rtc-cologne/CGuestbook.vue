<template>
  <q-card>
    <q-card-section class="bg-secondary text-accent text-subtitle2">
      <div v-if="props.modelValue.date">{{ useDateTime().format(props.modelValue.date) }}</div>
      {{ props.modelValue.name }} via {{ ESource[props.modelValue.source] }}<br />
      {{ [props.modelValue.organization, props.modelValue.location].filter((it) => it).join(', ') }}
      <div v-if="!isCategoryRTC">Event: {{ EEvent[props.modelValue.category] }}</div>
    </q-card-section>
    <q-card-section v-if="props.modelValue.title" class="bg-primary text-accent text-subtitle2">{{ props.modelValue.title }}</q-card-section>
    <q-card-section v-if="props.modelValue.text || props.modelValue.galleryEntries.length">
      <div v-if="props.modelValue.text">
        <span class="text-pre-wrap" v-html="props.modelValue.text" />
      </div>
      <c-slideshow v-if="props.modelValue.galleryEntries?.length" :gallery-entries="props.modelValue.galleryEntries" height="200px" />
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
