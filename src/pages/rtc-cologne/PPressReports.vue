<template>
    <q-card flat>
        <q-card-section class="bg-primary text-accent text-h6">Presseberichte</q-card-section>
        <q-card-section>
            <q-timeline :layout="$q.platform.is.mobile ? 'dense' : 'loose'">
                <q-timeline-entry v-for="(it, idx) in value" :key="it.id" :side="idx % 2 === 0 ? 'right' : 'left'" :subtitle="dateTime.format(it.date)" :title="it.title">
                    <q-card style="max-width: 40em">
                        <q-card-section>
                            <masonry-wall :column-width="280" :gap="16" :items="it.images">
                                <template #default="{ index }">
                                    <d-view :start-index="index" :model-value="it.images" />
                                </template>
                            </masonry-wall>
                        </q-card-section>
                    </q-card>
                </q-timeline-entry>
            </q-timeline>
        </q-card-section>
    </q-card>
</template>

<script lang="ts" setup>
import DView from 'components/pages/rtc-cologne/galleries/album/DView.vue'
import usePressReportsStore from 'stores/rtc-cologne/PressReports'
import useDateTime from 'src/utils/DateTime'

const dateTime = useDateTime()

const value = usePressReportsStore().all
</script>
