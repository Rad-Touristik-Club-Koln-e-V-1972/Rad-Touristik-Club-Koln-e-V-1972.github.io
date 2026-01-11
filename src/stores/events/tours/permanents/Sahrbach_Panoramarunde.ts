import { mdiBank } from '@quasar/extras/mdi-v7'
import { mdiPaypal } from '@quasar/extras/mdi-v4'
import DonationBuilder from 'src/models/builder/DonationBuilder'
import ControlBuilder from 'src/models/builder/events/tours/ControlBuilder'
import PermanentBuilder from 'src/models/builder/events/tours/PermanentBuilder'
import EProfile from 'src/models/enums/events/EProfile'

export default new PermanentBuilder()
  .setControls(
    new ControlBuilder()
      .setCity('Rheinbach')
      .setId('ab35dd0e-d37b-409a-b2c5-e71ae47f854f')
      .setStreet('Bahnhofstraße 39')
      .setTitle('Bäckerei am Rheinbacher Bahnhof')
      .setUrl('kamps.de/standort/kamps-baeckerei-rheinbach-bahnhofstrasse-39')
      .setZipCode('53359')
      .buildControl(),
    new ControlBuilder()
      .setCity('Rheinbach-Hilberath')
      .setId('cab9adaf-2553-4570-9f4d-17992056aed8')
      .setStreet('Hilberather Straße 27')
      .setTitle('Café in der alten Scheune & Hofladen Sampels')
      .setUrl('www.scheunencafe.de')
      .setZipCode('53359')
      .buildControl(),
  )
  .setDonations(
    new DonationBuilder()
      .setIcon(mdiBank)
      .setId('5889e9e2-83e7-4a52-b79f-522a9b1aacdf')
      .setText(
        `Volksbank Köln Bonn eG
IBAN: DE73 3806 0186 66011910 14
BIC: GENODED1BRS`,
      )
      .setTitle('Bankverbindung')
      .buildDonation(),
    new DonationBuilder().setIcon(mdiPaypal).setId('a8811f0f-2468-4035-a5de-983617e127d4').setTitle('PayPal').setUrl('www.paypal.com/ncp/payment/QKZ3XRRMLZ56E').buildDonation(),
  )
  .setHeight(1000)
  .setId('c9632c9a-dcdb-4d41-a621-c6a0badc1435')
  .setImageUrls({
    'af90219f-273a-4fd2-9897-c4da2cd653fe': 'content.rtc-koeln.de/pages/events/tours/permanents/Sahrbach_Panoramarunde/signal-2026-01-06-172516_002.jpeg.avif',
    '7a0d315f-5024-4ec1-ac32-9aa701ad181e': 'content.rtc-koeln.de/pages/events/tours/permanents/Sahrbach_Panoramarunde/signal-2026-01-06-172516_009.jpeg.avif',
    '179d9d4f-1344-4cca-b5cd-f332dcf077e2': 'content.rtc-koeln.de/pages/events/tours/permanents/Sahrbach_Panoramarunde/signal-2026-01-06-172516_003.jpeg.avif',
    'ec1e521f-d7f6-4660-a500-e84675e54c34': 'content.rtc-koeln.de/pages/events/tours/permanents/Sahrbach_Panoramarunde/signal-2026-01-06-172516_010.jpeg.avif',
    '75efa4f9-cb7f-402c-8480-e8af92890fb5': 'content.rtc-koeln.de/pages/events/tours/permanents/Sahrbach_Panoramarunde/signal-2026-01-06-172516_004.jpeg.avif',
    '89975792-8642-4365-a8b1-3bd513ebd822': 'content.rtc-koeln.de/pages/events/tours/permanents/Sahrbach_Panoramarunde/signal-2026-01-06-172516_011.jpeg.avif',
    'bd3fda45-6ea7-4d93-8f8f-26502b6cfcd2': 'content.rtc-koeln.de/pages/events/tours/permanents/Sahrbach_Panoramarunde/signal-2026-01-06-172516_005.jpeg.avif',
    '76a77a5e-dd9c-4c78-9874-55d2f0426e9d': 'content.rtc-koeln.de/pages/events/tours/permanents/Sahrbach_Panoramarunde/signal-2026-01-06-172516_012.jpeg.avif',
    '34d6c283-6fb6-46aa-8924-ba933e0cf169': 'content.rtc-koeln.de/pages/events/tours/permanents/Sahrbach_Panoramarunde/signal-2026-01-06-172516_006.jpeg.avif',
    '864dfe33-ea8f-4984-99ff-eb79b5323c87': 'content.rtc-koeln.de/pages/events/tours/permanents/Sahrbach_Panoramarunde/signal-2026-01-06-172516_013.jpeg.avif',
    'af15368e-4d4d-44ec-b608-b0f37be75fb3': 'content.rtc-koeln.de/pages/events/tours/permanents/Sahrbach_Panoramarunde/signal-2026-01-06-172516_007.jpeg.avif',
    'aa5a4111-9c1e-450d-8146-aed9baa11eed': 'content.rtc-koeln.de/pages/events/tours/permanents/Sahrbach_Panoramarunde/signal-2026-01-06-172516_014.jpeg.avif',
    'f3eac232-95cb-4071-af9d-d392510df9e0': 'content.rtc-koeln.de/pages/events/tours/permanents/Sahrbach_Panoramarunde/signal-2026-01-06-172516_008.jpeg.avif',
    '93dc08e0-3632-421c-8cd4-10e8da98b576': 'content.rtc-koeln.de/pages/events/tours/permanents/Sahrbach_Panoramarunde/signal-2026-01-06-172516.jpeg.avif',
  })
  .setLastChange('2026-01-11')
  .setLength(130)
  .setProfile(EProfile.Bergisch)
  .setUrls({ 'GPX-Datei': new URL('https://content.rtc-koeln.de/pages/events/tours/permanents/Sahrbach_Panoramarunde/Sahrbach_Panoramarunde_Tour.gpx') })
  .setText(
    `Unsere Permanente „Sahrbach Panoramarunde“! 🚴‍♀️

130 km | ca. 1.000 hm | Traumhafte Eifel-Panoramen

Die neue Runde des RTC Köln e.V. ist da – perfekt für alle, die Wertungskilometer sammeln und die Schönheit der Eifel genießen wollen!

Highlights:
✅ Atemberaubende Ausblicke entlang des Sahrbachs
✅ Anspruchsvolle, aber gut fahrbare 130 km mit rund 1.000 Höhenmetern
✅ Nach ca. 40 km bietet sich ein kleiner Stopp in der Bäckerei am Rheinbacher Bahnhof an
✅ Kulinarischer Tipp bei km 80 – unbedingt ausprobieren: Das „Café in der alten Scheune“ in Hilberath! Bester 🍰 Kuchen 🫶 (montags geschlossen)

Die Startgebühr beträgt 5 Euro.
Diese kann über den Bezahlbutton gezahlt werden.

Und anschließend gefahrene Strecke und GC-Tourenapp Mailadresse an den Verantwortlichen radchaot@gmail.com schicken.

Schnapp dir dein Rennrad und entdecke eine der schönsten Strecken der Region!

Viel Spaß auf der Sahrbach Panoramarunde!`,
  )
  .setTitle('Sahrbach Panoramarunde')
  .buildPermanent()
