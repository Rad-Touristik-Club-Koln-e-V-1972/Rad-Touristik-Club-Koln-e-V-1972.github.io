import Holidays, * as DateHolidays from 'date-holidays'
import CalendarEvent from 'src/models/entities/events/CalendarEvent'
import EEvent from 'src/models/enums/EEvent'
import { useRepo } from 'pinia-orm'

const calendarEventsRepo = useRepo(CalendarEvent)
const holidays = new Holidays('DE', { languages: ['de'] })

export default () => ({
  getHolidays: (year: number): CalendarEvent[] =>
    holidays.getHolidays(year).map((it: DateHolidays.HolidaysTypes.Holiday) =>
      calendarEventsRepo.make({
        time: {
          name: it.name,
          start: it.date,
        },
        category: EEvent.Feiertag,
      }),
    ),
})
