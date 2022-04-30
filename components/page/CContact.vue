<template>
    <v-card id="CContact" max-width="20em">
        <v-img :src="item.imageSrc" contain />
        <v-card-title class="text-subtitle-1 text-md-h6 text-lg-h5" v-text="item.name" />
        <v-card-subtitle class="text-subtitle-2 text-md-subtitle-1 text-lg-h6" v-text="item.position" />
        <v-card-actions>
            <v-btn :href="'mailto:' + item.eMail" icon>
                <v-icon v-text="icons.mdiEmailSend" />
            </v-btn>
            <v-spacer />
            <v-spacer />
            <v-btn text @click="showText = !showText">
                Über mich
                <v-icon right>{{ showText ? icons.mdiChevronUp : icons.mdiChevronDown }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="showText">
                <v-divider></v-divider>
                <v-card-text v-text="item.description" />
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script lang="ts">
import { mdiChevronDown, mdiChevronUp, mdiEmailSend } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'
import Contact from '@/models/entities/Contact'

export default defineComponent({
    props: {
        item: { required: true, type: Contact },
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
        }
    },
})
</script>

<style lang="scss" scoped></style>
