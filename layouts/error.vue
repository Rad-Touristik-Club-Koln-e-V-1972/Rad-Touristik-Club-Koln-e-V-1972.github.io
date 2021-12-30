<!--
  - Created by Martin Dünkelmann on 30.12.21, 23:21
  - Copyright (c) 2021. All rights reserved.
  -
  - Last modified 30.12.21, 23:21
  -->

<template>
  <v-app id="Error">
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
import HTTP from '~/models/enums/HTTP'

@Component
export default class Error extends Vue.extend({
  props: {
    error: { default: null, type: Object },
  },
}) {
  title = `Fehlercode ${this.error.statusCode}`

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
