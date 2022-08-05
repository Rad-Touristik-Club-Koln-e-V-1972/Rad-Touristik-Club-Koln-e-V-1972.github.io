import { defineStore } from 'pinia'
import SponsorBuilder from '~/models/builder/SponsorBuilder'
import Sponsor from '~/models/entities/Sponsor'

export const useSponsorStore = defineStore('sponsor', {
    getters: {
        all: (state): Sponsor[] => state.sponsors,
    },
    state: () => ({
        sponsors: [
            new SponsorBuilder().imageUrl('content.rtc-koeln.de/pages/sponsor/Alpecin.svg').url('www.alpecin.com/de-de/').build(),
            new SponsorBuilder().imageUrl('content.rtc-koeln.de/pages/sponsor/Severin-Apotheke.gif').url('www.severin-apotheke-koeln.de').build(),
            new SponsorBuilder().imageUrl('content.rtc-koeln.de/pages/sponsor/Ineos.webp').url('www.ineos.com/sports/cycling/').build(),
            new SponsorBuilder().imageUrl('content.rtc-koeln.de/pages/sponsor/DextroEnergy.png').url('www.dextro-energy.com').build(),
            new SponsorBuilder().imageUrl('content.rtc-koeln.de/pages/sponsor/Garmin.svg').url('www.garmin.com').build(),
            new SponsorBuilder().imageUrl('content.rtc-koeln.de/pages/sponsor/RheinEnergie.svg').url('www.rheinenergie.com').build(),
            new SponsorBuilder().imageUrl('content.rtc-koeln.de/pages/sponsor/InnoBike.svg').url('www.inno-bike.com').build(),
            new SponsorBuilder().imageUrl('content.rtc-koeln.de/pages/sponsor/Ford.webp').url('www.ford.de').build(),
            new SponsorBuilder().imageUrl('content.rtc-koeln.de/pages/sponsor/Krombacher.svg').url('www.krombacher.de').build(),
            new SponsorBuilder().imageUrl('content.rtc-koeln.de/pages/sponsor/StoryImage.jpg').url('www.storyimage.de').build(),
            new SponsorBuilder().imageUrl('content.rtc-koeln.de/pages/sponsor/Sebamed.png').url('shop.sebamed.de').build(),
            new SponsorBuilder().imageUrl('content.rtc-koeln.de/pages/sponsor/RoadBike.jpg').url('www.roadbike.de').build(),
            new SponsorBuilder().imageUrl('content.rtc-koeln.de/pages/sponsor/RoseBikes.svg').url('www.rosebikes.de').build(),
            new SponsorBuilder().imageUrl('content.rtc-koeln.de/pages/sponsor/VolksbankKölnBonneG.jpg').url('www.volksbank-koeln-bonn.de').build(),
            new SponsorBuilder().imageUrl('content.rtc-koeln.de/pages/sponsor/ConneX.svg').url('www.connexchain.com').build(),
        ],
    }),
})
