<template>
  <v-row id="ContactView" dense>
    <v-col v-for="(item, index) in contactItems" :key="index">
      <c-contact :description="item.description" :e-mail="item.eMail" :image-src="item.imageSrc" :name="item.name" :position="item.position" />
    </v-col>
  </v-row>
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
