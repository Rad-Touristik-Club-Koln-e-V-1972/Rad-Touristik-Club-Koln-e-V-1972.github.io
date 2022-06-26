import EventBuilder from '@/models/builder/calendar/EventBuilder'
import EEvent from '@/models/enums/EEvent'

export default [
    new EventBuilder().allDay(false).category(EEvent.RTF).end(2022, 6, 27, 15, 1).name('50. Forsbach – Tour - Marathon/RTF').start(2022, 6, 27, 9, 36).build(),
    new EventBuilder().allDay(false).category(EEvent.CTF).end(2022, 6, 5, 15, 2).name('7. Wahnbach – Tour - CTF/Gravel').start(2022, 6, 1, 9, 37).build(),
    new EventBuilder().allDay(false).category(EEvent.Mitgliederversammlung).end(2022, 6, 5, 15, 3).name('Mitgliederversammlung').start(2022, 6, 1, 9, 38).build(),
    new EventBuilder().allDay(true).category(EEvent.Veranstaltung).end(2022, 6, 23, 20, 4).name('Veranstaltung').start(2022, 6, 20, 2, 39).build(),
    new EventBuilder().allDay(false).category(EEvent.Vereinsfahrt).end(2022, 6, 5, 15, 5).name('Vereinsfahrt').start(2022, 6, 1, 9, 40).build(),
    new EventBuilder().allDay(true).category(EEvent.Permanente).end(2022, 6, 23, 20, 6).name('Allday').start(2022, 6, 20, 2, 41).build(),
    new EventBuilder().allDay(false).category(EEvent.Vorstandsversammlung).end(2022, 6, 5, 15, 7).name('Timing').start(2022, 6, 1, 9, 42).build(),
    new EventBuilder().allDay(true).category(EEvent.RTF).end(2022, 6, 23, 20, 8).name('Allday').start(2022, 6, 20, 2, 43).build(),
    new EventBuilder().allDay(false).end(2022, 6, 5, 15, 9).name('Timing').start(2022, 6, 1, 9, 44).build(),
    new EventBuilder().allDay(true).category(EEvent.CTF).end(2022, 6, 23, 20, 10).name('Allday').start(2022, 6, 20, 2, 45).build(),
    new EventBuilder().allDay(false).category(EEvent.RTF).end(2022, 6, 5, 15, 11).name('Timing').start(2022, 6, 1, 9, 46).build(),
    new EventBuilder().allDay(true).end(2022, 6, 23, 20, 12).name('Allday').start(2022, 6, 20, 2, 47).build(),
]
