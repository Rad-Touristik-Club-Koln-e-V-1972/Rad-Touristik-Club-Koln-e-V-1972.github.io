import EventBuilder from '~/models/builder/events/calendar/EventBuilder'
import EEvent from '~/models/enums/EEvent'

export default [
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-02-04 20:00', '2022-02-04 22:00')
        .setId('c2210e4a-ceb0-416a-8c05-64e033f7ea4c')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Veranstaltung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-03-05')
        .setId('4a3f446c-f3ac-4b53-8744-5fb3bb28016d')
        .setName('Start in das Jubiläumsjahr')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Abgesagt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-03-12')
        .setId('5288d04a-158e-4d4e-a9e2-3fb0b6736f3b')
        .setName('RTF Mistral Köln')
        .setUrl('rc-mistral.koeln')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(0)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-03-18 19:00', '2022-03-18 21:00')
        .setId('22b90479-7d0f-4cdc-8a61-b54ae5c3be38')
        .setName('Jahreshauptversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-04-01 20:00', '2022-04-01 22:00')
        .setId('3b08e6bd-3846-4b54-90c7-74c7d23be772')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Permanente)
        .setClubPoints(1)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-04-09')
        .setId('63d9f864-8655-407b-98d9-1e24b60ccd03')
        .setName('RTC Permanente')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-05-01')
        .setId('c20b6404-2ade-4fbb-af65-ada7fc01e606')
        .setName('RTF Staubwolke Refrath')
        .setUrl('rc-mistral.koeln')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-05-06 20:00', '2022-05-06 22:00')
        .setId('f54d133d-2d3b-46dc-a547-420c10ce37b7')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.RTF)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-05-07')
        .setId('0f65879e-4c78-47d3-90d5-3e9723fd9bef')
        .setName('50. Forsbach – Tour - Marathon - Vortour')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-05-14')
        .setId('efc2d6bb-5651-470e-a6cd-53d63036c2b5')
        .setName('RTF Erftstadt')
        .setUrl('www.rsc-erftstadt.de')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.RTF)
        .setClubPoints(5)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-05-28')
        .setId('b9942c9c-8885-4bc2-8958-d51a34e7b7cf')
        .setName('50. Forsbach – Tour - Marathon - Ausschildern')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.RTF)
        .setClubPoints(5)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-05-29')
        .setId('0cef0b1e-0f67-458c-b503-16305dab4775')
        .setName('50. Forsbach – Tour - Marathon')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-06-03 20:00', '2022-06-03 22:00')
        .setId('82984e7f-3507-4efe-b2ca-2d32c018477f')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-06-12')
        .setId('a2daf661-1a67-4f2e-98fe-2bcfedffd5af')
        .setName('RTF Lülsdorf')
        .setUrl('luera1959.de/radsportabteilung')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-06-16', '2022-06-19')
        .setId('ab6f148e-fda7-4ca6-894c-807b97cfb912')
        .setName('RTF Radsport Schrecksbach')
        .setUrl('www.radsport-schrecksbach.de')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-06-19')
        .setId('ad42f29a-fc0d-4822-b642-91321af6e471')
        .setName('RTF Ford Köln')
        .setUrl('www.rsg-ford.de')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setId('4860e5bc-ebd4-4b61-8fb3-499c1e126019')
        .setName('RTF Rodenkirchen')
        .setDate('2022-06-26')
        .setUrl('rtc-rodenkirchen.de')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-07-01 20:00', '2022-07-01 22:00')
        .setId('925aa9ff-860f-4e7e-b4d2-047cb67cc970')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(5)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-07-30', '2022-07-24')
        .setId('15b2f8e5-49c5-48bc-b834-c5cff821a4e9')
        .setName('BRT Schwerin')
        .setUrl('www.brt-2022.de')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-08-06')
        .setId('fc3b7891-4013-4b1d-a752-c185636a8f03')
        .setName('RTF Lohmar')
        .setUrl('sites.google.com/view/rtvlohmar/startseite')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-08-14')
        .setId('7ca8f19f-57b7-455b-8abc-b7c3e94bccb0')
        .setName('RTF Hennef')
        .setUrl('www.cito-hennef.de')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-08-27')
        .setId('b64844da-9eb6-4146-bf45-21f935316e05')
        .setName('RTF Rhein Energie')
        .setUrl('www.rheinenergie.com/de/privatkunden/wir_fuer_die_region/sportangebot/radsport/radsport.html')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-09-02 20:00', '2022-09-02 22:00')
        .setId('cafe3ad6-0e6a-41ef-96f3-85bd64875841')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-09-17')
        .setId('5246a3e9-411e-4677-815e-c064a03e012b')
        .setName('RTF Quadrath')
        .setUrl('www.rc-staubwolke-quadrath.de')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.Vereinsfahrt)
        .setClubPoints(2)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-10-03')
        .setId('28b7ede3-ea1a-4d5a-9a51-7b154f07ae39')
        .setName('RTF Radsport Schmitter Hürth')
        .setUrl('www.rc-schmitter.de')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-10-07 20:00', '2022-10-07 22:00')
        .setId('5d05967c-cd6e-492c-98f7-2bfe357fce27')
        .setName('Mitgliederversammlung')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.CTF)
        .setClubPoints(4)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-10-16')
        .setId('33a003ea-6159-4198-b950-fa7995a57fd5')
        .setName('7. Wahnbach – Tour - Gravel - Vortour')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.CTF)
        .setClubPoints(5)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-10-21')
        .setId('0dd9cac5-cb0c-45e0-bd32-a69f9780e911')
        .setName('7. Wahnbach – Tour - Gravel - Ausschildern')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.CTF)
        .setClubPoints(5)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-10-22')
        .setId('f1bc3a56-620e-4dc1-b4e3-adf532a43a49')
        .setName('7. Wahnbach – Tour - Gravel')
        .build(),
    new EventBuilder()
        .setAllDay(true)
        .setCategory(EEvent.CTF)
        .setClubPoints(5)
        .setContact('Klaus Dünkelmann')
        .setDate('2022-10-23')
        .setId('21472e3a-d6fa-41ef-a565-b497dd23e838')
        .setName('7. Wahnbach – Tour - Gravel - Abschildern')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(0)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-10-29 18:00', '2022-10-29 22:00')
        .setId('994131a3-4576-4ad8-a43f-b850a04286bf')
        .setName('Weihnachtsfeier')
        .build(),
    new EventBuilder()
        .setAllDay(false)
        .setCategory(EEvent.Mitgliederversammlung)
        .setClubPoints(1)
        .setContact('Wolfgang Dünkelmann')
        .setDate('2022-11-04 19:00', '2022-11-04 21:00')
        .setId('1c23e000-3c5d-40b2-882f-70cbf3929447')
        .setName('Mitgliederversammlung')
        .build(),
]
