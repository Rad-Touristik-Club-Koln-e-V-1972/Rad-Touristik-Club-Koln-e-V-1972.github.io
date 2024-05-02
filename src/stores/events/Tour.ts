import { type Ref, ref } from 'vue'
import { defineStore } from 'pinia'
import Event from 'src/models/entities/events/tours/Event'
import Permanent from 'src/models/entities/events/tours/Permanent'
import EEvent from 'src/models/enums/EEvent'
import Events from './tours/Events'
import Permanents from './tours/Permanents'

export default defineStore('tour', () => {
  const events: Ref<Event[]> = ref(Events)

  return {
    permanents: ref<Permanent[]>(Permanents),
    getBy: (category: EEvent) => events.value.find((it) => it.category === category),
  }
})
