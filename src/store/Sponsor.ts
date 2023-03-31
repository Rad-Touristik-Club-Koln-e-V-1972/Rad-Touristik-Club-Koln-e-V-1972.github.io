import { defineStore } from 'pinia'
import SponsorBuilder from '~/models/builder/SponsorBuilder'
import Sponsor from '~/models/entities/Sponsor'

export const useSponsorStore = defineStore('sponsor', {
    getters: {
        all: (state): Sponsor[] => state.sponsors,
    },
    state: () => ({
        sponsors: [
            // TODO Offline durch "setText" bis Genehmigung eingeholt wurde
            new SponsorBuilder()
                .setId('08ba12dc-1ff3-4441-8146-c59ac929e8a6')
                .setImageUrl('content.rtc-koeln.de/pages/sponsor/Alpecin.svg')
                .setUrl('www.alpecin.com/de-de/')
                .build(),
            new SponsorBuilder().setId('fe512d84-b4df-434a-8cde-ef6b240022a4').setImageUrl('content.rtc-koeln.de/pages/sponsor/ConneX.svg').setUrl('www.connexchain.com').build(),
            new SponsorBuilder()
                .setId('f17dfdeb-b949-41cc-9230-b558bcc41760')
                .setImageUrl('content.rtc-koeln.de/pages/sponsor/DextroEnergy.png')
                .setText('Dextro Energy')
                .setUrl('www.dextro-energy.com')
                .build(),
            new SponsorBuilder()
                .setId('5e644906-a8f6-4e30-8b2f-645216b587d8')
                .setImageUrl('content.rtc-koeln.de/pages/sponsor/FlughafenKölnBonnGmbH.svg')
                .setUrl('www.koeln-bonn-airport.de')
                .build(),
            new SponsorBuilder()
                .setId('cf95576c-6bb4-407d-ba63-41673566a249')
                .setImageUrl('content.rtc-koeln.de/pages/sponsor/Ford.webp')
                .setText('Ford')
                .setUrl('www.ford.de')
                .build(),
            new SponsorBuilder()
                .setId('ce3f1eeb-7f0c-4ec0-b72c-0a7c68372091')
                .setImageUrl('content.rtc-koeln.de/pages/sponsor/Garmin.svg')
                .setText('Garmin')
                .setUrl('www.garmin.com')
                .build(),
            new SponsorBuilder()
                .setId('47765892-cb78-4898-a9c7-1f61a19b4284')
                .setImageUrl('content.rtc-koeln.de/pages/sponsor/Ineos.webp')
                .setText('Ineos')
                .setUrl('www.ineos.com/sports/cycling/')
                .build(),
            new SponsorBuilder().setId('1bf98410-d65d-4d9d-8594-c7b0c1d62e17').setImageUrl('content.rtc-koeln.de/pages/sponsor/InnoBike.svg').setUrl('www.inno-bike.com').build(),
            new SponsorBuilder()
                .setId('be2af297-0cc1-49d6-bfd4-1a16062fb8b0')
                .setImageUrl('content.rtc-koeln.de/pages/sponsor/Krombacher.svg')
                .setText('Krombacher')
                .setUrl('www.krombacher.de')
                .build(),
            new SponsorBuilder()
                .setId('247e0334-aec4-408c-9637-2889b1e65998')
                .setImageUrl('content.rtc-koeln.de/pages/sponsor/RheinEnergie.svg')
                .setUrl('www.rheinenergie.com')
                .build(),
            new SponsorBuilder()
                .setId('ef52759c-48ec-42d9-91e4-0dc56c4ef646')
                .setImageUrl('content.rtc-koeln.de/pages/sponsor/RoadBike.jpg')
                .setText('Roadbike')
                .setUrl('www.roadbike.de')
                .build(),
            new SponsorBuilder()
                .setId('748dc3ab-a086-46f2-a754-8d950f7aef9b')
                .setImageUrl('content.rtc-koeln.de/pages/sponsor/RoseBikes.svg')
                .setText('Rose Bikes')
                .setUrl('www.rosebikes.de')
                .build(),
            new SponsorBuilder().setId('3539bfeb-5ed9-46cc-8678-ffeceb4a0d72').setImageUrl('content.rtc-koeln.de/pages/sponsor/Sebamed.jpg').setUrl('shop.sebamed.de').build(),
            new SponsorBuilder()
                .setId('6b9af4ec-e138-41f8-bb82-c40be19c329f')
                .setImageUrl('content.rtc-koeln.de/pages/sponsor/Severin-Apotheke.gif')
                .setText('Severin-Apotheke')
                .setUrl('www.severin-apotheke-koeln.de')
                .build(),
            new SponsorBuilder()
                .setId('011d89ca-8ed8-45d3-b625-df376d6931d5')
                .setImageUrl('content.rtc-koeln.de/pages/sponsor/VolksbankKölnBonneG.jpg')
                .setUrl('www.volksbank-koeln-bonn.de')
                .build(),
        ],
    }),
})
