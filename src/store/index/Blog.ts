import { defineStore } from 'pinia'
import BlogEntryBuilder from '~/models/builder/index/BlogEntryBuilder'
import BlogEntry from '~/models/entities/index/BlogEntry'

export const useBlogStore = defineStore('blog', {
    getters: {
        all: (state): BlogEntry[] => state.entries,
    },
    state: () => {
        return {
            entries: [
                new BlogEntryBuilder()
                    .setAlbumIDs(['ac7d6f63-20c4-4088-ab8e-2c7030c9fd44'])
                    .setDate('2023-02-11')
                    .setId('b1d7767f-5865-4e04-b9b9-c9581bfbce0e')
                    .setText(
                        `Wolfgang nutzte wiederum die CTF-Veranstaltung „Jeck im Dreck“ 🤡von Cito Hennef, um zu trainieren.
  In dieser großen Gruppe hat es ihn heute richtig Spaß gemacht.
  Trotz des feuchtkalten Wetters hatten sich über 180 Graveler und Mountainbiker aufgemacht.
  Die Hennefer hätten mehr Teilnehmer:innen verdient gehabt, denn es war richtig klasse.
  Ein großes Lob an Cito Hennef für die tolle Strecke. 👍`
                    )
                    .setTitle('😃 RTC GOES CTF️')
                    .build(),
                new BlogEntryBuilder()
                    .setAlbumIDs(['4d6e43a0-3923-4c94-a60d-d7c2dda20905'])
                    .setDate('2023-02-11')
                    .setId('3a662aa0-2add-463d-9016-421688c701a4')
                    .setText(
                        `Schön war’s, ein echt toller Trainingstag. 👍🚴‍♀️
Wir fuhren „Alberts Strecke“.
Das bedeutete: 80 statt 60 km 😳😃, aber der 20er Schnitt blieb.
Es ging in die Voreifel mit einem Aufwärmkaffee (und anderen Kalorien) in Heimerzheim.
😄 Danke,Albert, dass Du uns gefordert hast. Hat Spaß gemacht.`
                    )
                    .setTitle('Wintertraining d‘Albert')
                    .build(),
                new BlogEntryBuilder()
                    .setAlbumIDs(['7626953c-6efa-44f8-af4b-29cbf1e408f0'])
                    .setDate('2023-02-04')
                    .setId('96fc29f0-edcc-4ea9-b336-2e0fa44d64a2')
                    .setText(
                        `Der Wettergott ließ uns länger im Unsicheren: Regnet es oder nicht? Sind die Straßen trocken oder nicht?
  Das Wetter war letztendlich mit seinen 9 Grad perfekt für eine Winterausfahrt nach Heimerzheim — so waren wir heute sogar zu siebt. 😃
  Das hat total Spaß gemacht in der Gruppe. 🎉
  Es wurden für die meisten von uns 60 km.
  Bis auf Frank: Er hatte am Ende sogar 105 km auf dem Tacho. 🙌👍`
                    )
                    .setTitle('Kurzentschlossene RTCler 🚴🚴‍♀️🚴‍♂️🚴🚴‍♀️🚴🚴‍♀️')
                    .build(),
                new BlogEntryBuilder()
                    .setAlbumIDs(['c8136f59-6fea-468d-914d-31a828e1a184'])
                    .setDate('2023-01-22')
                    .setId('0b9009fd-1aa7-45e9-ad25-3ddc4804e83f')
                    .setText(
                        `Richtige Radsportler:innen lassen sich von nichts stoppen.
  So auch nicht Burghild vom RTC Köln.
  „Ich habe heute die BDR-App erfolgreich getestet“, schreibt sie den restlichen RTClern fröhlich in den Chat, die aufgrund des Wetters lieber die Räder putzen, statt sie zu benutzen.
  Für Burghild ist die „Westfalen-Winterbike-Trophy“ einfach Kult.
  Und gestern, beim 3. Lauf 2023 in Waltrop, war bei -1 Grad und Schneefall jede Menge los.
  Den insgesamt 505 Teilnehmer:innen - mit MTB / Crosser / Gravelbike etc. - wurden tolle Strecken über Wald- und Feldwege, Halden mit fiesen Rampen und eine perfekte Orga vom RC Sprinter Waltrop geboten.
  Ihr Fazit: „Hat sehr viel Spaß gemacht und das Rad ist auch wieder sauber geworden!“

  Toll gemacht, Burghild! Starke Leistung. 💪`
                    )
                    .setTitle('Sonntag, Schnee, Kälte')
                    .build(),
                new BlogEntryBuilder()
                    .setAlbumIDs(['52c09122-f041-4b5b-8ae1-a581ccf77dd4'])
                    .setDate('2023-01-19')
                    .setId('1bd8a011-6259-45b5-b98f-1b6e35cf9302')
                    .setText(
                        `Ehre wem Ehre gebührt:

  Manfred Marquardt hat vor 50 Jahren mit seinen Sportfreunden den traditionsreichen Breitensportverein „RTC Köln e.V.“ gegründet.
  Aus diesem Anlass überreichte ihm Wolfgang Dünkelmann, 1. Vorsitzender des RTC Köln, am 19.1.2023 die Urkunde und die Ehrennadel für langjährige Mitgliedschaft beim Bund Deutscher Radfahrer (BDR).
  Manfred Marquardt ist ein Pionier der Breitensportszene, denn bis zur Gründung des RTC Köln gab es nur Rennrad-Vereine, die sich auf Rennen – und nicht auf den Breitensport – konzentriert hatten.

  Aber auch Manfreds Frau, Hanni Marquardt, wurde für ihre 40-jährige Mitgliedschaft beim BDR geehrt und erhielt von Wolfgang Dünkelmann die Urkunde sowie die BDR-Ehrennadel überreicht.

  Der RTC Köln e.V. dankt Hanni und Manfred Marquardt für diese Treue und ihren Pioniergeist.`
                    )
                    .setTitle('Ehrung Manfred & Hanni Marquardt')
                    .build(),
                new BlogEntryBuilder()
                    .setAlbumIDs(['bd6f7533-efaa-45f9-895f-11a419363bfa'])
                    .setDate('2023-01-07')
                    .setId('2e7d82d3-8554-4a1b-9a15-0f8bd0c556e9')
                    .setText(
                        `😊 Es ist erst der 7. Januar und einige vom RTC Köln haben schon 180 km auf dem Tacho.
  😃 Das Wetter muss man einfach ausnutzen. 🚴‍♀️🚴‍♂️🚴🚴‍♂️🚴‍♀️🚴‍♂️
  Unser Wintertraining führte uns heute nach Heimerzheim.
  Nach einer Pause im Café ging es über Metternich und Rösberg zurück.
  Nach 60 km waren wir wieder glücklich zu Hause.
  🆕 ➡️ Sobald wir eine Ausfahrt machen, kündigen wir sie jetzt immer hier an.
  Kommt und fahrt mit dem RTC Köln e.V.!
  Wir freuen uns auf Euch. 😊`
                    )
                    .setTitle('Wintertraining 2023')
                    .build(),
                new BlogEntryBuilder()
                    .setAlbumIDs(['f3f172c2-e6f3-4fbd-beaf-8ca4c69b126b'])
                    .setDate('2023-01-01')
                    .setId('96fe73e9-a867-4730-8bf1-4aa009bb1fba')
                    .setText(
                        `🎉 8 RTCler:innen haben das neue Jahr mit einer gemeinsamen Ausfahrt begrüßt.

  Bei milden 14 Grad Celsius ging es von der - unter Radsportlern bekannten - Schmitzebud ins Bergische Land und zurück,
  wo wir uns, nach dem 1. Platten des Jahres eine kleine gemeinsame Auszeit genommen hatten.

  Ein schöner sportlicher Start ins neue Jahr.
  🚴‍♀️🚴‍♂️🚴🚴‍♂️🚴‍♀️🚴🚴‍♀️🚴‍♂️`
                    )
                    .setTitle('Erste Ausfahrt 2023')
                    .build(),
                new BlogEntryBuilder()
                    .setAlbumIDs(['32ade59b-0ba1-47f5-b20e-54d872a9e524'])
                    .setDate('2022-11-06')
                    .setId('c8957c03-0b01-49bc-9ec7-cf5517a0e1c7')
                    .setText(
                        `Nach der RTF-Saison hat nun das Wintertraining für den RTC Köln begonnen.
  An beiden Tagen trotzen wir - in unterschiedlichen Gruppen - den 10 Grad Celsius und fuhren samstags 90 km nach Rheinbach.
  Dorthin lockte uns die Schwarzwälder Kirschtorte. 😋 Am Sonntag ging es nach Wahlscheid.
  Dank einiger Höhenmeter ist es einem dann auch bei kühlen Temperaturen wohlig warm.
  ➡️ IHR SEID WILLKOMMEN!
  Wenn ihr mal mit dem RTC Köln mitfahren möchtet (moderates Tempo), dann schreibt mir gerne ➡️ <a href='mailto:PR@rtc-koeln.de'>PR@rtc-koeln.de</a> 😃`
                    )
                    .setTitle('Wintertraining 2022')
                    .build(),
                new BlogEntryBuilder()
                    .setAlbumIDs(['8db60fe5-0c25-4d78-b4af-d5bae1cc4bfb'])
                    .setDate('2022-10-29')
                    .setId('212a59b7-a3da-40dd-98e7-c26085491eb9')
                    .setText(
                        `Am 30.10. vor 50 Jahren gründeten 28 Radsportler den RTC Köln e.V. 🎉

  Zu diesem Ehrentag organisierte der Vorstand - mit der Unterstützung von Ulla und Jutta - am 29.10.2022 einen schönes und würdiges Fest. 🥰

  Der 1. Vorsitzende, Wolfgang Dünkelmann, führte kurzweilig durch den Abend. Wir begrüßten u.a. Gründungsmitglieder und den 1. Vorsitzenden des Radsportverbands Bezirk Köln/Bonn (BDR).
  Es wurde historisch eingetaucht, vorgestellt, erzählt, geehrt (1. Dame: Burghild Liedtke, 1. Herr: Klaus Dünkelmann) lecker gegessen und getrunken sowie gelacht. 😃

  Der RTC Köln e.V. hat mit dieser Abschlussveranstaltung sein Jubiläumsjahr würdig beendet. 🍾❤️
  🤗 Danke an alle, die uns immer fleißig bei unseren Veranstaltungen unterstützen.️

  Euer RTC Köln e.V. ☺️`
                    )
                    .setTitle('RTC-Feier zum 50. Jubiläum')
                    .build(),
                new BlogEntryBuilder()
                    .setAlbumIDs({ 'cda4c7e0-a266-44e4-923d-afe6dc11deb4': 'Start & Ziel' })
                    .setDate('2022-10-22')
                    .setId('9ccb4f29-bc89-4fe0-a6a9-7cee2b46e410')
                    .setText(
                        `Bei schönstem Herbstwetter nahmen gestern ca. 170 Gravel- und MTB-Fahrer:innen Waldboden, Matsch und Laub bei der 7. Wahnbachtour unter die Reifen. Die Zufriedenheit der Teilnehmer:innen über die Strecken und die Verpflegung sieht man in den glücklichen Gesichtern. 😃

  Wir bedanken uns herzlich beim RTA Lülsdorf für die tatkräftige Kooperation 👍 und beim Tennisverein Siegburger TV für die Location. 👍

  Und nicht vergessen: Unsere nächste RTF - die Forsbachtour - steht Ende Mai 2023 an. 🚴‍♂️🚴
  🚴‍♂️🚴🚴‍♀️🚴‍♂️🚴‍♀️🚴

  Wir sehen uns. 😃

  Euer RTC Köln e.V.`
                    )
                    .setTitle('7. CTF')
                    .build(),
                new BlogEntryBuilder()
                    .setAlbumIDs(['24a6d9c0-3d4c-4f48-8b6f-4a1ad4b338b7'])
                    .setDate('2022-10-08')
                    .setId('03bf5272-12f4-4b5e-8ff7-2131f21a35c7')
                    .setText(
                        `Saisonabschluss beim VfR Büttgen:
  500 RTFler:innen nutzen das eigentlich perfekte Herbstwetter, um noch einmal eine Runde mit Freunden zu drehen.
  8 RTCler waren am Start. Anfangs ging uns die Luft aus, am Ende hatten wir aber noch genug Puste, um ein leckeres Altbier zu trinken.

  Ein Highlight war die K1, die komplett vegan war und super leckere, selbst belegte Crêpes mit Hummus, Tomaten und Gurken anbot.
  Mega! 😋

  Ein großes Dankeschön an die Veranstalter, die uns eine so schöne Abschlusstour geboten haben. 🙏
  Wir kommen nächstes Jahr wieder. 😘️`
                    )
                    .setTitle('Saisonabschluss - VfR Büttgen')
                    .build(),
                new BlogEntryBuilder()
                    .setAlbumIDs(['4a0c9096-eeae-4bee-9eca-068e616feed4'])
                    .setDate('2022-09-25')
                    .setId('b36dd179-6525-4877-978e-5ecdc44dfa54')
                    .setText('Erste Herbsttour zu siebt nach Wahlscheid - Kilometer, Kalorien, Kaffee & Kuchen, 🚴‍♂️🚴🚴‍♀️🚴🚴‍♂️🚴‍♀️🚴🍰☕️')
                    .setTitle('Herbsttour - Lohmar-Wahlscheid')
                    .build(),
                new BlogEntryBuilder()
                    .setAlbumIDs(['284dae72-4bf4-49fc-9ff1-a7b1263946f0'])
                    .setDate('2022-08-27')
                    .setId('6c9fce9d-3964-4106-be9a-4e2296051b07')
                    .setText(
                        `Gezählte 11 RTCler haben die (endlich) angenehmen Temperaturen genutzt und sind die Strecken der RTF der GEW RheinEnergie gefahren.

  Es war richtig schön als Gruppe zu fahren und der leichte Nieselregen war überhaupt nicht schlimm.
  Witzig war der Rasensprenger, der uns eine zusätzliche kleine Abkühlung verschaffte. 💦
  Aber es waren nur 175 TN am Start.
  Wo ward ihr alle?

  Ein herzliches Dankeschön an die Veranstalter der RTF RheinEnergie für die schönen Strecken und die gute Verpflegung. 👍

  ➡️ Aber das absolute ✨Highlight✨ auf dieser RTF war für uns, dass Jürgen nach seinem Unfall im Mai wieder Deine erste 70er gefahren ist.
  Richtig toll, lieber Jürgen. 💪🚴`
                    )
                    .setTitle('RTF GEW RheinEnergie')
                    .build(),
                new BlogEntryBuilder()
                    .setAlbumIDs(['fb982b9c-abf8-457c-b1f4-10b360bf235d'])
                    .setDate('2022-08-13', '2022-08-14')
                    .setId('05b8ed74-6693-457c-ac6e-92b5c412bfeb')
                    .setText(
                        `Am Samstag richtete der Verein Bike & Ski St. Augustin und am Sonntag der Verein CITO Hennef ihre RTFs am selben Startplatz in Hennef aus.

  Einige RTCler sind - neben leider nur etwa 500 TN insgesamt - an beiden Tagen angetreten, um bei gnadenloser Hitze die „Hennefer Radsporttage“ zu meistern.

  Beide Strecken waren sehr schön und super ausgeschildert.
  Die große Hitze (immer weit über 30 Grad) war anstrengend, aber umso leckerer war das alkoholfreie
  Getränk im Ziel.

  Ein herzliches Dankeschön geht unsererseits an beide Vereine.
  👍👍 Wir kommen wieder.`
                    )
                    .setTitle('RTF Hennefer Hitzetage')
                    .build(),
                new BlogEntryBuilder()
                    .setDate('2022-01-15')
                    .setId('79297f2d-fa6a-4b67-a0c5-d51a77c09df6')
                    .setText(
                        `Heute trafen sich fünf dick verpackte Unentwegte (Albert, Jürgen, Manni, Robert und ich) vom RTC Köln,
  um ihren während der Weihnachtszeit angesetzten überflüssigen Pfunden den Kampf anzusagen.
  Das Wetter sollte trocken bleiben, mit ein paar sonnigen Abschnitten – aber halt kalt.

  Los ging es um 11:00 Uhr an Gulaschkanone unter der Rodenkirchener Brücke.
  Das Thermometer zeigte +2° Grad….
  Das Ziel war Heimerzheim und dort die Bäckerei Voigt.

  Es ging über Rondorf, Mechernich, Berzdorf und am Entenfang vorbei, über Sechtem nach Waldorf.
  Dort wartete der erste und einzige Anstieg auf uns, der bei der Kälte das Atmen schwer machte.
  Die Anzeige im Garmin zeigte, oben angekommen, -1°Grad.
  Um so größer wurde die Sehnsucht nach einem warmen Ort, den wir kurz darauf erreichten.
  Angekommen, ging die Eincheckprozedur los.
  Maske auf, Hände desinfizieren, Impfnachweis raus, Personalausweis.
  Ein Glück, das wir alle dreifach gedopt waren… Bestellt wurde teilweise dann allerdings, als ob der Hungertod sehr nahe wäre….

  Nach dem die Kohlehydratspeicher wieder gut gefüllt waren, ging es zurück durch die Felder nach Rösberg.
  Die rasante Abfahrt wurde für vier von uns mittendrin abrupt durch eine rote Ampel gestoppt.
  Nur einer kam bei grün durch – Manni, weil er oben richtig Schwung genommen hatte…
  Über Merten ging es dann nach Sechtem zurück auf den Hinweg.

  Fazit: Es wehte zwar ein kalter Ostwind, die Sonne hat sich auch nicht blicken lassen.
  Aber es hat uns Spaß gemacht, sich wieder gemeinsam mit dem Rad zu bewegen, in einem Café zu sitzen, das kaum belegt war und miteinander zu reden.

  Klaus`
                    )
                    .setTitle('Wintertraining')
                    .build(),
            ],
        }
    },
})
