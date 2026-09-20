import ControlBuilder from "@/models/builder/events/tours/ControlBuilder";
import EventBuilder from "@/models/builder/events/tours/EventBuilder";
import FeeBuilder from "@/models/builder/events/tours/events/FeeBuilder";
import TimeBuilder from "@/models/builder/events/tours/events/TimeBuilder";
import TrackBuilder from "@/models/builder/events/tours/events/TrackBuilder";
import EEvent from "@/models/enums/EEvent";

export default new EventBuilder()
  .setCategory(EEvent.RTF_RTC)
  .setFees(
    new FeeBuilder()
      .setId("705e22a4-891a-406b-88ba-c4e104d6d2d3")
      .setName("Kinder und Jugendliche bis 18 Jahre")
      .setPrice(0)
      .buildFee(),
    new FeeBuilder()
      .setId("f7116627-33c3-4b87-a77e-fed528bafa63")
      .setName("Erwachsene (bei Voranmeldung bis 02.10.2026)")
      .setPrice(10)
      .buildFee(),
    new FeeBuilder()
      .setId("38c2d89f-813c-4e8a-ae46-4f378a7209b5")
      .setName("Erwachsene (ohne Voranmeldung)")
      .setPrice(15)
      .buildFee()
  )
  .setId("2048a7f0-315a-43d7-885a-23f388601052")
  .setLastChange("2026-09-20")
  .setLocation(
    new ControlBuilder()
      .setCity("Köln-Poll")
      .setId("9644f162-29c8-40ef-a37f-3eac5e94d8c5")
      .setStreet("Weidenweg 46")
      .setTitle("Poller Fischerhaus")
      .setZipCode("51105")
      .buildControl()
  )
  .setText(
    `<b>Liebe Radsportlerinnen und Radsportler,</b>

am 10. Oktober steigt unser Saisonfinale:
mit RTF, Tombola und Abschlussparty am Poller Fischerhaus in Köln-Poll – organisiert von der geballten Frauenpower unseres Vereins, als Dankeschön an die Community und unsere Radsport-Männer.

<span class='text-primary'>Um Voranmeldung für RTF und Party wird bis zum 02.10.2026 gebeten.</span>

Wir freuen uns auf Euch!

<b>Euer RTC Köln e.V. 1972</b>`
  )
  .setTimes(
    new TimeBuilder()
      .setId("904b6941-8a8b-4450-973c-3f5b336b5276")
      .setName("Startfenster RTF")
      .setTime("09:00", "11:00")
      .buildTime(),
    new TimeBuilder()
      .setId("6d74b742-81f1-4a0a-955d-d56564acd307")
      .setName("Start begleitete Tour (78 km)")
      .setTime("10:00")
      .buildTime(),
    new TimeBuilder()
      .setId("4dfe2b74-4382-43da-90d9-78a3473347a9")
      .setName("Tombola-Ziehung")
      .setTime("16:00")
      .buildTime(),
    new TimeBuilder()
      .setId("b8cdb12d-037b-4522-894e-48425a8218c0")
      .setName(
        "Kontrollschluss am Ziel & Beginn Saisonabschlussparty im Poller Fischerhaus"
      )
      .setTime("17:00")
      .buildTime()
  )
  .setTitle("RTC Köln Saisonfinale mit Saisonabschlussparty")
  .setTracks(
    new TrackBuilder()
      .setControls(2)
      .setHeight(250)
      .setId("c1934b4b-2058-4100-946e-77c264533c76")
      .setLength(55)
      .setName("55 km")
      .setTime("09:00", "11:00")
      .setUrls({
        "GPX-Datei": new URL(
          "https://content.rtc-koeln.de/pages/events/tours/rtfs/2026-09-08_Abschlusstour_55km.gpx"
        )
      })
      .buildTrack(),
    new TrackBuilder()
      .setControls(2)
      .setHeight(280)
      .setId("d9e54ab9-a0ec-4e82-ac62-ede4a3deecfb")
      .setLength(78)
      .setName("78 km")
      .setTime("09:00", "11:00")
      .setUrls({
        "GPX-Datei": new URL(
          "https://content.rtc-koeln.de/pages/events/tours/rtfs/2026-09-08_Abschlusstour_78km.gpx"
        )
      })
      .buildTrack(),
    new TrackBuilder()
      .setControls(2)
      .setHeight(280)
      .setId("2338bdd3-a6e5-405d-bf23-0bf208c13d8e")
      .setLength(78)
      .setName("78 km (begleitete Tour)")
      .setTime("10:00")
      .setUrls({
        "GPX-Datei": new URL(
          "https://content.rtc-koeln.de/pages/events/tours/rtfs/2026-09-08_Abschlusstour_78km.gpx"
        )
      })
      .buildTrack(),
    new TrackBuilder()
      .setControls(3)
      .setHeight(500)
      .setId("a29754a2-b763-41c4-843b-45ae99b7bba6")
      .setLength(104)
      .setName("104 km")
      .setTime("09:00", "11:00")
      .setUrls({
        "GPX-Datei": new URL(
          "https://content.rtc-koeln.de/pages/events/tours/rtfs/2026-09-08_Abschlusstour_104km.gpx"
        )
      })
      .buildTrack()
  )
  .buildEvent();
