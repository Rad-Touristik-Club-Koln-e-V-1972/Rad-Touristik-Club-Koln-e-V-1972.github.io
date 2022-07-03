<template>
    <v-card id="GalleryView" flat>
        <v-card-title class="text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4">Galerie</v-card-title>
        <v-card-subtitle class="text-body-2 text-sm-subtitle-2 text-md-subtitle-1 text-lg-h6 text-xl-h5">Fotos und Videos des RTC-Köln</v-card-subtitle>
        <v-card-text>
            <v-row class="d-flex justify-center" dense>
                <v-col v-for="(item, index) in items" :key="index" cols="auto">
                    <c-gallery :value="item" />
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import CGallery from '@/components/page/CGallery.vue'
import { useGalleryStore } from '@/store/Gallery'

export default defineComponent({
    name: 'GalleryView',
    components: { CGallery },
    setup() {
        return {
            items: useGalleryStore().all,
        }
    },
})
</script>

<style lang="scss" scoped />
