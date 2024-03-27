<template>
    <q-card>
        <q-card-section>
            <c-slideshow :gallery-entries="value.imageUrls" height="200px" />
        </q-card-section>
        <q-card-section class="bg-primary text-accent text-h6">{{ value.title }}</q-card-section>
    </q-card>
    <q-card class="row">
        <q-card-section class="col-auto">
            <q-markup-table>
                <tbody>
                    <tr>
                        <td class="text-bold">Trainingstag:</td>
                        <td>{{ value.day }}</td>
                    </tr>
                    <tr>
                        <td class="text-bold">Ausweichtrainingstag:</td>
                        <td>{{ value.alternativeDay }}</td>
                    </tr>
                    <tr>
                        <td class="text-bold">Treffpunkt:</td>
                        <td>{{ value.location }}</td>
                    </tr>
                    <tr>
                        <td class="text-bold">Abfahrt:</td>
                        <td>{{ value.departure }}</td>
                    </tr>
                    <tr>
                        <td class="text-bold">Streckenlänge:</td>
                        <td>{{ value.length }}</td>
                    </tr>
                    <tr>
                        <td class="text-bold">Tempo:</td>
                        <td>{{ value.speed }}</td>
                    </tr>
                </tbody>
            </q-markup-table>
        </q-card-section>
        <q-card-section class="col-auto">
            <span class="text-pre-wrap" v-html="value.text" />
        </q-card-section>
    </q-card>
</template>

<script lang="ts" setup>
import CSlideshow from 'components/pages/CSlideshow.vue'
import useTrainingStore from 'stores/events/Training'

const value = useTrainingStore().training
</script>
