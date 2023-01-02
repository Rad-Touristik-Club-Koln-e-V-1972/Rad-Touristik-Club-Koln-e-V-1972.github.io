<template>
    <v-card id="VContact" flat>
        <v-toolbar color="primary" flat>
            <v-toolbar-title class="accent--text text-title">Kontakte</v-toolbar-title>
        </v-toolbar>
        <v-card-subtitle class="text-title">Briefpost bitte immer an: RTC Köln, Postfach 990103, 51083 Köln</v-card-subtitle>
        <v-card-text>
            <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
            <masonry-wall :column-width="280" :gap="16" :items="useContactsStore().all">
                <template #default="{ item }">
                    <c-contact :value="item" />
                </template>
            </masonry-wall>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import CContact from '~/components/pages/rtc-cologne/CContact.vue'
import { useContactsStore } from '~/store/rtc-cologne/Contacts'
</script>
