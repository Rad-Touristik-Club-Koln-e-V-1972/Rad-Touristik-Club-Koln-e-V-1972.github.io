<template>
    <v-card-text id="CConsentDataUsage">
        <v-row>
            <v-col>
                Der Vereinsvorstand weist hiermit darauf hin, dass ausreichende technische Maßnahmen zur Gewährleistung des Datenschutzes getroffen wurden. Dennoch kann bei einer
                Veröffentlichung von personenbezogenen Mitgliederdaten im Internet ein umfassender Datenschutz nicht garantiert werden. Daher nimmt das Vereinsmitglied die Risiken
                für eine eventuelle Persönlichkeitsrechtsverletzung zur Kenntnis und ist sich bewusst, dass:
            </v-col>
        </v-row>
        <v-row dense>
            <v-col>
                <ul>
                    <li>die personenbezogenen Daten auch in Staaten abrufbar sind, die keine der Bundesrepublik Deutschland vergleichbaren Datenschutzbestimmungen kennen,</li>
                    <li>
                        die Vertraulichkeit, die Integrität (Unverletzlichkeit), die Authentizität (Echtheit) und die Verfügbarkeit der personenbezogenen Daten nicht garantiert
                        ist.
                    </li>
                </ul>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col>Das Vereinsmitglied trifft die Entscheidung zur Veröffentlichung seiner Daten im Internet freiwillig und kann seine Einwilligung jederzeit widerrufen.</v-col>
        </v-row>
        <v-row>
            <v-col>
                <div class="text-center"><b>Erklärung</b></div>
                "Ich bestätige das Vorstehende zur Kenntnis genommen zu haben und willige ein, dass der <b>RTC Köln e.V. 1972</b> folgende Daten zu meiner Person:
            </v-col>
        </v-row>
        <v-row dense>
            <v-col>
                <b>Allgemeine Daten</b>
                <ul>
                    <li>Nachname, Vorname</li>
                    <li>Bildhafte Darstellungen (in Printmaterialien, auf der Internetseite, auf Social Media-Kanälen)</li>
                    <li>Sonstige Daten (z.B.: Leistungsergebnisse, Lizenzen, Mannschaftsgruppe u.ä.)</li>
                </ul>
            </v-col>
            <v-col>
                <b>Spezielle Daten von Funktionsträgern</b>
                <ul>
                    <li>Anschrift</li>
                    <li>Telefonnummer</li>
                    <li>Faxnummer</li>
                    <li>Email-Adresse</li>
                </ul>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col>wie angegeben in folgender Internetseite des Vereins <a href="https://www.rtc-koeln.de" target="_blank">www.rtc-koeln.de</a> veröffentlichen darf."</v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field v-model="_value.location" dense label="Ort" @input="emitUpdate" />
            </v-col>
            <v-col>
                <c-date-picker v-model="_value.date" dense label="Datum" @input="emitUpdate" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <c-signature-form
                    v-model="_value.signature"
                    label="Unterschrift (Bei Minderjährigen: Unterschrift des Erziehungsberechtigten)"
                    :readonly="readonly"
                    @input="emitUpdate"
                />
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import CSignatureForm from '~/components/pages/membership-registration/CSignatureForm.vue'
import CDatePicker from '~/components/pages/membership-registration/personal-data/miscellaneous/CDatePicker.vue'
import Signature from '~/models/entities/membership-registration/Signature'

const emits = defineEmits<(e: 'input', value: Signature) => void>()
const props = defineProps({
    readonly: { default: false, type: Boolean },
    value: { required: true, type: Signature },
})

const _value = ref()

const emitUpdate = () => emits('input', _value.value)

onMounted(() => {
    _value.value = props.value ?? new Signature()
})
</script>
