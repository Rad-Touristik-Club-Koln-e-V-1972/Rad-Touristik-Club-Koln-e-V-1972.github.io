<template>
    <q-card flat>
        <q-card-section>
            <div class="row">
                <div class="col">
                    <q-timeline :layout="$q.platform.is.mobile ? 'dense' : 'loose'">
                        <q-timeline-entry v-for="(it, index) in props.tracks" :key="it.id" :side="index % 2 === 0 ? 'right' : 'left'" :title="it.name">
                            <q-card>
                                <q-card-section class="bg-primary text-accent text-h6">{{ it.name }}</q-card-section>
                                <q-card-section>
                                    <span class="text-pre-wrap" v-html="it.text" />
                                </q-card-section>
                            </q-card>
                        </q-timeline-entry>
                    </q-timeline>
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>
<script lang="ts" setup>
import Track from 'src/models/entities/events/tours/events/Track'

const props = defineProps<{ tracks: Track[] }>()
</script>
