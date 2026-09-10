<template>
  <div class="justify-center q-gutter-lg row">
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
          Zeiten
        </q-card-section>
        <q-card-section>
          <q-markup-table flat>
            <tbody>
              <tr v-for="it in props.times" :key="it.id">
                <td class="text-right text-no-wrap">{{
                  it.end ? `${it.start} - ${it.end}` : it.start
                }}</td>
                <td>{{ it.name }}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent">
          <div class="text-h6">Gebühren</div>
          <div class="text-subtitle2">
            Darin sind enthalten:
            <br />
            die Teilnahme an der RTF und
            <br />
            zwei Lose für unsere Tombola mit 25 hochwertigen Preisen.
          </div>
        </q-card-section>
        <q-card-section>
          <q-markup-table v-for="[first, second] in fgs" :key="first" flat>
            <thead v-if="first">
              <tr>
                <th :id="first" colspan="2">
                  <div class="text-bold text-body2" v-html="first" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="{ id, name, price } in second" :key="id">
                <td>{{ price }}€</td>
                <td class="text-left">
                  <div v-html="name" />
                </td>
              </tr>
            </tbody>
          </q-markup-table>
          {{ props.feeHints }}
        </q-card-section>
      </q-card>
    </div>
    <div class="col-auto">
      <q-card class="text-no-wrap">
        <q-card-section class="bg-primary text-accent">
          <div class="text-h6">Strecken</div>
          <div class="text-subtitle2">
            Alle drei Strecken werden ausgeschildert.
          </div>
          <div v-if="$q.platform.is.mobile" class="text-subtitle2">
            Bitte horizontal scrollen
          </div>
        </q-card-section>
        <q-card-section>
          <q-markup-table flat>
            <thead>
              <tr>
                <th scope="col">Links</th>
                <th class="text-left" scope="col">Name</th>
                <th class="text-left" scope="col">Startzeit</th>
                <th class="text-left" scope="col">Streckenlänge</th>
                <th class="text-left" scope="col">Höhenmeter</th>
                <th class="text-left" scope="col">Profil</th>
                <th class="text-left" scope="col">Kontrollen</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="it in props.tracks.filter(t => t.controls)"
                :key="it.id"
                :class="it.important ? 'text-primary' : ''"
              >
                <td>
                  <div v-for="(url, key) in it.urls" :key class="q-my-xs">
                    <a :href="url.toString()">{{ key }}</a>
                  </div>
                </td>
                <td>
                  {{ it.name }}
                  <br v-if="it.subname" />
                  {{ it.subname }}
                </td>
                <td>{{ dateTime.formatTime(it.start, it.end) }}</td>
                <td>{{ it.length }}km</td>
                <td>{{ it.height }}</td>
                <td>{{ it.profile }}</td>
                <td>{{ it.controls }}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">
          Verpflegungsstellen
        </q-card-section>
        <q-card-section>
          Auf den Strecken erwarten Euch weitere RTC Köln-Ladies bei zwei
          liebevoll betreuten Verpflegungsstellen:
          <ul>
            <li>Heimerzheim</li>
            <li>Hilberath</li>
          </ul>
          Die Verpflegungsstelle in Heimerzheim wird je nach gewählter Strecke
          zweimal angefahren.
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
        <q-card-section class="bg-primary text-accent text-h6">
          Nach der Tour ist vor der Party
        </q-card-section>
        <q-card-section>
          <ul>
            <li>Duschen</li>
          </ul>
          Informationen zur Nutzung von Duschen sind noch nicht abschließend
          geklärt. Wir fragen hierzu beim gegenüberliegenden Campingplatz nach.
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
import { computed } from "vue";
import { useQuasar } from "quasar";
import type Control from "@/models/entities/events/tours/Control";
import type Fee from "@/models/entities/events/tours/events/Fee";
import type Time from "@/models/entities/events/tours/events/Time";
import type Track from "@/models/entities/events/tours/events/Track";
import useDateTime from "@/utils/DateTime";

// noinspection LocalVariableNamingConventionJS
const $q = useQuasar();

const props = defineProps<{
  feeHints?: string | undefined;
  fees: Fee[];
  location: Control;
  times: Time[];
  tracks: Track[];
}>();

const dateTime = useDateTime();

const fgs = computed(() => Map.groupBy(props.fees, it => it.group));
</script>
