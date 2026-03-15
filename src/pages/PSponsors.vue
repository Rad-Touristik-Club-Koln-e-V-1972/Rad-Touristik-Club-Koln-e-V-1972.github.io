<template>
  <q-card flat>
    <q-card-section class="bg-primary text-accent text-h6">Unsere Sponsoren</q-card-section>
    <q-card-section>
      Ein herzliches Dankeschön für all die Unterstützung, ohne die unsere Veranstaltungen nicht machbar wären.
      <br />
      Auch all denjenigen, die um Diskretion gebeten haben, sind wir sehr verbunden!
    </q-card-section>
    <q-card-section>
      <!-- TODO Workaround until the browsers support native masonry walls. See https://caniuse.com/?search=masonry
            & https://drafts.csswg.org/css-grid-3/
            & https://github.com/w3c/csswg-drafts/issues?q=is%3Aopen+label%3Acss-grid-3+masonry -->
      <masonry-wall :column-width="280" :gap="3" :items="useSponsorStore().all">
        <template #default="{ item }">
          <a :href="item.url?.toString()" target="_blank">
            <q-card flat>
              <q-card-section>
                <div v-if="item.text">{{ item.text }}</div>
                <q-img v-else-if="item.imageUrl" :src="item.imageUrl.toString()" fit="contain" />
              </q-card-section>
            </q-card>
          </a>
        </template>
      </masonry-wall>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { MasonryWall } from '@yeger/vue-masonry-wall'
import useSponsorStore from 'stores/Sponsor'
</script>
