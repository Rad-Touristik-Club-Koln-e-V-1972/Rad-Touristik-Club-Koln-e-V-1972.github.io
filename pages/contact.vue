<template>
    <v-card id="ContactView" flat>
        <v-card-title class="text-body-1 text-sm-h6 text-md-h5 text-lg-h4 text-xl-h3">Kontakte</v-card-title>
        <v-card-subtitle class="text-body-2 text-sm-body-1 text-md-h6 text-lg-h5 text-xl-h4">Briefpost bitte immer an: RTC Köln, Postfach 990103, 51083 Köln</v-card-subtitle>
        <v-card-text>
            <v-row class="d-flex justify-center" dense>
                <v-col v-for="(item, index) in items" :key="index" cols="auto">
                    <c-contact :item="item" />
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import CContact from '@/components/page/CContact.vue'
import ContactBuilder from '@/models/builder/ContactBuilder'

export default defineComponent({
    name: 'ContactView',
    components: { CContact },
    setup() {
        return {
            items: [
                new ContactBuilder()
                    .description('Hier könnte seine Beschreibung stehen.')
                    .eMail('erster.vorsitzender@rtc-koeln.de')
                    .imageSrc('https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                    .name('Wolfgang Dünkelmann')
                    .position('Erster Vorsitzender')
                    .build(),
                new ContactBuilder()
                    .description('Hier könnte seine Beschreibung stehen.')
                    .eMail('erster.sportwart@rtc-koeln.de')
                    .imageSrc('https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                    .name('Klaus Dünkelmann')
                    .position('Erster Sportwart')
                    .build(),
                new ContactBuilder()
                    .description('Hier könnte seine Beschreibung stehen.')
                    .eMail('PR@rtc-koeln.de')
                    .imageSrc('https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                    .name('Diana Vialon')
                    .position('Pressewart')
                    .build(),
                new ContactBuilder()
                    .description('Hier könnte seine Beschreibung stehen.')
                    .eMail('geschaeftsfuehrung@rtc-koeln.de')
                    .imageSrc('https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                    .name('Burghild Liedtke')
                    .position('Geschäftsführung')
                    .build(),
                new ContactBuilder()
                    .description('Hier könnte seine Beschreibung stehen.')
                    .eMail('webmaster@rtc-koeln.de')
                    .imageSrc('https://www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                    .name('Martin Dünkelmann')
                    .position('Webmaster')
                    .build(),
            ],
        }
    },
})
</script>

<style lang="scss" scoped></style>
