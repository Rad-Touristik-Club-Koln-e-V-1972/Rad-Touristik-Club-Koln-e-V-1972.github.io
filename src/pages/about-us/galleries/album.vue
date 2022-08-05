<template>
    <v-card id="VAlbum" flat :loading="isLoading">
        <template #progress>
            <v-progress-linear color="primary" height="15">Bitte warten</v-progress-linear>
        </template>
        <!-- TODO max-height="64px" IS A WORKAROUND FOR https://github.com/vuetifyjs/vuetify/issues/15362 -->
        <v-toolbar color="primary" flat max-height="64px" rounded="0">
            <v-btn exact icon @click="close">
                <v-icon color="accent">{{ icons.mdiClose }}</v-icon>
            </v-btn>
            <v-toolbar-title v-if="value" class="accent--text">
                {{ value.title }}
                <div class="text-subtitle-1" v-text="`${dateTime.format(value.dateFrom, value.dateTo, true)} bei ${value.location}`" />
            </v-toolbar-title>
            <v-spacer />
            <v-btn v-if="value?.description" color="accent" text @click="showText = !showText">
                Details
                <v-icon color="accent" right>{{ showText ? icons.mdiChevronUp : icons.mdiChevronDown }}</v-icon>
            </v-btn>
        </v-toolbar>
        <v-expand-transition v-if="value?.description">
            <div v-show="showText" class="align-self-center" style="max-width: 20em">
                <v-card-text>
                    <pre v-text="value.description" />
                </v-card-text>
            </div>
        </v-expand-transition>
        <v-card-text v-if="value">
            <v-tabs v-model="tabModel" background-color="primary" centered class="my-1" color="accent" show-arrows slider-color="secondary">
                <v-tab v-for="it in tabs" :key="it" :href="`#tab-${it}`">{{ it }}</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tabModel">
                <v-tab-item key="Bilder" value="tab-Bilder">
                    <v-tabs v-model="tabModelPictures" background-color="primary" centered class="my-1" color="accent" show-arrows slider-color="secondary">
                        <v-tab v-for="it in Object.keys(value.images)" :key="it" :href="`#tab-${it}`">{{ it || 'Ohne Album' }}</v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="tabModelPictures">
                        <v-tab-item v-for="(item, key) in value.images" :key="key" :value="`tab-${key}`">
                            <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
                            <masonry-wall :column-width="280" :gap="16" :items="item">
                                <template #default="{ index }">
                                    <d-view :start-index="index" :value="item" />
                                </template>
                            </masonry-wall>
                        </v-tab-item>
                    </v-tabs-items>
                </v-tab-item>
                <v-tab-item key="Videos" value="tab-Videos">
                    <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
                    <masonry-wall :column-width="vuetify?.breakpoint.mobile ? 280 : 560" :gap="16" :items="value.youtubeVideoIds">
                        <template #default="{ item }">
                            <iframe
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                :height="`${vuetify?.breakpoint.mobile ? 2 : 4}00`"
                                :src="`https://www.youtube-nocookie.com/embed/${item}`"
                                style="border: 0; border-radius: 4px; box-shadow: 0 3px 1px -2px rgba(0 0 0 / 20%), 0 2px 2px 0 rgba(0 0 0 / 14%), 0 1px 5px 0 rgba(0 0 0 / 12%)"
                                title="YouTube video player"
                                width="100%"
                            />
                        </template>
                    </masonry-wall>
                </v-tab-item>
            </v-tabs-items>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, nextTick, ref } from 'vue'
import { mdiChevronDown, mdiChevronUp, mdiClose } from '@mdi/js'
import DView from '~/components/pages/about-us/galleries/album/DView.vue'
import { useGalleryStore } from '~/store/about-us/Gallery'
import useDateTime from '~/utils/DateTime'

const proxy = getCurrentInstance()?.proxy

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(proxy?.$vuetify)

const dateTime = useDateTime()

const close = () => {
    isLoading.value = true
    nextTick(() => {
        setTimeout(() => {
            proxy?.$router.go(-1)
        }, 0)
    })
}
const icons = {
    mdiChevronDown,
    mdiChevronUp,
    mdiClose,
}
const isLoading = ref(false)
const showText = ref(false)
const tabModel = ref()
const tabModelPictures = ref()
const tabs = computed(() => {
    const tabs = []

    if (value) {
        if (Object.keys(value.images).length) tabs.push('Bilder')
        if (value.youtubeVideoIds.length) tabs.push('Videos')
    }

    return tabs
})
const value = useGalleryStore().findById(proxy?.$route.params.value)
</script>
