<template>
    <v-card id="VPressReports" flat>
        <v-card-title>
            <v-toolbar color="primary" flat>
                <v-toolbar-title class="accent--text text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4">Presseberichte</v-toolbar-title>
            </v-toolbar>
        </v-card-title>
        <v-card-text>
            <v-timeline :dense="vuetify?.breakpoint.mobile">
                <v-timeline-item v-for="it in value" :key="it.id" right>
                    <template #opposite>
                        <span class="font-weight-bold text-h5 primary--text" v-text="dateTime.format(it.date, undefined, true)" />
                    </template>
                    <v-card max-width="22em">
                        <v-toolbar color="primary" dense flat>
                            <v-toolbar-title class="accent--text">{{ it.title }}</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
                            <masonry-wall :column-width="280" :gap="16" :items="it.images">
                                <template #default="{ index }">
                                    <d-view :start-index="index" :value="it.images" />
                                </template>
                            </masonry-wall>
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue'
import DView from '~/components/pages/about-us/galleries/album/DView.vue'
import { usePressReportsStore } from '~/store/about-us/PressReports'
import useDateTime from '~/utils/DateTime'

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy?.$vuetify)

const dateTime = useDateTime()

const value = usePressReportsStore().all
</script>
