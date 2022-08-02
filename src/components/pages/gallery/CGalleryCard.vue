<template>
    <v-dialog id="CGalleryCard" v-model="isOpen" fullscreen persistent scrollable>
        <template #activator="{ attrs, on }">
            <v-img :src="props.value.titleImageUrl" style="cursor: pointer" v-bind="attrs" v-on="on">
                <template #placeholder>
                    <c-loading-skeleton />
                </template>
            </v-img>
        </template>
        <v-card class="text-center">
            <!-- TODO max-height="64px" IS A WORKAROUND FOR https://github.com/vuetifyjs/vuetify/issues/15362 -->
            <v-toolbar color="primary" flat max-height="64px">
                <v-btn icon dark @click="isOpen = false">
                    <v-icon color="accent">{{ icons.mdiClose }}</v-icon>
                </v-btn>
                <v-toolbar-title class="accent--text">
                    {{ props.value.title }}
                    <div class="text-subtitle-1" v-text="`${dateTime.format(props.value.dateFrom, props.value.dateTo, true)} bei ${props.value.location}`" />
                </v-toolbar-title>
                <v-spacer />
                <v-btn v-if="props.value.description" color="accent" text @click="showText = !showText">
                    Details
                    <v-icon color="accent" right>{{ showText ? icons.mdiChevronUp : icons.mdiChevronDown }}</v-icon>
                </v-btn>
            </v-toolbar>
            <v-expand-transition v-if="props.value.description">
                <div v-show="showText" class="align-self-center" style="max-width: 20em">
                    <v-card-text>
                        <pre v-text="props.value.description" />
                    </v-card-text>
                </div>
            </v-expand-transition>
            <v-card-text>
                <v-tabs v-model="tabModel" background-color="primary" centered class="my-1" color="accent" show-arrows slider-color="secondary">
                    <v-tab v-for="item in tabs" :key="item" :href="`#tab-${item}`">{{ item }}</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tabModel">
                    <v-tab-item key="Bilder" value="tab-Bilder">
                        <v-tabs v-model="tabModelPictures" background-color="primary" centered class="my-1" color="accent" show-arrows slider-color="secondary">
                            <v-tab v-for="key in Object.keys(props.value.images)" :key="key" :href="`#tab-${key}`">{{ key || 'Ohne Album' }}</v-tab>
                        </v-tabs>
                        <v-tabs-items v-model="tabModelPictures">
                            <v-tab-item v-for="(item, key) in props.value.images" :key="key" :value="`tab-${key}`">
                                <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
                                <masonry-wall :column-width="400" :gap="16" :items="item">
                                    <template #default="{ index }">
                                        <d-view :start-index="index" :value="item" />
                                    </template>
                                </masonry-wall>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-tab-item>
                    <v-tab-item key="Videos" value="tab-Videos">
                        <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
                        <masonry-wall :column-width="vuetify?.breakpoint.mobile ? 400 : 800" :gap="16" :items="props.value.youtubeVideoIds">
                            <template #default="{ item }">
                                <iframe
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    :height="`${vuetify?.breakpoint.mobile ? 2 : 4}00`"
                                    :src="`https://www.youtube-nocookie.com/embed/${item}`"
                                    style="
                                        border: 0;
                                        border-radius: 4px;
                                        box-shadow: 0 3px 1px -2px rgba(0 0 0 / 20%), 0 2px 2px 0 rgba(0 0 0 / 14%), 0 1px 5px 0 rgba(0 0 0 / 12%);
                                    "
                                    title="YouTube video player"
                                    width="100%"
                                />
                            </template>
                        </masonry-wall>
                    </v-tab-item>
                </v-tabs-items>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, ref } from 'vue'
import { mdiChevronDown, mdiChevronUp, mdiClose } from '@mdi/js'
import CLoadingSkeleton from '~/components/CLoadingSkeleton.vue'
import DView from '~/components/pages/gallery/DView.vue'
import Gallery from '~/models/entities/Gallery'
import useDateTime from '~/utils/DateTime'

const props = defineProps<{ value: Gallery }>()

// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy.$vuetify)

const dateTime = useDateTime()

const icons = {
    mdiChevronDown,
    mdiChevronUp,
    mdiClose,
}

const isOpen = ref(false)
const showText = ref(false)
const tabModel = ref()
const tabModelPictures = ref()
const tabs = computed(() => {
    const tabs = []

    if (Object.keys(props.value.images).length) tabs.push('Bilder')
    if (props.value.youtubeVideoIds.length) tabs.push('Videos')

    return tabs
})
</script>
