import EventBuilder from '~/models/builder/events/calendar/EventBuilder'
import EEvent from '~/models/enums/EEvent'
import useCalendar from '~/utils/events/Calendar'

export default [
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(1)
        .contact('Wolfgang Dünkelmann')
        .date('2022-2-4 20:00', '2022-2-4 22:00')
        .name('Mitgliederversammlung')
        .build(),
    new EventBuilder().allDay(true).category(EEvent.Veranstaltung).clubPoints(1).contact('Wolfgang Dünkelmann').date('2022-3-5').name('Start in das Jubiläumsjahr').build(),
    new EventBuilder().allDay(true).category(EEvent.Abgesagt).clubPoints(2).contact('Klaus Dünkelmann').date('2022-3-12').name('RTF Mistral Köln').url('rc-mistral.koeln').build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(0)
        .contact('Wolfgang Dünkelmann')
        .date('2022-3-18 19:00', '2022-3-18 21:00')
        .name('Jahreshauptversammlung')
        .build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(1)
        .contact('Wolfgang Dünkelmann')
        .date('2022-4-1 20:00', '2022-4-1 22:00')
        .name('Mitgliederversammlung')
        .build(),
    new EventBuilder().allDay(true).category(EEvent.Permanente).clubPoints(1).contact('Klaus Dünkelmann').date('2022-4-9').name('RTC Permanente').build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .date('2022-5-1')
        .name('RTF Staubwolke Refrath')
        .url('rc-mistral.koeln')
        .build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(1)
        .contact('Wolfgang Dünkelmann')
        .date('2022-5-6 20:00', '2022-5-6 22:00')
        .name('Mitgliederversammlung')
        .build(),
    new EventBuilder().allDay(true).category(EEvent.RTF).clubPoints(2).contact('Klaus Dünkelmann').date('2022-5-7').name('50. Forsbach – Tour - Marathon - Vortour').build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .date('2022-5-14')
        .name('RTF Erftstadt')
        .url('www.rsc-erftstadt.de')
        .build(),
    new EventBuilder().allDay(true).category(EEvent.RTF).clubPoints(5).contact('Klaus Dünkelmann').date('2022-5-28').name('50. Forsbach – Tour - Marathon - Ausschildern').build(),
    new EventBuilder().allDay(true).category(EEvent.RTF).clubPoints(5).contact('Klaus Dünkelmann').date('2022-5-29').name('50. Forsbach – Tour - Marathon - Durchführung').build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(1)
        .contact('Wolfgang Dünkelmann')
        .date('2022-6-3 20:00', '2022-6-3 22:00')
        .name('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .date('2022-6-12')
        .name('RTF Lülsdorf')
        .url('luera1959.de/radsportabteilung')
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .date('2022-6-16', '2022-6-19')
        .name('RTF Radsport Schrecksbach')
        .url('www.radsport-schrecksbach.de')
        .build(),
    new EventBuilder().allDay(true).category(EEvent.Vereinsfahrt).clubPoints(2).contact('Klaus Dünkelmann').date('2022-6-19').name('RTF Ford Köln').url('www.rsg-ford.de').build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .name('RTF Rodenkirchen')
        .date('2022-6-26')
        .url('rtc-rodenkirchen.de')
        .build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(1)
        .contact('Wolfgang Dünkelmann')
        .date('2022-7-1 20:00', '2022-7-1 22:00')
        .name('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(5)
        .contact('Klaus Dünkelmann')
        .date('2022-7-30', '2022-7-24')
        .name('BRT Schwerin')
        .url('www.brt-2022.de')
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .date('2022-8-6')
        .name('RTF Lohmar')
        .url('sites.google.com/view/rtvlohmar/startseite')
        .build(),
    new EventBuilder().allDay(true).category(EEvent.Vereinsfahrt).clubPoints(2).contact('Klaus Dünkelmann').date('2022-8-14').name('RTF Hennef').url('www.cito-hennef.de').build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .date('2022-8-27')
        .name('RTF Rhein Energie')
        .url('www.rheinenergie.com/de/privatkunden/wir_fuer_die_region/sportangebot/radsport/radsport.html')
        .build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(1)
        .contact('Wolfgang Dünkelmann')
        .date('2022-9-2 20:00', '2022-9-2 22:00')
        .name('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .date('2022-9-17')
        .name('RTF Quadrath')
        .url('www.rc-staubwolke-quadrath.de')
        .build(),
    new EventBuilder()
        .allDay(true)
        .category(EEvent.Vereinsfahrt)
        .clubPoints(2)
        .contact('Klaus Dünkelmann')
        .date('2022-10-3')
        .name('RTF Radsport Schmitter Hürth')
        .url('www.rc-schmitter.de')
        .build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(1)
        .contact('Wolfgang Dünkelmann')
        .date('2022-10-7 20:00', '2022-10-7 22:00')
        .name('Mitgliederversammlung')
        .build(),
    new EventBuilder().allDay(true).category(EEvent.CTF).clubPoints(4).contact('Klaus Dünkelmann').date('2022-10-16').name('7. Wahnbach – Tour - Gravel - Vortour').build(),
    new EventBuilder().allDay(true).category(EEvent.CTF).clubPoints(5).contact('Klaus Dünkelmann').date('2022-10-21').name('7. Wahnbach – Tour - Gravel - Ausschildern').build(),
    new EventBuilder().allDay(true).category(EEvent.CTF).clubPoints(5).contact('Klaus Dünkelmann').date('2022-10-22').name('7. Wahnbach – Tour - Gravel - Durchführung').build(),
    new EventBuilder().allDay(true).category(EEvent.CTF).clubPoints(5).contact('Klaus Dünkelmann').date('2022-10-23').name('7. Wahnbach – Tour - Gravel - Abschildern').build(),
    new EventBuilder()
        .allDay(false)
        .category(EEvent.Mitgliederversammlung)
        .clubPoints(0)
        .contact('Wolfgang Dünkelmann')
        .date('2022-10-29 18:00', '2022-10-29 22:00')
        .name('Weihnachtsfeier')
        .build(),
].concat(useCalendar().getHolidays(new Date().getFullYear()))
