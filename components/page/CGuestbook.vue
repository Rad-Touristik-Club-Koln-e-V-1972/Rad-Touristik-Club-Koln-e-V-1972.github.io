<template>
    <v-card id="CGuestbook">
        <v-card-subtitle v-if="getSubtitle(item)" class="accent secondary--text text-subtitle-2 text-md-subtitle-1 text-lg-h6" v-text="getSubtitle(item)" />
        <v-card-title v-if="item.title" class="primary secondary--text text-subtitle-1 text-md-h6 text-lg-h5" v-text="item.title" />
        <v-divider />
        <v-card-text v-if="item.text || item.pictures.length">
            <div v-if="getText(item)" class="text-caption text-md-body-2 text-lg-body-1" v-html="getText(item)" />
            <c-slideshow v-if="item.pictures.length" :items="item.pictures" />
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { mdiChevronDown, mdiChevronUp, mdiEmailSend } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'
import { marked } from 'marked'
import GuestbookEntry from '@/models/entities/guestbook/Entry'
import Source from '@/models/enums/guestbook/Source'
import CSlideshow from '@/components/layouts/default/CSlideshow.vue'

export default defineComponent({
    components: { CSlideshow },
    props: {
        item: { required: true, type: GuestbookEntry },
    },
    setup(props) {
        return {
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
        getSubtitle: () => (item: GuestbookEntry) => `${[item.date, item.name, item.organization, item.location].filter((it) => it).join(', ')} via ${Source[item.source]}`,
        getText: () => (item: GuestbookEntry) => marked.parse(item.text),
    },
})
</script>

<style lang="scss" scoped></style>
