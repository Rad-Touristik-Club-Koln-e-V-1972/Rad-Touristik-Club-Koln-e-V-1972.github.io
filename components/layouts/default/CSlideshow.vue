<template>
  <v-carousel id="CSlideshow" cycle height="200px" hide-delimiters show-arrows-on-hover>
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
</template>

<script lang="ts">
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {
      icons: { mdiChevronLeft, mdiChevronRight },
      images: [
        {
          src: 'https://content.rtc-koeln.de/layouts/default/slideshow/b0a3d468-828d-474d-9380-e568a38fad89.jpg',
        },
        {
          src: 'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_0037.jpg',
        },
        {
          src: 'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_2225.jpg',
        },
        {
          src: 'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4226.jpg',
        },
        {
          src: 'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4235.jpg',
        },
        {
          src: 'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4241.jpg',
        },
        {
          src: 'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4252.jpg',
        },
        {
          src: 'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4256.jpg',
        },
        {
          src: 'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4483.jpg',
        },
        {
          src: 'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4495.jpg',
        },
        {
          src: 'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4497.jpg',
        },
        {
          src: 'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4502.jpg',
        },
        {
          src: 'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4507.jpg',
        },
        {
          src: 'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4508.jpg',
        },
        {
          src: 'https://content.rtc-koeln.de/layouts/default/slideshow/IMG_4515.jpg',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped></style>
