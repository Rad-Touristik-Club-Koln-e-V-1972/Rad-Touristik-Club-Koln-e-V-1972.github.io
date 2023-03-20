<template>
    <v-card id="VGuestbook" flat>
        <v-toolbar color="primary" flat>
            <v-toolbar-title class="accent--text">Gästebuch</v-toolbar-title>
            <v-spacer />
            <v-btn color="accent" text @click="showText = !showText">
                Details
                <v-icon color="accent" right>{{ showText ? icons.mdiChevronUp : icons.mdiChevronDown }}</v-icon>
            </v-btn>
        </v-toolbar>
        <v-card-subtitle>Briefpost bitte immer an: RTC Köln, Postfach 990103, 51083 Köln</v-card-subtitle>
        <v-card-actions>
            <v-btn
                href="mailto:PR@rtc-koeln.de?subject=G%C3%A4stebuch%20-%20Thema
                &body=Hallo%20RTC%20K%C3%B6ln%2C%0D%0A%0D%0APlatzhalter%20f%C3%BCr%20den%20G%C3%A4stebucheintrag%0D%0A%0D%0A
                --%0D%0AViele%20Gr%C3%BC%C3%9Fe%0D%0AMax%20Mustermann%0D%0AAus%20K%C3%B6ln"
                style="background-color: var(--v-primary-base); color: var(--v-accent-base)"
            >
                <v-icon color="accent" left>{{ icons.mdiEmailArrowRight }}</v-icon>
                Gästebucheintrag hinzufügen
            </v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="showText">
                <v-card-text>
                    <p>
                        Lob, nette Grüße, positive oder konstruktive Kritik, Anregungen oder was auch immer ihr uns schon immer sagen wolltet, werden 1:1 mit Eurem Namen
                        veröffentlicht.
                        <br />
                        Wir behalten uns allerdings vor, unangemessene Beiträge nicht zu veröffentlichen.
                        <br />
                        Also: Wir freuen uns auf Eure Einträge in unser Gästebuch.
                    </p>
                    <p>
                        Herzliche Grüße,
                        <br />
                        RTC Köln
                    </p>
                </v-card-text>
            </div>
        </v-expand-transition>
        <v-card-text>
            <div v-for="it in Object.keys(items).reverse()" :key="it">
                <v-card-title>{{ it }}</v-card-title>
                <!-- TODO WORKAROUND dependency '@yeger/vue2-masonry-wall' is needed until vuetify 3.2.0 delivers native support.
                      See https://github.com/vuetifyjs/vuetify/issues/11177 -->
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
import { ref } from 'vue'
import { mdiChevronDown, mdiChevronUp, mdiEmailArrowRight } from '@mdi/js'
import CGuestbook from '~/components/pages/rtc-cologne/CGuestbook.vue'
import { useGuestbookStore } from '~/store/rtc-cologne/Guestbook'

const icons = { mdiChevronDown, mdiChevronUp, mdiEmailArrowRight }
const items = useGuestbookStore().getGroupedByYear
const showText = ref(false)
</script>
