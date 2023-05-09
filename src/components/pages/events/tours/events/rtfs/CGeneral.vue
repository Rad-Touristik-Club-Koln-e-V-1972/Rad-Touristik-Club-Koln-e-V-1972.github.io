<template>
    <v-card flat>
        <v-card-text>
            <v-row class="justify-center">
                <v-col cols="auto">
                    <v-card max-width="40em">
                        <v-toolbar color="primary" flat>
                            <v-toolbar-title class="accent--text">Vorwort</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <span class="black--text text-pre-wrap" v-html="props.text" />
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col v-for="(it, index) in props.images" :key="it.id" cols="auto">
                    <d-view :start-index="index" :value="props.images" />
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import DView from '~/components/pages/rtc-cologne/galleries/album/DView.vue'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'

const props = defineProps<{ images: GalleryEntry[]; text: string }>()
</script>
