import ControlBuilder from "@/models/builder/events/tours/ControlBuilder";
import EventBuilder from "@/models/builder/events/tours/EventBuilder";
import FeeBuilder from "@/models/builder/events/tours/events/FeeBuilder";
import TimeBuilder from "@/models/builder/events/tours/events/TimeBuilder";
import TrackBuilder from "@/models/builder/events/tours/events/TrackBuilder";
import EEvent from "@/models/enums/EEvent";

export default [
  new EventBuilder()
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
    .setLastChange("2026-09-06")
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

<b>Strecken</b>
<ul style='list-style-position: inside; margin-bottom: -30px; margin-top: -10px'>
  <li>55 km</li>
  <li>78 km (zusätzlich als begleitete Tour)</li>
  <li>104 km</li>
</ul>
GPX-Daten folgen rechtzeitig vor der Veranstaltung in der GC Touren-App.

<b>Ablauf</b>
<ul style='list-style-position: inside; margin-bottom: -30px; margin-top: -10px'>
  <li>09:00–11:00 Uhr: Startfenster RTF</li>
  <li>16:00 Uhr: Tombola-Ziehung</li>
  <li>17:00 Uhr: Saisonabschlussparty im Poller Fischerhaus</li>
</ul>

<div class='text-primary'>Um Voranmeldung für RTF und Party wird bis zum 02.10.2026 gebeten.</div>

Wir freuen uns auf Euch!

<b>Euer RTC Köln e.V. 1972</b>`
    )
    .setTimes(
      new TimeBuilder()
        .setId("904b6941-8a8b-4450-973c-3f5b336b5276")
        .setName("Start")
        .setTime("09:00", "11:00")
        .buildTime(),
      new TimeBuilder()
        .setId("6d74b742-81f1-4a0a-955d-d56564acd307")
        .setName("Start begleitete Tour (78 km)")
        .setTime("10:00")
        .buildTime(),
      new TimeBuilder()
        .setId("b8cdb12d-037b-4522-894e-48425a8218c0")
        .setName("Kontrollschluss am Ziel & Beginn Saisonabschlussparty")
        .setTime("17:00")
        .buildTime()
    )
    .setTitle("RTC Köln Saisonfinale mit Saisonabschlussparty")
    .setTracks()
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Familientour)
    .setFees(
      new FeeBuilder()
        .setGroup("Gebühren")
        .setId("5d862e1f-6898-4b9e-9b17-24a208f0ac65")
        .setName("Kinder und Jugendliche bis 18 Jahre")
        .setPrice(0)
        .buildFee(),
      new FeeBuilder()
        .setGroup("Gebühren")
        .setId("7c08c3cb-c0cb-431c-a756-12fef22957af")
        .setName("Erwachsene")
        .setPrice(6)
        .buildFee(),
      new FeeBuilder()
        .setGroup("Fährpreise*")
        .setId("00058a22-eaf8-4ab2-9459-744bb6dbb0f6")
        .setName("Erwachsene")
        .setPrice(5)
        .buildFee(),
      new FeeBuilder()
        .setGroup("Fährpreise*")
        .setId("e0bf5ea3-a4c1-4d47-ae57-ff966337aed7")
        .setName("Kinder von 4 – 11 Jahre")
        .setPrice(2)
        .buildFee(),
      new FeeBuilder()
        .setGroup("Fährpreise*")
        .setId("6ed05bc8-8c42-439e-bdc4-e381542f48d3")
        .setName("Kinder von 0 – 3 Jahre")
        .setPrice(0)
        .buildFee(),
      new FeeBuilder()
        .setGroup("Fährpreise*")
        .setId("0cf846ff-0717-4828-af8d-b068e000f47a")
        .setName("Zuschlag Lastenrad, Anhänger etc.")
        .setPrice(2)
        .buildFee()
    )
    .setId("75072ccb-fbf8-4449-ab94-5d746e32ce69")
    .setLastChange("2026-05-30")
    .setLocation(
      new ControlBuilder()
        .setCity("Köln-Zündorf")
        .setId("5198e22d-0d6a-49fc-a5f4-235c6055db67")
        .setStreet("Heerstraße 7")
        .setTitle("Schulzentrum Zündorf")
        .setUrl(
          "www.google.com/maps?daddr=Heerstra%C3%9Fe+7,+51143,+K%C3%B6ln,+Deutschland&hl=de"
        )
        .setZipCode("51143")
        .buildControl()
    )
    .setText(
      `Liebe Kinder, Eltern und sonstige Verwandtschaft :-),

