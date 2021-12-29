<template>
  <v-app id="ErrorView" dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page</NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Error from '~/entity/Error'

@Component
export default class ErrorView extends Vue {
  @Prop({ default: { statusCode: Number } }) readonly error?: Error

  layout = 'empty'

  otherError = 'An error occurred'
  pageNotFound = '404 Not Found'

  head() {
    const title = this.error?.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
