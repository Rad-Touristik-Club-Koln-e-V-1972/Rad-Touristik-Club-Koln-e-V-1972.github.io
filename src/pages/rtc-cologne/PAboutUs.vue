<template>
  <q-card flat>
    <q-card-section class="bg-primary text-accent text-h6">Willkommen beim RTC Köln e.V.: Gemeinschaft und Radfahren für alle!</q-card-section>
    <q-card-section>
      <c-slideshow :gallery-entries="imageUrls" height="200px" />
    </q-card-section>
    <q-tabs v-model="tab" active-bg-color="primary" active-color="accent" class="bg-primary" indicator-color="accent">
      <q-tab :icon="mdiBike" label="Über uns" name="about-us" />
      <q-tab :icon="mdiInformation" label="Vereinssatzung" name="statutes" />
    </q-tabs>
    <q-tab-panels v-model="tab">
      <q-tab-panel name="about-us">
        <q-card-section class="text-primary text-h6">Über uns</q-card-section>
        <q-card-section>
          Beim RTC Köln e.V. sind wir eine vielfältige Gruppe von Radsportbegeisterten, die aus verschiedenen Lebensphasen stammen.<br />
          Egal ob Studierende, Berufstätige oder Menschen im Ruhestand – uns vereint die Freude an Gemeinschaft und regelmäßigem Radsport.
        </q-card-section>
        <q-card-section class="text-primary text-h6">Unsere Aktivitäten</q-card-section>
        <q-card-section>
          Unser Fokus liegt auf dem Rennradfahren zur Erholung und Gesundheitsvorsorge im Rahmen der Radtouristik.<br />
          Mit dem Rennrad halten wir uns fit und pflegen eine lebendige Vereinskultur.<br />
          Zu unseren jährlichen Highlights gehört die über Kölns Grenzen hinweg bekannte „Forsbachtour“, Teil der offiziellen RTF-Veranstaltungsreihe des BDR.<br /><br />
          <q-btn color="primary" :icon="mdiArrowRight" :label="nextRTFDate" outline :to="{ name: 'events-tours-rtfs' }" />
          <br />
          <br />
          Außerdem unternehmen wir Ausflüge in malerische Gegenden wie die Mosel, die Eifel und sogar nach Mallorca zur Saisonvorbereitung etc.
        </q-card-section>
        <q-card-section class="text-primary text-h6">Unser Ziel</q-card-section>
        <q-card-section> Wir möchten andere Radfahrer:innen für diesen Sport begeistern, sei es als neue Vereinsmitglieder oder als Teilnehmer:innen an unseren Veranstaltungen. </q-card-section>
        <q-card-section class="text-primary text-h6">Unsere Treffpunkte und Veranstaltungen</q-card-section>
        <q-card-section>
          Unser Trainings- und Veranstaltungsbetrieb läuft über persönliche Absprachen per
          <ul>
            <li>WhatsApp</li>
            <li>Signal</li>
            <li>Mail</li>
            <li>der Vereins-App „Mein Verein“</li>
            <li>sowie unseren RTC-Vereinsabenden, die normalerweise am ersten Freitag im Monat ab 19 Uhr stattfinden.</li>
          </ul>
          Während der Sommermonate treffen wir uns im Garten der 1. Vorsitzenden zu einem gemütlichen Grillabend.
        </q-card-section>
        <q-card-section class="text-primary text-h6">Unser Engagement</q-card-section>
        <q-card-section>
          Wir sind regelmäßig bei den RTF des Radsportbezirks Köln sowie in ganz NRW vertreten.<br />
          Gäste sind sowohl bei unseren Vereinsabenden als auch den Ausfahrten immer herzlich willkommen.<br /><br />
          <q-btn color="primary" :icon="mdiArrowRight" label="Du möchtest uns kennenlernen? Dann melde Dich einfach bei: PR@rtc-koeln.de" outline href="mailto:PR@rtc-koeln.de" />
        </q-card-section>
        <q-card-section class="text-primary text-h6">Aktivitäten im Winter</q-card-section>
        <q-card-section>
          Auch in den Wintermonaten bieten wir lockere Ausfahrten an den Wochenenden an, bei denen wir ungefähr 60 Kilometer zurücklegen.<br />
          <b>Falls ihr nicht alleine trainieren möchtet, seid ihr beim RTC Köln e.V. herzlich willkommen!</b>
        </q-card-section>
        <q-card-section class="text-primary text-h6">Unsere Touren</q-card-section>
        <q-card-section>
          Wir haben verschiedene Strecken rund um Köln, die wir – je nach Zeit und Gruppengröße – gemeinsam erkunden.<br />
          Unsere Touren starten entweder an der Rodenkirchener Brücke (linksrheinisch) oder an der Schmitzebud.<br />
          Die Strecken sind zwischen 60 Kilometer (mit etwa 450 Höhenmetern) und 130 Kilometer (mit etwa 1000 Höhenmetern) lang und führen durch landschaftlich reizvolle Gegenden.
        </q-card-section>
        <q-card-section class="text-primary text-h6">Kommunikation und Kontakt</q-card-section>
        <q-card-section>
          Bei Interesse meldet euch gerne bei <a href="mailto:PR@rtc-koeln.de">PR@rtc-koeln.de</a><br />
          Wir freuen uns darauf, euch auf unseren Touren zu begrüßen und gemeinsam die Faszination des Radsports zu erleben!
        </q-card-section>
        <q-card-section class="text-h6">Herzlich willkommen beim RTC Köln e.V.!</q-card-section>
      </q-tab-panel>
      <q-tab-panel name="statutes">
        <p v-if="$q.platform.is.ios" class="text-center">
          Leider ist die Unterstützung ein PDF-Dokumente anzuzeigen seit iOS 8 defekt.<br />
          <a :href="statutesUrl">Hier kannst du es herunterladen.</a>
        </p>
        <object v-else :data="statutesUrl" :height="`${$q.screen.height}px`" type="application/pdf" width="100%">
          <p class="text-center">
            Leider unterstützt dein Browser nicht das Anzeigen eines PDF-Dokuments.<br />
            <a :href="statutesUrl">Hier kannst du es herunterladen.</a>
          </p>
        </object>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import { mdiArrowRight, mdiBike, mdiInformation } from '@quasar/extras/mdi-v7'
