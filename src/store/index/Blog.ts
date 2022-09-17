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
                .albumIDs('fb982b9c-abf8-457c-b1f4-10b360bf235d')
                .date('2022-08-13', '2022-08-14')
                .text(
                    `Am Samstag richtete der Verein Bike & Ski St. Augustin und am Sonntag der Verein CITO Hennef ihre RTFs am selben Startplatz in Hennef aus.

Einige RTCler sind - neben leider nur etwa 500 TN insgesamt - an beiden Tagen angetreten, um bei gnadenloser Hitze die „Hennefer Radsporttage“ zu meistern.

Beide Strecken waren sehr schön und super ausgeschildert.
Die große Hitze (immer weit über 30 Grad) war anstrengend, aber umso leckerer war das alkoholfreie
Getränk im Ziel.

Ein herzliches Dankeschön geht unsererseits an beide Vereine.
👍👍 Wir kommen wieder.
`
                )
                .title('RTF GEW RheinEnergie')
                .build(),
        ],
    }),
})
