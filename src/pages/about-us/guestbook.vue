<template>
    <v-card id="VGuestbook" flat>
        <v-card-title class="text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4">Gästebuch</v-card-title>
        <v-card-subtitle class="text-body-2 text-sm-subtitle-2 text-md-subtitle-1 text-lg-h6 text-xl-h5">
            Briefpost bitte immer an: RTC Köln, Postfach 990103, 51083 Köln
        </v-card-subtitle>
        <v-card-text>
            Lob, nette Grüße, positive oder konstruktive Kritik, Anregungen oder was auch immer ihr uns schon immer sagen wolltet, werden 1:1 mit Eurem Namen veröffentlicht.
            <br />
            Wir behalten uns allerdings vor, unangemessene Beiträge nicht zu veröffentlichen.
            <br />
            Also: Wir freuen uns auf Eure Einträge in unser Gästebuch.
            <br />
            <br />
            Herzliche Grüße,
            <br />
            RTC Köln
        </v-card-text>
        <v-card-actions>
            <v-btn
                class="text-body-2 text-sm-body-2 text-lg-body-1"
                href="mailto:PR@rtc-koeln.de?subject=G%C3%A4stebuch%20-%20Thema
                &body=Hallo%20RTC%20K%C3%B6ln%2C%0D%0A%0D%0APlatzhalter%20f%C3%BCr%20den%20G%C3%A4stebucheintrag%0D%0A%0D%0A
                --%0D%0AViele%20Gr%C3%BC%C3%9Fe%0D%0AMax%20Mustermann%0D%0AAus%20K%C3%B6ln"
                style="background-color: var(--v-primary-base); color: var(--v-accent-base)"
            >
                Gästebucheintrag hinzufügen
                <v-icon right>{{ icons.mdiEmailArrowRight }}</v-icon>
            </v-btn>
        </v-card-actions>
        <v-card-text>
            <div v-for="it in Object.keys(items).reverse()" :key="it">
                <v-toolbar class="mt-1" flat>
                    <v-toolbar-title>{{ it }}</v-toolbar-title>
                </v-toolbar>
                <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support. See https://github.com/vuetifyjs/vuetify/issues/11177 -->
                <masonry-wall :column-width="280" :gap="16" :items="items[it]">
                    <template #default="{ item }">
                        <c-guestbook :value="item" />
                    </template>
                </masonry-wall>
            </div>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { mdiEmailArrowRight } from '@mdi/js'
import CGuestbook from '~/components/pages/about-us/CGuestbook.vue'
import { useGuestbookStore } from '~/store/about-us/Guestbook'

const icons = { mdiEmailArrowRight }
const items = useGuestbookStore().getGroupedByYear
</script>
