import EventBuilder from '~/models/builder/events/calendar/EventBuilder'
import EEvent from '~/models/enums/EEvent'
import useCalendar from '~/utils/events/Calendar'

export default [
    new EventBuilder().allDay(true).category(EEvent.RTF).clubPoints(5).contact('Klaus Dünkelmann').date('2023-5-28').name('51. Forsbach – Tour - Durchführung').build(),
].concat(useCalendar().getHolidays(new Date().getFullYear()))
