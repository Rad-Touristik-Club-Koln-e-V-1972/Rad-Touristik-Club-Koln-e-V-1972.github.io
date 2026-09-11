<template>
  <div class="justify-center q-gutter-lg row">
    <div class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">
          Vorwort
        </q-card-section>
        <q-card-section>
          <span class="text-pre-wrap" v-html="props.text" />
        </q-card-section>
      </q-card>
    </div>
    <div class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">
          Parkmöglichkeiten
        </q-card-section>
        <q-card-section>
          <ol>
            <li>
              Westhovener Aue
              <a
                href="https://www.google.de/maps/place/Parkplatz/@50.9021824,6.991393,14.5z/data=!4m16!1m8!2m7!1sParkplatz!3m5!2sPoller+Fischerhaus,+Weidenweg+46,+51105+Porz!3s0x47bf26a6cc627a75:0xfdcbd06516c4a76b!4m2!1d6.9920713!2d50.9022304!3m6!1s0x47bf278f6aa8480d:0x581404990444eba3!8m2!3d50.8967914!4d7.0135632!15sCglQYXJrcGxhdHpaCyIJcGFya3BsYXR6kgELcGFya2luZ19sb3SaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUlVaMkkyZUZwUkVBReABAPoBBAgAECM!16s%2Fg%2F11gk15st3h?entry=ttu&g_ep=EgoyMDI2MDgyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                (Parkplatz - Google Maps)
              </a>
            </li>
            <li>
              P&R-Parkplatz Heinrich-Lübke-Ufer
              <a
                href="https://www.google.de/maps/place/Parkplatz,+Heinrich-Lübke-Ufer+18,+50996+Köln-Rodenkirchen/@50.8977867,6.9834963,17z/data=!3m1!4b1!4m6!3m5!1s0x47bf26a7dc5043c9:0x470af4ea9cf8a92!8m2!3d50.8977366!4d6.9884134!16s%2Fg%2F11c3q5dd55?entry=ttu&g_ep=EgoyMDI2MDgyNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                (direkt an der Rodenkirchener Brücke, linksrheinisch)
              </a>
            </li>
            <li>Poller Damm / Ecke Hubertusweg</li>
          </ol>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">
          Startort
        </q-card-section>
        <q-card-section>
          <b>{{ props.location.title }}</b>
          <br />
          {{ props.location.street }}
          <br />
          {{ props.location.zipCode }} {{ props.location.city }}
          <div v-if="props.location.url">
            <br />
            <a :href="props.location.url.toString()" target="_blank">
              Anfahrt bei Google Maps
            </a>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">
          Panne oder technisches Problem
        </q-card-section>
        <q-card-section>
          Solltet Ihr unterwegs aufgrund einer Panne oder eines anderen Problems
          nicht weiterfahren können, nutzt bitte diese Notfallnummer:
          0176/24719881 (Diana)
          <br />
          Wir sorgen für einen reibungslosen Rücktransport zu Eurem Startpunkt.
          <br />
          An allen Verpflegungsstellen stehen Standpumpen zur Verfügung.
        </q-card-section>
      </q-card>
    </div>
    <div class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent">
          <div class="text-h6">Saisonabschlussparty</div>
          <div class="text-subtitle2">
            Teilnehmeranzahl begrenzt, Zusage nach Eingang der Anmeldungen
          </div>
        </q-card-section>
        <q-card-section>
          <b>Ort:</b> Poller Fischerhaus (Start der RTF)
          <br />
          <b>Beginn:</b> ab 17 Uhr
          <br />
          <b>Anmeldung:</b> ja, bitte meldet Euch unter Angabe der Anzahl der
          teilnehmenden Personen bis zum <b>02.10.2026</b> verbindlich per Mail
          bei Diana an (<a href="mailto:dcmvialon@gmail.com">
            dcmvialon@gmail.com
          </a>
          )
          <br />
          <b>Eintrittsgebühr:</b> die Teilnahme ist kostenlos
          <br />
          <b>Essen und Trinken:</b> für die angemeldeten Teilnehmer steht eine
          kleines kölsches Angebot an Speisen und Getränken bereit, sodass sich
          jeder selbst versorgen kann.
          <br />
          <br />
          <b>Externe Party-Gäste / Nicht-Mitglieder:</b> Die Anmeldung für
          Gäste, die nicht Mitglied im RTC Köln e.V. 1972 sind, ist ab dem
          21.09.2026 möglich – vorbehaltlich der noch verfügbaren Plätze.
          <br />
          Da die Teilnehmerzahl auf 70 Personen begrenzt ist, werden die Plätze
          nach Eingang der Anmeldungen vergeben.
          <br />
          Daher gebt bitte Eure E-Mail-Adresse an. Vielen lieben Dank.
          <br />
          <br />
          Wir freuen uns auf eine schöne RTF und einen tollen Saisonabschluss
          der Kölner Radfahr-Community!!
          <br />
          <br />
          Euer RTC Köln e.V. 1972
        </q-card-section>
      </q-card>
    </div>
    <div class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">
          Fotos und Videoaufnahmen
        </q-card-section>
        <q-card-section>
          Während der Veranstaltung werden Fotos gemacht und gegebenenfalls
          Videosequenzen aufgenommen.
          <br />
          Wenn Ihr nicht fotografiert oder gefilmt werden möchtet, sprecht bitte
          die Fotograf:innen oder Videograf:innen vor Ort an.
          <br />
          Wenn ein veröffentlichtes Foto von Euch entfernt werden soll, könnt
          Ihr Euch anschließend an den RTC Köln wenden.
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type Control from "@/models/entities/events/tours/Control";

const props = defineProps<{
  location: Control;
  text: string;
}>();
</script>
