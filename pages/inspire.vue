<template>
  <v-row id="InspireView">
    <v-col class="text-center">
      <img alt="Vuetify.js" class="mb-5" src="/v.png" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class InspireView extends Vue {}
</script>

<!--
<style scoped>
</style>
-->
