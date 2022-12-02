<template>
    <v-card id="VIndex" flat>
        <v-toolbar color="primary" flat>
            <v-toolbar-title class="accent--text text-title">Galerien</v-toolbar-title>
        </v-toolbar>
        <v-card-subtitle class="text-title">Fotos und Videos des RTC-Köln</v-card-subtitle>
        <v-card-text>
            <div v-for="it in Object.keys(items).reverse()" :key="it">
                <v-card-title class="text-title">{{ it }}</v-card-title>
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
