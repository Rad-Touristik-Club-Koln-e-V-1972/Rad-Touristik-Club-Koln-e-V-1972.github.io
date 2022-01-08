<!--
  - Created by Martin Dünkelmann on 08.01.22, 21:56
  - Copyright (c) 2022. All rights reserved.
  -
  - Last modified 08.01.22, 21:56
  -->

<template>
  <v-row id="IndexView" align="center" justify="center">
    <v-col>
      <v-card class="d-flex justify-center">
        <v-carousel cycle height="200px">
          <v-carousel-item v-for="(item, i) in carouselItems" :key="i" :src="item.src" contain />
        </v-carousel>
      </v-card>
      <v-card>
        <v-card-title class="text-h5"> Welcome to the Vuetify + Nuxt.js template</v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the
            <a href="https://vuetifyjs.com" rel="noopener noreferrer" target="_blank"> documentation </a>.
          </p>
          <p>
            If you have questions, please join the official
            <a href="https://chat.vuetifyjs.com/" rel="noopener noreferrer" target="_blank" title="chat"> discord </a>.
          </p>
          <p>
            Find a bug? Report it on the github
            <a href="https://github.com/vuetifyjs/vuetify/issues" rel="noopener noreferrer" target="_blank" title="contribute"> issue board </a>.
          </p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3" />
          <a href="https://nuxtjs.org/" rel="noopener noreferrer" target="_blank"> Nuxt Documentation </a>
          <br />
          <a href="https://github.com/nuxt/nuxt.js" rel="noopener noreferrer" target="_blank"> Nuxt GitHub </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class IndexView extends Vue {
  carouselItems = [
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/b0a3d468-828d-474d-9380-e568a38fad89.JPG',
    },
    {
      src: 'https://content.rtc-koeln.de/index/slideshow/IMG_0037.JPG',
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

<!--
<style scoped>
</style>
-->
