<template>
  <q-carousel
    ref="carousel"
    v-model="item"
    :autoplay="12000"
    :height="height"
    :infinite="infinite"
    animated
    control-color="primary"
    draggable="false"
    swipeable
  >
    <q-carousel-slide v-for="it in galleryEntries" :key="it.id" :name="it.id">
      <q-img
        :src="it.imageUrl.toString()"
        class="absolute-center full-height"
        fit="contain"
        style="z-index: 1"
      />
      <q-img
        :src="it.imageUrl.toString()"
        class="absolute-center full-height"
        style="filter: blur(20px)"
      />
    </q-carousel-slide>
    <template #control>
      <q-carousel-control
        v-if="galleryEntries.length > 1"
        position="bottom-left"
        style="z-index: 1"
      >
        <q-btn
          :icon="mdiArrowLeft"
          color="primary"
          round
          size="md"
          text-color="accent"
          @click="carouselRef!.previous()"
        />
      </q-carousel-control>
      <q-carousel-control
        v-if="galleryEntries.length > 1"
        position="bottom-right"
        style="z-index: 1"
      >
        <q-btn
          :icon="mdiArrowRight"
          color="primary"
          round
          size="md"
          text-color="accent"
          @click="carouselRef!.next()"
        />
      </q-carousel-control>
    </template>
  </q-carousel>
</template>

<script lang="ts" setup>
import { ref, useTemplateRef } from "vue";
import { QCarousel } from "quasar";
import { mdiArrowLeft, mdiArrowRight } from "@quasar/extras/mdi-v7";
import type GalleryEntry from "@/models/entities/rtc-cologne/gallery/GalleryEntry";

const {
  entryID,
  galleryEntries,
  height = "200px",
  infinite
} = defineProps<{
  entryID?: string | undefined;
  galleryEntries: GalleryEntry[];
  height?: string | undefined;
  infinite?: boolean | undefined;
}>();

const carouselRef = useTemplateRef<InstanceType<typeof QCarousel>>("carousel");

const item = ref(entryID ?? galleryEntries[0]?.id ?? "");
</script>
