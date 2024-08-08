import { Pinia } from 'pinia'
import { useRepo } from 'pinia-orm'
import Training from 'src/models/entities/events/Training'

export default (store: Pinia) =>
  useRepo(Training, store).save([
    {
      alternativeDay: 'Dienstag',
      day: 'Donnerstag',
      departure: '18 Uhr',
      galleryEntries: [
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/events/training/Wintertraining.jpg.avif') },
        { imageUrl: new URL('https://content.rtc-koeln.de/pages/events/training/Wintertraining2.jpg.avif') },
      ],
      length: 'ca. 60-80km',
      location: 'Schmitze Bud',
      speed: 'gemütlich',
      text: `Besonders für die Berufstätigen unter uns bieten wir ab April ein Training in der Woche an.
Wir sprechen uns am Wochenende vor der Folgewoche intern ab und weichen ggfs. – je nach Wetter oder beruflicher Situation – auf den Dienstag aus.

<b>Gäste sind herzlich willkommen!</b>
Wenn Ihr Interesse habt uns kennenzulernen und mitzufahren, schreibt unbedingt vorher an <a href='mailto:PR@rtc-koeln.de'>PR@rtc-koeln.de</a>.
Vielen Dank.`,
      title: 'Training in der Woche (ab April)',
    },
  ])
