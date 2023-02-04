import EventBuilder from '~/models/builder/events/calendar/EventBuilder'
import EEvent from '~/models/enums/EEvent'

export default [
    new EventBuilder()
        .setallDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-01-06 20:00', '2022-01-06 22:00')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setallDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-02-03 20:00', '2022-02-03 22:00')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setallDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-03-03 20:00', '2022-03-03 22:00')
        .setName('Jahreshauptversammlung')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-03-11')
        .setName('RTF Mistral Köln')
        .setUrl('rc-mistral.koeln')
        .build(),
    new EventBuilder()
        .setallDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-04-07 20:00', '2022-04-07 22:00')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder().setallDay(true).setCategory(EEvent.Permanente).setClubPoints(1).setContact('Klaus Dünkelmann').setDate('2023-04-15').setName('RTC Permanente').build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-05-01')
        .setName('RTF Staubwolke Refrath')
        .setUrl('rc-mistral.koeln')
        .build(),
    new EventBuilder()
        .setallDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-05-05 20:00', '2022-05-05 22:00')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-05-13')
        .setName('RTF Erftstadt')
        .setUrl('www.rsc-erftstadt.de')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.RTF)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-05-20')
        .setName('51. Forsbach – Tour - Marathon - Vortour')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.RTF)
        .setClubPoints(5)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-05-27')
        .setName('51. Forsbach – Tour - Marathon - Ausschildern')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.RTF)
        .setClubPoints(5)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-05-28')
        .setName('51. Forsbach – Tour - Marathon')
        .build(),
    new EventBuilder()
        .setallDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-06-02 20:00', '2022-06-02 22:00')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-06-03')
        .setName('RTF Euskirchen')
        .setUrl('rsv-euskirchen.de/informationen-rtf-neu')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-06-11')
        .setName('RTF Lülsdorf')
        .setUrl('luera1959.de/radsportabteilung')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-06-08', '2023-06-11')
        .setName('RTF Radsport Schrecksbach')
        .setUrl('www.radsport-schrecksbach.de')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-06-18')
        .setName('RTF Ford Köln')
        .setUrl('www.rsg-ford.de')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setName('RTF Rodenkirchen')
        .setDate('2023-06-25')
        .setUrl('rtc-rodenkirchen.de')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-07-01')
        .setName('RTF Uckerath')
        .setUrl('radsport.sc-uckerath.de/mauer-von-uckerath/')
        .build(),
    new EventBuilder()
        .setallDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-07-07 20:00', '2022-07-07 22:00')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setallDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-08-04 20:00', '2022-08-04 22:00')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-08-05')
        .setName('RTF Lohmar')
        .setUrl('sites.google.com/view/rtvlohmar/startseite')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-08-13')
        .setName('RTF Hennef')
        .setUrl('www.cito-hennef.de')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-08-26')
        .setName('RTF Rhein Energie')
        .setUrl('www.rheinenergie.com/de/privatkunden/wir_fuer_die_region/sportangebot/radsport/radsport.html')
        .build(),
    new EventBuilder()
        .setallDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-09-01 20:00', '2022-09-01 22:00')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-09-02')
        .setName('RTF Malefinkbach')
        .setUrl('www.svmalefinkbach.de/rtf/')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-09-16')
        .setName('RTF Welldorf')
        .setUrl('www.rscwelldorf.de/html/rtf.html')
        .build(),
    new EventBuilder()
        .setallDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-09-30')
        .setName('RTF Büttgen')
        .setUrl('rtf-buettgen.de/herbst-rtf')
        .build(),
    new EventBuilder()
        .setallDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-10-06 20:00', '2022-10-06 22:00')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setallDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-11-03 20:00', '2022-11-03 22:00')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setallDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-12-01 20:00', '2022-12-01 22:00')
        .setName('Mitgliederversammlung / Weihnachtsfeier')
        .build(),
]
