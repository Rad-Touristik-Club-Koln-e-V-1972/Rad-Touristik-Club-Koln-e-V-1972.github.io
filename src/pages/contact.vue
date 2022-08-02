<template>
    <v-card id="contact" flat>
        <v-card-title class="text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4">Kontakte</v-card-title>
        <v-card-subtitle class="text-body-2 text-sm-subtitle-2 text-md-subtitle-1 text-lg-h6 text-xl-h5">
            Briefpost bitte immer an: RTC Köln, Postfach 990103, 51083 Köln
        </v-card-subtitle>
        <v-card-text>
            <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
            <masonry-wall :column-width="223" :gap="16" :items="items">
                <template #default="{ item }">
                    <c-contact :value="item" />
                </template>
            </masonry-wall>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import CContact from '~/components/pages/CContact.vue'
import { useContactsStore } from '~/store/Contacts'

const items = useContactsStore().all
</script>
