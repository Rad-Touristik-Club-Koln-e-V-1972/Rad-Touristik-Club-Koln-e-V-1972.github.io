<template>
    <v-card id="gallery" flat>
        <v-card-title class="text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4">Galerie</v-card-title>
        <v-card-subtitle class="text-body-2 text-sm-subtitle-2 text-md-subtitle-1 text-lg-h6 text-xl-h5">Fotos und Videos des RTC-Köln</v-card-subtitle>
        <v-card-text>
            <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
            <masonry-wall :column-width="250" :gap="5" :items="useGalleryStore().all">
                <template #default="{ item }">
                    <c-gallery :value="item" />
                </template>
            </masonry-wall>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import CGallery from '~/components/pages/CGallery.vue'
import { useGalleryStore } from '~/store/Gallery'
</script>

<style lang="scss" scoped />
