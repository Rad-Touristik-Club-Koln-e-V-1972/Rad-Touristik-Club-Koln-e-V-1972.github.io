import Holidays, { HolidaysTypes } from 'date-holidays'
import EventBuilder from '~/models/builder/calendar/EventBuilder'
import Event from '~/models/entities/calendar/Event'
import EEvent from '~/models/enums/EEvent'

export default class Calendar {
    static holidays = new Holidays('DE', { languages: ['de'] })

    static getHolidays: (year: number) => Event[] = (year: number) =>
        Calendar.holidays
            .getHolidays(year)
            .map((it: HolidaysTypes.Holiday) => new EventBuilder().allDay(true).category(EEvent.Feiertag).endDate(it.end).name(it.name).startDate(it.start).build())
}
