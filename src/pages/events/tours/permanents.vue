<template>
    <v-card id="VPermanents" flat>
        <v-card-title class="text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4">Permanente</v-card-title>
        <v-card-subtitle class="text-body-2 text-sm-subtitle-2 text-md-subtitle-1 text-lg-h6 text-xl-h5">Ganzjährig verfügbare Touren</v-card-subtitle>
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
