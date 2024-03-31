<template>
  <q-card flat>
    <q-card-section class="bg-primary text-accent text-h6">Galerien</q-card-section>
    <q-card-section>
      <span class="text-subtitle1">Fotos und Videos des RTC-Köln</span>
      <br />
      <span class="text">
        Falls du keine Fotos siehst, schau bitte nach, ob dein Browser unterstützt wird:
        <br />
        <a href="https://caniuse.com/?search=avif" target="_blank">https://caniuse.com/?search=avif</a>
      </span>
    </q-card-section>
    <q-card-section>
      <div v-for="it in Object.keys(items).reverse()" :key="it">
        <q-card-section class="text-h6">{{ it }}</q-card-section>
        <!-- TODO Workaround until the browsers support native masonry walls. See https://caniuse.com/?search=masonry
                    & https://drafts.csswg.org/css-grid-3/
                    & https://github.com/w3c/csswg-drafts/issues?q=is%3Aopen+label%3Acss-grid-3+masonry -->
        <masonry-wall :column-width="280" :gap="16" :items="items[it]">
          <template #default="{ item }">
            <c-gallery :model-value="item" />
          </template>
        </masonry-wall>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import CGallery from 'components/pages/rtc-cologne/galleries/CGallery.vue'
import useGalleryStore from 'stores/rtc-cologne/Gallery'

const items = useGalleryStore().groupedByYear
</script>
