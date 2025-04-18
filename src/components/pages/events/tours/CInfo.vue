<template>
  <div class="justify-center q-gutter-lg row">
    <div class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">Adresse</q-card-section>
        <q-card-section>
          <b>{{ props.location.title }}</b>
          <br />
          {{ props.location.street }}
          <br />
          {{ props.location.zipCode }} {{ props.location.city }}
          <div v-if="props.location.url">
            <br />
            <a :href="props.location.url.toString()" target="_blank">Anfahrt bei Google Maps</a>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">Zeiten</q-card-section>
        <q-card-section>
          <q-markup-table flat>
            <tbody>
              <tr v-for="it in props.times" :key="it.id">
                <td class="text-right text-no-wrap">{{ it.end ? `${it.start} - ${it.end}` : it.start }}</td>
                <td>{{ it.name }}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-auto">
      <q-card>
        <q-card-section class="bg-primary text-accent text-h6">Gebühren</q-card-section>
        <q-card-section>
          <q-markup-table v-for="[first, second] in fgs" :key="first" flat>
            <thead v-if="first">
              <tr>
                <th :id="first" colspan="2">
                  <div class="text-bold text-body2">{{ first }}</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="{ id, name, price } in second" :key="id">
                <td>{{ price }}€</td>
                <td class="text-left" v-html="name" />
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
          <div class="text-subtitle2">ALLE Strecken sind ausgeschildert!</div>
          <div v-if="$q.platform.is.mobile" class="text-subtitle2">Bitte horizontal scrollen</div>
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
              <tr v-for="it in props.tracks.filter((t) => t.controls)" :key="it.id" :class="it.important ? 'text-primary' : ''">
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
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useQuasar } from 'quasar'
import type Control from 'src/models/entities/events/tours/Control'
import type Fee from 'src/models/entities/events/tours/events/Fee'
import type Time from 'src/models/entities/events/tours/events/Time'
import type Track from 'src/models/entities/events/tours/events/Track'
import useDateTime from 'src/utils/DateTime'

// noinspection LocalVariableNamingConventionJS
const $q = useQuasar()

const props = defineProps<{ feeHints?: string; fees: Fee[]; location: Control; times: Time[]; tracks: Track[] }>()

const dateTime = useDateTime()

const fgs = computed(() => Map.groupBy(props.fees, (it) => it.group))
</script>
