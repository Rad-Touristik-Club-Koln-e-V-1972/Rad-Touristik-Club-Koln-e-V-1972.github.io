<template>
    <v-card id="VSponsor" flat>
        <v-toolbar color="primary" flat>
            <v-toolbar-title class="accent--text text-title">Unsere Sponsoren</v-toolbar-title>
        </v-toolbar>
        <v-card-subtitle class="text-title">
            Ein herzliches Dankeschön für all die Unterstützung, ohne die unsere Veranstaltungen nicht machbar wären.
            <br />
            Auch all denjenigen, die um Diskretion gebeten haben, sind wir sehr verbunden!
        </v-card-subtitle>
        <v-card-text>
            <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
            <masonry-wall :column-width="280" :gap="16" :items="useSponsorStore().all">
                <template #default="{ item }">
                    <v-card flat :href="item.url.toString()" max-width="20em" target="_blank">
                        <v-card-text>
                            <div v-if="item.text" v-text="item.text" />
                            <v-img v-if="item.imageUrl" contain :src="item.imageUrl.toString()" />
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
