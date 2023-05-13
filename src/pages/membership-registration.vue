<template>
    <v-card id="VMembershipRegistration" flat>
        <v-toolbar color="primary" flat>
            <v-toolbar-title class="accent--text">Mitgliedschaft beantragen</v-toolbar-title>
        </v-toolbar>
        <v-card-subtitle>
            <v-row>
                <v-col>
                    Es gibt viele Vorteile, wenn man in einem Radsportverein Mitglied ist.
                    <br />
                    <b>Wir freuen uns, dass Du Dich dazu entschieden hast, dem RTC Köln e.V. 1972 beizutreten.</b>
                    <br />
                    Dazu müsstest Du bitte noch das folgende Formular vollständig ausfüllen.
                </v-col>
                <v-col cols="auto">
                    RTC Köln e.V. 1972
                    <br />
                    Postfach 99 01 03
                    <br />
                    51083 Köln
                    <br />
                    Volksbank Köln Bonn eG
                    <br />
                    IBAN: DE73 3806 0186 6601 1910 14
                    <br />
                    BIC: GENODED1BRS
                    <br />
                    <a href="https://www.rtc-koeln.de" target="_blank">www.rtc-koeln.de</a>
                </v-col>
            </v-row>
        </v-card-subtitle>
        <v-card-text>
            <v-row>
                <v-col cols="3">
                    <d-view :start-index="0" :value="images" />
                </v-col>
                <v-col>
                    <v-stepper v-model="step" non-linear vertical>
                        <v-stepper-step :complete="step > 1" step="1">Personendaten</v-stepper-step>
                        <v-stepper-content step="1">
                            <c-person v-model="personalData" />
                            <v-btn color="primary" @click="step += 1">Weiter</v-btn>
                        </v-stepper-content>
                        <v-stepper-step :complete="step > 2" step="2">Kontaktdaten</v-stepper-step>
                        <v-stepper-content step="2">
                            <c-contact v-model="personalData" />
                            <v-btn color="primary" @click="step += 1">Weiter</v-btn>
                            <v-btn text @click="step -= 1">Zurück</v-btn>
                        </v-stepper-content>
                        <v-stepper-step :complete="step > 3" step="3">Personendaten - Sonstiges</v-stepper-step>
                        <v-stepper-content step="3">
                            <c-miscellaneous v-model="personalData" />
                            <v-btn color="primary" @click="step += 1">Weiter</v-btn>
                            <v-btn text @click="step -= 1">Zurück</v-btn>
                        </v-stepper-content>
                        <v-stepper-step :complete="step > 4" step="4">Mitgliedsbeitrag</v-stepper-step>
                        <v-stepper-content step="4">
                            <c-membership-fee v-model="membershipFee" />
                            <v-btn color="primary" @click="step += 1">Weiter</v-btn>
                            <v-btn text @click="step -= 1">Zurück</v-btn>
                        </v-stepper-content>
                        <v-stepper-step :complete="step > 5" step="5">BDR-Mitgliedschaft</v-stepper-step>
                        <v-stepper-content step="5">
                            <c-bdr-membership v-model="bdrMembership" />
                            <v-btn color="primary" @click="step += 1">Weiter</v-btn>
                            <v-btn text @click="step -= 1">Zurück</v-btn>
                        </v-stepper-content>
                        <v-stepper-step :complete="step > 6" step="6">Unterschrift</v-stepper-step>
                        <v-stepper-content step="6">
                            <c-signature v-model="signature" />
                            <v-btn color="primary" @click="step += 1">Weiter</v-btn>
                            <v-btn text @click="step -= 1">Zurück</v-btn>
                        </v-stepper-content>
                        <v-stepper-step :complete="step > 7" step="7">Einwilligungserklärung Datenverarbeitung</v-stepper-step>
                        <v-stepper-content step="7">
                            <c-consent-data-usage v-model="consentDataUsage" />
                            <v-btn color="primary">Weiter</v-btn>
                            <v-btn text @click="step -= 1">Zurück</v-btn>
                        </v-stepper-content>
                    </v-stepper>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CBdrMembership from '~/components/pages/membership-registration/CBdrMembership.vue'
import CConsentDataUsage from '~/components/pages/membership-registration/CConsentDataUsage.vue'
import CMembershipFee from '~/components/pages/membership-registration/CMembershipFee.vue'
import CSignature from '~/components/pages/membership-registration/CSignature.vue'
import CContact from '~/components/pages/membership-registration/personal-data/CContact.vue'
import CMiscellaneous from '~/components/pages/membership-registration/personal-data/CMiscellaneous.vue'
import CPerson from '~/components/pages/membership-registration/personal-data/CPerson.vue'
import DView from '~/components/pages/rtc-cologne/galleries/album/DView.vue'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

const bdrMembership = ref()
const consentDataUsage = ref()
const membershipFee = ref()
const personalData = ref()
const signature = ref()
const step = ref(1)

const images = [
    new GalleryEntryBuilder()
        .setId('19478109-bff3-4116-a500-97401dedfb8b')
        .setImageUrl('content.rtc-koeln.de/pages/membership-registration/Din-A4-Flyer-Vorteile-Verein-RGB.pdf')
        .setPreviewUrl('content.rtc-koeln.de/pages/membership-registration/preview/preview.Din-A4-Flyer-Vorteile-Verein-RGB.png')
        .build(),
]
</script>
