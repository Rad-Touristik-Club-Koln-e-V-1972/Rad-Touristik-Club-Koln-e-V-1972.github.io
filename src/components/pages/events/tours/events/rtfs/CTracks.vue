<template>
    <v-card flat>
        <v-card-text>
            <v-row no-gutters>
                <v-col>
                    <v-timeline :dense="vuetify?.breakpoint.mobile">
                        <v-timeline-item v-for="it in props.tracks" :key="it.id">
                            <template #opposite>
                                <span class="font-weight-bold primary--text text-h5" v-text="it.name" />
                            </template>
                            <v-card>
                                <v-toolbar color="primary" flat>
                                    <v-toolbar-title class="accent--text">{{ it.name }}</v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                    <span class="black--text text-pre-line" v-html="it.text" />
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue'
import Track from '~/models/entities/events/tours/events/Track'

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy?.$vuetify)

const props = defineProps<{ tracks: Track[] }>()
</script>
