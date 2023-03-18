<template>
    <v-card id="VClub" flat>
        <v-toolbar color="primary" flat>
            <v-toolbar-title class="accent--text">Über uns</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <c-slideshow height="200" :value="imageUrls" />
        </v-card-text>
        <v-card-text class="black--text">
            <p>
                Wir, die Sportler:innen des RTC Köln, kommen aus vielen unterschiedlichen Lebensphasen: die einen studieren, die anderen sind voll berufstätig und die anderen
                genießen im wohlverdienten Ruhestand die Runden auf dem Rennrad. Was wir aber alle gemeinsam haben, ist die Freude an der Gemeinschaft und am aktiven regelmäßigen
                Sport. Dazu halten wir uns mit dem Rennrad fit und pflegen in angemessenem Rahmen die Vereinskultur.
            </p>
            <p>
                Jährlich veranstalten wir ehrenamtlich Ende Mai im Rahmen der offiziellen RTFVeranstaltungsreihe des BDR unsere – über Kölns Grenzen hinweg bekannte –
                „ForsbachTour“. Darüber hinaus unternehmen wir „Ausflüge“ an die Mosel, in die Eifel oder in die Rhön. Zur Saisonvorbereitung sind wir des öfteren im Frühjahr auf
                Mallorca. Auch bei Einzelveranstaltungen, wie zum Beispiel bei den Bundesradsporttreffen, sind wir anzutreffen.
            </p>
            <p>
                Wir organisieren aber keine Rennen. Unser Schwerpunkt ist „Radfahren zur Erholung und Gesundheitsvorsorge“ im Rahmen der Radtouristik. Wir freuen uns, wenn wir
                damit unsere Fitness steigern oder erhalten und so viele Jahre wie möglich dem Radsport treu bleiben können. Unser Ziel ist es, auch andere Radfahrer:innen für den
                Radsport zu begeistern, sei es als neue Vereinsmitglieder oder als Teilnehmer:innen an unseren Veranstaltungen.
            </p>
            <p>
                Der Trainings- und Veranstaltungsbetrieb läuft bei uns über persönliche Absprachen via WhatsApp, Mail, die Vereins-App „Mein Verein“ und bei unseren Clubabenden (i.
                d. R. am 1. Freitag im Monat, um 19 Uhr). Wir sind oft auf den RTF des Radsportbezirks Köln, aber auch NRW-weit zu finden. Gäste sind sowohl bei unseren Clubabenden
                als auch den Ausfahrten jederzeit herzlich willkommen.
                <br />
                Im Winter treffen wir uns an den Wochenenden zu lockeren Ausfahrten. Möchtet Ihr in den Wintermonaten nicht alleine trainieren? Dann kommt zum RTC Köln e.V.. Ihr
                seid herzlich willkommen!
            </p>
            <p>
                Wir haben einige Runden rund um Köln, die wir – je nach Zeit und Gruppenstärke – unter die Räder nehmen. Start ist entweder an der Rodenkirchener Brücke
                (linksrheinisch) oder an der Schmitzebud.
                <br />
                Alle Strecken sind landschaftlich schön und zwischen 60 km (etwa 450 Hm) und 130 km (etwa 1000 Hm) lang. Wir fahren moderat, so dass sich jeder anschließen kann.
                Meist haben wir einen Schnitt von 21-22 km/h.
            </p>
            <p>
                Gemeinsame Ausfahren machen am meisten Spaß! Meldet Euch bei Interesse bei:
                <br />
                <a href="mailto:PR@rtc-koeln.de">PR@rtc-koeln.de</a>
            </p>
            <p>Wir freuen uns auf Euch!</p>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import CSlideshow from '~/components/CSlideshow.vue'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

const imageUrls = [
    new GalleryEntryBuilder().setId('1e0ba419-3aa9-40b1-8cda-9bbf6dabcecb').setImageUrl('content.rtc-koeln.de/pages/rtc-cologne/about-us/about_us_0.jpg').build(),
    new GalleryEntryBuilder().setId('633246fd-7423-420c-9e4c-d28503755b34').setImageUrl('content.rtc-koeln.de/pages/rtc-cologne/about-us/about_us_1.jpg').build(),
    new GalleryEntryBuilder().setId('a4b3fe25-0d70-4f25-8ad1-160f684da614').setImageUrl('content.rtc-koeln.de/pages/rtc-cologne/about-us/about_us_2.jpg').build(),
]
</script>
