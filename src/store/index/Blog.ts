import { defineStore } from 'pinia'
import BlogEntryBuilder from '~/models/builder/index/BlogEntryBuilder'
import BlogEntry from '~/models/entities/index/BlogEntry'

export const useBlogStore = defineStore('blog', {
    getters: {
        all: (state): BlogEntry[] => state.entries,
    },
    state: () => ({
        entries: [
            new BlogEntryBuilder()
                .albumIDs('4a0c9096-eeae-4bee-9eca-068e616feed4')
                .date('2022-09-25')
                .text(`Erste Herbsttour zu siebt nach Wahlscheid - Kilometer, Kalorien, Kaffee & Kuchen, 🚴‍♂️🚴🚴‍♀️🚴🚴‍♂️🚴‍♀️🚴🍰☕️`)
                .title('Herbsttour - Lohmar-Wahlscheid')
                .build(),
            new BlogEntryBuilder()
                .albumIDs('284dae72-4bf4-49fc-9ff1-a7b1263946f0')
                .date('2022-08-27')
                .text(
                    `Gezählte 11 RTCler haben die (endlich) angenehmen Temperaturen genutzt und sind die Strecken der RTF der GEW RheinEnergie gefahren.

Es war richtig schön als Gruppe zu fahren und der leichte Nieselregen war überhaupt nicht schlimm.
Witzig war der Rasensprenger, der uns eine zusätzliche kleine Abkühlung verschaffte. 💦
Aber es waren nur 175 TN am Start.
Wo ward ihr alle?

Ein herzliches Dankeschön an die Veranstalter der RTF RheinEnergie für die schönen Strecken und die gute Verpflegung. 👍

➡️ Aber das absolute ✨Highlight✨ auf dieser RTF war für uns, dass Jürgen nach seinem Unfall im Mai wieder Deine erste 70er gefahren ist.
Richtig toll, lieber Jürgen. 💪🚴`
                )
                .title('RTF GEW RheinEnergie')
                .build(),
            new BlogEntryBuilder()
                .albumIDs('fb982b9c-abf8-457c-b1f4-10b360bf235d')
                .date('2022-08-13', '2022-08-14')
                .text(
                    `Am Samstag richtete der Verein Bike & Ski St. Augustin und am Sonntag der Verein CITO Hennef ihre RTFs am selben Startplatz in Hennef aus.

Einige RTCler sind - neben leider nur etwa 500 TN insgesamt - an beiden Tagen angetreten, um bei gnadenloser Hitze die „Hennefer Radsporttage“ zu meistern.

Beide Strecken waren sehr schön und super ausgeschildert.
Die große Hitze (immer weit über 30 Grad) war anstrengend, aber umso leckerer war das alkoholfreie
Getränk im Ziel.

Ein herzliches Dankeschön geht unsererseits an beide Vereine.
👍👍 Wir kommen wieder.`
                )
                .title('RTF Hennefer Hitzetage')
                .build(),
        ],
    }),
})
