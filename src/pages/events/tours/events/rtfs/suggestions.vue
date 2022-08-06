<template>
    <v-card id="VSuggestions" flat>
        <v-card-title>
            <v-toolbar color="primary" flat>
                <v-toolbar-title class="accent--text text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4"> Empfohlene RTF's außerhalb NRW </v-toolbar-title>
            </v-toolbar>
        </v-card-title>
        <v-card-subtitle class="my-1 text-body-2 text-sm-subtitle-2 text-md-subtitle-1 text-lg-h6 text-xl-h5">
            Viele unserer Vereinsmitglieder sind diese Radsportveranstaltungen außerhalb von NRW in den vergangenen Jahren gefahren und fanden sie sehr schön.
            <br />
            Daher haben wir sie für Euch als Tipps zusammengestellt.
            <br />
            Weitere Tipps werden folgen.
        </v-card-subtitle>
        <v-card-text>
            <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
            <masonry-wall :column-width="280" :gap="16" :items="useSuggestionStore().all">
                <template #default="{ item }">
                    <c-suggestion :value="item" />
                </template>
            </masonry-wall>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import CSuggestion from '~/components/pages/events/tours/events/rtfs/CSuggestion.vue'
import { useSuggestionStore } from '~/store/events/tours/events/rtfs/Suggestion'
</script>
