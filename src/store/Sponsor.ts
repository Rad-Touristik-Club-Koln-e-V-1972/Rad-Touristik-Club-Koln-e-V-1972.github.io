import { defineStore } from 'pinia'
import SponsorBuilder from '~/models/builder/SponsorBuilder'
import Sponsor from '~/models/entities/Sponsor'

export const useSponsorStore = defineStore('sponsor', {
    getters: {
        all: (state): Sponsor[] => state.sponsors,
    },
    state: () => ({
        sponsors: [
            new SponsorBuilder().setImageUrl('content.rtc-koeln.de/pages/sponsor/Alpecin.svg').setUrl('www.alpecin.com/de-de/').build(),
            new SponsorBuilder().setImageUrl('content.rtc-koeln.de/pages/sponsor/Severin-Apotheke.gif').setUrl('www.severin-apotheke-koeln.de').build(),
            new SponsorBuilder().setImageUrl('content.rtc-koeln.de/pages/sponsor/Ineos.webp').setUrl('www.ineos.com/sports/cycling/').build(),
            new SponsorBuilder().setImageUrl('content.rtc-koeln.de/pages/sponsor/DextroEnergy.png').setUrl('www.dextro-energy.com').build(),
            new SponsorBuilder().setImageUrl('content.rtc-koeln.de/pages/sponsor/Garmin.svg').setUrl('www.garmin.com').build(),
            new SponsorBuilder().setImageUrl('content.rtc-koeln.de/pages/sponsor/RheinEnergie.svg').setUrl('www.rheinenergie.com').build(),
            new SponsorBuilder().setImageUrl('content.rtc-koeln.de/pages/sponsor/InnoBike.svg').setUrl('www.inno-bike.com').build(),
            new SponsorBuilder().setImageUrl('content.rtc-koeln.de/pages/sponsor/Ford.webp').setUrl('www.ford.de').build(),
            new SponsorBuilder().setImageUrl('content.rtc-koeln.de/pages/sponsor/Krombacher.svg').setUrl('www.krombacher.de').build(),
            new SponsorBuilder().setImageUrl('content.rtc-koeln.de/pages/sponsor/StoryImage.jpg').setUrl('www.storyimage.de').build(),
            new SponsorBuilder().setImageUrl('content.rtc-koeln.de/pages/sponsor/Sebamed.png').setUrl('shop.sebamed.de').build(),
            new SponsorBuilder().setImageUrl('content.rtc-koeln.de/pages/sponsor/RoadBike.jpg').setUrl('www.roadbike.de').build(),
            new SponsorBuilder().setImageUrl('content.rtc-koeln.de/pages/sponsor/RoseBikes.svg').setUrl('www.rosebikes.de').build(),
            new SponsorBuilder().setImageUrl('content.rtc-koeln.de/pages/sponsor/VolksbankKölnBonneG.jpg').setUrl('www.volksbank-koeln-bonn.de').build(),
            new SponsorBuilder().setImageUrl('content.rtc-koeln.de/pages/sponsor/ConneX.svg').setUrl('www.connexchain.com').build(),
        ],
    }),
})
