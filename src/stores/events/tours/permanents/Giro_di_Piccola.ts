import { mdiBank } from '@quasar/extras/mdi-v7'
import { mdiPaypal } from '@quasar/extras/mdi-v4'
import DonationBuilder from 'src/models/builder/DonationBuilder'
import ControlBuilder from 'src/models/builder/events/tours/ControlBuilder'
import PermanentBuilder from 'src/models/builder/events/tours/PermanentBuilder'
import EProfile from 'src/models/enums/events/EProfile'

export default new PermanentBuilder()
  .setAlbumIDs('e248bd2d-6b39-46a3-8f24-1134b5bc0d36')
  .setControls(
    new ControlBuilder().setCity('Köln').setId('9618c580-baec-4213-8282-8f1f675c9f1c').setStreet('Rather Mauspfad 19').setTitle('Start/Ziel Piccola Gelateria').setZipCode('51107').buildControl(),
    new ControlBuilder().setCity('Lindlar').setId('9a29c0bf-8379-4c3c-9a7c-09c447243daf').setStreet('Kölner Str. 16A').setTitle('Kamps Bäckerei').setZipCode('51789').buildControl(),
  )
  .setDonations(
    new DonationBuilder()
      .setIcon(mdiBank)
      .setId('824b1d08-d353-4c2b-95e5-1c32aed6598f')
      .setText(
        `Volksbank Köln Bonn eG
IBAN: DE73 3806 0186 66011910 14
BIC: GENODED1BRS`,
      )
      .setTitle('Bankverbindung')
      .buildDonation(),
    new DonationBuilder().setIcon(mdiPaypal).setId('85b44277-671f-433e-b23f-3a2fe540d22d').setTitle('PayPal').setUrl('www.paypal.com/ncp/payment/4MGHM6L3PQVU8').buildDonation(),
  )
  .setHeight(950)
  .setId('e90f024a-43c8-467e-a8aa-5e8765594d68')
  .setLastChange('2026-04-23')
  .setLength(85)
  .setProfile(EProfile.Bergig)
  .setUrls({ 'GPX-Datei': new URL('https://content.rtc-koeln.de/pages/events/tours/permanents/Giro_di_Piccola/Giro_di_Piccola_Tour.gpx') })
  .setText(
    `Der Giro di Piccola startet  an der Gelateria Piccola in Rath/Heumar, direkt gegenüber der Schmitzebud.
Ein perfekter Ort, um sich am Ende der Tour zu belohnen – aber dazu später mehr.

Zu Beginn ist die Strecke noch eher unscheinbar, denn es gilt, zügig aus Köln hinauszufahren.
Doch schon hinter Untereschbach zeigt der Giro di Piccola sein wahres Gesicht: wellig, ruhig und landschaftlich reizvoll.

Als Zwischenstopp empfehlen wir ein Café in Lindlar – eine Pause gehört einfach dazu.
Anschließend rollt ihr ein Stück über eine alte Bahntrasse, bevor diese wieder verlassen wird und es gleich zweimal hinauf Richtung Hohkeppel geht.
Sportlich, aber gut fahrbar.

Über das Kreuzhäuschen führt die Strecke weiter über die Höhenstraße bis nach Honrath.
Von dort geht es bergab Richtung Rösrath – und hier lohnt sich unbedingt eine kurze Fotopause: Die Aussicht auf Köln ist bei klarer Sicht beeindruckend.

Zum Abschluss bringt euch die Runde zurück zurGelateria Piccola, wo ein Eis oder ein Kaffee den perfekten Schlusspunkt unter eine abwechslungsreiche und genussvolle Tour setzt.

Die Startgebühr beträgt 5 Euro.
Diese kann über den Bezahlbutton gezahlt werden.

Und anschließend gefahrene Strecke und GC-Tourenapp Mailadresse an den Verantwortlichen radchaot@gmail.com schicken.

Der RTC Köln wünscht euch eine gute Fahrt – und denkt daran:
Das Leben rast. Genießt es.`,
  )
  .setTitle('Giro di Piccola')
  .buildPermanent()
