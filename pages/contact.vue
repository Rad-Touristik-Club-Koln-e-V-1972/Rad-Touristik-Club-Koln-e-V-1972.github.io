<template>
  <v-card flat>
    <v-card-title class="text-body-2 text-sm-body-1 text-md-h6 text-lg-h5 text-xl-h4" v-text="'Kontakte'" />
    <v-card-subtitle class="text-caption text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h5" v-text="'Briefpost bitte immer an: RTC Köln, Postfach 990103, 51083 Köln'" />
    <v-card-text>
      <v-row id="ContactView" dense>
        <v-col v-for="(item, index) in contactItems" :key="index">
          <c-contact :description="item.description" :e-mail="item.eMail" :image-src="item.imageSrc" :name="item.name" :position="item.position" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import CContact from '@/components/page/contact/CContact.vue'

export default defineComponent({
  components: { CContact },
  setup() {
    return {
      contactItems: [
        {
          description: 'Hier könnte seine Beschreibung stehen.',
          eMail: 'erster.vorsitzender@rtc-koeln.de',
          imageSrc: 'https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png',
          name: 'Wolfgang Dünkelmann',
          position: 'Erster Vorsitzender',
        },
        {
          description: 'Hier könnte seine Beschreibung stehen.',
          eMail: 'erster.sportwart@rtc-koeln.de',
          imageSrc: 'https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png',
          name: 'Klaus Dünkelmann',
          position: 'Erster Sportwart',
        },
        {
          description: 'Hier könnte seine Beschreibung stehen.',
          eMail: 'PR@rtc-koeln.de',
          imageSrc: 'https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png',
          name: 'Diana Vialon',
          position: 'Pressewart',
        },
        {
          description: 'Hier könnte seine Beschreibung stehen.',
          eMail: 'geschaeftsfuehrung@rtc-koeln.de',
          imageSrc: 'https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png',
          name: 'Burghild Liedtke',
          position: 'Geschäftsführung',
        },
        {
          description: 'Hier könnte seine Beschreibung stehen.',
          eMail: 'webmaster@rtc-koeln.de',
          imageSrc: 'https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png',
          name: 'Martin Dünkelmann',
          position: 'Webmaster',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped></style>
