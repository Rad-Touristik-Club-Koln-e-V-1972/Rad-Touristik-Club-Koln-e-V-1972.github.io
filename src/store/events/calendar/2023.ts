import EventBuilder from '~/models/builder/events/calendar/EventBuilder'
import EEvent from '~/models/enums/EEvent'

export default [
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2023-01-06 20:00', '2023-01-06 22:00')
        .setId('8e55e3d2-4005-40a3-9feb-ffef998d73d5')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2023-02-03 20:00', '2023-02-03 22:00')
        .setId('acb50ed9-d216-4c5f-9d44-9abb2926ef91')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2023-03-03 20:00', '2023-03-03 22:00')
        .setId('04f8f604-58a5-4991-87a0-f533bf6abc8e')
        .setName('Jahreshauptversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-03-11')
        .setId('e84d404c-e96d-4297-b17e-0b18852acc9c')
        .setName('RTF Mistral Köln')
        .setUrl('rc-mistral.koeln')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2023-04-07 20:00', '2023-04-07 22:00')
        .setId('8794ea0a-3325-47b6-8fbc-158a724bf781')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Permanente)
        .setClubPoints(1)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-04-15')
        .setId('37dfb492-4b40-407d-b09f-c3cadb766599')
        .setName('RTC Permanente - Intern - Strecke Abfahren')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-05-01')
        .setId('c5b65dfb-a6cb-4862-8142-3f13dc51adc1')
        .setName('RTF Staubwolke Refrath')
        .setUrl('rc-mistral.koeln')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2023-05-05 20:00', '2023-05-05 22:00')
        .setId('981e73cc-0004-434c-babb-392e80a7ac65')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-05-13')
        .setId('b5d53f5e-7c59-4bb3-b058-b5ca3d6273d4')
        .setName('RTF Erftstadt')
        .setUrl('www.rsc-erftstadt.de')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.RTF)
        .setClubPoints(3)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-05-28')
        .setId('262224f4-be70-414a-bd68-07a0706da73e')
        .setName('51. Forsbach – Tour')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2023-06-02 20:00', '2023-06-02 22:00')
        .setId('1864934b-59e0-46b0-ada4-e08090186615')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-06-03')
        .setId('a0e9bd84-2c4c-4fc0-900f-934a6bcab768')
        .setName('RTF Euskirchen')
        .setUrl('rsv-euskirchen.de/informationen-rtf-neu')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-06-11')
        .setId('6542d072-cad7-4be6-af90-d3c2f735db9c')
        .setName('RTF Lülsdorf')
        .setUrl('luera1959.de/radsportabteilung')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-06-08', '2023-06-11')
        .setId('bac9d67d-c62d-47ce-ba8f-f25d92f1430c')
        .setName('RTF Radsport Schrecksbach')
        .setUrl('www.radsport-schrecksbach.de')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-06-18')
        .setId('f5296d57-978a-4eaf-a685-c48b5ba19447')
        .setName('RTF Ford Köln')
        .setUrl('www.rsg-ford.de')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setId('ad04cf85-56cd-4b7c-afd2-dee6ae555d1c')
        .setName('RTF Rodenkirchen')
        .setDate('2023-06-25')
        .setUrl('rtc-rodenkirchen.de')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-07-01')
        .setId('37aa8c87-03ae-4c50-a552-e55404cebde6')
        .setName('RTF Uckerath')
        .setUrl('radsport.sc-uckerath.de/mauer-von-uckerath/')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2023-07-07 20:00', '2023-07-07 22:00')
        .setId('549d49f2-a893-47b8-94c4-cde5594a313f')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2023-08-04 20:00', '2023-08-04 22:00')
        .setId('506889cb-b98f-4cb8-94a0-a6f99e179211')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-08-05')
        .setId('68bce36d-d921-489d-a4a1-6bf0078bd8c9')
        .setName('RTF Lohmar')
        .setUrl('sites.google.com/view/rtvlohmar/startseite')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-08-13')
        .setId('8e43df55-54a7-465a-a326-a4d3880d42b9')
        .setName('RTF Hennef')
        .setUrl('www.cito-hennef.de')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-08-26')
        .setId('8a341f9a-3b56-4093-a167-d0b5cd2d5f91')
        .setName('RTF Rhein Energie')
        .setUrl('www.rheinenergie.com/de/privatkunden/wir_fuer_die_region/sportangebot/radsport/radsport.html')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2023-09-01 20:00', '2023-09-01 22:00')
        .setId('61a561ba-a33f-4386-8c29-6c087e8c9acf')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-09-02')
        .setId('1f6ec7ab-f2f6-4db2-bd90-af82a0b29f46')
        .setName('RTF Malefinkbach')
        .setUrl('www.svmalefinkbach.de/rtf/')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-09-16')
        .setId('8c6bb48e-b56f-47eb-ae03-01a4513a4f3c')
        .setName('RTF Welldorf')
        .setUrl('www.rscwelldorf.de/html/rtf.html')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2023-09-30')
        .setId('eda25159-671c-4b96-9011-bea91912b12f')
        .setName('RTF Büttgen')
        .setUrl('rtf-buettgen.de/herbst-rtf')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2023-10-06 20:00', '2023-10-06 22:00')
        .setId('834430d8-8466-4414-96c6-4c88a3f29069')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2023-11-03 20:00', '2023-11-03 22:00')
        .setId('e46b95ab-68a6-4435-b4a8-8d2018f8ec64')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2023-12-01 20:00', '2023-12-01 22:00')
        .setId('471ee844-0897-488b-b107-77e5889e1fa7')
        .setName('Mitgliederversammlung / Weihnachtsfeier')
        .build(),
]
