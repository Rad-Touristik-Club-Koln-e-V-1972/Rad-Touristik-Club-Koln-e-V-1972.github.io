<template>
    <q-card flat>
        <q-card-section class="bg-primary text-accent text-h6">Mitgliedschaft beantragen</q-card-section>
        <q-tabs v-model="tab" active-bg-color="primary" active-color="accent" indicator-color="secondary">
            <q-tab alert label="Infos" name="infos" />
            <q-tab alert label="Bewerbung" name="bewerbung" />
        </q-tabs>
        <q-tab-panels v-model="tab" keep-alive>
            <q-tab-panel name="infos">
                <q-card-section class="text-subtitle1">
                    <div class="row">
                        <div class="col-auto">
                            Es gibt viele Vorteile, wenn man in einem Radsportverein Mitglied ist.
                            <br />
                            <b>Wir freuen uns, dass Du Dich dazu entschieden hast, dem RTC Köln e.V. 1972 beizutreten.</b>
                            <br />
                            Dazu müsstest Du bitte noch das Formular im Tab "Bewerbung" vollständig ausfüllen.
                        </div>
                        <div class="col-1" />
                        <div class="col-auto q-mt-sm">
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
                        </div>
                    </div>
                    <br />
                    <div class="row justify-around">
                        <div class="col-auto">
                            <q-card>
                                <q-card-section class="bg-primary text-accent">Beitragstabelle</q-card-section>
                                <q-card-section>
                                    <q-markup-table flat>
                                        <thead>
                                            <th class="text-left">Beitrags-/Mitgliedsform</th>
                                            <th class="text-right">Jahresbeitrag</th>
                                        </thead>
                                        <tbody>
                                            <tr v-for="it in fees.filter((f) => f.name)" :key="it.id">
                                                <td v-html="it.name" />
                                                <td class="text-right text-no-wrap" v-text="it.price ? `${it.price} €` : 'frei'" />
                                            </tr>
                                        </tbody>
                                    </q-markup-table>
                                </q-card-section>
                                <q-card-section class="text-body2">Der RTC Köln bezuschusst den Kauf des Vereinstrikots einmalig mit 25,00 EUR.</q-card-section>
                            </q-card>
                        </div>
                        <div class="col-1" />
                        <div class="col" style="max-width: 25em">
                            <d-view class="q-mt-sm" :model-value="images" />
                        </div>
                    </div>
                </q-card-section>
            </q-tab-panel>
            <q-tab-panel name="bewerbung">
                <q-card-section>
                    <q-stepper v-model="step" animated keep-alive vertical>
                        <q-step :done="step > 1" :name="1" title="Personendaten">
                            <q-stepper-navigation>
                                <c-person v-model="value.personalData" />
                                <q-btn color="primary" label="Weiter" @click="step += 1" />
                            </q-stepper-navigation>
                        </q-step>
                        <q-step :done="step > 2" :name="2" title="Kontaktdaten">
                            <q-stepper-navigation>
                                <c-contact v-model="value.personalData" />
                                <q-btn color="primary" label="Weiter" @click="step += 1" />
                                <q-btn class="q-ml-sm" color="primary" flat label="Zurück" @click="step -= 1" />
                            </q-stepper-navigation>
                        </q-step>
                        <q-step :done="step > 3" :name="3" title="Personendaten - Sonstiges">
                            <q-stepper-navigation>
                                <c-miscellaneous v-model="value.personalData" />
                                <q-btn color="primary" label="Weiter" @click="step += 1" />
                                <q-btn class="q-ml-sm" color="primary" flat label="Zurück" @click="step -= 1" />
                            </q-stepper-navigation>
                        </q-step>
                        <q-step :done="step > 4" :name="4" title="Mitgliedsbeitrag">
                            <q-stepper-navigation>
                                <c-membership-fee v-model="value.membershipFee" />
                                <q-btn color="primary" label="Weiter" @click="step += 1" />
                                <q-btn class="q-ml-sm" color="primary" flat label="Zurück" @click="step -= 1" />
                            </q-stepper-navigation>
                        </q-step>
                        <q-step :done="step > 5" :name="5" title="BDR-Mitgliedschaft">
                            <q-stepper-navigation>
                                <c-bdr-membership v-model="value.bdrMembership" />
                                <q-btn color="primary" label="Weiter" @click="step += 1" />
                                <q-btn class="q-ml-sm" color="primary" flat label="Zurück" @click="step -= 1" />
                            </q-stepper-navigation>
                        </q-step>
                        <q-step :done="step > 6" :name="6" title="Unterschrift">
                            <q-stepper-navigation>
                                <c-signature v-model="value.signature" />
                                <q-btn color="primary" label="Weiter" @click="step += 1" />
                                <q-btn class="q-ml-sm" color="primary" flat label="Zurück" @click="step -= 1" />
                            </q-stepper-navigation>
                        </q-step>
                        <q-step :done="step > 7" :name="7" title="Einwilligungserklärung Datenverarbeitung">
                            <q-stepper-navigation>
                                <c-consent-data-usage v-model="value.consentPrivacyPolicy" />
                                <c-pdf-form :model-value="value" />
                                <q-btn class="q-ml-sm" color="primary" flat label="Zurück" @click="step -= 1" />
                            </q-stepper-navigation>
                        </q-step>
                    </q-stepper>
                </q-card-section>
            </q-tab-panel>
        </q-tab-panels>
    </q-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CBdrMembership from 'components/pages/membership-registration/CBdrMembership.vue'
