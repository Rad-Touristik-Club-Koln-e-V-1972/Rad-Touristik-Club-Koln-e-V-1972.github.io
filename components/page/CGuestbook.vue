<template>
    <v-card id="CGuestbook" max-width="40em">
        <v-card-subtitle class="secondary accent--text text-subtitle-2 text-md-subtitle-1 text-lg-h6">
            <div v-if="value.date" v-text="getDate(value.date)" />
            <div v-text="`${value.name} via ${Source[value.source]}`" />
            <div v-text="`${[value.organization, value.location].filter((it) => it).join(', ')} `" />
            <div v-if="value.category !== Event.RTC" v-text="`Event: ${Event[value.category]}`" />
        </v-card-subtitle>
        <v-card-title v-if="value.title" class="primary accent--text text-subtitle-1 text-md-h6 text-lg-h5">
            {{ value.title }}
        </v-card-title>
        <v-divider />
        <v-card-text v-if="value.text || value.imageUrls.length">
            <div v-if="value.text" class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h5" v-html="getHTML(value.text)" />
            <c-slideshow v-if="value.imageUrls.length" :items="value.imageUrls" />
        </v-card-text>
        <v-expand-transition>
            <div v-if="value.answer">
                <v-divider />
                <v-card-text class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h5">
                    <div v-html="getHTML(`**RTC Köln:** *${value.answer}*`)"></div>
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { marked } from 'marked'
import CSlideshow from '@/components/layouts/default/CSlideshow.vue'
import Entry from '@/models/entities/guestbook/Entry'
import EEvent from '@/models/enums/EEvent'
import ESource from '@/models/enums/guestbook/ESource'
import DateTime from '@/utils/DateTime'

export default defineComponent({
    name: 'CGuestbook',
    components: { CSlideshow },
    props: { value: { required: true, type: Entry } },
    setup() {
        return {
            Event: EEvent,
            getDate: (date: Date) => DateTime.format(date),
            getHTML: (text: string) => marked.parseInline(text),
            showText: false,
            Source: ESource,
        }
    },
})
</script>

<style lang="scss" scoped />
