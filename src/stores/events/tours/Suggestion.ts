import { ref } from 'vue'
import { defineStore } from 'pinia'
import SuggestionBuilder from 'src/models/builder/events/tours/SuggestionBuilder'
import type Suggestion from 'src/models/entities/events/tours/Suggestion'

export default defineStore('suggestion', () => {
  return {
    all: ref<Suggestion[]>([
      new SuggestionBuilder().setId('ba680dd5-bbbd-4b55-9b40-891ab4cb831f').setText('').setTitle('Bimbach').setUrl('rhoen-radmarathon.de').buildSuggestion(),
      new SuggestionBuilder().setId('4827480f-cbee-40e0-956a-6bd84cff6e9c').setText('').setTitle('St. Vith').setUrl('www.rsv.be/3laenderfahrt').buildSuggestion(),
      new SuggestionBuilder().setId('b7b8490d-f2b0-414f-acc8-5d9d43b6ca79').setText('').setTitle('Ochtendung').setUrl('djk-ochtendung.de/94.html').buildSuggestion(),
      new SuggestionBuilder().setId('219afeb0-27c6-48ac-8dc2-6c63cb23ec79').setText('').setTitle('Hattersheim').setUrl('rc-hattersheim.de').buildSuggestion(),
      new SuggestionBuilder().setId('16103052-afc1-40c4-9654-408466e5fe42').setText('').setTitle('Bodenseerundfahrt').setUrl('bodensee-radmarathon.ch').buildSuggestion(),
      new SuggestionBuilder().setId('5736c25d-71b2-481b-8316-b1738a18eb2a').setText('').setTitle('Drei-Länder-Giro').setUrl('dreilaendergiro.at/de').buildSuggestion(),
      new SuggestionBuilder().setId('9c604e52-9b9f-4ff6-a183-0a2c781fd99c').setText('').setTitle('Wendelsteinrundfahrt').setUrl('wendelsteinrundfahrt.de').buildSuggestion(),
      new SuggestionBuilder().setId('4d695d86-48b0-4930-9502-a06be15e1383').setText('').setTitle('Schrecksbach').setUrl('www.radsport-schrecksbach.de').buildSuggestion(),
      new SuggestionBuilder().setId('0e00337e-6aee-4f21-bd2c-58105952bc6e').setText('').setTitle('Ötztalmarathon (der krönende Abschluss)').setUrl('oetztaler-radmarathon.com/de/home.html').buildSuggestion(),
    ]),
  }
})
