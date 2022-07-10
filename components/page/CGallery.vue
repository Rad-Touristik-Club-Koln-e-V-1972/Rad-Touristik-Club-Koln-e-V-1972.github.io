<template>
    <v-card id="CGallery" class="text-center" max-width="20em">
        <v-card-title class="justify-center text-subtitle-1 text-lg-h6">
            {{ props.value.title }}
        </v-card-title>
        <v-card-subtitle class="text-subtitle-2 text-md-subtitle-1 text-lg-body-1">
            {{ props.value.subtitle }}
        </v-card-subtitle>
        <v-card-text>
            <v-dialog v-model="isOpen" :fullscreen="vuetify.breakpoint.mobile" persistent scrollable>
                <template #activator="{ attrs, on }">
                    <v-img :src="props.value.titleImageUrl" style="cursor: pointer" v-bind="attrs" v-on="on" />
                </template>
                <v-card class="text-center">
                    <!-- TODO max-height="64px" IS A WORKAROUND FOR https://github.com/vuetifyjs/vuetify/issues/15362 -->
                    <v-toolbar color="primary" flat max-height="64px">
                        <v-btn icon dark @click="isOpen = false">
                            <v-icon color="accent" v-text="icons.mdiClose" />
                        </v-btn>
                        <v-toolbar-title class="accent--text">
                            {{ props.value.title }}
                            <div class="text-subtitle-1" v-text="props.value.subtitle" />
                        </v-toolbar-title>
                        <v-spacer />
                        <v-btn color="accent" text @click="showText = !showText">
                            Details
                            <v-icon color="accent" right v-text="showText ? icons.mdiChevronUp : icons.mdiChevronDown" />
                        </v-btn>
                    </v-toolbar>
                    <v-expand-transition>
                        <div v-show="showText">
                            <v-card-text>
                                {{ props.value.description }}
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                    <v-card-text>
                        <v-toolbar v-if="value.youtubeVideoIds.length" color="accent--text primary" flat>
                            <v-toolbar-title>Bilder</v-toolbar-title>
                        </v-toolbar>
                        <v-row class="justify-center my-1" dense>
                            <v-col v-for="(_, index) in props.value.images" :key="index" cols="auto">
                                <d-view :value="props.value.images" :start-index="index" />
                            </v-col>
                        </v-row>
                        <v-toolbar v-if="value.youtubeVideoIds.length" color="accent--text primary" flat>
                            <v-toolbar-title>Videos</v-toolbar-title>
                        </v-toolbar>
                        <v-row class="justify-center my-1" dense>
                            <v-col v-for="(it, index) in props.value.youtubeVideoIds" :key="index" cols="auto">
                                <iframe
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    :src="`https://www.youtube-nocookie.com/embed/${it}`"
                                    style="
                                        border: 0;
                                        border-radius: 4px;
                                        box-shadow: 0 3px 1px -2px rgba(0 0 0 / 20%), 0 2px 2px 0 rgba(0 0 0 / 14%), 0 1px 5px 0 rgba(0 0 0 / 12%);
                                        width: 20em;
                                    "
                                    title="YouTube video player"
                                    height="100%"
                                />
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-card-text>
        <v-card-actions v-if="props.value.description">
            <v-spacer />
            <v-btn text @click="showText = !showText">
                Details
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
import { getCurrentInstance, ref } from 'vue'
import { mdiChevronDown, mdiChevronUp, mdiClose } from '@mdi/js'
import DView from '@/components/page/gallery/DView.vue'
import Gallery from '@/models/entities/Gallery'

const props = defineProps<{ value: Gallery }>()

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy.$vuetify)

const icons = {
    mdiChevronDown,
    mdiChevronUp,
    mdiClose,
}
const isOpen = ref(false)
const showText = ref(false)
</script>

<style lang="scss" scoped />
