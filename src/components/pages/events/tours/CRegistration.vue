<template>
  <!-- TODO This page should use a database with registration groups containing the text. -->
  <div class="justify-center q-gutter-lg row">
    <div v-if="props.category === EEvent.RTF" class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">Für Breitensportlizenzinhaber:innen (digitale Anmeldung)</q-card-section>
        <q-card-section>Die Anmeldung läuft über die GC Touren-App für Lizenzinhaber:innen.</q-card-section>
      </q-card>
    </div>
    <div v-if="props.category === EEvent.RTF" class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">Oder ohne Smartphone (manuelle Anmeldung)</q-card-section>
        <q-card-section>
          Gastfahrer:innen können sich analog anmelden.
          <ol>
            <li>Anmeldeformular ausfüllen</li>
            <li>Anmelden und Startgeld zahlen</li>
            <li>Wichtige Informationen, die wir aushängen, bitte lesen</li>
            <li>Losfahren und Spaß haben</li>
          </ol>
        </q-card-section>
      </q-card>
    </div>
    <div v-if="props.category === EEvent.Familientour" class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">Ohne Smartphone (manuelle Anmeldung)</q-card-section>
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
        <q-card-section class="bg-primary text-accent text-h6">Oder für Breitensportlizenzinhaber:innen (digitale Anmeldung)</q-card-section>
        <q-card-section>Die Veranstaltung muss in der BDR-App gebucht werden.</q-card-section>
      </q-card>
    </div>
    <div v-if="props.category === EEvent.RTF" class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">Sternfahrtmodus</q-card-section>
        <q-card-section>
          Dieser Modus gilt weiterhin.<br />
          Dafür kann man im Ziel die nächst längere Strecke einscannen.
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import EEvent from 'src/models/enums/EEvent'

const props = defineProps<{ category: EEvent }>()
</script>
