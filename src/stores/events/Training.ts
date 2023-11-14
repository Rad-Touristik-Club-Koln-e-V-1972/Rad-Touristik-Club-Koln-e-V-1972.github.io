import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import TrainingBuilder from 'src/models/builder/events/TrainingBuilder'
import Training from 'src/models/entities/events/Training'
import ETraining from 'src/models/enums/events/ETraining'

export default defineStore('training', () => {
    const trainings = ref<Training[]>([
        new TrainingBuilder()
            .setHeight('300-1000')
            .setId('aa0ecce0-a8a6-46a5-a161-f48f608b7c32')
            .setImageUrls({
                'd631d58b-865c-4ee4-a468-e9a7414546a7': 'content.rtc-koeln.de/pages/events/wintertraining/Wintertraining.jpg.avif',
                'fc5db804-222f-478c-b47e-d27ea3317374': 'content.rtc-koeln.de/pages/events/wintertraining/Wintertraining2.jpg.avif',
            })
            .setLastChange('2022-11-16')
            .setLength('60-130')
            .setSpeed('21-22')
            .setText(
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
Euer RTC Köln e.V.`,
            )
            .setTitle('Wintertraining')
            .buildTraining(),
    ])

    return { winter: computed(() => trainings.value.find((it) => it.category.toString() === ETraining.Wintertraining.toString())) }
})
