<template>
  <q-card flat>
    <q-card-section class="bg-primary text-accent text-h6">Unsere Sponsoren</q-card-section>
    <q-card-section>
      Ein herzliches Dankeschön für all die Unterstützung, ohne die unsere Veranstaltungen nicht machbar wären.
      <br />
      Auch all denjenigen, die um Diskretion gebeten haben, sind wir sehr verbunden!
    </q-card-section>
    <q-card-section>
      <c-masonry-wall v-slot="{ item }" :items="useSponsorStore().all">
        <a :href="item.url?.toString()" target="_blank">
          <q-card flat>
            <q-card-section>
              <div v-if="item.text">{{ item.text }}</div>
              <q-img v-else-if="item.imageUrl" fit="contain" :src="item.imageUrl.toString()" />
            </q-card-section>
          </q-card>
        </a>
      </c-masonry-wall>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import CMasonryWall from 'components/pages/CMasonryWall.vue'
import useSponsorStore from 'stores/Sponsor'
</script>
