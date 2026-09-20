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
const props = defineProps<{ text: string }>();
</script>
