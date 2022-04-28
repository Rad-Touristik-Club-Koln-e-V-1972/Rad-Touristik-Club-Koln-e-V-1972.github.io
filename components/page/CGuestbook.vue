<template>
    <v-card id="CGuestbook">
        <v-card-subtitle class="accent secondary--text text-subtitle-2 text-md-subtitle-1 text-lg-h6" v-text="getSubtitle(item)" />
        <v-divider />
        <v-card-title class="primary secondary--text text-subtitle-1 text-md-h6 text-lg-h5" v-text="item.title" />
        <v-card-text>
            <v-textarea v-if="item.text" :value="item.text" class="text-caption text-md-body-2 text-lg-body-1" dense readonly />
            <c-slideshow v-if="item.pictures.length" :items="item.pictures" />
            <div v-if="item.links.length">
                <v-divider v-if="item.pictures.length" />
                <v-list dense>
                    <v-list-item v-for="(it, i) in item.links" :key="i" :href="it" class="primary--text" nuxt target="_blank" v-text="it" />
                </v-list>
            </div>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { mdiChevronDown, mdiChevronUp, mdiEmailSend } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'
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
        getSubtitle() {
            return (item: GuestbookEntry) => `${[item.date, item.name, item.organization, item.location].filter((it) => it).join(', ')} via ${Source[item.source]}`
        },
    },
})
</script>

<style lang="scss" scoped></style>
