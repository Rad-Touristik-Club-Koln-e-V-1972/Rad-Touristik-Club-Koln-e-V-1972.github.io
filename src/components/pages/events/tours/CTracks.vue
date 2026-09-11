<template>
  <q-card flat>
    <div class="col-auto text-no-wrap">
      <q-card>
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
    <q-card-section>
      <div class="row">
        <div class="col">
          <q-timeline :layout="$q.platform.is.mobile ? 'dense' : 'loose'">
            <q-timeline-entry
              v-for="(it, index) in filteredTracks"
              :key="it.id"
              :side="index % 2 === 0 ? 'right' : 'left'"
            >
              <template #default>
                <q-card flat>
                  <q-card-section>
                    <span class="text-pre-wrap" v-html="it.text" />
                  </q-card-section>
                </q-card>
              </template>
              <template #title>
                <q-card flat>
                  <q-card-section class="bg-primary text-accent text-h6">{{
                    it.name
                  }}</q-card-section>
                </q-card>
              </template>
            </q-timeline-entry>
          </q-timeline>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useQuasar } from "quasar";
import type Track from "@/models/entities/events/tours/events/Track";
import useDateTime from "@/utils/DateTime";

// noinspection LocalVariableNamingConventionJS
const $q = useQuasar();

const props = defineProps<{ tracks: Track[] }>();

const route = useRoute();

const dateTime = useDateTime();

const filteredTracks = computed(() => {
  return props.tracks
    .filter(t => route.name === "events-tours-rtfs-family" || !t.length)
    .filter(t => t.text);
});
</script>
