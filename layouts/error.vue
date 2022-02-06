<!--
  - Created by Martin Dünkelmann on 06.02.22, 13:50
  - Copyright (c) 2022. All rights reserved.
  -
  - Last modified 06.02.22, 13:50
  -->

<template>
  <v-app id="ErrorView">
    <div class="d-flex justify-center">
      <v-card min-width="300px">
        <v-card-title v-text="title" />
        <v-card-text v-text="text" />
        <v-card-actions>
          <v-btn :to="{ name: 'index' }" v-text="'Homepage'" />
        </v-card-actions>
      </v-card>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { NuxtError } from '@nuxt/types'
import { Prop } from 'vue/types/options'
import HTTP from '@/models/enums/HTTP'

@Component
export default class ErrorView extends Vue.extend({
  props: {
    error: { default: null, type: Object as Prop<NuxtError> },
  },
}) {
  title = `Fehlercode ${this.error?.statusCode}`

  get text() {
    let text

    switch (this.error.statusCode) {
      case HTTP.NOT_FOUND:
        text = 'Diese Seite existiert nicht.'
        break
      default:
        text = 'Ein unbekannter Fehler trat auf.'
    }

    return text
  }
}
</script>

<style lang="scss" scoped></style>
