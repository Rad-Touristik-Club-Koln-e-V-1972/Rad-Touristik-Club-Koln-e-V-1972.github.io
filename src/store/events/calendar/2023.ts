import EventBuilder from '~/models/builder/events/calendar/EventBuilder'
import EEvent from '~/models/enums/EEvent'
import useCalendar from '~/utils/Calendar'

export default [
    new EventBuilder().setallDay(true).setCategory(EEvent.RTF).setClubPoints(5).setContact('Klaus Dünkelmann').setDate('2023-5-28').setName('51. Forsbach – Tour').build(),
].concat(useCalendar().getHolidays(new Date().getFullYear()))
