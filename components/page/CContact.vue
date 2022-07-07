<template>
    <v-card id="CContact" max-width="20em">
        <v-img contain :src="value.imageSrc" />
        <v-card-title class="text-subtitle-1 text-lg-h6">
            {{ value.name }}
        </v-card-title>
        <v-card-subtitle class="text-subtitle-2 text-md-subtitle-1 text-lg-body-1">
            {{ value.position }}
        </v-card-subtitle>
        <v-card-actions>
            <v-btn icon :href="'mailto:' + value.eMail">
                <v-icon>
                    {{ icons.mdiEmailSend }}
                </v-icon>
            </v-btn>
            <v-spacer />
            <v-spacer />
            <v-btn text @click="showText = !showText">
                Über mich
                <v-icon right>
                    {{ showText ? icons.mdiChevronUp : icons.mdiChevronDown }}
                </v-icon>
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="showText">
                <v-divider />
                <v-card-text>
                    {{ value.description }}
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script lang="ts">
import { mdiChevronDown, mdiChevronUp, mdiEmailSend } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'
import Contact from '@/models/entities/Contact'

export default defineComponent({
    name: 'CContact',
    props: { value: { required: true, type: Contact } },
    setup() {
        return {
            icons: {
                mdiChevronDown,
                mdiChevronUp,
                mdiEmailSend,
            },
            showText: false,
        }
    },
})
</script>

<style lang="scss" scoped />
