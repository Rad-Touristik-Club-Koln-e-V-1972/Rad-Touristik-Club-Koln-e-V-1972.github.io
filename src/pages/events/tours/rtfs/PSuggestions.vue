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
      <c-masonry-wall v-slot="{ item }" :items="useSuggestionStore().all">
        <a :href="item.url.toString()" target="_blank">
          <q-card class="bg-primary">
            <q-card-section class="text-h6">{{ item.title }}</q-card-section>
            <q-card-section>{{ item.text }}</q-card-section>
          </q-card>
        </a>
      </c-masonry-wall>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import CMasonryWall from 'components/pages/CMasonryWall.vue'
import useSuggestionStore from 'stores/events/tours/Suggestion'
</script>
