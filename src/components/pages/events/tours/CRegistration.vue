<template>
  <!-- TODO This page should use a database with registration groups containing the text. -->
  <div class="justify-center q-gutter-lg row">
    <div class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent">
          <div class="text-h6">Anmeldung</div>
          <div class="text-subtitle2">
            Im Startgeld enthalten:
            <br />
            Zwei Lose für unsere Tombola
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
                <td>{{ price > 0 ? price + "€" : "Freie Teilnahme" }}</td>
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
    <div v-if="props.category !== EEvent.RTF_Family_Tour" class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">
          <b>Vor</b>anmeldung
        </q-card-section>
        <q-card-section>
          Die vergünstigte Voranmeldung
          <a href="https://forms.cloud.microsoft/r/1TDgiRcueR" target="_blank">
            Voranmeldung
          </a>
          endet am 7. Oktober 2026.
        </q-card-section>
        <q-card-section>
          <ul style="list-style-type: &quot;🔆&quot;">
            <li>
              Zahlungsmodalitäten bei Voranmeldung
              <ul style="list-style-type: &quot;➡️&quot;">
                <li>
                  PayPal
                  <br />
                  dcmvialon@gmail.com
                  <br />
                  Bitte im Betreff angeben:
                  <ul>
                    <li>Vorname und Nachname</li>
                    <li>
                      Startort
                      <ul>
                        <li>Poller Fischerhaus</li>
                        <li>Heimerzheim</li>
                        <li>Hilberath</li>
                      </ul>
                    </li>
                  </ul>
                  <br />
                </li>
                <li>
                  Banküberweisung
                  <br />
                  RTC Köln e.V. 1972
                  <br />
                  IBAN: DE73 3806 0186 6601 1910 14
                  <br />
                  BIC: GENODED1BRS
                  <br />
                  Bitte im Verwendungszweck angeben:
                  <ul>
                    <li>Vorname und Nachname</li>
                    <li>RTF 10.10.2026</li>
                    <li>
                      Startort
                      <ul>
                        <li>Poller Fischerhaus</li>
                        <li>Heimerzheim</li>
                        <li>Hilberath</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <br />
            </li>
            <li>
              Zahlungsmodalitäten am Veranstaltungstag
              <ul>
                <li>Barzahlung</li>
                <li>PayPal</li>
                <li>Kontoüberweisung</li>
              </ul>
              <br />
            </li>
            <li>
              Quereinsteiger:innen
              <br />
              Quereinsteiger:innen können mit oder ohne Voranmeldung an einer
              Verpflegungsstelle zwischen 9:00 Uhr und 11:00 Uhr starten.
              <br />
              Mit Voranmeldung 10 € (siehe oben)
              <br />
              Ohne Voranmeldung 15 €
              <br />
              An den Verpflegungsstellen ist nur Barzahlung möglich.
              <br />
              <br />
            </li>
            <li>
              Erstattung von Startgeldern:
              <br />
              Die Startgebühr wird ausschließlich zurückerstattet bei Absage
              durch den Veranstalter.
              <br />
              Bei Absage durch eine angemeldete Person besteht kein Anspruch auf
              Rückerstattung.
            </li>
          </ul>
        </q-card-section>
      </q-card>
    </div>
    <div v-if="props.category === EEvent.RTF_Family_Tour" class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">
          Ohne Smartphone (manuelle Anmeldung)
        </q-card-section>
        <q-card-section>
          <ol>
            <li>Anmeldeformular ausfüllen</li>
            <li>anmelden und Startkarte entgegennehmen.</li>
            <li>Startgeld bezahlen</li>
            <li>losfahren und Spaß haben</li>
          </ol>
        </q-card-section>
      </q-card>
    </div>
    <div v-if="props.category === EEvent.RTF_Family_Tour" class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">
          Oder für Breitensportlizenzinhaber:innen (digitale Anmeldung)
        </q-card-section>
        <q-card-section>
          Die Veranstaltung muss in der BDR-App gebucht werden.
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import EEvent from "@/models/enums/EEvent";
import type Fee from "@/models/entities/events/tours/events/Fee";

const props = defineProps<{
  category: EEvent;
  feeHints?: string | undefined;
  fees: Fee[];
}>();

const fgs = computed(() => Map.groupBy(props.fees, it => it.group));
</script>
