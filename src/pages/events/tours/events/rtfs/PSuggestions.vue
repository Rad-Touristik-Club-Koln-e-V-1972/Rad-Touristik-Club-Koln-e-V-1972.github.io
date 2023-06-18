<template>
    <q-card flat>
        <q-card-section class="bg-primary text-accent text-h6">Empfohlene RTF's außerhalb NRW</q-card-section>
        <q-card-section class="text-subtitle1">
            Viele unserer Vereinsmitglieder sind diese Radsportveranstaltungen außerhalb von NRW in den vergangenen Jahren gefahren und fanden sie sehr schön.
            <br />
            Daher haben wir sie für Euch als Tipps zusammengestellt.
            <br />
            Weitere Tipps werden folgen.
        </q-card-section>
        <q-card-section>
            <masonry-wall :column-width="280" :gap="16" :items="useSuggestionStore().all">
                <template #default="{ item }">
                    <c-suggestion :model-value="item" />
                </template>
            </masonry-wall>
        </q-card-section>
    </q-card>
</template>

<script lang="ts" setup>
import CSuggestion from 'components/pages/events/tours/events/rtfs/CSuggestion.vue'
import useSuggestionStore from 'stores/events/tours/events/rtfs/Suggestion'
</script>
