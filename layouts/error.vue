<!--
  - Created by Martin Dünkelmann on 05.02.22, 14:35
  - Copyright (c) 2022. All rights reserved.
  -
  - Last modified 05.02.22, 14:35
  -->

<template>
  <v-app id="ErrorView">
    <div class="d-flex justify-center">
      <v-card min-width="300px">
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{ text }}</v-card-text>
        <v-card-actions>
          <v-btn :to="{ name: 'index' }">Homepage</v-btn>
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
    let text = 'Ein unbekannter Fehler trat auf.'

    if (this.error.statusCode === HTTP.NOT_FOUND) text = 'Diese Seite existiert nicht.'

    return text
  }
}
</script>

<!--
<style scoped>
</style>
-->
