<template>
    <v-card v-if="value" id="VIndex" flat>
        <v-toolbar color="primary" flat>
            <v-toolbar-title class="accent--text">{{ value.title }}</v-toolbar-title>
        </v-toolbar>
        <v-card-subtitle>Stand: {{ dateTime.format(value.lastChange, null, true) }}</v-card-subtitle>
        <v-card-text>
            <v-tabs v-model="tab" background-color="primary" centered icons-and-text show-arrows>
                <v-tabs-slider />
                <v-tab href="#tab-general">
                    Allgemein
                    <v-icon color="white">{{ mdiBike }}</v-icon>
                </v-tab>
                <v-tab href="#tab-info">
                    Info
                    <v-icon color="white">{{ mdiInformation }}</v-icon>
                </v-tab>
                <v-tab href="#tab-tracks">
                    Strecken
                    <v-icon color="white">{{ mdiGoKartTrack }}</v-icon>
                </v-tab>
                <v-tab href="#tab-registration">
                    Anmeldung
                    <v-icon color="white">{{ mdiCurrencyEur }}</v-icon>
                </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <v-tab-item value="tab-general"><c-general :images="value.images" :text="value.text" /></v-tab-item>
                <v-tab-item value="tab-info"><c-info :fees="value.fees" :location="value.location" :times="value.times" :tracks="value.tracks" /></v-tab-item>
                <v-tab-item value="tab-tracks"><c-tracks :tracks="value.tracks" /></v-tab-item>
                <v-tab-item value="tab-registration"><c-registration /></v-tab-item>
            </v-tabs-items>
        </v-card-text>
        <d-popup v-if="value.popup" :value="value.popup" />
    </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { mdiBike, mdiCurrencyEur, mdiGoKartTrack, mdiInformation } from '@mdi/js'
import DPopup from '~/components/pages/DPopup.vue'
import CGeneral from '~/components/pages/events/tours/events/rtfs/CGeneral.vue'
import CInfo from '~/components/pages/events/tours/events/rtfs/CInfo.vue'
import CRegistration from '~/components/pages/events/tours/events/rtfs/CRegistration.vue'
import CTracks from '~/components/pages/events/tours/events/rtfs/CTracks.vue'
import Event from '~/models/entities/events/tours/Event'
import { useTourStore } from '~/store/events/Tour'
import useDateTime from '~/utils/DateTime'

const dateTime = useDateTime()

const value: Event | undefined = useTourStore().rtf

const tab = ref('tab-info')
</script>
