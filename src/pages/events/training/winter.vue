<template>
    <v-card id="VWinter" flat>
        <v-card-title>
            <v-toolbar color="primary" flat>
                <v-toolbar-title class="accent--text text-body-1 text-sm-body-2 text-md-h6 text-lg-h5 text-xl-h4">Wintertraining</v-toolbar-title>
            </v-toolbar>
        </v-card-title>
        <v-card-text>
            <v-timeline :dense="vuetify?.breakpoint.mobile">
                <v-timeline-item>
                    <template #opposite>
                        <span class="font-weight-bold text-h5 primary--text" v-text="'15.01.2022'" />
                    </template>
                    <v-card>
                        <v-toolbar color="primary" dense flat>
                            <v-toolbar-title class="accent--text">15.01.2022</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <pre class="black--text text-pre-wrap">
Heute trafen sich fünf dick verpackte Unentwegte (Albert, Jürgen, Manni, Robert und ich) vom RTC Köln, um ihren während der Weihnachtszeit angesetzten überflüssigen Pfunden den Kampf anzusagen.
Das Wetter sollte trocken bleiben, mit ein paar sonnigen Abschnitten – aber halt kalt.

Los ging es um 11:00 Uhr an Gulaschkanone unter der Rodenkirchener Brücke.
Das Thermometer zeigte +2° Grad….
Das Ziel war Heimerzheim und dort die Bäckerei Voigt.

Es ging über Rondorf, Mechernich, Berzdorf und am Entenfang vorbei, über Sechtem nach Waldorf.
Dort wartete der erste und einzige Anstieg auf uns, der bei der Kälte das Atmen schwer machte.
Die Anzeige im Garmin zeigte, oben angekommen, -1°Grad.
Um so größer wurde die Sehnsucht nach einem warmen Ort, den wir kurz darauf erreichten.
Angekommen, ging die Eincheckprozedur los.
Maske auf, Hände desinfizieren, Impfnachweis raus, Personalausweis.
Ein Glück, das wir alle dreifach gedopt waren… Bestellt wurde teilweise dann allerdings, als ob der Hungertod sehr nahe wäre….

Nach dem die Kohlehydratspeicher wieder gut gefüllt waren, ging es zurück durch die Felder nach Rösberg.
Die rasante Abfahrt wurde für vier von uns mittendrin abrupt durch eine rote Ampel gestoppt.
Nur einer kam bei grün durch – Manni, weil er oben richtig Schwung genommen hatte…
Über Merten ging es dann nach Sechtem zurück auf den Hinweg.

Fazit: Es wehte zwar ein kalter Ostwind, die Sonne hat sich auch nicht blicken lassen.
Aber es hat uns Spaß gemacht, sich wieder gemeinsam mit dem Rad zu bewegen, in einem Café zu sitzen, das kaum belegt war und miteinander zu reden.

Klaus
                          </pre
                            >
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
// TODO WORKAROUND UNTIL VUETIFY 2.7
import { getCurrentInstance, ref } from 'vue'

const vuetify = ref(getCurrentInstance()?.proxy?.$vuetify)
</script>
