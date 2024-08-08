import type { Pinia } from 'pinia'
import { useRepo } from 'pinia-orm'
import CalendarEvent from 'src/models/entities/events/CalendarEvent'
import useCalendar from 'src/utils/Calendar'
import useDateTime from 'src/utils/DateTime'

export default async (store: Pinia) => {
  const calendar = useCalendar()
  const dateTime = useDateTime()

  return useRepo(CalendarEvent, store).save([...(await import('./calendar/2025')).default, ...(await import('./calendar/2024')).default, calendar.getHolidays(dateTime.today.value.getFullYear())])
}
