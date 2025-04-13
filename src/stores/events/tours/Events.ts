import ControlBuilder from 'src/models/builder/events/tours/ControlBuilder'
import EventBuilder from 'src/models/builder/events/tours/EventBuilder'
import FeeBuilder from 'src/models/builder/events/tours/events/FeeBuilder'
import TimeBuilder from 'src/models/builder/events/tours/events/TimeBuilder'
import TrackBuilder from 'src/models/builder/events/tours/events/TrackBuilder'
import EEvent from 'src/models/enums/EEvent'
import EProfile from 'src/models/enums/events/EProfile'

export default [
  new EventBuilder()
    .setCategory(EEvent.RTF)
    .setFees(
      new FeeBuilder().setId('705e22a4-891a-406b-88ba-c4e104d6d2d3').setName('<b>Bike Rebels</b><br/>(Jugendliche bis 18 Jahre)').setPrice(0).buildFee(),
      new FeeBuilder().setId('f7116627-33c3-4b87-a77e-fed528bafa63').setName('<b>Team-Biker <i>mit</i>&ensp;Breitensportlizenz</b><br/>(BDR-Mitglieder mit Breitensportlizenz)').setPrice(7).buildFee(),
      new FeeBuilder().setId('38c2d89f-813c-4e8a-ae46-4f378a7209b5').setName('<b>Team-Biker <i>ohne</i>&ensp;Breitensportlizenz</b><br/>(sonstige BDR-Mitglieder)').setPrice(9).buildFee(),
      new FeeBuilder().setId('b71ffe1b-6d34-4b98-af51-ad0a59fd9b22').setName('<b>After Work-Bikers</b><br/>(Gastfahrer)').setPrice(12).buildFee(),
      new FeeBuilder().setId('b3be3c22-e784-4650-b27c-f151056faf88').setGroup('Family Tour').setName('<b>Jugendliche bis 18 Jahre</b>').setPrice(0).buildFee(),
      new FeeBuilder().setId('a59c97cf-cfcc-43aa-bb7c-774bf80f79e9').setGroup('Family Tour').setName('<b>Erwachsene</b><br/>(zzgl. Fährfahrten)').setPrice(6).buildFee(),
    )
    .setId('2048a7f0-315a-43d7-885a-23f388601052')
    .setLastChange('2025-04-13')
    .setLocation(
      new ControlBuilder()
        .setCity('Köln-Zündorf')
        .setId('9644f162-29c8-40ef-a37f-3eac5e94d8c5')
        .setStreet('Heerstraße 7')
        .setTitle('Schulzentrum Zündorf')
        .setUrl('www.google.com/maps?daddr=Heerstra%C3%9Fe+7,+51143,+K%C3%B6ln,+Deutschland&hl=de')
        .setZipCode('51143')
        .buildControl(),
    )
    .setText(
      `Liebe Radsportlerinnen und Radsportler,

wir freuen uns schon riesig auf die neue Radsportsaison und auch darauf, Euch bei unserer Forsbachtour wiederzusehen.
Die Forsbachtour startet im Schulzentrum in Porz-Zündorf.
„Frühaufsteher“, die die 150 km fahren möchten, können von 7:30 Uhr bis 8:30 Uhr starten.
„Langschläfer“ können bis 11:00 Uhr starten – je nach Streckenlänge.

Wir bieten Euch vier RTF-Strecken, eine Familientour und zwei begleitete Touren an:
22 km, 52 km, 82 km, 125 km und 150 km

<ul style='list-style-position: inside; list-style-type: "82 km - "; margin-bottom: -50px; margin-top: -35px'>
  <li style='margin-bottom: -15px'><b>Begleitete Ladies-Tour</b></li>
  <li><b>Begleitete gemischte Tour</b></li>
</ul>

Unsere Streckenführungen wurden in den vergangenen Jahren von den Teilnehmer:innen immer sehr gelobt.

Was sich nicht ändert ist unsere – über Kölns Grenzen hinweg bekannte – sehr gute Verpflegung:
An den Kontrollen und auf dem Platz.
Es gibt ein frisch gekochtes <b>vegetarisches</b> Gericht, selbstgemachte Salate und natürlich die obligatorische leckere Bratwurst.

Mehr Infos gibt es hier, auf Instagram und Facebook kurz vor der Forsbachtour, die am 25.05.2025 stattfindet.

Wir wünschen Euch viel Spaß bei der Forsbachtour, die wir mit viel Engagement und Liebe für Euch ausrichten.

Euer RTC Köln e.V`,
    )
    .setTimes(
      new TimeBuilder().setId('904b6941-8a8b-4450-973c-3f5b336b5276').setName('Start').setTime('07:30').buildTime(),
      new TimeBuilder().setId('b8cdb12d-037b-4522-894e-48425a8218c0').setName('Kontrollschluss am Ziel').setTime('17:00').buildTime(),
    )
    .setTitle('Die Forsbach-Tour')
    .setTracks(
      new TrackBuilder()
        .setId('cda07bd6-6643-4f3e-b942-48ad69cc0de6')
        .setName('Hinweis')
        .setText(
          `Wir bieten in diesem Jahr <b>zwei begleitete Touren</b> (82 km) für Neueinsteiger:innen an!

Begleitete Ladies only-Tour (82 km) mit den beiden Guides Verena und Christine.

Begleitete gemischte Tour (82 km) mit den beiden Guides Birgit und Peter.

Tempo: max. 20er Schnitt
Der/die langsamste Fahrer:in bestimmt die Geschwindigkeit.
NUR FÜR RENNRÄDER!

Meldet Euch gerne bei Diana (1. Vorsitzende), falls Ihr Fragen zu den begleiteten Touren habt.
erster.vorsitz@rtc-koeln.de`,
        )
        .buildTrack(),
      new TrackBuilder()
        .setId('19564df0-3abb-4d67-b262-2ff357826470')
        .setName('Vor der Tour')
        .setText(
          `Auf dem Schulgelände sind ausreichend Parkmöglichkeiten vorhanden.

Für die Frühaufsteher unter euch bieten wir ab 07:00 Uhr ein Frühstück in der Aula an.

Am Veranstaltungstag werden Fotos gemacht und Videosequenzen aufgenommen.
Bitte sprecht die/den Fotograf:in/Videograf:in an, wenn das Foto von Euch gelöscht werden muss.
Ansonsten gehen wir von Eurer Zustimmung aus.`,
        )
        .buildTrack(),
      new TrackBuilder()
        .setId('bb9e11a4-f627-41eb-a288-34d0d4acfc66')
        .setName('Während der Tour')
        .setText(
          `Auf unseren Kontrollstellen steht für euch eine vielfältige Verpflegung zur Verfügung, damit ihr die nächste Kontrollstelle garantiert ohne Hungerast erreicht.
Zum Beispiel mit unseren Power-Reisriegeln in Bourauel.

Sollte jemand auf der Strecke bleiben, z.B. wegen einer Panne:
<ul>
    <li>Ruft einfach die Notfallnummer, die am Start aushängt, an.</li>
    <li>Wir kommen euch abholen.</li></ul>`,
        )
        .buildTrack(),
      new TrackBuilder()
        .setId('d10f9888-866c-4e64-8392-541e09a7b543')
        .setName('Nach der Tour')
        .setText(
          `Besonders wichtig nach so einer anstrengenden Tour: Duschen.
Sie sind in einem Nebengebäude reichlich vorhanden.

Damit ihr euren Kohlehydratspeicher wieder aufladen könnt, bieten wir neben selbstgemachtem Kuchen ab <b>mittags auch leckere warme Gerichte (auch <i>vegetarisch</i>)</b> mit verschiedenen, selbstgemachten Salaten an.

Und wer dazu noch ein Kaltgetränk möchte, dem wird auch geholfen.

Platz zum Zusammensitzen und Plauschen gibt es, je nach Wetterlage, draußen (am liebsten) auf dem Schulgelände oder drinnen in der Aula.

Auch dieses Jahr haben wieder ein Glücksrad mit fantastischen Radsportpreisen.`,
        )
        .buildTrack(),
      new TrackBuilder()
        .setId('dcd525d9-c804-435f-b50f-21ce85294dc7')
        .setName('Alle Strecken')
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
</a>`,
        )
        .buildTrack(),
      new TrackBuilder()
        .setControls(1)
        .setHeight(70)
        .setId('71029e5d-5f30-4cf0-b2fa-abf0468d3864')
        .setLength(22)
        .setName('Die 22er')
        .setProfile(EProfile.Flach)
        .setTime('10:00', '12:00')
        .setUrls({
          'GPX-Datei': new URL('https://content.rtc-koeln.de/pages/events/tours/rtfs/family/2024-02-16_1441124693_Die Krokodil-Familientour – Toller Radweg beidseits des Rheins Runde von Zündorf.gpx'),
          Komoot: new URL('https://www.komoot.com/de-de/tour/1608643106'),
        })
        .buildTrack(),
      new TrackBuilder()
        .setControls(1)
        .setHeight(390)
        .setId('c1934b4b-2058-4100-946e-77c264533c76')
        .setLength(52)
        .setName('Die 52er')
        .setTime('07:30', '11:00')
        .setUrls({
          'GPX-Datei': new URL('https://content.rtc-koeln.de/pages/events/tours/rtfs/2024-02-07_1433738920_51143 RTC-Köln 02.06.2024 52km RTF 52. Forsbach-Tour.gpx'),
          Komoot: new URL('https://www.komoot.com/de-de/tour/1433738920'),
        })
        .buildTrack(),
      new TrackBuilder()
        .setControls(2)
        .setHeight(780)
        .setId('383d8d76-1e23-42bf-983c-aeaf54672755')
        .setLength(82)
        .setName('Die 82er')
        .setProfile(EProfile.Wellig)
        .setTime('07:30', '11:00')
        .setUrls({
          Komoot: new URL('https://www.komoot.com/de-de/tour/2050471438'),
        })
        .buildTrack(),
      new TrackBuilder()
        .setControls(2)
        .setHeight(780)
        .setId('5ea56b54-1d06-41bb-bc93-3dd54452b58c')
        .setLength(82)
        .setName('Die begleitete 82er', '(Ladies only, inkl. Guides)')
        .setProfile(EProfile.Wellig)
        .setTime('09:30')
        .setUrls({
          Komoot: new URL('https://www.komoot.com/de-de/tour/2050471438'),
        })
        .buildTrack(),
      new TrackBuilder()
        .setControls(2)
        .setHeight(780)
        .setId('519dbc00-5493-42cd-b852-e53bdacc74df')
        .setLength(82)
        .setName('Die begleitete 82er', '(Gemischte Tour)')
        .setProfile(EProfile.Wellig)
        .setTime('09:30')
        .setUrls({
          Komoot: new URL('https://www.komoot.com/de-de/tour/2050471438?ref'),
        })
        .buildTrack(),
      new TrackBuilder()
        .setControls(3)
        .setHeight(1500)
        .setId('e075e4fb-e46a-4505-b935-8acfe1368265')
        .setLength(125)
        .setName('Die 125er')
        .setProfile(EProfile.Huegelig)
        .setTime('07:30', '10:00')
        .setUrls({
          Komoot: new URL('https://www.komoot.com/de-de/tour/2050471146?ref'),
        })
        .buildTrack(),
      new TrackBuilder()
        .setControls(4)
        .setHeight(1800)
        .setId('3e252d86-e452-43f3-9f93-440eeb792338')
        .setLength(150)
        .setName('Die 150er')
        .setProfile(EProfile.Huegelig)
        .setTime('07:30', '08:30')
        .setUrls({
          Komoot: new URL('https://www.komoot.com/de-de/tour/2050184984?ref'),
        })
        .buildTrack(),
    )
    .buildEvent(),
  new EventBuilder()
    .setCategory(EEvent.Familientour)
    .setFees(
      new FeeBuilder().setGroup('Gebühren').setId('5d862e1f-6898-4b9e-9b17-24a208f0ac65').setName('Kinder und Jugendliche bis 18 Jahre').setPrice(0).buildFee(),
      new FeeBuilder().setGroup('Gebühren').setId('7c08c3cb-c0cb-431c-a756-12fef22957af').setName('Erwachsene').setPrice(6).buildFee(),
      new FeeBuilder().setGroup('Fährpreise*').setId('00058a22-eaf8-4ab2-9459-744bb6dbb0f6').setName('Erwachsene').setPrice(5).buildFee(),
      new FeeBuilder().setGroup('Fährpreise*').setId('e0bf5ea3-a4c1-4d47-ae57-ff966337aed7').setName('Kinder von 4 – 11 Jahre').setPrice(2).buildFee(),
      new FeeBuilder().setGroup('Fährpreise*').setId('6ed05bc8-8c42-439e-bdc4-e381542f48d3').setName('Kinder von 0 – 3 Jahre').setPrice(0).buildFee(),
      new FeeBuilder().setGroup('Fährpreise*').setId('0cf846ff-0717-4828-af8d-b068e000f47a').setName('Zuschlag Lastenrad, Anhänger etc.').setPrice(2).buildFee(),
    )
    .setId('75072ccb-fbf8-4449-ab94-5d746e32ce69')
    .setLastChange('2024-05-26')
    .setLocation(
      new ControlBuilder()
        .setCity('Köln-Zündorf')
        .setId('5198e22d-0d6a-49fc-a5f4-235c6055db67')
        .setStreet('Heerstraße 7')
        .setTitle('Schulzentrum Zündorf')
        .setUrl('www.google.com/maps?daddr=Heerstra%C3%9Fe+7,+51143,+K%C3%B6ln,+Deutschland&hl=de')
        .setZipCode('51143')
        .buildControl(),
    )
    .setText(
      `Liebe Kinder, Eltern und sonstige Verwandtschaft :-),

der RTC Köln freut sich, nach langer Zeit mal wieder eine Familientour anbieten zu können und lädt euch alle dazu herzlich ein.
Die <b>Krokodil-Familientour</b> startet am 02. Juni 2024 ab 10:00 Uhr im Schulzentrum Porz-Zündorf.
"Langschläfer" können noch bis 12:00 Uhr auf die Strecke gehen.
Wir bieten euch eine 22 km lange Familientour links und rechts des Rheins, die weitgehend über Radwege und Nebenstraßen in den Rheinauen führt.
Ihr habt aber auch einen Blick auf den Chemiegürtel, der Köln von Wesseling über Knappsack bis Dormagen und Leverkusen umspannt.
Am Fähranleger Wesseling angekommen, könnt Ihr Euch für den zweiten Teil der Strecke ausruhen und mit unserer vielfältigen Verpflegung stärken.

Die "Highlights" der Tour sind die beiden Fährfahrten von Zündorf nach Weiß und von Wesseling nach Lülsdorf – genau das Richtige für kleine SeeräuberInnen.

Hier möchten wir uns ausdrücklich bei den Fährleuten Niklas Thiel und Reiner Weisbarth für das Entgegenkommen bei den Fahrpreisen bedanken.

Euer RTC Köln e.V.`,
    )
    .setTimes(
      new TimeBuilder().setId('c94e6040-6a86-49c1-ac67-a13941a84894').setName('Beginn der Veranstaltung').setTime('07:00').buildTime(),
      new TimeBuilder().setId('06606e1f-74ba-491b-b099-61a571183cca').setName('Startfenster Familientour').setTime('10:00', '12:00').buildTime(),
      new TimeBuilder().setId('4ca570ef-378b-43e5-a3e5-8ed15815cd0b').setName('Urkunden und weitere Überraschungen').setTime('nach Rückkehr').buildTime(),
    )
    .setTitle('Die Familientour')
    .setTracks(
      new TrackBuilder()
        .setId('e6db748e-6b26-496b-b593-4d9377206d0d')
        .setName('Vor der Tour')
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
</div>`,
        )
        .buildTrack(),
      new TrackBuilder()
        .setId('8fa6354d-0607-4401-862c-e6ab93f44a27')
        .setName('Während der Tour')
        .setText(
          `Bei der Tour fahrt Ihr immer den gelben Schildern mit dem Krokodil nach. Sie führen euch sicher ins Ziel. Bei Richtungswechseln kommt der RTC-Pfeil hinzu.
<img alt="Streckenmarkierung" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/family/2024-05-24-10-30-41-726.jpg.avif' style='width: 50%' />

Auf unserer Kontrollstelle am Wesselinger Fähranleger steht für euch eine vielfältige Verpflegung zur Verfügung,
damit ihr das Schulzentrum in Zündorf garantiert ohne Hungerast erreicht.

Sollte jemand auf der Strecke bleiben, z.B. wegen einer Panne:
Ruft einfach die Notfallnummer, die auf der Startkarte gedruckt ist, an.
Wir kommen euch abholen.`,
        )
        .buildTrack(),
      new TrackBuilder()
        .setId('74855084-4ca7-45a9-a5a9-48172caf4eb5')
        .setName('Nach der Tour')
        .setText(
          `Im Ziel erhaltet Ihr eine Teilnehmerurkunde und eine kleine Überraschung.

Damit ihr nach so einer anstrengenden Tour wieder zu Kräften kommt,
bieten wir neben selbstgemachten Kuchen ab mittags auch leckere warme Gerichte mit verschiedenen Salaten an.

Und wer dazu noch ein Kaltgetränk möchte, dem wird auch geholfen.

Platz zum Zusammensitzen und Plauschen gibt es, je nach Wetterlage, draußen (am liebsten) auf dem Schulgelände oder drinnen in der Aula.`,
        )
        .buildTrack(),
    )
    .buildEvent(),
]
