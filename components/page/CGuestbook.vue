<template>
    <v-card id="CGuestbook">
        <v-card-subtitle class="text-subtitle-2 text-md-subtitle-1 text-lg-h6" v-text="`${item.date}, ${item.name}, ${Source[item.source]}`" />
        <v-divider />
        <v-card-title class="text-subtitle-1 text-md-h6 text-lg-h5" v-text="item.title" />
        <v-card-text>
            <v-textarea v-if="item.text" :value="item.text" class="text-caption text-md-body-2 text-lg-body-1" dense readonly />
            <c-slideshow v-if="item.pictures.length" :items="item.pictures" />
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
})
</script>

<style lang="scss" scoped></style>
