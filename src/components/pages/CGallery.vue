<template>
    <v-card id="CGallery" class="text-center" max-width="20em">
        <v-card-title class="justify-center text-subtitle-1 text-lg-h6">
            {{ props.value.title }}
        </v-card-title>
        <v-card-subtitle class="text-subtitle-2 text-md-subtitle-1 text-lg-body-1">
            {{ props.value.subtitle }}
        </v-card-subtitle>
        <v-card-text>
            <v-dialog v-model="isOpen" :fullscreen="vuetify?.breakpoint.mobile" persistent scrollable>
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
                        <v-tabs id="CNavigationTabs" v-model="tabModel" background-color="primary" centered class="my-1" color="accent" show-arrows slider-color="secondary">
                            <v-tab v-for="(item, index) in tabs" :key="index">{{ item }}</v-tab>
                        </v-tabs>
                        <v-tabs-items v-model="tabModel">
                            <v-tab-item key="Bilder">
                                <v-row class="justify-center my-1" dense>
                                    <v-col v-for="(_, index) in props.value.images" :key="index" cols="auto">
                                        <d-view :start-index="index" :value="props.value.images" />
                                    </v-col>
                                </v-row>
                            </v-tab-item>
                            <v-tab-item key="Videos">
                                <v-row class="justify-center my-1" dense>
                                    <v-col
                                        v-for="(it, index) in props.value.youtubeVideoIds"
                                        :key="index"
                                        cols="auto"
                                        :style="`height: ${vuetify?.breakpoint.mobile ? 10 : 20}em; width: ${vuetify?.breakpoint.mobile ? 20 : 40}em`"
                                    >
                                        <iframe
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen
                                            :src="`https://www.youtube-nocookie.com/embed/${it}`"
                                            style="
                                                border: 0;
                                                border-radius: 4px;
                                                box-shadow: 0 3px 1px -2px rgba(0 0 0 / 20%), 0 2px 2px 0 rgba(0 0 0 / 14%), 0 1px 5px 0 rgba(0 0 0 / 12%);
                                            "
                                            title="YouTube video player"
                                            height="100%"
                                            width="100%"
                                        />
                                    </v-col>
                                </v-row>
                            </v-tab-item>
                        </v-tabs-items>
                        <!--
                               05.07.2022, RTC Köln
Bilder von Waxweiler-St.Vith-Tour vom 01.-03.07.2022

09.06.2022, RTC Köln
Bilder von der 50. Forsbach-Tour 2022 am 29.05.2022

10.06.2022, RTC Köln
Chronologie unserer Trikots vom 07.05.2022
VIDEO

07.06.2022, RTC Köln
Bilder von der 49. Forsbach-Tour 2021 am 26.05.2021

03.11.2019, RTC Köln
Bilder von der 5. Wahnbach-Tour 2019 am 26.10.2019

01.12.2018, Matthias
Bilder von der RTC-Weihnachtsfeier am 01.12.2018

04.11.2018, Matthias
Bilder vom RTF-Saison-Abschluss am 14.10.2018 bei der BSG Stadt Köln

02.11.2018, Matthias
Bilder von der 4. Wahnbach-Tour am 27.10.2018

28.10.2017, RTC
Bilder von der 3. Wahnbach-Tour am 27.10.2017
PLUS VIDEO


https://youtube-nocookie.com/
https://www.youtube-nocookie.com/
                               -->
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
import { computed, getCurrentInstance, ref } from 'vue'
import { mdiChevronDown, mdiChevronUp, mdiClose } from '@mdi/js'
import DView from '~/components/pages/gallery/DView.vue'
import Gallery from '~/models/entities/Gallery'

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
const tabModel = ref('')
const tabs = computed(() => {
    const tabs = ['Bilder']

    if (props.value.youtubeVideoIds.length) tabs.push('Videos')

    return tabs
})
</script>

<style lang="scss" scoped />
