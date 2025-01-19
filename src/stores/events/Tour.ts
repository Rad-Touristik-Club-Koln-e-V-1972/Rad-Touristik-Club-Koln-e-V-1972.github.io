import { type Ref, ref } from 'vue'
import { defineStore } from 'pinia'
import type Event from 'src/models/entities/events/tours/Event'
import type Permanent from 'src/models/entities/events/tours/Permanent'
import EEvent from 'src/models/enums/EEvent'
import Events from './tours/Events'
import Permanents from './tours/Permanents'

export default defineStore('tour', () => {
  const events: Ref<Event[]> = ref(Events)

  const getBy = (category: EEvent) => events.value.find((it) => it.category === category)

  return {
    permanents: ref<Permanent[]>(Permanents),
    getBy,
    getFamily: () => {
      // TODO This is a workaround until the db got converted to pina-orm.
      //  And somehow this function gets executed 3 times.
      const tmp = events.value.find((it) => it.category === EEvent.Familientour)

      if (tmp && !tmp.tracks.find((it) => it.length === 22)) {
        const familyTourTrack = getBy(EEvent.RTF)?.tracks.find((it) => it.length === 22)

        if (familyTourTrack) {
          tmp.tracks.push(familyTourTrack)
        }
      }

      return tmp
    },
  }
})
