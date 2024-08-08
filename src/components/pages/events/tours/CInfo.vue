<template>
  <q-card flat>
    <q-card-section>
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
                    <td class="text-right text-no-wrap">{{ it.startText ?? (it.end ? `${it.start} - ${it.end}` : it.start) }}</td>
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
            <q-card-section v-for="[first, second] in fgs" :key="first" flat>
              <q-markup-table flat>
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
              {{ first.text }}
            </q-card-section>
          </q-card>
        </div>
        <div class="col-auto">
          <q-card class="text-no-wrap">
            <q-card-section class="bg-primary text-accent">
              <div class="text-h6">Strecken</div>
              <div v-if="$q.platform.is.mobile" class="text-subtitle2">Bitte horizontal scrollen</div>
            </q-card-section>
            <q-card-section>
              <q-markup-table flat>
                <thead>
                  <tr>
                    <th class="text-left" scope="col">Name</th>
                    <th class="text-left" scope="col">Startzeit</th>
                    <th class="text-left" scope="col">Streckenlänge</th>
                    <th class="text-left" scope="col">Höhenmeter</th>
                    <th class="text-left" scope="col">Profil</th>
                    <th class="text-left" scope="col">Kontrollen</th>
                    <th class="text-right" scope="col">Links</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="it in props.tracks.filter((t) => t.controls)" :key="it.id" :class="it.important ? 'text-primary' : ''">
                    <td>{{ it.time.name }}</td>
                    <td>{{ dateTime.formatTime(it.time.start, it.time.end) }}</td>
                    <td>{{ it.length }}km</td>
                    <td>{{ it.height }}</td>
                    <td>{{ it.profile }}</td>
                    <td>{{ it.controls }}</td>
                    <td>
                      <ul>
                        <li v-for="(url, key) in it.urls" :key class="my-2" style="list-style: none">
                          <a :href="url.toString()">{{ key }}</a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </q-markup-table>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useQuasar } from 'quasar'
import Fee from 'src/models/entities/Fee'
import Time from 'src/models/entities/events/Time'
import Location from 'src/models/entities/events/tours/Location'
import Track from 'src/models/entities/events/tours/events/Track'
import useDateTime from 'src/utils/DateTime'

// noinspection LocalVariableNamingConventionJS
const $q = useQuasar()

const props = defineProps<{ fees: Fee[]; location: Location; times: Time[]; tracks: Track[] }>()

const dateTime = useDateTime()

const fgs = computed(() => Map.groupBy(props.fees, (it) => it.feeGroup))
</script>
