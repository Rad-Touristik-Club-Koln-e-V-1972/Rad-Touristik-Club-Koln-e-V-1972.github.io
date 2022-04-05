<template>
  <v-card id="CSlideshow" class="d-flex justify-center">
    <v-carousel :next-icon="icons.mdiChevronRight" :prev-icon="icons.mdiChevronLeft" cycle height="200px" hide-delimiters>
      <v-carousel-item v-for="(item, i) in carouselItems" :key="i" :src="item.src" />
    </v-carousel>
  </v-card>
</template>

<script lang="ts">
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CVuetifyLogo extends Vue {
  carouselItems = [
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

  icons = { mdiChevronLeft, mdiChevronRight }
}
</script>

<style lang="scss" scoped></style>
