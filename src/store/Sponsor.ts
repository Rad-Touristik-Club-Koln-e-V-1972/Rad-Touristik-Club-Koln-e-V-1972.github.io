import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import SponsorBuilder from '~/models/builder/SponsorBuilder'
import Sponsor from '~/models/entities/Sponsor'

export default defineStore('sponsor', () => {
    const sponsors = ref<Sponsor[]>([
        new SponsorBuilder().setId('08ba12dc-1ff3-4441-8146-c59ac929e8a6').setImageUrl('content.rtc-koeln.de/pages/sponsor/Alpecin.svg').setUrl('www.alpecin.com/de-de/').build(),
        new SponsorBuilder().setId('fe512d84-b4df-434a-8cde-ef6b240022a4').setImageUrl('content.rtc-koeln.de/pages/sponsor/ConneX.svg').setUrl('www.connexchain.com').build(),
        new SponsorBuilder()
            .setId('5e644906-a8f6-4e30-8b2f-645216b587d8')
            .setImageUrl('content.rtc-koeln.de/pages/sponsor/FlughafenKölnBonnGmbH.svg')
            .setUrl('www.koeln-bonn-airport.de')
            .build(),
        new SponsorBuilder().setId('ce3f1eeb-7f0c-4ec0-b72c-0a7c68372091').setImageUrl('content.rtc-koeln.de/pages/sponsor/Garmin.svg').setUrl('www.garmin.com').build(),
        new SponsorBuilder()
            .setId('47765892-cb78-4898-a9c7-1f61a19b4284')
            .setImageUrl('content.rtc-koeln.de/pages/sponsor/Ineos.webp')
            .setUrl('www.ineos.com/sports/cycling/')
            .build(),
        new SponsorBuilder().setId('1bf98410-d65d-4d9d-8594-c7b0c1d62e17').setImageUrl('content.rtc-koeln.de/pages/sponsor/InnoBike.svg').setUrl('www.inno-bike.com').build(),
        new SponsorBuilder().setId('be2af297-0cc1-49d6-bfd4-1a16062fb8b0').setImageUrl('content.rtc-koeln.de/pages/sponsor/Krombacher.svg').setUrl('www.krombacher.de').build(),
        new SponsorBuilder()
            .setId('247e0334-aec4-408c-9637-2889b1e65998')
            .setImageUrl('content.rtc-koeln.de/pages/sponsor/RheinEnergie.svg')
            .setUrl('www.rheinenergie.com')
            .build(),
        new SponsorBuilder().setId('748dc3ab-a086-46f2-a754-8d950f7aef9b').setImageUrl('content.rtc-koeln.de/pages/sponsor/RoseBikes.svg').setUrl('www.rosebikes.de').build(),
        new SponsorBuilder().setId('3539bfeb-5ed9-46cc-8678-ffeceb4a0d72').setImageUrl('content.rtc-koeln.de/pages/sponsor/Sebamed.jpg').setUrl('shop.sebamed.de').build(),
        new SponsorBuilder()
            .setId('011d89ca-8ed8-45d3-b625-df376d6931d5')
            .setImageUrl('content.rtc-koeln.de/pages/sponsor/VolksbankKölnBonneG_RGB.svg')
            .setUrl('www.volksbank-koeln-bonn.de')
            .build(),
    ])

    const all = computed(() => sponsors.value)

    return { all }
})
