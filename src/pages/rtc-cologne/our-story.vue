<template>
    <v-card id="VClub" flat>
        <v-toolbar color="primary" flat>
            <v-toolbar-title class="accent--text">Unsere Geschichte</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-tabs v-model="tab" background-color="primary" centered color="accent" show-arrows slider-color="secondary">
                <v-tab :href="`#tab-Bilder`">Bilder</v-tab>
                <v-tab :href="`#tab-Videos`">Videos</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <v-tab-item value="tab-Bilder">
                    <c-slideshow height="200" :value="galleryEntries" />
                </v-tab-item>
                <v-tab-item value="tab-Videos" class="mt-1">
                    <iframe
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        height="200"
                        :src="`https://www.youtube-nocookie.com/embed/bx0zAC-A-fg`"
                        style="border: 0; border-radius: 4px; box-shadow: 0 3px 1px -2px rgba(0 0 0 / 20%), 0 2px 2px 0 rgba(0 0 0 / 14%), 0 1px 5px 0 rgba(0 0 0 / 12%)"
                        title="YouTube video player"
                        width="100%"
                    />
                </v-tab-item>
            </v-tabs-items>
        </v-card-text>
        <v-card-text class="black--text">
            <p>
                Am 30.10.1972 trafen sich in einer Kneipe in Köln-Deutz 28 Sportfreunde mit einer damals revolutionären Idee - einen Radsportverein zu gründen, bei dem nicht der
                Rennbetrieb, sondern der Breitensport im Mittelpunkt stehen sollte.
            </p>
            <p>
                Der Verein wurde Rad-Touristik-Club Köln genannt. Die Kurzform RTC wurde später von vielen Vereinen kopiert, aber der Grundgedanke, den Breitensport zu betreiben
                und zu fördern, wurde als Erstes durch den RTC Köln definiert und wird bis heute von Vorstand und Mitgliedern des Vereins gelebt.
            </p>
            <p>
                Unser ehemaliges Ehrenmitglied Erich Fischer vom RTC Köln wurde damals der erste Radtouristikfachwart beim Bund Deutscher Radfahrer. Mitglieder des Vereins fuhren
                bis nach Schleswig-Holstein, um dort Vereine bei der Durchführung einer RTF zu unterstützen. Als erster deutscher Verein führte der RTC Köln eine Euro-Audax-Tour
                nach den Bestimmungen der Union des Audax Francais durch. Seit dem Gründungsjahr werden RTF durchgeführt, in den Anfängen neben der Forsbachtour auch das Bergische
                Karussell, diese Strecke ist heute noch als eine unserer beiden Permanenten erhalten.
                <br />
                1976 wurde das erste Poller Volksradfahren organisiert.
                <br />
                Von 1978 bis 1982 führte der RTC Köln die Deutschland-Rundfahrt durch.
                <br />
                2012 wurde – zu unserem 40-jährigen Jubiläum - die Forsbach-Tour um eine MarathonStrecke erweitert, die bis ins Wendener Land bei Olpe führt.
            </p>
            <p>
                In den Gründungsjahren wurden die Auszeichnungen für RTF-Fahrer:innen noch deutschlandweit vergeben. Die jeweiligen Mannschaften sowie Einzelmitglieder wurden
                jeweils 5mal Bundessieger.
                <br />
                Durch die Verdienste um den Breitensport wurden bislang 7 Vereinsmitglieder des RTC Köln vom BDR in die Bundes Ehrengilde aufgenommen.
            </p>
            <p>
                Für die Statistiker: 1974 gab es in der damaligen BRD 22 offizielle RTF-Veranstaltungen, 1979 waren es 90 und 1980 schon 160. Im Jahr 2014 wurden im
                Breitensportkalender des BDR als Veranstaltungen 610 RTF, 122 Radmarathons, 239 CTF und 1000 Permanente aufgeführt.
            </p>
        </v-card-text>
    </v-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import CSlideshow from '~/components/pages/CSlideshow.vue'
import GalleryEntry from '~/models/entities/rtc-cologne/gallery/GalleryEntry'
import StartZiel from '~/store/rtc-cologne/gallery/2022/05_29_RTF_50/Start_Ziel'

const galleryEntries: GalleryEntry[] = StartZiel['Start & Ziel']
const tab = ref('tab-Bilder')
</script>
