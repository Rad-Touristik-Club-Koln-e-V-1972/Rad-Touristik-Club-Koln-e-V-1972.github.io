<template>
  <div class="justify-center q-gutter-lg row">
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
  </div>
</template>

<script lang="ts" setup>
import Control from "@/models/entities/events/tours/Control";
import type Time from "@/models/entities/events/tours/events/Time";

const props = defineProps<{
  location: Control;
  times: Time[];
}>();
</script>
