<template>
  <v-card id="ContactView" flat>
    <v-card-title class="text-body-1 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h3" v-text="'Kontakte'" />
    <v-card-subtitle class="text-body-2 text-sm-body-1 text-md-h6 text-lg-h5 text-xl-h4" v-text="'Briefpost bitte immer an: RTC Köln, Postfach 990103, 51083 Köln'" />
    <v-card-text>
      <v-row dense>
        <v-col v-for="(item, index) in items" :key="index" :cols="getCols">
          <c-contact :item="item" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import CContact from '@/components/page/CContact.vue'
import Contact from '@/models/entities/Contact'

export default defineComponent({
  components: { CContact },
  setup() {
    return {
      items: [
        new Contact(
          'Hier könnte seine Beschreibung stehen.',
          'erster.vorsitzender@rtc-koeln.de',
          'https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png',
          'Wolfgang Dünkelmann',
          'Erster Vorsitzender'
        ),
        new Contact(
          'Hier könnte seine Beschreibung stehen.',
          'erster.sportwart@rtc-koeln.de',
          'https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png',
          'Klaus Dünkelmann',
          'Erster Sportwart'
        ),
        new Contact(
          'Hier könnte seine Beschreibung stehen.',
          'PR@rtc-koeln.de',
          'https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png',
          'Diana Vialon',
          'Pressewart'
        ),
        new Contact(
          'Hier könnte seine Beschreibung stehen.',
          'geschaeftsfuehrung@rtc-koeln.de',
          'https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png',
          'Burghild Liedtke',
          'Geschäftsführung'
        ),
        new Contact(
          'Hier könnte seine Beschreibung stehen.',
          'webmaster@rtc-koeln.de',
          'https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png',
          'Martin Dünkelmann',
          'Webmaster'
        ),
      ],
    }
  },
  computed: {
    getCols(): number {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm':
          return 6
        case 'md':
          return 5
        case 'lg':
          return 3
        case 'xl':
          return 2
        default:
          return 12
      }
    },
  },
})
</script>

<style lang="scss" scoped></style>
