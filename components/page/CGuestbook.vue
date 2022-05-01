<template>
    <v-card id="CGuestbook" max-width="40em">
        <v-card-subtitle class="secondary accent--text text-subtitle-2 text-md-subtitle-1 text-lg-h6">
            <div v-if="item.date" v-text="getDate(item.date)" />
            <div v-text="`${item.name} via ${Source[item.source]}`" />
            <div v-text="`${[item.organization, item.location].filter((it) => it).join(', ')} `" />
            <div v-if="item.event !== Event.Standard" v-text="`Event: ${Event[item.event]}`" />
        </v-card-subtitle>
        <v-card-title v-if="item.title" class="primary accent--text text-subtitle-1 text-md-h6 text-lg-h5">
            {{ item.title }}
        </v-card-title>
        <v-divider />
        <v-card-text v-if="item.text || item.pictures.length">
            <div v-if="item.text" class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h5" v-html="getHTML(item.text)" />
            <c-slideshow v-if="item.pictures.length" :items="item.pictures" />
        </v-card-text>
        <v-expand-transition>
            <div v-if="item.answer">
                <v-divider />
                <v-card-text class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h5">
                    <div v-html="getHTML(`**RTC Köln:** *${item.answer}*`)"></div>
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { marked } from 'marked'
import CSlideshow from '@/components/layouts/default/CSlideshow.vue'
import DateTime from '@/utils/DateTime'
import EEvent from '@/models/enums/EEvent'
import ESource from '@/models/enums/guestbook/ESource'
import GuestbookEntry from '@/models/entities/guestbook/Entry'

export default defineComponent({
    name: 'CGuestbook',
    components: { CSlideshow },
    props: {
        item: { required: true, type: GuestbookEntry },
    },
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

<style lang="scss" scoped></style>
