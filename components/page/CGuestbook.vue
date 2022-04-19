<template>
  <v-card id="CGuestbook" :max-width="getWidth" :min-width="getWidth / 2">
    <v-card-subtitle class="text-subtitle-2 text-md-subtitle-1 text-lg-h6" v-text="`${props.item.date}, ${props.item.name}, ${Source[props.item.source]}`" />
    <v-divider />
    <v-card-title class="text-subtitle-1 text-md-h6 text-lg-h5" v-text="props.item.title" />
    <v-card-text>
      <v-textarea class="text-caption text-md-body-2 text-lg-body-1" :value="props.item.text" flat readonly />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { mdiChevronDown, mdiChevronUp, mdiEmailSend } from '@mdi/js'
import { defineComponent } from '@nuxtjs/composition-api'
import Guestbook from '@/models/Guestbook'
import Source from '@/models/enums/guestbook/Source'

export default defineComponent({
  props: {
    item: { required: true, type: Guestbook },
  },
  setup(props) {
    return {
      icons: {
        mdiChevronDown,
        mdiChevronUp,
        mdiEmailSend,
      },
      props,
      showText: false,
      Source,
    }
  },
  computed: {
    getWidth(): number {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm':
          return 600 - 107
        case 'md':
          return 960 - 107
        case 'lg':
          return 1264 - 107
        case 'xl':
          return 1904 - 107
        default:
          return 360 - 107
      }
    },
  },
})
</script>

<style lang="scss" scoped></style>
