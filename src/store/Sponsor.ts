import { defineStore } from 'pinia'
import SponsorBuilder from '~/models/builder/SponsorBuilder'
import Sponsor from '~/models/entities/Sponsor'

export const useSponsorStore = defineStore('sponsor', {
    getters: {
        all: (state): Sponsor[] => state.sponsors,
    },
    state: () => ({
        sponsors: [
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/RheinEnergie.svg').url('https://www.rheinenergie.com').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/Volksbank_Köln_Bonn_eG.jpg').url('https://www.volksbank-koeln-bonn.de').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/dm-drogerie_markt_GmbH_+_Co._KG.jpg').url('https://www.dm.de').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/Auto_Laukat_KG.jpg').url('https://www.laukat.de').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/Radio_Meller_GmbH.jpg').url('https://www.euronics.de/K%C3%B6ln-meller/ueber-uns').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/Autohaus_Ulmer.jpg').url('https://www.autohaus-ulmer.de').build(),
            new SponsorBuilder().imageSrc('https://content.rtc-koeln.de/pages/sponsor/Mühlhäuser.jpg').url('https://www.muehlhaeuser.biz').build(),
            new SponsorBuilder().text('Gisbert Reinhold Objektbeschriftung Industrie- und Werbeschilder').build(),
            new SponsorBuilder().text('Auch all denjenigen, die um Diskretion gebeten haben, sind wir sehr verbunden!').build(),
        ],
    }),
})
