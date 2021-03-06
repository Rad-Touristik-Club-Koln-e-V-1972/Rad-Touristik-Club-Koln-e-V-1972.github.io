import EventBuilder from '~/models/builder/calendar/EventBuilder'
import EEvent from '~/models/enums/EEvent'
import useCalendar from '~/utils/Calendar'

export default [
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(1)
        .contact('Wolfgang Dünkelmann')
        .end(2022, 2, 4, 22)
        .name('Mitgliederversammlung')
        .start(2022, 2, 4, 20)
        .build(),
    new EventBuilder().allDay(true).category(EEvent.Veranstaltung).clubPoints(1).contact('Wolfgang Dünkelmann').name('Start in das Jubiläumsjahr').start(2022, 3, 5).build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Abgesagt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .link('rc-mistral.koeln')
        .name('RTF Mistral Köln')
        .start(2022, 3, 12)
        .build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(0)
        .contact('Wolfgang Dünkelmann')
        .end(2022, 3, 18, 21)
        .name('Jahreshauptversammlung')
        .start(2022, 3, 18, 19)
        .build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(1)
        .contact('Wolfgang Dünkelmann')
        .end(2022, 4, 1, 22)
        .name('Mitgliederversammlung')
        .start(2022, 4, 1, 20)
        .build(),
    new EventBuilder().allDay(true).category(EEvent.Permanente).clubPoints(1).contact('Klaus Dünkelmann').name('RTC Permanente').start(2022, 4, 9).build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .link('rc-mistral.koeln')
        .name('RTF Staubwolke Refrath')
        .start(2022, 5, 1)
        .build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(1)
        .contact('Wolfgang Dünkelmann')
        .end(2022, 5, 6, 22)
        .name('Mitgliederversammlung')
        .start(2022, 5, 6, 20)
        .build(),
    new EventBuilder().allDay(true).category(EEvent.RTF).clubPoints(2).contact('Klaus Dünkelmann').name('50. Forsbach – Tour - Marathon - Vortour').start(2022, 5, 7).build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .link('www.rsc-erftstadt.de')
        .name('RTF Erftstadt')
        .start(2022, 5, 14)
        .build(),
    new EventBuilder().allDay(true).category(EEvent.RTF).clubPoints(5).contact('Klaus Dünkelmann').name('50. Forsbach – Tour - Marathon - Ausschildern').start(2022, 5, 28).build(),
    new EventBuilder().allDay(true).category(EEvent.RTF).clubPoints(5).contact('Klaus Dünkelmann').name('50. Forsbach – Tour - Marathon - Durchführung').start(2022, 5, 29).build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(1)
        .contact('Wolfgang Dünkelmann')
        .end(2022, 6, 3, 22)
        .name('Mitgliederversammlung')
        .start(2022, 6, 3, 20)
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .link('luera1959.de/radsportabteilung')
        .name('RTF Lülsdorf')
        .start(2022, 6, 12)
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .end(2022, 6, 19)
        .link('www.radsport-schrecksbach.de')
        .name('RTF Radsport Schrecksbach')
        .start(2022, 6, 16)
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .link('www.rsg-ford.de')
        .name('RTF Ford Köln')
        .start(2022, 6, 19)
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .link('rtc-rodenkirchen.de')
        .name('RTF Rodenkirchen')
        .start(2022, 6, 26)
        .build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(1)
        .contact('Wolfgang Dünkelmann')
        .end(2022, 7, 1, 22)
        .name('Mitgliederversammlung')
        .start(2022, 7, 1, 20)
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(5)
        .contact('Klaus Dünkelmann')
        .start(2022, 7, 30)
        .link('www.brt-2022.de')
        .name('BRT Schwerin')
        .start(2022, 7, 24)
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .link('sites.google.com/view/rtvlohmar/startseite')
        .name('RTF Lohmar')
        .start(2022, 8, 6)
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .link('www.cito-hennef.de')
        .name('RTF Hennef')
        .start(2022, 8, 14)
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .link('www.rheinenergie.com/de/privatkunden/wir_fuer_die_region/sportangebot/radsport/radsport.html')
        .name('RTF Rhein Energie')
        .start(2022, 8, 27)
        .build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(1)
        .contact('Wolfgang Dünkelmann')
        .end(2022, 9, 2, 22)
        .name('Mitgliederversammlung')
        .start(2022, 9, 2, 20)
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .link('www.rc-staubwolke-quadrath.de')
        .name('RTF Quadrath')
        .start(2022, 9, 17)
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .link('www.rc-schmitter.de')
        .name('RTF Radsport Schmitter Hürth')
        .start(2022, 10, 3)
        .build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(1)
        .contact('Wolfgang Dünkelmann')
        .end(2022, 10, 7, 22)
        .name('Mitgliederversammlung')
        .start(2022, 10, 7, 20)
        .build(),
    new EventBuilder().allDay(true).category(EEvent.CTF).clubPoints(4).contact('Klaus Dünkelmann').name('7. Wahnbach – Tour - Gravel - Vortour').start(2022, 10, 16).build(),
    new EventBuilder().allDay(true).category(EEvent.CTF).clubPoints(5).contact('Klaus Dünkelmann').name('7. Wahnbach – Tour - Gravel - Ausschildern').start(2022, 10, 21).build(),
    new EventBuilder().allDay(true).category(EEvent.CTF).clubPoints(5).contact('Klaus Dünkelmann').name('7. Wahnbach – Tour - Gravel - Durchführung').start(2022, 10, 22).build(),
    new EventBuilder().allDay(true).category(EEvent.CTF).clubPoints(5).contact('Klaus Dünkelmann').name('7. Wahnbach – Tour - Gravel - Abschildern').start(2022, 10, 23).build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(0)
        .contact('Wolfgang Dünkelmann')
        .end(2022, 12, 2, 22)
        .name('Weihnachtsfeier')
        .start(2022, 12, 2, 19)
        .build(),
].concat(useCalendar().getHolidays(new Date().getFullYear()))
