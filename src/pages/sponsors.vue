<template>
    <v-card id="VSponsor" flat>
        <v-card-title class="text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4">Unsere Sponsoren</v-card-title>
        <v-card-subtitle class="text-body-2 text-sm-subtitle-2 text-md-subtitle-1 text-lg-h6 text-xl-h5">
            Ein herzliches Dankeschön für all die Unterstützung, ohne die unsere Veranstaltungen nicht machbar wären.
            <br />
            Auch all denjenigen, die um Diskretion gebeten haben, sind wir sehr verbunden!
        </v-card-subtitle>
        <v-card-text>
            <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
            <masonry-wall :column-width="280" :gap="16" :items="useSponsorStore().all">
                <template #default="{ item }">
                    <v-card flat :href="item.url" max-width="20em" target="_blank">
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
