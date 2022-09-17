<template>
    <div id="VIndex">
        <v-row>
            <v-col>
                <c-slideshow height="200" :value="useSlideshowStore().all" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-sheet>
                    <v-card-text>
                        <v-timeline :dense="vuetify?.breakpoint.mobile">
                            <v-timeline-item v-for="it in value" :key="it.title + it.date">
                                <template #opposite>
                                    <span class="font-weight-bold text-h5 primary--text" v-text="dateTime.format(it.date, undefined, true)" />
                                </template>
                                <v-card>
                                    <v-toolbar color="primary" dense flat>
                                        <v-toolbar-title class="accent--text">{{ it.title }}</v-toolbar-title>
                                    </v-toolbar>
                                    <v-card-text>
                                        <pre class="black--text text-pre-wrap" v-html="it.text" />
                                    </v-card-text>
                                </v-card>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts" setup>
// TODO WORKAROUND UNTIL VUETIFY 2.7
import { getCurrentInstance, ref } from 'vue'
import CSlideshow from '~/components/CSlideshow.vue'
import { useBlogStore } from '~/store/index/Blog'
import { useSlideshowStore } from '~/store/index/Slideshow'
import useDateTime from '~/utils/DateTime'

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy?.$vuetify)

const dateTime = useDateTime()

const value = useBlogStore().all
</script>
