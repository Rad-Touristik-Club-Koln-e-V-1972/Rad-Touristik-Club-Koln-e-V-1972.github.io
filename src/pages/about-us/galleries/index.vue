<template>
    <v-card id="VIndex" flat>
        <v-card-title>
            <v-toolbar color="primary" flat>
                <v-toolbar-title class="accent--text text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4">
                    Galerien
                    <div class="text-body-2 text-sm-subtitle-2 text-md-subtitle-1 text-lg-h6 text-xl-h5" v-text="'Fotos und Videos des RTC-Köln'" />
                </v-toolbar-title>
            </v-toolbar>
        </v-card-title>
        <v-card-text>
            <div v-for="it in Object.keys(items).reverse()" :key="it">
                <v-toolbar class="mt-1" flat>
                    <v-toolbar-title>{{ it }}</v-toolbar-title>
                </v-toolbar>
                <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
                <masonry-wall :column-width="280" :gap="16" :items="items[it]">
                    <template #default="{ item }">
                        <c-gallery :value="item" />
                    </template>
                </masonry-wall>
            </div>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import CGallery from '~/components/pages/about-us/galleries/CGallery.vue'
import { useGalleryStore } from '~/store/about-us/Gallery'

const items = useGalleryStore().getGroupedByYear
</script>
