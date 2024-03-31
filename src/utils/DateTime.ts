import { computed } from 'vue'
import { date } from 'quasar'

// TODO migrate to Quasar Date Utils to format date ranges after the resolution of https://github.com/quasarframework/quasar/discussions/16032

export default function useDateTime() {
  const dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' })
  const dateTimeFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: '2-digit' })
  const timeFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('de-DE', { hour: 'numeric', minute: '2-digit' })

  const today = computed(() => new Date())
  const todayMidnight = computed(() => date.adjustDate(today.value, { hour: 0, minute: 0, second: 0, millisecond: 0 }))

  return {
    format: (start: Date, end?: Date, allDay = true) => {
      let value: string

      if (end) value = (allDay ? dateFormatter : dateTimeFormatter).formatRange(start, end)
      else if (allDay) value = date.formatDate(start, 'DD.MM.YYYY')
      else value = date.formatDate(start, 'DD.MM.YYYYTH:mmZ')

      return value
    },
    formatTime: (start: Date, end?: Date) => (end ? timeFormatter.formatRange(start, end) : date.formatDate(start, 'H:mm')),
    isBetweenDates: (d: Date, from: Date, to?: Date) => date.isBetweenDates(d, from, to ?? from, { inclusiveFrom: true, inclusiveTo: true, onlyDate: true }),
    sort: (a: Date, b: Date) => a.getTime() - b.getTime(),
    today,
    todayMidnight,
    tomorrowMidnight: computed(() => date.adjustDate(todayMidnight.value, { hour: 0, minute: 0, second: 0, millisecond: 0 })),
  }
}
