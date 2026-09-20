import ControlBuilder from "@/models/builder/events/tours/ControlBuilder";
import EventBuilder from "@/models/builder/events/tours/EventBuilder";
import FeeBuilder from "@/models/builder/events/tours/events/FeeBuilder";
import TimeBuilder from "@/models/builder/events/tours/events/TimeBuilder";
import TrackBuilder from "@/models/builder/events/tours/events/TrackBuilder";
import EEvent from "@/models/enums/EEvent";
import EProfile from "@/models/enums/events/EProfile";
import useCalendarStore from "@/stores/events/Calendar";

export default new EventBuilder()
  .setActive(!!useCalendarStore().getNextRTF(EEvent.RTF_Forsbach_Tour))
  .setCategory(EEvent.RTF_Forsbach_Tour)
  .setFees(
    new FeeBuilder()
      .setId("705e22a4-891a-406b-88ba-c4e104d6d2d3")
      .setName("<b>Bike Rebels</b><br/>(Jugendliche bis 18 Jahre)")
      .setPrice(0)
      .buildFee(),
    new FeeBuilder()
      .setId("f7116627-33c3-4b87-a77e-fed528bafa63")
      .setName(
        "<b>Team-Biker <i>mit</i>&ensp;Breitensportlizenz</b><br/>(BDR-Mitglieder mit Breitensportlizenz)"
      )
      .setPrice(8)
      .buildFee(),
    new FeeBuilder()
      .setId("38c2d89f-813c-4e8a-ae46-4f378a7209b5")
      .setName(
        "<b>Team-Biker <i>ohne</i>&ensp;Breitensportlizenz</b><br/>(sonstige BDR-Mitglieder)"
      )
      .setPrice(10)
      .buildFee(),
    new FeeBuilder()
      .setId("b71ffe1b-6d34-4b98-af51-ad0a59fd9b22")
      .setName("<b>After Work-Bikers</b><br/>(Gastfahrer)")
      .setPrice(13)
      .buildFee(),
    new FeeBuilder()
      .setId("b3be3c22-e784-4650-b27c-f151056faf88")
      .setGroup("Family Tour")
      .setName("<b>Jugendliche bis 18 Jahre</b>")
      .setPrice(0)
      .buildFee(),
    new FeeBuilder()
      .setId("a59c97cf-cfcc-43aa-bb7c-774bf80f79e9")
      .setGroup("Family Tour")
      .setName("<b>Erwachsene</b><br/>(zzgl. Fährfahrten)")
      .setPrice(6)
      .buildFee()
  )
  .setId("2048a7f0-315a-43d7-885a-23f388601052")
  .setLastChange("2026-05-30")
  .setLocation(
    new ControlBuilder()
      .setCity("Köln-Zündorf")
      .setId("9644f162-29c8-40ef-a37f-3eac5e94d8c5")
      .setStreet("Heerstraße 7")
      .setTitle("Schulzentrum Zündorf")
      .setUrl(
        "www.google.com/maps?daddr=Heerstra%C3%9Fe+7,+51143,+K%C3%B6ln,+Deutschland&hl=de"
      )
      .setZipCode("51143")
      .buildControl()
  )
  .setText(
    `Liebe Radsportlerinnen und Radsportler,

wir freuen uns schon riesig auf die neue Radsportsaison und auch darauf, Euch bei unserer Forsbachtour wiederzusehen.
Die Forsbachtour startet im Schulzentrum in Porz-Zündorf.
„Frühaufsteher“, die die 150 km fahren möchten, können von 7:30 Uhr bis 8:30 Uhr starten.
„Langschläfer“ können bis 11:00 Uhr starten – je nach Streckenlänge.

Wir bieten Euch vier RTF-Strecken, eine Familientour und eine begleitete Tour an:
22 km, 52 km, 82 km, 125 km und 150 km

<ul style='list-style-position: inside; list-style-type: "82 km - "; margin-bottom: -50px; margin-top: -35px'>
  <li><b>Begleitete gemischte Tour</b></li>
</ul>

Unsere Streckenführungen wurden in den vergangenen Jahren von den Teilnehmer:innen immer sehr gelobt.

Was sich nicht ändert ist unsere – über Kölns Grenzen hinweg bekannte – sehr gute Verpflegung:
An den Kontrollen und auf dem Platz.
Es gibt ein frisch gekochtes <b>vegetarisches</b> Gericht, selbstgemachte Salate und natürlich die obligatorische leckere Bratwurst.

Mehr Infos gibt es hier, auf Instagram und Facebook kurz vor der Forsbachtour, die am 31.05.2025 stattfindet.

Wir wünschen Euch viel Spaß bei der Forsbachtour, die wir mit viel Engagement und Liebe für Euch ausrichten.

Euer RTC Köln e.V`
  )
  .setTimes(
    new TimeBuilder()
      .setId("904b6941-8a8b-4450-973c-3f5b336b5276")
      .setName("Start")
      .setTime("07:30")
      .buildTime(),
    new TimeBuilder()
      .setId("b8cdb12d-037b-4522-894e-48425a8218c0")
      .setName("Kontrollschluss am Ziel")
      .setTime("17:00")
      .buildTime()
  )
  .setTitle("Die Forsbachtour")
  .setTracks(
    new TrackBuilder()
      .setId("cda07bd6-6643-4f3e-b942-48ad69cc0de6")
      .setName("Hinweis")
      .setText(
        `Wir bieten in diesem Jahr <b>eine begleitete Tour</b> (82 km) für Neueinsteiger:innen an!

Begleitete gemischte Tour (82 km) mit den beiden Guides Verena und Uwe.

Tempo: max. 20er Schnitt
Der/die langsamste Fahrer:in bestimmt die Geschwindigkeit.
NUR FÜR RENNRÄDER!

Meldet Euch gerne bei Diana (1. Vorsitzende), falls Ihr Fragen zu den begleiteten Touren habt.
erster.vorsitz@rtc-koeln.de`
      )
      .buildTrack(),
    new TrackBuilder()
      .setId("19564df0-3abb-4d67-b262-2ff357826470")
      .setName("Vor der Tour")
      .setText(
        `Auf dem Schulgelände sind ausreichend Parkmöglichkeiten vorhanden.

Für die Frühaufsteher unter euch bieten wir ab 07:00 Uhr ein Frühstück in der Aula an.

Am Veranstaltungstag werden Fotos gemacht und Videosequenzen aufgenommen.
Bitte sprecht die/den Fotograf:in/Videograf:in an, wenn das Foto von Euch gelöscht werden muss.
Ansonsten gehen wir von Eurer Zustimmung aus.`
      )
      .buildTrack(),
    new TrackBuilder()
      .setId("bb9e11a4-f627-41eb-a288-34d0d4acfc66")
      .setName("Während der Tour")
      .setText(
        `Auf unseren Kontrollstellen steht für euch eine vielfältige Verpflegung zur Verfügung, damit ihr die nächste Kontrollstelle garantiert ohne Hungerast erreicht.
Zum Beispiel mit unseren Power-Reisriegeln in Bourauel.

Sollte jemand auf der Strecke bleiben, z.B. wegen einer Panne:
<ul>
    <li>Ruft einfach die Notfallnummer, die am Start aushängt, an.</li>
    <li>Wir kommen euch abholen.</li></ul>`
      )
      .buildTrack(),
    new TrackBuilder()
      .setId("d10f9888-866c-4e64-8392-541e09a7b543")
      .setName("Nach der Tour")
      .setText(
        `Besonders wichtig nach so einer anstrengenden Tour: Duschen.
Sie sind in einem Nebengebäude reichlich vorhanden.

Damit ihr euren Kohlehydratspeicher wieder aufladen könnt, bieten wir neben selbstgemachtem Kuchen ab <b>mittags auch leckere warme Gerichte (auch <i>vegetarisch</i>)</b> mit verschiedenen, selbstgemachten Salaten an.

Und wer dazu noch ein Kaltgetränk möchte, dem wird auch geholfen.

Platz zum Zusammensitzen und Plauschen gibt es, je nach Wetterlage, draußen (am liebsten) auf dem Schulgelände oder drinnen in der Aula.`
      )
      .buildTrack(),
    new TrackBuilder()
      .setId("dcd525d9-c804-435f-b50f-21ce85294dc7")
      .setName("Alle Strecken")
      .setText(
        `Wie in den letzten Jahren starten wir im Schulzentrum in Porz-Zündorf.
„Frühaufsteher“ können dort ab 7:30 Uhr, „Langschläfer“ bis elf Uhr starten.
Parkflächen stehen auf dem Schulgelände ausreichend zur Verfügung.
Die Anmeldung für die Breitensportlizenzinhaber:innen erfolgt über die GC Touren-App.
Die App kann man sich auch als nicht BDR-Mitglied herunterladen – das vereinfacht die Anmeldung vor Ort sehr.
Für alle anderen läuft die Anmeldung „analog“ an den Starttischen vor Ort.

<a href='https://www.rad-net.de/touren-app-lizenz.htm' target="_blank">
    <b>Wichtiger Hinweis für Fahrer:innen ohne Breitensportlizenz (Gastfahrer):</b>
    Bitte meldet Euch im Vorfeld in der <b>GC Touren-App</b> mit dem kostenlosen Basisaccount an.
</a>`
      )
      .buildTrack(),
    new TrackBuilder()
      .setControls(1)
      .setHeight(70)
      .setId("71029e5d-5f30-4cf0-b2fa-abf0468d3864")
      .setLength(22)
      .setName("Kids-Krokodil-Abenteuerrunde")
      .setProfile(EProfile.Flach)
      .setText(
        `Vom Start weg fahren wir immer den RTC-Schildern nach an Rolfs Streichelzoo vorbei,
den der ein oder andere sicher schon kennt (wenn nicht – sehr empfehlenswert!),
<img alt="B1" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/Rolfs Streichelzoo.jpg.avif' style='width: 50%' />
in Richtung Yachthafen, Groov und des Fähranlegers des KROKODILS.
<img alt="B2" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/signal-2024-05-09-17-29-03-647.jpg.avif' style='width: 50%' />
Hier bezahlt Ihr den Fährmann Niklas Thiel mit euren Chips.
Dafür bringt er euch nach einer wilden Seefahrt sicher an das andere Ufer.
<img alt="B3" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/signal-2024-05-09-17-30-26-910.jpg.avif' style='width: 50%' />
Weiter geht es immer am Rhein entlang in Richtung Sürth,
<img alt="B4" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/signal-2024-05-09-17-31-36-311.jpg.avif' style='width: 50%' />
wo ein schöner Kirchturm mit Zwiebelhaube ins Blickfeld kommt.
Von dort fahren wir auf dem Leinpfad am Naturschutzgebiet Godorfer Hafen
<img alt="B5" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/signal-2024-05-09-17-32-44-524.jpg.avif' style='width: 50%' />
entlang bis zur Mauer der Theo Steil GmbH, die mit tollen Graffitis verziert ist.
<img alt="B6.1" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/signal-2024-05-09-17-34-56-884-14.jpg.avif' style='width: 50%' />
<img alt="B6.2" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/2024-05-09-12-45-04-754a.jpg.avif' style='width: 50%' />
Schon in der nächste Kurve haben wir einen interessanten Blick in das Hafenbecken, wo die Shell AG ihre Raffinerieprodukte umschlägt.
Ehe wir die alte Godorfer Mühle erreichen, queren wir am Bahnhof Godorf auf einer Fußgängerbrücke
<img alt="B7" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/2024-05-09-12-49-36-539.jpg.avif' style='width: 50%' />
die Eisenbahnschienen.
Hier müssen wir zu Fuß laufen, um auf den Radweg an der Industriestraße zu kommen.

Die Industriestraße führt uns auf die Dachhöhe der umliegenden Bauten, sodass Ihr einen Blick in die Industrieanlagen werfen könnt.
<img alt="B8" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/2024-05-09-13-00-40-790.jpg.avif' style='width: 50%' />
Und das ist gleichzeitig die einzige Steigung, die ihr auf unserer Tour bewältigen müsst.
Von dort aus geht es hinab nach Wesseling, wo nach einer Fahrt durch die Straßen
<img alt="B9" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/signal-2024-05-09-17-34-56-884-16.jpg.avif' style='width: 50%' />
am Fähranleger die wohlverdiente Pause wartet.
<img alt="B10" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/signal-2024-05-09-17-34-56-884-4.jpg.avif' style='width: 50%' />

Hier steht für euch vielfältige Verpflegung bereit, die eure müden Beine wieder in Schwung bringt.
Wenn ihr wieder fit seid, bringt euch der RHEINSCHWAN auf die andere Rheinseite nach Lülsdorf.
Auch hier bezahlt ihr den Fährmann, Herrn Weisbarth, mit euren Chips.
<img alt="B11" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/signal-2024-05-09-17-34-56-884-5.jpg.avif' style='width: 50%' />

Nun geht es auf die Heimreise.
Gleich zu Beginn fahrt ihr über die Einlaufschleusen des Hochwasserschutzbeckens Langeler Bogen.
<img alt="B12" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/2024-05-09-14-36-53-220.jpg.avif' style='width: 50%' />
Die dahinter liegenden Felder werden bei Extremhochwasser geflutet und können fast 5 Mio. Kubikmeter Wasser aufnehmen.
Das entspricht etwa einem Volumen von 1800 olympischen Schwimmbecken; die so entstehende Fläche umfasst ca. 210 Fußballfelder.
Und das alles, damit Köln nicht absäuft.
Auf der Deichkrone geht es durch den schönen Auenwald nach Langel.
<img alt="B13" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/2024-05-09-15-34-10-491.jpg.avif' style='width: 50%' />
<img alt="B14" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/2024-05-09-16-12-30-546.jpg.avif' style='width: 50%' />
Ein kleiner Hügel am Ende des Deichs zeigt euch, dass ihr über die Auslaufschleusen gefahren seid, denn das viele Wasser muss nach Ende der Flut ja wieder zurück in den Rhein.
Kurz darauf erreicht ihr den Langeler Weiher.
Er ist eines der letzten Auengewässer in NRW und bietet Heimat für seltene Fischarten.
Er wurde gerade erst vor dem Austrocknen gerettet.

Auf dem Damm geht es an „d´r Tant“ und der Bootsrampe vorbei weiter in Richtung Zündorf.
Hier können wir noch einmal einen schönen Blick auf Sürth am anderen Rheinufer werfen.
<img alt="B15" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/2024-05-09-16-14-10-577.jpg.avif' style='width: 50%' />
Bald schon hören wir den fröhlichen Kinderlärm aus dem Zündorfbad und damit ist die Tour fast geschafft.
Noch schnell am schönen Spielplatz vorbei und durch ein paar Zündorfer Gässchen und schon sind wir wieder zurück im Schulzentrum Zündorf.

Nun kann der gemütliche Teil beginnen mit einer tollen Verpflegung und der ein oder anderen Überraschung.`
      )
      .setTime("10:00", "12:00")
      .setUrls({
        "GPX-Datei": new URL(
          "https://content.rtc-koeln.de/pages/events/tours/rtfs/family/2024-02-16_1441124693_Die Krokodil-Familientour – Toller Radweg beidseits des Rheins Runde von Zündorf.gpx"
        ),
        Komoot: new URL("https://www.komoot.com/de-de/tour/2255106012?ref")
      })
      .buildTrack(),
    new TrackBuilder()
      .setControls(1)
      .setHeight(390)
      .setId("c1934b4b-2058-4100-946e-77c264533c76")
      .setLength(52)
      .setName("Rookie Power-Runde")
      .setTime("07:30", "11:00")
      .setUrls({
        Komoot: new URL("https://www.komoot.com/de-de/tour/2255113981")
      })
      .buildTrack(),
    new TrackBuilder()
      .setControls(2)
      .setHeight(780)
      .setId("383d8d76-1e23-42bf-983c-aeaf54672755")
      .setLength(82)
      .setName("Bergische Einstiegsrunde")
      .setProfile(EProfile.Wellig)
      .setTime("07:30", "12:00")
      .setUrls({
        Komoot: new URL("https://www.komoot.com/de-de/tour/2050471438")
      })
      .buildTrack(),
    new TrackBuilder()
      .setControls(2)
      .setHeight(780)
      .setId("519dbc00-5493-42cd-b852-e53bdacc74df")
      .setLength(82)
      .setName("Die begleitete 82er", "(Gemischte Tour)")
      .setProfile(EProfile.Wellig)
      .setTime("10:00")
      .setUrls({
        Komoot: new URL("https://www.komoot.com/de-de/tour/2050471438?ref")
      })
      .buildTrack(),
    new TrackBuilder()
      .setControls(3)
      .setHeight(1500)
      .setId("e075e4fb-e46a-4505-b935-8acfe1368265")
      .setLength(125)
      .setName("Bergische Horizonte")
      .setProfile(EProfile.Huegelig)
      .setTime("07:30", "10:00")
      .setUrls({
        "GPX-Datei": new URL(
          "https://content.rtc-koeln.de/pages/events/tours/rtfs/2026-05-19_Forsbach-120.gpx"
        )
      })
      .buildTrack(),
    new TrackBuilder()
      .setControls(4)
      .setHeight(1800)
      .setId("3e252d86-e452-43f3-9f93-440eeb792338")
      .setLength(150)
      .setName("Bergische Höhenrunde")
      .setProfile(EProfile.Huegelig)
      .setTime("07:30", "08:30")
      .setUrls({
        "GPX-Datei": new URL(
          "https://content.rtc-koeln.de/pages/events/tours/rtfs/2026-05-19_Forsbach-150.gpx"
        )
      })
      .buildTrack()
  )
  .buildEvent();
