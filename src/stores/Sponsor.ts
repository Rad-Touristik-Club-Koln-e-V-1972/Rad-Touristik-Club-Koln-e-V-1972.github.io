import { ref } from 'vue'
import { defineStore } from 'pinia'
import SponsorBuilder from 'src/models/builder/SponsorBuilder'
import Sponsor from 'src/models/entities/Sponsor'

export default defineStore('sponsor', () => {
  return {
    all: ref<Sponsor[]>([
      new SponsorBuilder().setId('fe512d84-b4df-434a-8cde-ef6b240022a4').setImageUrl('content.rtc-koeln.de/pages/sponsor/ConneX.svg').setUrl('www.connexchain.com').buildSponsor(),
      new SponsorBuilder().setId('5e644906-a8f6-4e30-8b2f-645216b587d8').setImageUrl('content.rtc-koeln.de/pages/sponsor/FlughafenKölnBonnGmbH.svg').setUrl('www.koeln-bonn-airport.de').buildSponsor(),
      new SponsorBuilder().setId('be2af297-0cc1-49d6-bfd4-1a16062fb8b0').setImageUrl('content.rtc-koeln.de/pages/sponsor/Krombacher.svg').setUrl('www.krombacher.de').buildSponsor(),
      new SponsorBuilder().setId('3539bfeb-5ed9-46cc-8678-ffeceb4a0d72').setImageUrl('content.rtc-koeln.de/pages/sponsor/Sebamed.jpg').setUrl('shop.sebamed.de').buildSponsor(),
      new SponsorBuilder().setId('011d89ca-8ed8-45d3-b625-df376d6931d5').setImageUrl('content.rtc-koeln.de/pages/sponsor/VolksbankKölnBonneG_RGB.svg').setUrl('www.volksbank-koeln-bonn.de').buildSponsor(),
    ]),
  }
})
