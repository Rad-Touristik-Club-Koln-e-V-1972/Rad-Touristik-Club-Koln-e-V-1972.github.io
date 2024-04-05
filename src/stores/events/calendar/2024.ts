import EventBuilder from 'src/models/builder/events/calendar/EventBuilder'
import EEvent from 'src/models/enums/EEvent'

export default [
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2024-02-02')
    .setId('4cdb702a-da3d-4818-915d-15c8e5e34b96')
    .setKilometer(50)
    .setName('Mitgliederversammlung')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2024-03-01')
    .setId('de141396-bf3f-4257-b67d-22ede89b0a65')
    .setKilometer(50)
    .setName('Jahreshauptversammlung')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-03-09')
    .setId('db2e31ff-18dd-4173-b419-6b51576ac70f')
    .setKilometer(100)
    .setName('RC Mistral')
    .setUrl('rc-mistral.koeln')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2024-04-05')
    .setId('9e201fab-53b0-43e9-b111-fd704d64aa59')
    .setKilometer(50)
    .setName('Mitgliederversammlung')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.RTC).setContact('Manfred Türk-Vialon').setDate('2024-04-13').setId('4a9b9b8d-9542-4189-88d6-85dc5dcf1b68').setKilometer(50).setName('RTC-Permanente abfahren').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-05-01')
    .setId('f4d32fd2-dd5f-4778-b693-0775cef29d9b')
    .setKilometer(100)
    .setName('RSV Staubwolke Refrath')
    .setUrl('staubwolke-refrath.de')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2024-05-10')
    .setId('ee2eec1e-b669-4db1-ae9e-d03c80116142')
    .setKilometer(50)
    .setName('Mitgliederversammlung')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.RTC).setContact('Manfred Türk-Vialon').setDate('2024-05-09').setId('a899b1ed-7a37-42e0-a8ee-e09d67c8dbcb').setKilometer(100).setName('Vatertagstour in die Eifel').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-05-11')
    .setId('b050acb1-dc43-4363-90c7-4217e7f5dda6')
    .setKilometer(100)
    .setName('RSC Erftstadt')
    .setUrl('www.rsc-erftstadt.de')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.RTC).setContact('Manfred Türk-Vialon').setDate('2024-05-18').setId('ef1df82b-62ba-4f8d-90ae-59cf091c4bf4').setKilometer(100).setName('Vortour RTF').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-05-20')
    .setId('7b127ee1-1081-4a84-ab13-00baa2c7e000')
    .setKilometer(100)
    .setName('RTC Mehlem')
    .setUrl('rtc-mehlem.de/')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-05-25')
    .setId('09207a3b-f809-4408-8399-347a78667ed3')
    .setKilometer(100)
    .setName('RSV Euskirchen')
    .setUrl('rsv-euskirchen.de')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.RTC).setContact('Manfred Türk-Vialon').setDate('2024-06-01').setId('2699c56b-2c21-4904-bf76-30c174175018').setKilometer(250).setName('Auschildern RTF').buildEvent(),
  new EventBuilder().setCategory(EEvent.RTF).setContact('Manfred Türk-Vialon').setDate('2024-06-02').setId('cceb09ef-5148-4e82-b632-e7d79ed2a5b8').setKilometer(250).setName('52. Forsbachtour').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2024-06-07')
    .setId('80147f20-ee7d-481e-be7d-1ce06bbc2056')
    .setKilometer(50)
    .setName('Mitgliederversammlung')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-06-09', '2024-07-31')
    .setId('35ee0ab5-796a-4941-bd54-b6e3a5410640')
    .setKilometer(250)
    .setName('Mehrtägige Vereinsfahrt')
    .setProvisionalReason('Ziel und Termin noch offen')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-06-23')
    .setId('e2eb05df-1b4c-4433-b6ad-86b0812fd901')
    .setKilometer(100)
    .setName('RTC Rodenkirchen')
    .setUrl('rtc-rodenkirchen.de')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-06-29')
    .setId('ab46f6f2-bbaa-4cf5-bb84-bff069d714fb')
    .setKilometer(100)
    .setName('RSC Kolpingstadt Kerpen')
    .setProvisionalReason('falls St. Vith als mehrtägige Vereinsfahrt am 30.6. stattfindet, entfällt Kerpen')
    .setUrl('www.rsc-kerpen.de')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2024-07-05')
    .setId('3abe9fc3-2537-44b0-a25a-cdfc411b1d4e')
    .setKilometer(50)
    .setName('Mitgliederversammlung')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-07-06')
    .setId('ccbadd54-be9b-4d2c-9a4a-14231840b4a2')
    .setKilometer(100)
    .setName('Sport-Club Uckerath')
    .setProvisionalReason('falls St. Vith als mehrtägige Vereinsfahrt am 6.7. stattfindet, entfällt SCU Uckerath')
    .setUrl('radsport.sc-uckerath.de')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-07-14')
    .setId('fb3c8d99-fb3d-44b5-8289-723a1caa389c')
    .setKilometer(100)
    .setName('TSV Immendorf')
    .setUrl('www.tsv-immendorf.de/sportarten/radsport/')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-08-03')
    .setId('5a35069c-5bc1-4736-ae51-d0e24f9c086f')
    .setKilometer(100)
    .setName('RTV Lohmar')
    .setUrl('sites.google.com/view/rtvlohmar')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-08-11')
    .setId('f143e4e5-3648-4d04-844b-79e468c325aa')
    .setKilometer(100)
    .setName('RC Cito Hennef')
    .setUrl('www.cito-hennef.de')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-08-25')
    .setId('db87d722-68fa-417f-82de-c734b5166ee1')
    .setKilometer(100)
    .setName('RSV Lövenich')
    .setUrl('www.viktoria-loevenich.de')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2024-09-06')
    .setId('b5efd02b-66a5-44fc-9e8a-b8740767995c')
    .setKilometer(50)
    .setName('Mitgliederversammlung')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-09-08')
    .setId('16758d61-646d-4801-8957-ad70b719ef56')
    .setKilometer(100)
    .setName('SV Malefinkbach')
    .setUrl('www.svmalefinkbach.de')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.RTC).setContact('Manfred Türk-Vialon').setDate('2024-09-14').setId('6ff614d7-1e70-4410-8c36-69311cec9847').setKilometer(100).setName('Vortour Marathon').buildEvent(),
  new EventBuilder().setCategory(EEvent.RTC).setContact('Manfred Türk-Vialon').setDate('2024-09-20').setId('f5b96178-5991-4afb-91bd-52a9abb50696').setKilometer(250).setName('Ausschildern Marathon').buildEvent(),
  new EventBuilder().setCategory(EEvent.Marathon).setContact('Manfred Türk-Vialon').setDate('2024-09-21').setId('fcbc1d7d-558a-4641-93ca-35322ef86893').setKilometer(250).setName('Marathon').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-09-28')
    .setId('401b6cb5-2b47-4c1b-80f9-6c951ba63618')
    .setKilometer(100)
    .setName('VfR Büttgen')
    .setUrl('www.vfr-buettgen.de')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2024-10-04')
    .setId('977afb81-b953-45ee-bd4b-3b1b6c9c7d35')
    .setKilometer(50)
    .setName('Mitgliederversammlung')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.Mitgliederversammlung).setContact('Diana Vialon').setDate('2024-12-07').setId('39232501-499a-4dd0-b759-86bd9cdff128').setKilometer(50).setName('Weihnachtsfeier').buildEvent(),
]
