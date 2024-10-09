<template>
  <q-card flat>
    <q-card-section class="bg-primary text-accent text-h6">Gästebuch</q-card-section>
    <q-card-section>
      <q-btn
        text-color="accent"
        color="primary"
        href="mailto:PR@rtc-koeln.de?subject=G%C3%A4stebuch%20-%20Thema
                &body=Hallo%20RTC%20K%C3%B6ln%2C%0D%0A%0D%0APlatzhalter%20f%C3%BCr%20den%20G%C3%A4stebucheintrag"
        :icon="mdiEmailArrowRight"
        label="Gästebucheintrag hinzufügen"
      />
    </q-card-section>
    <q-card-section class="text-subtitle1">Briefpost bitte immer an: RTC Köln, Postfach 990103, 51083 Köln</q-card-section>
    <q-card-section class="text-subtitle2">
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
    </q-card-section>
    <q-card-section>
      <div v-for="it in items.toReversed()" :key="it.id">
        <q-card-section class="text-h6">{{ it.date.getFullYear() }}</q-card-section>
        <!-- TODO Workaround until the browsers support native masonry walls. See https://caniuse.com/?search=masonry
                    & https://drafts.csswg.org/css-grid-3/
                    & https://github.com/w3c/csswg-drafts/issues?q=is%3Aopen+label%3Acss-grid-3+masonry -->
        <!-- TODO FIX USAGE OF ARRAY! IT MUST BE GROUPED AND NOT THE SAME ARRAY USED  AGAIN. -->
        <masonry-wall :column-width="280" :gap="16" :items="items.toReversed()">
          <template #default="{ item }">
            <c-guestbook :model-value="item" />
          </template>
        </masonry-wall>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { useRepo } from 'pinia-orm'
import { mdiEmailArrowRight } from '@quasar/extras/mdi-v7'
import CGuestbook from 'components/pages/rtc-cologne/CGuestbook.vue'
import GuestbookRepository from 'stores/rtc-cologne/GuestbookRepository'

const guestbookRepo = useRepo(GuestbookRepository)

const items = guestbookRepo.allGroupedByYear()
</script>
