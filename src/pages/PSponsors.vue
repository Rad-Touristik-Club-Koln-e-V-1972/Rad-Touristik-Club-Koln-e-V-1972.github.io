<template>
  <q-card flat>
    <q-card-section class="bg-primary text-accent text-h6">Unsere Sponsoren</q-card-section>
    <q-card-section>
      Ein herzliches Dankeschön für all die Unterstützung, ohne die unsere Veranstaltungen nicht machbar wären.
      <br />
      Auch all denjenigen, die um Diskretion gebeten haben, sind wir sehr verbunden!
    </q-card-section>
    <q-card-section>
      <c-masonry-wall v-slot="{ item }" :items="sponsorsRepo.withAllRecursive().all()">
        <a :href="item.url?.toString()" target="_blank">
          <q-card flat>
            <q-card-section>
              <div v-if="item.text">{{ item.text }}</div>
              <q-img v-else-if="item.galleryEntry" fit="contain" :src="item.galleryEntry.imageUrl.toString()" />
            </q-card-section>
          </q-card>
        </a>
      </c-masonry-wall>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { useRepo } from 'pinia-orm'
import CMasonryWall from 'components/pages/CMasonryWall.vue'
import Sponsor from 'src/models/entities/Sponsor'

const sponsorsRepo = useRepo(Sponsor)
</script>
