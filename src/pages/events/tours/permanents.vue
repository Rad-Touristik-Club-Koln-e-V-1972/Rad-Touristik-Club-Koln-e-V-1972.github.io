<template>
    <v-card id="VPermanents" flat>
        <v-toolbar color="primary" flat>
            <v-toolbar-title class="accent--text text-title">Der RTC Köln e.V. bietet Euch zwei Permanente</v-toolbar-title>
        </v-toolbar>
        <v-card-subtitle class="text-title">
            Wir haben zwei anspruchsvolle und landschaftlich reizvolle Strecken ausgearbeitet, die in der Rennradsaison (auch im Winter) alleine oder in der Gruppe und nach eigenem
            Einschätzungsvermögen abgefahren werden können.
        </v-card-subtitle>
        <v-card-text>
            <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
            <masonry-wall :column-width="518" :gap="16" :items="useTourStore().allPermanents">
                <template #default="{ item }">
                    <c-permanent :value="item" />
                </template>
            </masonry-wall>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import CPermanent from '~/components/pages/events/tours/CPermanent.vue'
import { useTourStore } from '~/store/events/Tour'
</script>
