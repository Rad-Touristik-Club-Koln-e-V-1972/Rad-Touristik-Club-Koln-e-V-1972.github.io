<template>
  <v-tabs :show-arrows="$vuetify.breakpoint.mobile" align-with-title>
    <v-tab v-for="(item, index) in navigationItems" :key="index" :to="item.to" exact nuxt v-text="item.title" />
  </v-tabs>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  emits: ['input'],
  setup() {
    return {
      navigationItems: [
        {
          title: 'Startseite',
          to: { name: 'index' },
        },
        {
          title: 'Über uns',
          to: { name: 'index' },
        },
        {
          title: 'Kontakt',
          to: { name: 'index' },
        },
        {
          title: 'RTF/CTF',
          to: { name: 'index' },
        },
        {
          title: 'Galerie',
          to: { name: 'index' },
        },
        {
          title: 'Touren-Tipps',
          to: { name: 'index' },
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped></style>
