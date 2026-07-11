<template>
  <q-card v-if="items?.length">
    <q-card-section>
      <q-carousel
        v-model="slide"
        :arrows="items.length > 1"
        :fullscreen="false"
        animated
        autoplay
        class="full-height"
        control-color="primary"
        control-type="push"
        draggable="false"
        infinite
        padding
        swipeable
        transition-next="slide-left"
        transition-prev="slide-right"
      >
        <q-carousel-slide
          v-for="it in items"
          :key="it.id"
          :fullscreen="false"
          :name="it.id"
          class="column flex-center no-wrap"
        >
          <q-card flat>
            <q-card-section>
              <span class="text-pre-wrap" v-html="it.text" />
              <d-news-details v-if="it.gallery" :model-value="it.gallery" />
            </q-card-section>
          </q-card>
        </q-carousel-slide>
      </q-carousel>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import DNewsDetails from "./DNewsDetails.vue";
import useNewsStore from "@/stores/home/News";

const items = useNewsStore().allValid;

const slide = ref(items[0]?.id);
</script>
