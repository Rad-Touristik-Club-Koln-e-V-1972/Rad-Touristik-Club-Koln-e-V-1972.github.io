<template>
  <v-tabs id="CNavigationTabs" :prev-icon="icons.mdiChevronLeft" :next-icon="icons.mdiChevronRight" :show-arrows="$vuetify.breakpoint.mobile" align-with-title>
    <v-tab v-for="(item, index) in items" :key="index" :to="item.to" exact nuxt v-text="item.title" />
  </v-tabs>
</template>

<script lang="ts">
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {
      icons: {
        mdiChevronLeft,
        mdiChevronRight,
      },
      items: [
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
          to: { name: 'contact' },
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
