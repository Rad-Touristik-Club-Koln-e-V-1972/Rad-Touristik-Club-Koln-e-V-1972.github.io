<!--
  - Created by Martin Dünkelmann on 06.02.22, 16:51
  - Copyright (c) 2022. All rights reserved.
  -
  - Last modified 06.02.22, 16:51
  -->

<template>
  <v-card id="CSlideshow" class="d-flex justify-center">
    <v-carousel cycle height="200px" hide-delimiters>
      <v-carousel-item v-for="(item, i) in carouselItems" :key="i" :src="item.src" contain />
    </v-carousel>
  </v-card>
</template>

<script lang="ts">
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
}
</script>

<style lang="scss" scoped></style>
