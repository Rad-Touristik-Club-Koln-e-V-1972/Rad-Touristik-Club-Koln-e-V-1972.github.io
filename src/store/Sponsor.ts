import { defineStore } from 'pinia'
import SponsorBuilder from '~/models/builder/SponsorBuilder'
import Sponsor from '~/models/entities/Sponsor'

export const useSponsorStore = defineStore('sponsor', {
    getters: {
        all: (state): Sponsor[] => state.sponsors,
    },
    state: () => ({
        sponsors: [
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/Alpecin.svg').url('https://www.alpecin.com/de-de/').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/Severin-Apotheke.gif').url('https://www.severin-apotheke-koeln.de').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/Ineos.webp').url('https://www.ineos.com/sports/cycling/').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/DextroEnergy.png').url('https://www.dextro-energy.com').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/Garmin.svg').url('https://www.garmin.com').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/RheinEnergie.svg').url('https://www.rheinenergie.com').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/InnoBike.svg').url('https://www.inno-bike.com').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/Ford.webp').url('https://www.ford.de').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/Krombacher.svg').url('https://www.krombacher.de').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/StoryImage.jpg').url('https://www.storyimage.de').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/Sebamed.png').url('https://shop.sebamed.de').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/RoadBike.jpg').url('https://www.roadbike.de').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/RoseBikes.svg').url('https://www.rosebikes.de').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/VolksbankKölnBonneG.jpg').url('https://www.volksbank-koeln-bonn.de').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/ConneX.svg').url('https://www.connexchain.com').build(),
        ],
    }),
})
