<template>
  <!-- TODO This page should use a database with registration groups containing the text. -->
  <div class="justify-center q-gutter-lg row">
    <div v-if="props.category === EEvent.RTF_RTC" class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">
          Voranmeldung
        </q-card-section>
        <q-card-section>
          <a href="https://forms.cloud.microsoft/r/1TDgiRcueR" target="_blank">
            Die Voranmeldung findet du hier.
          </a>
        </q-card-section>
      </q-card>
    </div>
    <div v-if="props.category === EEvent.RTF_RTC" class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">
          Für Breitensportlizenzinhaber:innen (digitale Anmeldung)
        </q-card-section>
        <q-card-section>
          Die Anmeldung läuft über die GC Touren-App für Lizenzinhaber:innen.
        </q-card-section>
      </q-card>
    </div>
    <div v-if="props.category === EEvent.RTF_RTC" class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">
          Oder ohne Smartphone (manuelle Anmeldung)
        </q-card-section>
        <q-card-section>
          Am Veranstaltungstag vor Ort.
          <br />
          <span class="text-primary"><b>Quereinsteiger</b></span> können
          <span class="text-primary">
            <b>
              mit und ohne
              <a
                href="https://forms.cloud.microsoft/r/1TDgiRcueR"
                target="_blank"
              >
                Voranmeldung
              </a>
            </b>
          </span>
          an jeder Verpflegungsstelle zwischen 9 und 11 Uhr einsteigen.
          <br />
          <span class="text-primary"><b>Wichtig:</b></span> bei
          <a href="https://forms.cloud.microsoft/r/1TDgiRcueR" target="_blank">
            Voranmeldung
          </a>
          bitte
          <ol>
            <li>den vollständigen Namen und</li>
            <li>
              den Verwendungszweck RTF 10.10.2026/ Einstiegsort: Heimerzheim
              oder Hilberath angeben
            </li>
          </ol>
        </q-card-section>
      </q-card>
    </div>
    <div v-if="props.category === EEvent.RTF_RTC" class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">
          Sternfahrtmodus
        </q-card-section>
        <q-card-section>
          Möglich, bitte bei Anmeldung vor Ort angeben
        </q-card-section>
      </q-card>
    </div>
    <div v-if="props.category === EEvent.RTF_RTC" class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">
          Hinweis
        </q-card-section>
        <q-card-section>
          Die vergünstigte
          <a href="https://forms.cloud.microsoft/r/1TDgiRcueR" target="_blank">
            Voranmeldung
          </a>
          endet am 2. Oktober 2026.
          <br />
          Dies gilt sowohl für Zahlungen per PayPal als auch für
          Kontoüberweisungen.
          <br />
          <br />
          <div class="text-primary">
            <b>
              Jugendliche bis einschließlich 18 Jahre nehmen kostenlos teil.
            </b>
          </div>
          <br />
          <div class="text-primary">
            <b>
              Zahlungsmodalitäten bei
              <a
                href="https://forms.cloud.microsoft/r/1TDgiRcueR"
                target="_blank"
              >
                Voranmeldung:
              </a>
            </b>
          </div>
          <ul>
            <li>
              PayPal
              <br />
              NAME VORNAME (bitte einfügen)
              <br />
              STARTORT (bitte einfügen)
              <ul>
                <li>Poller Fischerhaus</li>
                <li>Heimerzheim</li>
                <li>Hilberath</li>
              </ul>
              PayPal-Adresse: dcmvialon@gmail.com
            </li>
            <li>
              Kontoüberweisung
              <br />
              RTC Köln e.V. 1972
              <br />
              IBAN: DE73 3806 0186 6601 1910 14
              <br />
              BIC: GENODED1BRS
            </li>
          </ul>

          Bitte gebt bei der Zahlung im Betreff unbedingt Folgendes an:
          <ul>
            <li>den vollständigen Namen</li>
            <li>den Verwendungszweck „RTF 10.10.2026“</li>
          </ul>
          <b>Beispiel:</b> Diana Vialon, RTF 10.10.2026
          <br />
          <br />
          <div class="text-primary">
            <b>Zahlungsmodalitäten am Veranstaltungstag:</b>
          </div>
          <ul>
            <li>Zahlung per PayPal</li>
            <li>Online</li>
            <li>Bar</li>
          </ul>
          Wenn ihr ohne
          <a href="https://forms.cloud.microsoft/r/1TDgiRcueR" target="_blank">
            Voranmeldung
          </a>
          an einer Verpflegungsstation startet ist dort nur Barzahlung möglich
          (Startgebühr 15 EUR)!
          <br />
          <br />
          <div class="text-primary">
            <b>
              Wichtiger Hinweis zur Erstattungsfähigkeit von Startgebühren bei
              <a
                href="https://forms.cloud.microsoft/r/1TDgiRcueR"
                target="_blank"
              >
                Voranmeldung:
              </a>
              <br />
              <br />
              Die Startgebühren werden ausschließlich zurückerstattet, wenn die
              Veranstaltung durch den Veranstalter abgesagt wird.
              <br />
              Kann eine angemeldete Person aus persönlichen Gründen nicht
              teilnehmen (z.B. Krankheit o.ä.) besteht kein Anspruch auf
              Rückerstattung.
            </b>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div v-if="props.category === EEvent.Familientour" class="col-auto">
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
    <div v-if="props.category === EEvent.Familientour" class="col-auto">
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
import EEvent from "@/models/enums/EEvent";

const props = defineProps<{ category: EEvent }>();
</script>