import CSlideshow from 'components/pages/CSlideshow.vue'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import useCalendarStore from 'stores/events/Calendar'
import useDateTime from 'src/utils/DateTime'

// noinspection LocalVariableNamingConventionJS
const $q = useQuasar()

const imageUrls = ref([
  new GalleryEntryBuilder().setId('1e0ba419-3aa9-40b1-8cda-9bbf6dabcecb').setImageUrl('content.rtc-koeln.de/pages/rtc-cologne/about-us/about_us_0.jpg.avif').buildGalleryEntry(),
  new GalleryEntryBuilder().setId('633246fd-7423-420c-9e4c-d28503755b34').setImageUrl('content.rtc-koeln.de/pages/rtc-cologne/about-us/about_us_1.jpg.avif').buildGalleryEntry(),
  new GalleryEntryBuilder().setId('a4b3fe25-0d70-4f25-8ad1-160f684da614').setImageUrl('content.rtc-koeln.de/pages/rtc-cologne/about-us/about_us_2.jpg.avif').buildGalleryEntry(),
])

const nextRTF = useCalendarStore().nextRTF

const nextRTFDate = computed(() => (nextRTF ? `Bitte schon mal vormerken: Die Forsbachtour ist am ${useDateTime().format(nextRTF.start)}.` : 'Die nächste Forsbachtour wird noch geplant.'))

const statutesUrl = 'https://content.rtc-koeln.de/pages/rtc-cologne/about-us/2023-10-06_Satzung-RTC-Köln-e.V..pdf'

const tab = ref('about-us')
</script>
