import { defineStore } from 'pinia'
import TrainingBuilder from 'src/models/builder/events/TrainingBuilder'

export default defineStore('training', () => {
  return {
    training: new TrainingBuilder()
      .setAlternativeDay('Dienstag')
      .setDay('Donnerstag')
      .setDeparture('18 Uhr')
      .setId('aa0ecce0-a8a6-46a5-a161-f48f608b7c32')
      .setImageUrls({
        'd631d58b-865c-4ee4-a468-e9a7414546a7': 'content.rtc-koeln.de/pages/events/training/Wintertraining.jpg.avif',
        'fc5db804-222f-478c-b47e-d27ea3317374': 'content.rtc-koeln.de/pages/events/training/Wintertraining2.jpg.avif',
      })
      .setLocation('Schmitze Bud')
      .setLength('ca. 60-80km')
      .setSpeed('gemütlich')
      .setText(
        `Besonders für die Berufstätigen unter uns bieten wir ab April ein Training in der Woche an.
Wir sprechen uns am Wochenende vor der Folgewoche intern ab und weichen ggfs. – je nach Wetter oder beruflicher Situation – auf den Dienstag aus.

<b>Gäste sind herzlich willkommen!</b>
Wenn Ihr Interesse habt uns kennenzulernen und mitzufahren, schreibt unbedingt vorher an <a href='mailto:PR@rtc-koeln.de'>PR@rtc-koeln.de</a>.
Vielen Dank.`,
      )
      .setTitle('Training in der Woche (ab April)')
      .buildTraining(),
  }
})
