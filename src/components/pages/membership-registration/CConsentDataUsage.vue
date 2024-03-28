<template>
    <q-card-section>
        <div class="row">
            <div class="col">
                Der Vereinsvorstand weist hiermit darauf hin, dass ausreichende technische Maßnahmen zur Gewährleistung des Datenschutzes getroffen wurden. Dennoch kann bei einer
                Veröffentlichung von personenbezogenen Mitgliederdaten im Internet ein umfassender Datenschutz nicht garantiert werden. Daher nimmt das Vereinsmitglied die Risiken
                für eine eventuelle Persönlichkeitsrechtsverletzung zur Kenntnis und ist sich bewusst, dass:
            </div>
        </div>
        <div class="row">
            <div class="col">
                <ul>
                    <li>die personenbezogenen Daten auch in Staaten abrufbar sind, die keine der Bundesrepublik Deutschland vergleichbaren Datenschutzbestimmungen kennen,</li>
                    <li>
                        die Vertraulichkeit, die Integrität (Unverletzlichkeit), die Authentizität (Echtheit) und die Verfügbarkeit der personenbezogenen Daten nicht garantiert
                        ist.
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col">
                Das Vereinsmitglied trifft die Entscheidung zur Veröffentlichung seiner Daten im Internet freiwillig und kann seine Einwilligung jederzeit widerrufen.
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="text-bold text-center">Erklärung</div>
                "Ich bestätige das Vorstehende zur Kenntnis genommen zu haben und willige ein, dass der <b>RTC Köln e.V. 1972</b> folgende Daten zu meiner Person:
            </div>
        </div>
        <div class="row">
            <div class="col">
                <b>Allgemeine Daten</b>
                <ul>
                    <li>Nachname, Vorname</li>
                    <li>Bildhafte Darstellungen (in Printmaterialien, auf der Internetseite, auf Social Media-Kanälen)</li>
                    <li>Sonstige Daten (z.B.: Leistungsergebnisse, Lizenzen, Mannschaftsgruppe u.ä.)</li>
                </ul>
            </div>
            <div class="col">
                <b>Spezielle Daten von Funktionsträgern</b>
                <ul>
                    <li>Anschrift</li>
                    <li>Telefonnummer</li>
                    <li>Faxnummer</li>
                    <li>Email-Adresse</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col">
                wie angegeben in folgender Internetseite des Vereins <a href="https://www.rtc-koeln.de" target="_blank">www.rtc-koeln.de</a> veröffentlichen darf."
            </div>
        </div>
        <div class="row">
            <div class="col">
                <q-input v-model="modelValue.location" label="Ort" />
            </div>
            <div class="col">
                <c-date-picker v-model="modelValue.date" label="Datum" />
            </div>
        </div>
        <div class="row">
            <div class="col">
                <c-signature-form v-model="modelValue.signature" label="Unterschrift (Bei Minderjährigen: Unterschrift des Erziehungsberechtigten)" />
            </div>
        </div>
    </q-card-section>
</template>

<script lang="ts" setup>
import { defineModel } from 'vue'
import CSignatureForm from 'components/pages/membership-registration/CSignatureForm.vue'
import CDatePicker from 'components/pages/membership-registration/personal-data/miscellaneous/CDatePicker.vue'
import Signature from 'src/models/entities/membership-registration/Signature'

const modelValue = defineModel<Signature>({ required: true })
</script>
