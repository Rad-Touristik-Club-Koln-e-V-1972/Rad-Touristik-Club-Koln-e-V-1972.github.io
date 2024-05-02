import { ref } from 'vue'
import { defineStore } from 'pinia'
import SuggestionBuilder from 'src/models/builder/events/tours/SuggestionBuilder'
import Suggestion from 'src/models/entities/events/tours/Suggestion'

export default defineStore('suggestion', () => {
  return {
    all: ref<Suggestion[]>([
      new SuggestionBuilder().setText('').setTitle('Bimbach').setUrl('rhoen-radmarathon.de').buildSuggestion(),
      new SuggestionBuilder().setText('').setTitle('St. Vith').setUrl('www.ostbelgien.eu/de/fahrrad').buildSuggestion(),
      new SuggestionBuilder().setText('').setTitle('Ochtendung').setUrl('djk-ochtendung.de/94.html').buildSuggestion(),
      new SuggestionBuilder().setText('').setTitle('Hattersheim').setUrl('rc-hattersheim.de').buildSuggestion(),
      new SuggestionBuilder().setText('').setTitle('Bodenseerundfahrt').setUrl('bodensee-radmarathon.ch').buildSuggestion(),
      new SuggestionBuilder().setText('').setTitle('Drei-Länder-Giro').setUrl('dreilaendergiro.at/de').buildSuggestion(),
      new SuggestionBuilder().setText('').setTitle('Wendelsteinrundfahrt').setUrl('wendelsteinrundfahrt.de').buildSuggestion(),
      new SuggestionBuilder().setText('').setTitle('Schrecksbach').setUrl('www.radsport-schrecksbach.de').buildSuggestion(),
      new SuggestionBuilder().setText('').setTitle('Ötztalmarathon (der krönende Abschluss)').setUrl('oetztaler-radmarathon.com/de/home.html').buildSuggestion(),
    ]),
  }
})
