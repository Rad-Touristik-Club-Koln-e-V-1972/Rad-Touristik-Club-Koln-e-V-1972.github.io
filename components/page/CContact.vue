<template>
    <v-card id="CContact" max-width="20em">
        <v-img contain :src="props.value.imageSrc" />
        <v-card-title class="text-subtitle-1 text-lg-h6">
            {{ props.value.name }}
        </v-card-title>
        <v-card-subtitle class="text-subtitle-2 text-md-subtitle-1 text-lg-body-1">
            {{ props.value.position }}
        </v-card-subtitle>
        <v-card-actions>
            <v-btn icon :href="'mailto:' + props.value.eMail">
                <v-icon v-text="icons.mdiEmailSend" />
            </v-btn>
            <v-spacer />
            <v-spacer />
            <v-btn text @click="showText = !showText">
                Über mich
                <v-icon right v-text="showText ? icons.mdiChevronUp : icons.mdiChevronDown" />
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="showText">
                <v-divider />
                <v-card-text>
                    {{ props.value.description }}
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiChevronDown, mdiChevronUp, mdiEmailSend } from '@mdi/js'
import Contact from '@/models/entities/Contact'

const props = defineProps<{ value: Contact }>()

const icons = {
    mdiChevronDown,
    mdiChevronUp,
    mdiEmailSend,
}
const showText = ref(false)
</script>

<style lang="scss" scoped />