der RTC Köln freut sich, nach langer Zeit mal wieder eine Familientour anbieten zu können und lädt euch alle dazu herzlich ein.
Die <b>Krokodil-Familientour</b> startet am 31. Mai 2026 ab 10:00 Uhr im Schulzentrum Porz-Zündorf.
"Langschläfer" können noch bis 12:00 Uhr auf die Strecke gehen.
Wir bieten euch eine 22 km lange Familientour links und rechts des Rheins, die weitgehend über Radwege und Nebenstraßen in den Rheinauen führt.
Ihr habt aber auch einen Blick auf den Chemiegürtel, der Köln von Wesseling über Knappsack bis Dormagen und Leverkusen umspannt.
Am Fähranleger Wesseling angekommen, könnt Ihr Euch für den zweiten Teil der Strecke ausruhen und mit unserer vielfältigen Verpflegung stärken.

Die "Highlights" der Tour sind die beiden Fährfahrten von Zündorf nach Weiß und von Wesseling nach Lülsdorf – genau das Richtige für kleine SeeräuberInnen.

Hier möchten wir uns ausdrücklich bei den Fährleuten Niklas Thiel und Reiner Weisbarth für das Entgegenkommen bei den Fahrpreisen bedanken.

Euer RTC Köln e.V.`
    )
    .setTimes(
      new TimeBuilder()
        .setId("c94e6040-6a86-49c1-ac67-a13941a84894")
        .setName("Beginn der Veranstaltung")
        .setTime("07:00")
        .buildTime(),
      new TimeBuilder()
        .setId("06606e1f-74ba-491b-b099-61a571183cca")
        .setName("Startfenster Familientour")
        .setTime("10:00", "12:00")
        .buildTime(),
      new TimeBuilder()
        .setId("4ca570ef-378b-43e5-a3e5-8ed15815cd0b")
        .setName("Urkunden und weitere Überraschungen")
        .setTime("nach Rückkehr")
        .buildTime()
    )
    .setTitle("Die Familientour")
    .setTracks(
      new TrackBuilder()
        .setId("e6db748e-6b26-496b-b593-4d9377206d0d")
        .setName("Vor der Tour")
        .setText(
          `<div class='q-gutter-md row'>
  <div class='col-3'>
    <img alt="Fährchips" src="https://content.rtc-koeln.de/pages/events/tours/rtfs/family/2024-05-24-19-49-39-748a.jpg.avif" style='width: 100%' />
  </div>
  <div class='col'>
    Auf dem Schulgelände sind ausreichend Parkmöglichkeiten vorhanden.

    Für die Frühaufsteher unter euch bieten wir ab 07:00 Uhr ein Frühstück in der Aula an.

    Wir starten, wie auch bei unseren großen Touren, im Schulzentrum Zündorf.
    Dort ist für euch ein besonderer Anmeldetisch eingerichtet, wo eure erwachsenen Begleiter das „Startgeld“ entrichten müssen.
    Daneben gibt es dort die Chips für die Fährfahrten.
  </div>
</div>`
        )
        .buildTrack(),
      new TrackBuilder()
        .setId("8fa6354d-0607-4401-862c-e6ab93f44a27")
        .setName("Während der Tour")
        .setText(
          `Bei der Tour fahrt Ihr immer den gelben Schildern mit dem Krokodil nach. Sie führen euch sicher ins Ziel. Bei Richtungswechseln kommt der RTC-Pfeil hinzu.
<img alt="Streckenmarkierung" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/2024-05-24-10-30-41-726.jpg.avif' style='width: 50%' />

Auf unserer Kontrollstelle am Wesselinger Fähranleger steht für euch eine vielfältige Verpflegung zur Verfügung,
damit ihr das Schulzentrum in Zündorf garantiert ohne Hungerast erreicht.

Sollte jemand auf der Strecke bleiben, z.B. wegen einer Panne:
Ruft einfach die Notfallnummer, die auf der Startkarte gedruckt ist, an.
Wir kommen euch abholen.`
        )
        .buildTrack(),
      new TrackBuilder()
        .setId("74855084-4ca7-45a9-a5a9-48172caf4eb5")
        .setName("Nach der Tour")
        .setText(
          `Im Ziel erhaltet Ihr eine Teilnehmerurkunde und eine kleine Überraschung.

Damit ihr nach so einer anstrengenden Tour wieder zu Kräften kommt,
bieten wir neben selbstgemachten Kuchen ab mittags auch leckere warme Gerichte mit verschiedenen Salaten an.

Und wer dazu noch ein Kaltgetränk möchte, dem wird auch geholfen.

Platz zum Zusammensitzen und Plauschen gibt es, je nach Wetterlage, draußen (am liebsten) auf dem Schulgelände oder drinnen in der Aula.`
        )
        .buildTrack()
    )
    .buildEvent()
];