import CConsentDataUsage from 'components/pages/membership-registration/CConsentDataUsage.vue'
import CMembershipFee from 'components/pages/membership-registration/CMembershipFee.vue'
import CPdfForm from 'components/pages/membership-registration/CPdfForm.vue'
import CSignature from 'components/pages/membership-registration/CSignature.vue'
import CContact from 'components/pages/membership-registration/personal-data/CContact.vue'
import CMiscellaneous from 'components/pages/membership-registration/personal-data/CMiscellaneous.vue'
import CPerson from 'components/pages/membership-registration/personal-data/CPerson.vue'
import DView from 'components/pages/rtc-cologne/galleries/album/DView.vue'
import MembershipRegistrationBuilder from 'src/models/builder/MembershipRegistrationBuilder'
import BdrMembershipBuilder from 'src/models/builder/membership-registration/BdrMembershipBuilder'
import MembershipFeeBuilder from 'src/models/builder/membership-registration/MembershipFeeBuilder'
import PersonalDataBuilder from 'src/models/builder/membership-registration/PersonalDataBuilder'
import SignatureBuilder from 'src/models/builder/membership-registration/SignatureBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import useMembershipRegistrationStore from 'stores/MembershipRegistration'

const fees = useMembershipRegistrationStore().fees
const images = [
    new GalleryEntryBuilder()
        .setId('19478109-bff3-4116-a500-97401dedfb8b')
        .setImageUrl('content.rtc-koeln.de/pages/membership-registration/Din-A4-Flyer-Vorteile-Verein-RGB.pdf')
        .setPreviewUrl('content.rtc-koeln.de/pages/membership-registration/Din-A4-Flyer-Vorteile-Verein-RGB.avif')
        .buildGalleryEntry(),
]
const step = ref(7)
const tab = ref('infos')
const value = ref(
    new MembershipRegistrationBuilder()
        .setBdrMembership(new BdrMembershipBuilder().buildBdrMembership())
        .setConsentPrivacyPolicy(new SignatureBuilder().buildSignature())
        .setMembershipFee(new MembershipFeeBuilder().setSignature(new SignatureBuilder().buildSignature()).buildMembershipFee())
        .setPersonalData(new PersonalDataBuilder().buildPersonalData())
        .setSignature(new SignatureBuilder().buildSignature())
        .buildMembershipRegistration(),
)
</script>
