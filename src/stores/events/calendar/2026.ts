import EventBuilder from 'src/models/builder/events/calendar/EventBuilder'
import EEvent from 'src/models/enums/EEvent'

export default [
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2026-02-06')
    .setId('deede6f1-3589-4954-bd48-8f525d5750b3')
    .setKilometer(50)
    .setName('RTC-Vereinsabend (Uferglück)')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2026-03-06')
    .setId('d98052c9-6a28-41af-9200-ca45f4d111c5')
    .setKilometer(200)
    .setName('RTC-Hauptversammlung (Uferglück)')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.Veranstaltung).setDate('2026-03-07').setId('37faee9a-e0e4-4627-be40-dcc59f73af19').setName('Erste-Hilfe-Kurs').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-03-14').setId('1cc7287d-66af-497e-8170-dc893dc275b9').setName('Mistral + Schwalmtal').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-03-21').setId('a84b90fc-3f90-4f44-ba8d-9d41c66be74c').setName('Düsseldorf Rath-Ratingen').buildEvent(),
  new EventBuilder().setCategory(EEvent.Veranstaltung).setDate('2026-03-28').setId('8633c356-f401-48d2-9679-19840c3c02a8').setName('Fahrtechniktraining Teil 1').buildEvent(),
  new EventBuilder().setCategory(EEvent.Veranstaltung).setDate('2026-04-04').setId('a0eb196f-f9e5-481a-a596-25b6cf273448').setName('Fahrtechniktraining Teil 2').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-04-06').setId('fac9ba4f-289e-4331-9c75-d72aa91ec350').setName('Sprinter Waltrop').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2026-04-10')
    .setId('7776ce1f-81fb-4b4d-8889-9b76d57aac51')
    .setKilometer(50)
    .setName('RTC-Vereinsabend (Uferglück)')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.RTF).setDate('2026-04-11', '2026-04-12').setId('e8c2f4c1-c388-4e22-bdab-0c7b60acc303').setKilometer(200).setName('Vortour FBT (je nach Wetter)').buildEvent(),
  new EventBuilder().setCategory(EEvent.Permanente).setDate('2026-04-18', '2026-04-19').setId('f116b0d8-671d-4030-a6b4-2edcdc889a60').setKilometer(200).setName('Giro di Piccola (je nach Wetter)').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-04-19').setId('04fc24a1-1183-438b-9bdb-a0aabca1d5c1').setName('Mülheim a.d. Ruhr (falls unsere Permanente samstags gefahren wird)').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-04-25').setId('e7cf0d70-e906-4c24-b8a4-0ae708f7e23e').setName('Grefrath').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-05-01').setId('daa374fc-9837-4bf4-93c4-452226eb8df2').setName('Refrath + Ochtendung').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-05-03').setId('5c2e6d62-4d54-4ae5-b85c-2e47118d7d8b').setName('Herne').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2026-05-04', '2026-05-07')
    .setId('856067dc-c0b2-4ab4-9651-ca176790ed8d')
    .setKilometer(150)
    .setName('Zeltaufbau im Garten (je nach Wetter)')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2026-05-08')
    .setId('d2cf5975-12b8-4368-859f-ee0b6c0e7f37')
    .setKilometer(50)
    .setName('RTC-Vereinsabend (Garten)')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-05-09').setId('9b77f4a3-e1f7-4ec2-ac79-d1089da804cd').setName('Erftstadt').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-05-23').setId('60317e4f-e521-4473-b1c5-6ef239b6999c').setName('Wuppertal').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-05-25').setId('5e11acd9-e2c0-40bd-9e9c-9e171b5a913d').setName('Mehlem').buildEvent(),
  new EventBuilder().setCategory(EEvent.RTF).setDate('2026-05-30').setId('1de0f5a0-2c54-416b-9db1-dee817ce1896').setKilometer(500).setName('Aufbau FBT').buildEvent(),
  new EventBuilder().setCategory(EEvent.RTF).setDate('2026-05-31').setId('18220f49-dbe4-4387-9ef3-189850dcc3b5').setKilometer(500).setName('Forsbachtour').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2026-06-05')
    .setId('31777fbe-4302-4ee6-b9c5-05a2b2754450')
    .setKilometer(50)
    .setName('RTC-Vereinsabend (Garten)')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-06-07').setId('fcc3cf72-fa48-4627-a644-ee78a001532c').setName('Buchholz').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-06-13').setId('8d562fa1-524a-4013-96cb-35dbfae21dc1').setName('Neandertal').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-06-14').setId('62358284-b7c5-4fd2-b507-569dc2f9a4a2').setName('Lülsdorf').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-06-21').setId('f33502af-e62e-494a-9497-3caf638795d0').setName('Rodenkirchen').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-06-28').setId('2e2bdb33-5537-4bc5-b8ba-6b595a331d88').setName('Ford + Dinslaken + Ahrtal').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2026-07-03')
    .setId('ed803105-add7-4096-9053-cd124f12acce')
    .setKilometer(50)
    .setName('RTC-Vereinsabend (Garten)')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-07-04').setId('7cb7a42d-5a5a-4536-a315-7c7a9b6a3c09').setName('Uckerath + Eslohe + St. Vith').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-07-05').setId('5c467f50-9bc1-48ba-ac62-f331f0c3b636').setName('Kerpen').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-07-12').setId('282bb339-8433-4b6d-8108-0269e8d22b0e').setName('Bundesradsporttreffen in Lünen (09.-12.07.)').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-07-19').setId('ea4e5aae-97aa-4b87-bf11-d2e05eec07fd').setName('Immendorf').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-07-26').setId('0c227b67-1173-493f-8fe3-f7fcf6b485a8').setName('Siegburg').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-08-01').setId('a3a0c598-a00f-4ad9-9a78-aa6a3b9696e7').setName('Lohmar').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2026-08-07')
    .setId('bc6bee82-f81a-4308-9804-88aa870e8b3a')
    .setKilometer(50)
    .setName('RTC-Vereinsabend (Garten)')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-08-09').setId('89c6effd-88bd-4e8a-a2fd-c6a80e7046bc').setName('Hennef').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-08-14', '2026-08-16').setId('14c36ab0-29f2-4e3d-b6e9-000435046ed6').setKilometer(200).setName('RTC-Etappenfahrt nach Maastricht').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-08-23').setId('f2e1d66b-dfd8-488f-94e1-0ccc505a7e4e').setName('St. Augustin').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-08-28').setId('c67066ea-9e5a-4fda-9d18-966a1171d44b').setName('Campus Bonn').buildEvent(),
  new EventBuilder().setCategory(EEvent.Permanente).setDate('2026-08-30').setId('69392744-0701-4b8e-b4cd-5603a7a197fb').setKilometer(200).setName('Sahrbach Panoramarunde').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2026-09-04')
    .setId('8912b685-0f85-49cd-b5c1-e99977a9006b')
    .setKilometer(50)
    .setName('RTC-Vereinsabend (Garten)')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-09-06').setId('a15717d2-2bbe-4082-9478-8f3f833222a4').setName('Malefinkbach + Rheinbach').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-09-12').setId('b32f311d-9ff7-4ab4-87f6-9d0f21c6a3e3').setName('Ladies Only Ride').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-09-27').setId('8a148c10-568d-418a-bc25-36e2d404240d').setName('Essen').buildEvent(),
  new EventBuilder().setCategory(EEvent.Vereinsfahrt).setDate('2026-10-03').setId('9e7652fe-e08d-4027-952f-c20f4996b677').setName('Büttgen').buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.RTF)
    .setDate('2026-10-04')
    .setId('7fd55682-f9a9-4c5a-be0c-9fe142e0ee1e')
    .setKilometer(500)
    .setName('Ausweichtermin Forsbachtour: nur 40er und 70er als Abschlussveranstaltung des Bezirks Köln')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2026-10-09')
    .setId('264dccfc-daa5-413a-9daa-434505fdaaa6')
    .setKilometer(50)
    .setName('RTC-Vereinsabend (Garten)')
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Mitgliederversammlung)
    .setContact('Diana Vialon')
    .setDate('2026-10-10', '2026-10-11')
    .setId('ce48b9b9-dbed-4b30-92eb-827731a4b4cb')
    .setKilometer(150)
    .setName('Zeltabbau im Garten (je nach Wetter)')
    .buildEvent(),
  new EventBuilder().setCategory(EEvent.Mitgliederversammlung).setContact('Diana Vialon').setDate('2026-12-05').setId('c9f5ded0-9b47-4533-8412-87d9db259e8f').setKilometer(150).setName('RTC-Weihnachtsfeier').buildEvent(),
]
