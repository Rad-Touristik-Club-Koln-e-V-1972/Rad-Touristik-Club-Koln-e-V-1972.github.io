<template>
    <v-card id="VSponsor" flat>
        <v-card-title class="text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4">Unsere Sponsoren</v-card-title>
        <v-card-text>
            <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
            <masonry-wall :column-width="310" :items="useSponsorStore().all">
                <template #default="{ item }">
                    <v-card flat :href="item.url" max-width="30em" target="_blank">
                        <v-card-text>
                            <div v-if="item.text" v-text="item.text" />
                            <v-img v-if="item.imageSrc" contain :src="item.imageSrc" />
                        </v-card-text>
                    </v-card>
                </template>
            </masonry-wall>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { useSponsorStore } from '~/store/Sponsor'
</script>
