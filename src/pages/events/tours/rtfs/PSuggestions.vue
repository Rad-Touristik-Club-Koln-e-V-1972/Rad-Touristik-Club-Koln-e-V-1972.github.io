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
      <!-- TODO Workaround until the browsers support native masonry walls. See https://caniuse.com/?search=masonry
                  & https://drafts.csswg.org/css-grid-3/
                  & https://github.com/w3c/csswg-drafts/issues?q=is%3Aopen+label%3Acss-grid-3+masonry -->
      <masonry-wall :column-width="280" :gap="3" :items="useSuggestionStore().all">
        <template #default="{ item }">
          <a :href="item.url.toString()" target="_blank">
            <q-card class="bg-primary">
              <q-card-section class="text-h6">{{ item.title }}</q-card-section>
              <q-card-section>{{ item.text }}</q-card-section>
            </q-card>
          </a>
        </template>
      </masonry-wall>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { MasonryWall } from '@yeger/vue-masonry-wall'
import useSuggestionStore from 'stores/events/tours/Suggestion'
</script>
