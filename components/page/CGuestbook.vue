<template>
    <v-card id="CGuestbook" max-width="40em">
        <v-card-subtitle class="secondary accent--text text-subtitle-2 text-md-subtitle-1 text-lg-h6">
            <div v-if="item.date" v-text="getDate(item.date)" />
            <div v-text="`${item.name} via ${Source[item.source]}`" />
            <div v-text="`${[item.organization, item.location].filter((it) => it).join(', ')} `" />
            <div v-if="item.event !== Event.Standard" v-text="`Event: ${Event[item.event]}`" />
        </v-card-subtitle>
        <v-card-title v-if="item.title" class="primary accent--text text-subtitle-1 text-md-h6 text-lg-h5" v-text="item.title" />
        <v-divider />
        <v-card-text v-if="item.text || item.pictures.length">
            <div v-if="item.text" class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h5" v-html="getText(item.text)" />
            <c-slideshow v-if="item.pictures.length" :items="item.pictures" />
        </v-card-text>
        <v-expand-transition>
            <div v-if="item.answer">
                <v-divider></v-divider>
                <v-card-text class="text-body-2 text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h5" v-html="getAnswer(item.answer)" />
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script lang="ts">
import { mdiChevronDown, mdiChevronUp, mdiEmailSend } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'
import { marked } from 'marked'
import CSlideshow from '@/components/layouts/default/CSlideshow.vue'
import Event from '@/models/enums/guestbook/Event'
import GuestbookEntry from '@/models/entities/guestbook/Entry'
import Source from '@/models/enums/guestbook/Source'

// For a better performance and to remove the seconds.
const dateFormatter = new Intl.DateTimeFormat('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })

export default defineComponent({
    components: { CSlideshow },
    props: {
        item: { required: true, type: GuestbookEntry },
    },
    setup(props) {
        return {
            Event,
            icons: {
                mdiChevronDown,
                mdiChevronUp,
                mdiEmailSend,
            },
            props,
            showText: false,
            Source,
        }
    },
    computed: {
        getAnswer: () => (answer: string) => marked.parse(`**RTC Köln:** *${answer}*`),
        getDate: () => (date: Date) => dateFormatter.format(date),
        getText: () => (text: string) => marked.parse(text),
    },
})
</script>

<style lang="scss" scoped></style>
