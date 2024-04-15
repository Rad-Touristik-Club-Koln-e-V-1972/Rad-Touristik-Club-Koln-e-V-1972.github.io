<template>
  <q-card flat>
    <q-card-section class="bg-primary text-accent text-h6">Unsere Geschichte</q-card-section>
    <q-card-section>
      <q-tabs v-model="tab" active-bg-color="primary" active-color="accent" indicator-color="secondary">
        <q-tab label="Bilder" name="bilder" />
        <q-tab label="Videos" name="videos" />
      </q-tabs>
      <q-tab-panels v-model="tab">
        <q-tab-panel name="bilder">
          <c-slideshow :gallery-entries="galleryEntries" height="200px" />
        </q-tab-panel>
        <q-tab-panel name="videos">
          <q-video :ratio="16 / 9" src="https://www.youtube-nocookie.com/embed/bx0zAC-A-fg" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card-section>
    <q-card-section>
      Am 30.10.1972 trafen sich in einer Kneipe in Köln-Deutz 28 Sportfreunde mit einer damals revolutionären Idee - einen Radsportverein zu gründen, bei dem nicht der Rennbetrieb, sondern der Breitensport im Mittelpunkt
      stehen sollte.
    </q-card-section>
    <q-card-section>
      Der Verein wurde Rad-Touristik-Club Köln genannt.<br />
      Die Kurzform RTC wurde später von vielen Vereinen kopiert, aber der Grundgedanke, den Breitensport zu betreiben und zu fördern, wurde als Erstes durch den RTC Köln definiert und wird bis heute von Vorstand und
      Mitgliedern des Vereins gelebt.
    </q-card-section>
    <q-card-section>
      Unser ehemaliges Ehrenmitglied Erich Fischer vom RTC Köln wurde damals der erste Radtouristikfachwart beim Bund Deutscher Radfahrer.<br />
      Mitglieder des Vereins fuhren bis nach Schleswig-Holstein, um dort Vereine bei der Durchführung einer RTF zu unterstützen.<br />
      Als erster deutscher Verein führte der RTC Köln eine Euro-Audax-Tour nach den Bestimmungen der Union des Audax Francais durch.<br />
      Seit dem Gründungsjahr werden RTF durchgeführt, in den Anfängen neben der Forsbachtour auch das Bergische Karussell, diese Strecke ist heute noch als eine unserer beiden Permanenten erhalten.<br />
      <br />
      1976 wurde das erste Poller Volksradfahren organisiert.<br />
      <br />
      Von 1978 bis 1982 führte der RTC Köln die Deutschland-Rundfahrt durch.<br />
      <br />
      2012 wurde – zu unserem 40-jährigen Jubiläum - die Forsbach-Tour um eine MarathonStrecke erweitert, die bis ins Wendener Land bei Olpe führt.
    </q-card-section>
    <q-card-section>
      In den Gründungsjahren wurden die Auszeichnungen für RTF-Fahrer:innen noch deutschlandweit vergeben.<br />
      Die jeweiligen Mannschaften sowie Einzelmitglieder wurden jeweils 5mal Bundessieger.<br />
      <br />
      Durch die Verdienste um den Breitensport wurden bislang 7 Vereinsmitglieder des RTC Köln vom BDR in die Bundes Ehrengilde aufgenommen.
    </q-card-section>
    <q-card-section>
      Für die Statistiker: 1974 gab es in der damaligen BRD 22 offizielle RTF-Veranstaltungen, 1979 waren es 90 und 1980 schon 160.<br />
      Im Jahr 2014 wurden im Breitensportkalender des BDR als Veranstaltungen 610 RTF, 122 Radmarathons, 239 CTF und 1000 Permanente aufgeführt.
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CSlideshow from 'components/pages/CSlideshow.vue'
import GalleryEntry from 'src/models/entities/rtc-cologne/gallery/GalleryEntry'
import StartZiel from 'stores/rtc-cologne/gallery/2022/05_29_RTF_50/Start_Ziel'

const galleryEntries: GalleryEntry[] = StartZiel['Start & Ziel']
const tab = ref('bilder')
</script>
