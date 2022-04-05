<template>
  <v-card id="CSlideshow" class="d-flex justify-center">
    <v-carousel cycle height="200px" hide-delimiters show-arrows-on-hover>
      <template #prev="{ on, attrs }">
        <v-btn icon style="background-color: var(--v-accent-base)" v-bind="attrs" v-on="on">
          <v-icon color="secondary" x-large v-text="icons.mdiChevronLeft" />
        </v-btn>
      </template>
      <template #next="{ on, attrs }">
        <v-btn icon style="background-color: var(--v-accent-base)" v-bind="attrs" v-on="on">
          <v-icon color="secondary" x-large v-text="icons.mdiChevronRight" />
        </v-btn>
      </template>
      <v-carousel-item v-for="(item, i) in images" :key="i" :src="item.src" />
    </v-carousel>
  </v-card>
</template>

<script lang="ts">
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CSlideshow extends Vue {
  icons = { mdiChevronLeft, mdiChevronRight }

  images = [
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/b0a3d468-828d-474d-9380-e568a38fad89.jpg',
    },
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/IMG_0037.jpg',
    },
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/IMG_2225.jpg',
    },
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/IMG_4226.jpg',
    },
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/IMG_4235.jpg',
    },
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/IMG_4241.jpg',
    },
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/IMG_4252.jpg',
    },
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/IMG_4256.jpg',
    },
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/IMG_4483.jpg',
    },
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/IMG_4495.jpg',
    },
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/IMG_4497.jpg',
    },
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/IMG_4502.jpg',
    },
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/IMG_4507.jpg',
    },
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/IMG_4508.jpg',
    },
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/IMG_4515.jpg',
    },
  ]
}
</script>

<style lang="scss" scoped></style>
