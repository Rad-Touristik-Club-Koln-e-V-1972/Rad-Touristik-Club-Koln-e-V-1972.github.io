import { mdiPaypal } from '@quasar/extras/mdi-v4'
import { mdiBank } from '@quasar/extras/mdi-v7'
import ControlBuilder from 'src/models/builder/events/tours/ControlBuilder'
import PermanentBuilder from 'src/models/builder/events/tours/PermanentBuilder'
import EEvent from 'src/models/enums/EEvent'
import EProfile from 'src/models/enums/events/EProfile'
import DonationBuilder from 'src/models/builder/DonationBuilder'

export default [
  new PermanentBuilder()
    .setCategory(EEvent.Permanente)
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
      new DonationBuilder()
        .setIcon(mdiPaypal)
        .setId('a8811f0f-2468-4035-a5de-983617e127d4')
        .setImageUrl('content.rtc-koeln.de/pages/events/tours/permanents/Sahrbach_Panoramarunde_Donation_QRCode.png.avif')
        .setTitle('PayPal')
        .setUrl('www.paypal.com/ncp/payment/QKZ3XRRMLZ56E')
        .buildDonation(),
    )
    .setHeight(1000)
    .setId('c9632c9a-dcdb-4d41-a621-c6a0badc1435')
    .setLastChange('2025-09-12')
    .setLength(130)
    .setProfile(EProfile.Bergisch)
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
    .buildPermanent(),
]
