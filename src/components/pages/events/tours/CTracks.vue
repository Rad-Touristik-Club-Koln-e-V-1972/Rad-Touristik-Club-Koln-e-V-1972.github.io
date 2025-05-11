<template>
  <q-card flat>
    <q-card-section>
      <div class="row">
        <div class="col">
          <q-timeline :layout="$q.platform.is.mobile ? 'dense' : 'loose'">
            <q-timeline-entry v-for="(it, index) in filteredTracks" :key="it.id" :side="index % 2 === 0 ? 'right' : 'left'">
              <template #default>
                <q-card flat>
                  <q-card-section>
                    <span class="text-pre-wrap" v-html="it.text" />
                  </q-card-section>
                </q-card>
              </template>
              <template #title>
                <q-card flat>
                  <q-card-section class="bg-primary text-accent text-h6">{{ it.name }}</q-card-section>
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
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useQuasar } from 'quasar'
import type Track from 'src/models/entities/events/tours/events/Track'

// noinspection LocalVariableNamingConventionJS
const $q = useQuasar()

const props = defineProps<{ tracks: Track[] }>()

const route = useRoute()

const filteredTracks = computed(() => {
  return props.tracks.filter((t) => route.name === 'events-tours-rtfs-family' || !t.length).filter((t) => t.text)
})
</script>
