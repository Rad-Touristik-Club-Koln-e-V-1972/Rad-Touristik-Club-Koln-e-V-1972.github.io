import { defineStore } from 'pinia'
import TrainingBuilder from '~/models/builder/events/TrainingBuilder'
import Training from '~/models/entities/events/Training'
import ETraining from '~/models/enums/events/ETraining'

export const useTrainingStore = defineStore('training', {
    getters: {
        winter: (state): Training => state.trainings.find((it) => it.category === ETraining.wintertraining) as Training,
    },
    state: () => ({
        trainings: [
            new TrainingBuilder()
                .height('300-1000')
                .lastChange('2022-11-16')
                .length('60-130')
                .speed('21-22')
                .text(
                    `Möchtet Ihr in den Wintermonaten nicht alleine trainieren?
Dann kommt zum RTC Köln e.V.
Ihr seid herzlich willkommen!
Wir haben einige Runden rund um Köln, die wir – je nach Zeit, Witterung und Gruppenstärke – unter die Räder nehmen.
Start ist entweder an der Rodenkirchener Brücke (linksrheinisch) oder an der Schmitzebud.
Alle Strecken sind landschaftlich schön und zwischen 60 km (~300 hm) und 130 km (~1000 hm) lang.
Wir fahren moderat, sodass sich jeder anschließen kann.
Meist haben wir einen Schnitt von 21 bis 22 km/h.

Gemeinsame Ausfahren machen am meisten Spaß!
Meldet Euch bei Interesse bei <a href="mailto:PR@rtc-koeln.de">PR@rtc-koeln.de</a>

Wir freuen uns auf Euch!
Euer RTC Köln e.V.`
                )
                .title('Wintertraining')
                .build(),
        ],
    }),
})
