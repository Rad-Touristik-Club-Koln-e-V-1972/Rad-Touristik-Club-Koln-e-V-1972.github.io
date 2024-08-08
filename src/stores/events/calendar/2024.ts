import EventBuilder from 'src/models/builder/events/calendar/EventBuilder'
import EEvent from 'src/models/enums/EEvent'

export default [
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2024-02-02')
    .setKilometer(50)
    .setName('Mitgliederversammlung')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2024-03-01')
    .setKilometer(50)
    .setName('Jahreshauptversammlung')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-03-09')
    .setKilometer(100)
    .setName('RC Mistral')
    .setUrl('rc-mistral.koeln')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2024-04-05')
    .setKilometer(50)
    .setName('Mitgliederversammlung')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.RTC).setContact('Manfred Türk-Vialon').setDate('2024-04-13').setKilometer(50).setName('RTC-Permanente abfahren').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-05-01')
    .setKilometer(100)
    .setName('RSV Staubwolke Refrath')
    .setUrl('staubwolke-refrath.de')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2024-05-10')
    .setKilometer(50)
    .setName('Mitgliederversammlung')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.RTC).setContact('Manfred Türk-Vialon').setDate('2024-05-09').setKilometer(100).setName('Vatertagstour in die Eifel').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-05-11')
    .setKilometer(100)
    .setName('RSC Erftstadt')
    .setUrl('www.rsc-erftstadt.de')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.RTC).setContact('Manfred Türk-Vialon').setDate('2024-05-18').setKilometer(100).setName('Vortour RTF').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-05-20')
    .setKilometer(100)
    .setName('RTC Mehlem')
    .setUrl('rtc-mehlem.de/')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-05-25')
    .setKilometer(100)
    .setName('RSV Euskirchen')
    .setUrl('rsv-euskirchen.de')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.RTC).setContact('Manfred Türk-Vialon').setDate('2024-06-01').setKilometer(250).setName('Auschildern RTF').buildEvent(),
  new EventBuilder().setCategory(EEvent.RTF).setContact('Manfred Türk-Vialon').setDate('2024-06-02').setKilometer(250).setName('52. Forsbachtour').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2024-06-07')
    .setKilometer(50)
    .setName('Mitgliederversammlung')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-06-23')
    .setKilometer(100)
    .setName('RTC Rodenkirchen')
    .setUrl('rtc-rodenkirchen.de')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-06-29')
    .setKilometer(100)
    .setName('RSC Kolpingstadt Kerpen')
    .setUrl('www.rsc-kerpen.de')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-07-05', '2024-07-07')
    .setKilometer(100)
    .setName('St. Vith')
    .setUrl('www.rsv.be/3laenderfahrt')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2024-07-12')
    .setId('3abe9fc3-2537-44b0-a25a-cdfc411b1d4e')
    .setKilometer(50)
    .setName('Mitgliederversammlung')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-07-14')
    .setKilometer(100)
    .setName('TSV Immendorf')
    .setUrl('www.tsv-immendorf.de/sportarten/radsport/')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-08-03')
    .setKilometer(100)
    .setName('RTV Lohmar')
    .setUrl('sites.google.com/view/rtvlohmar')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-08-11')
    .setKilometer(100)
    .setName('RC Cito Hennef')
    .setUrl('www.cito-hennef.de')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-08-25')
    .setKilometer(100)
    .setName('RSV Lövenich')
    .setUrl('www.viktoria-loevenich.de')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2024-09-06')
    .setKilometer(50)
    .setName('Mitgliederversammlung')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-09-08')
    .setKilometer(100)
    .setName('SV Malefinkbach')
    .setUrl('www.svmalefinkbach.de')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.RTC).setContact('Manfred Türk-Vialon').setDate('2024-09-14').setKilometer(100).setName('Vortour Marathon').buildEvent(),
  new EventBuilder().setCategory(EEvent.RTC).setContact('Manfred Türk-Vialon').setDate('2024-09-20').setKilometer(250).setName('Ausschildern Marathon').buildEvent(),
  new EventBuilder().setCategory(EEvent.Marathon).setContact('Manfred Türk-Vialon').setDate('2024-09-21').setKilometer(250).setName('Marathon').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Vereinsfahrt)
    .setContact('Manfred Türk-Vialon')
    .setDate('2024-09-28')
    .setKilometer(100)
    .setName('VfR Büttgen')
    .setUrl('www.vfr-buettgen.de')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2024-10-04')
    .setKilometer(50)
    .setName('Mitgliederversammlung')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.Mitgliederversammlung).setContact('Diana Vialon').setDate('2024-12-07').setKilometer(50).setName('Weihnachtsfeier').buildEvent(),
]
