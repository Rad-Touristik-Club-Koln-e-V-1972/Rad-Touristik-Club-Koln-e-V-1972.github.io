<template>
    <v-dialog id="CGalleryCard" v-model="isOpen" :fullscreen="vuetify?.breakpoint.mobile" persistent scrollable>
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
                    <div class="text-subtitle-1" v-text="`${dateTime.format(props.value.dateFrom, props.value.dateTo, true)} bei ${props.value.location}`" />
                </v-toolbar-title>
                <v-spacer />
                <v-btn v-if="props.value.description" color="accent" text @click="showText = !showText">
                    Details
                    <v-icon color="accent" right v-text="showText ? icons.mdiChevronUp : icons.mdiChevronDown" />
                </v-btn>
            </v-toolbar>
            <v-expand-transition v-if="props.value.description">
                <div v-show="showText" class="align-self-center" style="max-width: 20em">
                    <v-card-text>
                        <pre>{{ props.value.description }}</pre>
                    </v-card-text>
                </div>
            </v-expand-transition>
            <v-card-text>
                <v-tabs id="CNavigationTabs" v-model="tabModel" background-color="primary" centered class="my-1" color="accent" show-arrows slider-color="secondary">
                    <v-tab v-for="item in tabs" :key="item" :href="`#tab-${item}`">{{ item }}</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tabModel">
                    <v-tab-item key="Bilder" value="tab-Bilder">
                        <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
                        <masonry-wall :column-width="200" :gap="5" :items="props.value.images">
                            <template #default="{ index }">
                                <d-view :start-index="index" :value="props.value.images" />
                            </template>
                        </masonry-wall>
                    </v-tab-item>
                    <v-tab-item key="Videos" value="tab-Videos">
                        <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
                        <masonry-wall :column-width="200" :items="props.value.youtubeVideoIds" :gap="5">
                            <template #default="{ item }">
                                <iframe
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    :src="`https://www.youtube-nocookie.com/embed/${item}`"
                                    style="
                                        border: 0;
                                        border-radius: 4px;
                                        box-shadow: 0 3px 1px -2px rgba(0 0 0 / 20%), 0 2px 2px 0 rgba(0 0 0 / 14%), 0 1px 5px 0 rgba(0 0 0 / 12%);
                                    "
                                    title="YouTube video player"
                                    :height="`${vuetify?.breakpoint.mobile ? 2 : 4}00`"
                                    :width="`${vuetify?.breakpoint.mobile ? 4 : 8}00`"
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
import DView from '~/components/pages/gallery/DView.vue'
import Gallery from '~/models/entities/Gallery'
import useDateTime from '~/utils/DateTime'

const props = defineProps<{ value: Gallery }>()

const dateTime = useDateTime()
// TODO WORKAROUND UNTIL VUETIFY 2.7
const vuetify = ref(getCurrentInstance()?.proxy.$vuetify)

const icons = {
    mdiChevronDown,
    mdiChevronUp,
    mdiClose,
}
const isOpen = ref(false)
const showText = ref(false)
const tabModel = ref()
const tabs = computed(() => {
    const tabs = ['Bilder']

    if (props.value.youtubeVideoIds.length) tabs.push('Videos')

    return tabs
})
</script>

<style lang="scss" scoped />
