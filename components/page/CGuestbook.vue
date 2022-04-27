<template>
    <v-card id="CGuestbook">
        <v-card-subtitle class="text-subtitle-2 text-md-subtitle-1 text-lg-h6" v-text="`${props.item.date}, ${props.item.name}, ${Source[props.item.source]}`" />
        <v-divider />
        <v-card-title class="text-subtitle-1 text-md-h6 text-lg-h5" v-text="props.item.title" />
        <v-card-text>
            <v-textarea v-if="props.item.text" class="text-caption text-md-body-2 text-lg-body-1" :value="props.item.text" dense readonly />
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { mdiChevronDown, mdiChevronUp, mdiEmailSend } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'
import Guestbook from '@/models/entities/Guestbook'
import Source from '@/models/enums/guestbook/Source'

export default defineComponent({
    props: {
        item: { required: true, type: Guestbook },
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
