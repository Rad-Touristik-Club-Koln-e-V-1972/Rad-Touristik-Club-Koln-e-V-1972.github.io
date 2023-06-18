<template>
    <q-card v-if="value" id="VWinter" flat>
        <q-card-section class="bg-primary text-accent text-h6">{{ value.title }}</q-card-section>
        <q-card-section>
            <c-slideshow height="200px" :model-value="value.imageUrls" />
        </q-card-section>
        <q-card-section>
            <div class="justify-center q-gutter-lg row">
                <div class="col-auto">
                    <q-card max-width="40em">
                        <q-card-section class="bg-primary text-accent text-h6">Details</q-card-section>
                        <q-card-section>
                            <q-markup-table flat>
                                <tbody>
                                    <tr>
                                        <td class="text-right" v-text="'Streckenlänge:'" />
                                        <td v-text="`${value.length} km`" />
                                    </tr>
                                    <tr>
                                        <td class="text-right" v-text="'Höhenmeter:'" />
                                        <td v-text="`ca. ${value.height} hm`" />
                                    </tr>
                                    <tr>
                                        <td class="text-right" v-text="'Geschwindigkeit:'" />
                                        <td v-text="`${value.speed} km/h`" />
                                    </tr>
                                    <tr>
                                        <td class="text-no-wrap text-right" v-text="'Letzte Änderung:'" />
                                        <td v-text="dateTime.format(value.lastChange, null, true)" />
                                    </tr>
                                </tbody>
                            </q-markup-table>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="col-auto">
                    <q-card max-width="40em">
                        <q-card-section>
                            <span class="text-pre-wrap" v-html="value.text" />
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>

<script lang="ts" setup>
import CSlideshow from 'components/pages/CSlideshow.vue'
import Training from 'src/models/entities/events/Training'
import useTrainingStore from 'stores/events/Training'
import useDateTime from 'src/utils/DateTime'

const dateTime = useDateTime()

const value: Training | undefined = useTrainingStore().winter
</script>
