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
                .albumIDs(['32ade59b-0ba1-47f5-b20e-54d872a9e524'])
                .date('2022-11-06')
                .text(
                    `Nach der RTF-Saison hat nun das Wintertraining für den RTC Köln begonnen.
An beiden Tagen trotzen wir - in unterschiedlichen Gruppen - den 10 Grad Celsius und fuhren samstags 90 km nach Rheinbach.
Dorthin lockte uns die Schwarzwälder Kirschtorte. 😋 Am Sonntag ging es nach Wahlscheid.
Dank einiger Höhenmeter ist es einem dann auch bei kühlen Temperaturen wohlig warm.
➡️ IHR SEID WILLKOMMEN!
Wenn ihr mal mit dem RTC Köln mitfahren möchtet (moderates Tempo), dann schreibt mir gerne ➡️ <a href="mailto:PR@rtc-koeln.de">PR@rtc-koeln.de</a> 😃`
                )
                .title('Wintertraining 2022')
                .build(),
            new BlogEntryBuilder()
                .albumIDs(['8db60fe5-0c25-4d78-b4af-d5bae1cc4bfb'])
                .date('2022-10-29')
                .text(
                    `Am 30.10. vor 50 Jahren gründeten 28 Radsportler den RTC Köln e.V. 🎉

Zu diesem Ehrentag organisierte der Vorstand - mit der Unterstützung von Ulla und Jutta - am 29.10.2022 einen schönes und würdiges Fest. 🥰

Der 1. Vorsitzende, Wolfgang Dünkelmann, führte kurzweilig durch den Abend. Wir begrüßten u.a. Gründungsmitglieder und den 1. Vorsitzenden des Radsportverbands Bezirk Köln/Bonn (BDR).
Es wurde historisch eingetaucht, vorgestellt, erzählt, geehrt (1. Dame: Burghild Liedtke, 1. Herr: Klaus Dünkelmann) lecker gegessen und getrunken sowie gelacht. 😃

Der RTC Köln e.V. hat mit dieser Abschlussveranstaltung sein Jubiläumsjahr würdig beendet. 🍾❤️
🤗 Danke an alle, die uns immer fleißig bei unseren Veranstaltungen unterstützen.️

Euer RTC Köln e.V. ☺️`
                )
                .title('RTC-Feier zum 50. Jubiläum')
                .build(),
            new BlogEntryBuilder()
                .albumIDs({ 'cda4c7e0-a266-44e4-923d-afe6dc11deb4': 'Start & Ziel' })
                .date('2022-10-22')
                .text(
                    `Bei schönstem Herbstwetter nahmen gestern ca. 170 Gravel- und MTB-Fahrer:innen Waldboden, Matsch und Laub bei der 7. Wahnbachtour unter die Reifen. Die Zufriedenheit der Teilnehmer:innen über die Strecken und die Verpflegung sieht man in den glücklichen Gesichtern. 😃

Wir bedanken uns herzlich beim RTA Lülsdorf für die tatkräftige Kooperation 👍 und beim Tennisverein Siegburger TV für die Location. 👍

Und nicht vergessen: Unsere nächste RTF - die Forsbachtour - steht Ende Mai 2023 an. 🚴‍♂️🚴
🚴‍♂️🚴🚴‍♀️🚴‍♂️🚴‍♀️🚴

Wir sehen uns. 😃

Euer RTC Köln e.V.`
                )
                .title('7. CTF')
                .build(),
            new BlogEntryBuilder()
                .albumIDs(['24a6d9c0-3d4c-4f48-8b6f-4a1ad4b338b7'])
                .date('2022-10-08')
                .text(
                    `Saisonabschluss beim VfR Büttgen:
500 RTFler:innen nutzen das eigentlich perfekte Herbstwetter, um noch einmal eine Runde mit Freunden zu drehen.
8 RTCler waren am Start. Anfangs ging uns die Luft aus, am Ende hatten wir aber noch genug Puste, um ein leckeres Altbier zu trinken.

Ein Highlight war die K1, die komplett vegan war und super leckere, selbst belegte Crêpes mit Hummus, Tomaten und Gurken anbot.
Mega! 😋

Ein großes Dankeschön an die Veranstalter, die uns eine so schöne Abschlusstour geboten haben. 🙏
Wir kommen nächstes Jahr wieder. 😘️`
                )
                .title('Saisonabschluss - VfR Büttgen')
                .build(),
            new BlogEntryBuilder()
                .albumIDs(['4a0c9096-eeae-4bee-9eca-068e616feed4'])
                .date('2022-09-25')
                .text('Erste Herbsttour zu siebt nach Wahlscheid - Kilometer, Kalorien, Kaffee & Kuchen, 🚴‍♂️🚴🚴‍♀️🚴🚴‍♂️🚴‍♀️🚴🍰☕️')
                .title('Herbsttour - Lohmar-Wahlscheid')
                .build(),
            new BlogEntryBuilder()
                .albumIDs(['284dae72-4bf4-49fc-9ff1-a7b1263946f0'])
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
                .albumIDs(['fb982b9c-abf8-457c-b1f4-10b360bf235d'])
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
