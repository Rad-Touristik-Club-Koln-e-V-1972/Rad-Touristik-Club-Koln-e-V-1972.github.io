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
import { computed } from "vue";
import type Fee from "@/models/entities/events/tours/events/Fee";
import type Time from "@/models/entities/events/tours/events/Time";

const props = defineProps<{
  feeHints?: string | undefined;
  fees: Fee[];
  times: Time[];
}>();

const fgs = computed(() => Map.groupBy(props.fees, it => it.group));
</script>
