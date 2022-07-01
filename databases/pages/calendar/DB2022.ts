import EventBuilder from '@/models/builder/calendar/EventBuilder'
import EEvent from '@/models/enums/EEvent'

export default [
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Abgesagt)
        .end(2022, 6, 27, 15, 1)
        .clubPoints(1)
        .contact('Wolfgang Dünkelmann')
        .link('rtc-koeln.de')
        .name('50. Forsbach – Tour - Marathon/RTF')
        .start(2022, 6, 27, 9, 36)
        .build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.CTF)
        .end(2022, 6, 5, 15, 2)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .link('rtc-koeln.de')
        .name('7. Wahnbach – Tour - CTF/Gravel')
        .start(2022, 6, 1, 9, 37)
        .build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .end(2022, 6, 5, 15, 3)
        .clubPoints(3)
        .contact('Wolfgang Dünkelmann')
        .link('rtc-koeln.de')
        .name('Mitgliederversammlung')
        .start(2022, 6, 1, 9, 38)
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Veranstaltung)
        .end(2022, 6, 23, 20, 4)
        .clubPoints(4)
        .contact('Klaus Dünkelmann')
        .link('rtc-koeln.de')
        .name('Veranstaltung')
        .start(2022, 6, 20, 2, 39)
        .build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Vereinsfahrt)
        .end(2022, 6, 5, 15, 5)
        .clubPoints(5)
        .contact('Wolfgang Dünkelmann')
        .link('rtc-koeln.de')
        .name('Vereinsfahrt')
        .start(2022, 6, 1, 9, 40)
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Permanente)
        .end(2022, 6, 23, 20, 6)
        .clubPoints(6)
        .contact('Klaus Dünkelmann')
        .link('rtc-koeln.de')
        .name('Allday')
        .start(2022, 6, 20, 2, 41)
        .build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Vorstandsversammlung)
        .end(2022, 6, 5, 15, 7)
        .clubPoints(7)
        .contact('Wolfgang Dünkelmann')
        .link('rtc-koeln.de')
        .name('Timing')
        .start(2022, 6, 1, 9, 42)
        .build(),
    new EventBuilder().allDay(true).category(EEvent.RTF).end(2022, 6, 23, 20, 8).clubPoints(8).contact('Klaus Dünkelmann').name('Allday').start(2022, 6, 20, 2, 43).build(),
    new EventBuilder().allDay(false).end(2022, 6, 5, 15, 9).clubPoints(9).contact('Wolfgang Dünkelmann').name('Timing').start(2022, 6, 1, 9, 44).build(),
    new EventBuilder().allDay(true).category(EEvent.CTF).end(2022, 6, 23, 20, 10).clubPoints(10).contact('Wolfgang Dünkelmann').name('Allday').start(2022, 6, 20, 2, 45).build(),
    new EventBuilder().allDay(false).category(EEvent.RTF).end(2022, 6, 5, 15, 11).clubPoints(11).contact('Klaus Dünkelmann').name('Timing').start(2022, 6, 1, 9, 46).build(),
    new EventBuilder().allDay(true).end(2022, 6, 23, 20, 12).clubPoints(12).contact('Wolfgang Dünkelmann').name('Allday').start(2022, 6, 20, 2, 47).build(),
]
