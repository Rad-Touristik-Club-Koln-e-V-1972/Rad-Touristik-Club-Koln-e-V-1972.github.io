import ControlBuilder from 'src/models/builder/events/tours/ControlBuilder'
import EventBuilder from 'src/models/builder/events/tours/EventBuilder'
import FeeBuilder from 'src/models/builder/events/tours/events/FeeBuilder'
import TimeBuilder from 'src/models/builder/events/tours/events/TimeBuilder'
import TrackBuilder from 'src/models/builder/events/tours/events/TrackBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'
import EProfile from 'src/models/enums/events/EProfile'

export default [
  new EventBuilder()
    .setCategory(EEvent.RTF)
    .setFees(
      new FeeBuilder().setId('705e22a4-891a-406b-88ba-c4e104d6d2d3').setName('<b>Bike Rebels</b><br/>(Jugendliche bis 18 Jahre)').setPrice(0).buildFee(),
      new FeeBuilder().setId('f7116627-33c3-4b87-a77e-fed528bafa63').setName('<b>Team-Biker <i>mit</i>&ensp;Breitensportlizenz</b><br/>(BDR-Mitglieder mit Breitensportlizenz)').setPrice(6).buildFee(),
      new FeeBuilder().setId('38c2d89f-813c-4e8a-ae46-4f378a7209b5').setName('<b>Team-Biker <i>ohne</i>&ensp;Breitensportlizenz</b><br/>(sonstige BDR-Mitglieder)').setPrice(8).buildFee(),
      new FeeBuilder().setId('b71ffe1b-6d34-4b98-af51-ad0a59fd9b22').setName('<b>After Work-Bikers</b><br/>(Gastfahrer)').setPrice(12).buildFee(),
      new FeeBuilder().setId('ce8f7235-4d1e-4ec0-a704-921bcf8588df').setName('<b>151 km Strecke</b><br/>Zusatzgebühr').setPrice(4).buildFee(),
      new FeeBuilder().setId('b3be3c22-e784-4650-b27c-f151056faf88').setGroup('Family Tour').setName('<b>Jugendliche bis 18 Jahre</b>').setPrice(0).buildFee(),
      new FeeBuilder().setId('a59c97cf-cfcc-43aa-bb7c-774bf80f79e9').setGroup('Family Tour').setName('<b>Erwachsene</b><br/>(zzgl. Fährfahrten)').setPrice(6).buildFee(),
    )
    .setId('2048a7f0-315a-43d7-885a-23f388601052')
    .setImages(new GalleryEntryBuilder().setId('0bb4cd1f-bfd8-478d-9722-46bcba571edb').setImageUrl('content.rtc-koeln.de/pages/events/tours/rtfs/2023 Flyer.jpg.avif').buildGalleryEntry())
    .setLastChange('2024-05-06')
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
„Frühaufsteher“, die die 151 km fahren möchten, können von 7:30 Uhr bis 8:30 Uhr starten.
„Langschläfer“ können bis 11:00 Uhr starten – je nach Streckenlänge.

Wir bieten Euch <b>vier RTF-Strecken, eine Familientour</b> und eine <b>geführte 80er</b> an:
22 km, 52 km, 82 km (geführt und nicht geführt), 125 km und sogar eine 151 km Tour.

Das Besondere an unserer 151 km-Tour ist, dass wir unseren befreundeten Verein, den RSC Buchholz, in Rheinland-Pfalz dabei besuchen.
An deren Startplatz werden wir unsere 151er- Kontrolle haben, da dieser Verein auch am 2. Juni seine RTF hat.
Da hat die APPstimmung zwischen den beiden Bundesländern nicht gepasst, aber wir haben das Beste daraus gemacht. 💪

Unsere Streckenführungen wurden in den vergangenen Jahren von den Teilnehmer:innen immer sehr gelobt.

Was sich nicht ändert ist unsere – über Kölns Grenzen hinweg bekannte – sehr gute Verpflegung.
Dies gilt für die Kontrollstellen genauso wie für den Start-/Zielbereich.
Bringt also Zeit und Hunger mit.

Mehr Infos gibt es hier, auf Instagram und Facebook kurz vor der Forsbachtour, die am 2. Juni 2024 stattfindet.

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
          `Wir bieten entgegen dem Breitensportkalender eine 150er-Strecke an!

Wir bieten in diesem Jahr eine geführte Tour (82 km) für Neueinsteiger an!

Tempo: max. 20er Schnitt
Der/die langsamste Fahrer:in bestimmt die Geschwindigkeit.`,
        )
        .buildTrack(),
      new TrackBuilder()
        .setId('19564df0-3abb-4d67-b262-2ff357826470')
        .setName('Vor der Tour')
        .setText(
          `Auf dem Schulgelände sind ausreichend Parkmöglichkeiten vorhanden.

Für die Frühaufsteher unter euch bieten wir ab 07:00 Uhr ein Frühstück in der Aula an.`,
        )
        .buildTrack(),
      new TrackBuilder()
        .setId('bb9e11a4-f627-41eb-a288-34d0d4acfc66')
        .setName('Während der Tour')
        .setText(
          `Auf unseren Kontrollstellen steht für euch eine vielfältige Verpflegung zur Verfügung, damit ihr die nächste Kontrollstelle garantiert ohne Hungerast erreicht.

Sollte jemand auf der Strecke bleiben, z.B. wegen einer Panne:
<ul>
    <li>Ruft einfach die Notfallnummer, die auf der Startkarte gedruckt ist, an.</li>
    <li>Wir kommen euch abholen.</li></ul>`,
        )
        .buildTrack(),
      new TrackBuilder()
        .setId('d10f9888-866c-4e64-8392-541e09a7b543')
        .setName('Nach der Tour')
        .setText(
          `Besonders wichtig nach so einer anstrengenden Tour: Duschen.
Sie sind in einem Nebengebäude reichlich vorhanden.

Damit ihr euren Kohlehydratspeicher wieder aufladen könnt, bieten wir neben selbstgemachten Kuchen ab <b>mittags auch leckere warme Gerichte</b> mit verschiedenen Salaten an.

Und wer dazu noch ein Kaltgetränk möchte, dem wird auch geholfen.

Platz zum Zusammensitzen und Plauschen gibt es, je nach Wetterlage, draußen (am liebsten) auf dem Schulgelände oder drinnen in der Aula.`,
        )
        .buildTrack(),
      new TrackBuilder()
        .setId('dcd525d9-c804-435f-b50f-21ce85294dc7')
        .setName('Alle Strecken')
        .setText(
          `Wie in den letzten Jahren starten wir im Schulzentrum in Porz-Zündorf.
„Frühaufsteher“ können dort ab acht Uhr, „Langschläfer“ bis elf Uhr starten.
Parkflächen stehen auf dem Schulgelände ausreichend zur Verfügung.
Die Anmeldung, Stand 27.01.2023, erfolgt über die BDR-App für die Breitensportlizenzinhaber (ehemalige Wertungskarteninhaber).
Für alle anderen läuft die Anmeldung „analog“ an den Starttischen vor Ort.

<a href='https://www.rad-net.de/touren-app-lizenz.htm' target="_blank">
    <b>Wichtiger Hinweis für Fahrer:innen ohne Breitensportlizenz (Gastfahrer):</b>
    Bitte meldet Euch im Vorfeld in der <b>BDR-Touren-App</b> mit dem kostenlosen Basisaccount an.
</a>

Vom Start weg fahren wir durch eine Spielstraße, die sich leider nicht sinnvoll umgehen lässt.
Hier bitten wir die FahrerInnen um besondere Rücksichtnahme.
Zum Einrollen geht es zunächst flach durch die Felder und den südlichsten Stadtteil von Köln, Porz-Libur.
<figure>
    <img alt="Start an der Schule in Zündorf" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/Start_Ziel.jpg.avif' style='width: 100%' />
    <figcaption>Start an der Schule in Zündorf</figcaption>
</figure>
In Troisdorf-Spich kommen dann auf dem Mauspfad die ersten Hügel.
Nachdem in Lohmar wieder Rollen angesagt ist, geht es dann das Jabachtal hinauf.
Zur Belohnung gibt es dann in Pohlhausen die erste Kontrolle.
<figure>
    <img alt="Kontrolle 1 - Pohlhausen" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/K1_Pohlhausen.jpg.avif' style='width: 100%' />
    <figcaption>Kontrolle 1 - Pohlhausen</figcaption>
</figure>`,
        )
        .buildTrack(),
      new TrackBuilder()
        .setControls(1)
        .setHeight(70)
        .setId('0b0df6c7-c7c9-4592-b9c9-d8fd3bece55f')
        .setLength(22)
        .setName('Die 22er')
        .setProfile(EProfile.Flach)
        .setText('Text in Bearbeitung')
        .setTime('10:00', '12:00')
        .setUrls({
          'GPX-Datei (In Bearbeitung)': new URL('https://content.rtc-koeln.de/pages/events/tours/rtfs/'),
          'Komoot (In Bearbeitung)': new URL('https://www.komoot.de/tour/'),
        })
        .buildTrack(),
      new TrackBuilder()
        .setControls(1)
        .setHeight(390)
        .setId('c1934b4b-2058-4100-946e-77c264533c76')
        .setLength(52)
        .setName('Die 52er')
        .setText(
          `Sie führt über Krahwinkel und Breidt vorbei an Halberg, um über eine kurvenreiche Abfahrt wieder ins Jabachtal zu gelangen, wo sie nördlich von Lohmar mit den anderen Strecken zusammentrifft.

Hinter Lohmar geht es über die L288 ins Sülztal (Hier befindet sich der Radweg auf der „verkehrten“ Straßenseite!) und über den letzten Anstieg der Strecke nach Altenrath.
Hier geht das Tempo noch mal deutlich nach oben, denn die alte Kölner Straße auf der Rückseite des Flughafens ist vielen VereinsfahrerInnen als Zeitfahrstrecke bekannt.
Über Porz-Grengel und Urbach quert die Strecke die ICE-Strecke und führt zurück zum Startort.`,
        )
        .setTime('07:30', '11:00')
        .setUrls({
          'GPX-Datei (In Bearbeitung)': new URL('https://content.rtc-koeln.de/pages/events/tours/rtfs/'),
          'Komoot (In Bearbeitung)': new URL('https://www.komoot.de/tour/'),
        })
        .buildTrack(),
      new TrackBuilder()
        .setControls(2)
        .setHeight(780)
        .setId('383d8d76-1e23-42bf-983c-aeaf54672755')
        .setLength(82)
        .setName('Die 82er (geführte Tour)')
        .setProfile(EProfile.Wellig)
        .setText(
          `Im Gegensatz zur 52er erfolgt schon in Lohmar eine Streckentrennung.
Wir haben uns für die Strecken 82 km, 125 km und 151 km eine neue Auffahrt zur Kontrolle nach Pohlhausen für Euch ausgedacht.
An diesem Anstieg wartet eine RTC-Fotografin auf Euch, also bitte immer schön lächeln. 🙂
Nach einer rasanten Abfahrt folgen die Fahrer dem Wahnbachtal bis nach Herrenteich.
Nach einem längeren Anstieg durch Sommerhausen treffen sich im westlichen Randbereich von Much alle Strecken, bis auf die 52er.
<figure>
    <img alt="Von Much nach Hetzenholz" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/Much_Hetzenholz.jpg.avif' style='width: 100%' />
    <figcaption>Von Much nach Hetzenholz</figcaption>
</figure>
Von Much geht es durch wenig befahrene ländliche Straßen über Hetzenholz, Nackhausen und Seelscheid nach Ingersauel, wo die nächste Herausforderung wartet:
der Anstieg zu unserer Kontrolle auf dem Betriebshof von Fullwood Wohnblockhaus in Oberstehöhe.
<figure>
    <img alt="Betriebshof Fullwood" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/Betriebshof_Fullwood.jpg.avif' style='width: 100%' />
    <figcaption>Betriebshof Fullwood</figcaption>
</figure>
Von dort geht es zunächst wellig weiter, bis nach einer schönen Abfahrt das Aggertal erreicht wird.
Alle FahrerInnen, die bis hierher noch nicht genügend Höhenmeter beisammen haben, dürfen hier gerne noch den Anstieg nach Naaferberg mitnehmen und auf dem Höhenrücken der 51er-Strecke folgen.
Für alle anderen geht es flach weiter über Donrath, bis dass vor Lohmar alle Strecken zusammengeführt werden.
<i>Auf diesem Streckenteil sollte unbedingt der Radweg benutzt werden.</i>
Hinter Lohmar geht es über die L288 ins Sülztal (Hier befindet sich der Radweg auf der „verkehrten“ Straßenseite!) und über den letzten Anstieg der Strecke nach Altenrath.
Hier geht das Tempo noch mal deutlich nach oben, denn die alte Kölner Straße auf der Rückseite des Flughafens ist vielen VereinsfahrerInnen als Zeitfahrstrecke bekannt.
Über Porz-Grengel und Urbach quert die Strecke die ICE-Strecke und führt zurück zum Startort.`,
        )
        .setTime('07:30', '11:00')
        .setUrls({
          'GPX-Datei (In Bearbeitung)': new URL('https://content.rtc-koeln.de/pages/events/tours/rtfs/'),
          'Komoot (In Bearbeitung)': new URL('https://www.komoot.de/tour/'),
        })
        .buildTrack(),
      new TrackBuilder()
        .setControls(3)
        .setHeight(1500)
        .setId('e075e4fb-e46a-4505-b935-8acfe1368265')
        .setLength(125)
        .setName('Die 125er')
        .setProfile(EProfile.Huegelig)
        .setText(
          `Während die <b>82er</b> weiter dem Wahnbachtal folgt, biegen die restlichen Strecken nach rechts in den Wald auf einen kleinen, gemeinen Anstieg nach Oberwennerscheid ab.
In Brackemich geht es rechts ab und über Eischeid hinunter ins Bröltal.
Einer Baustelle verdanken wir den folgenden Anstieg nach Winterscheid.
Es lohnt sich unbedingt auf der Höhe den Blick zurück ins Tal zu richten!
<figure>
    <img alt="Wahnbachtal" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/Wahnbachtal.jpg.avif' style='width: 100%' />
    <figcaption>Wahnbachtal</figcaption>
</figure>
Bis zur Abfahrt zur nächsten Kontrolle in Bourauel kann man sich den Hügel auf nur leicht welliger Strecke aus den Beinen fahren.
Leider finden sich in dieser Abfahrt einige Straßenschäden, sodass besondere Vorsicht geboten ist.
<figure>
    <img alt="Kontrolle 2 - Eitdorf-Bourauel" src='https://content.rtc-koeln.de/pages/events/tours/rtfs/K2_Eitdorf_Bourauel.jpg.avif' style='width: 100%' />
    <figcaption>Kontrolle 2 - Eitdorf-Bourauel</figcaption>
</figure>
Von der Kontrollstelle auf dem Dorfplatz in Bourauel geht es das Siegtal hinauf.
Recht schnell verlässt die 120er das Siegtal wieder und führt über Rieferath nach Ruppichteroth.
Auf diesem Teilstück wird ein erheblicher Anteil der Höhenmeter auf der anspruchsvollen Strecke überwunden.
Über Hambuchen und Retscheroth geht es weiter nach Marienfeld, bis nach Much.
Von Much geht es durch wenig befahrene ländliche Straßen über Hetzenholz, Nackhausen und Seelscheid nach Ingersauel, wo die nächste Herausforderung wartet:
der Anstieg zu unserer Kontrolle auf dem Betriebshof von Fullwood Blockhaus in Oberstehöhe.
Von dort geht es zunächst wellig weiter, bis nach einer schönen Abfahrt das Aggertal erreicht wird.
Alle FahrerInnen, die bis hierher noch nicht genügend Höhenmeter beisammen haben, dürfen hier gerne noch den Anstieg nach Naaferberg mitnehmen und auf dem Höhenrücken der 51er-Strecke folgen.
Für alle anderen geht es flach weiter über Donrath, bis dass vor Lohmar alle Strecken zusammengeführt werden.
Gemeinsam geht es auf dem Radweg Richtung Altenrath weiter.`,
        )
        .setTime('07:30', '10:00')
        .setUrls({
          'GPX-Datei (In Bearbeitung)': new URL('https://content.rtc-koeln.de/pages/events/tours/rtfs/'),
          'Komoot (In Bearbeitung)': new URL('https://www.komoot.de/tour/'),
        })
        .buildTrack(),
      new TrackBuilder()
        .setControls(4)
        .setHeight(1850)
        .setId('3e252d86-e452-43f3-9f93-440eeb792338')
        .setLength(151)
        .setName('Die 151er')
        .setProfile(EProfile.Huegelig)
        .setText(
          `Hier haben wir etwas ganz Besonderes für Euch:
Direkt nach der Kontrolle in Bouraul teilt sich die Strecke in 125 km und 151 km (350 Hm mehr als die 125er) auf.
Wenn ihr auf die ausgeschilderte 151 km-Strecke geht, fahrt ihr südlich bis zum RSC Buchholz, der am selben Tag seine RTF ausrichtet wie wir.
Auf deren Startplatz ist unsere nächste Verpflegungsstation.
Am Start in Zündorf bekommt ihr von uns einen Gutschein über einen 4 Euro-Verzehrbon, den ihr in Buchholz einlösen könnt.
Auf dem Rückweg an die Sieg kommt Ihr wieder auf die 125 km-Strecke und habt theoretisch so die Chance, nachdem ihr die Sieg überquert habt,
nochmal zu unserer Kontrolle in Bouraul zu fahren (nur 2 km ab der Sieg-Überquerung).
Wir versuchen aus der Terminkollision, denn da hat die APPstimmung im BDR leider nicht funktioniert, das Beste zum Wohle von Euch, den Buchholzern und uns zu machen.
Denkt dran:
Wenn Ihr in Buchholz auch noch eine 151er fahren möchtet, unser Kontrollschluss in Zündorf ist um 17 Uhr 🙂🙂🙂🙂🙂 Wir freuen uns alle auf Euch.`,
        )
        .setTime('07:30', '08:30')
        .setUrls({
          'GPX-Datei (In Bearbeitung)': new URL('https://content.rtc-koeln.de/pages/events/tours/rtfs/'),
          'Komoot (In Bearbeitung)': new URL('https://www.komoot.de/tour/'),
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
      new FeeBuilder().setGroup('Fährpreise*').setId('0cf846ff-0717-4828-af8d-b068e000f47a').setName('Lastenrad, Anhänger etc.').setPrice(2).buildFee(),
    )
    .setId('75072ccb-fbf8-4449-ab94-5d746e32ce69')
    .setLastChange('2024-05-06')
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

Die "Highlights" der Tour sind die beiden Fährfahrten von Zündorf nach Weiß und von Wesseling nach Lülsdorf – genau das Richtige für kleine SeeräuberInnen.`,
    )
    .setTimes(
      new TimeBuilder().setId('c94e6040-6a86-49c1-ac67-a13941a84894').setName('Beginn der Veranstaltung').setTime('07:00').buildTime(),
      new TimeBuilder().setId('06606e1f-74ba-491b-b099-61a571183cca').setName('Startfenster Familientour').setTime('10:00', '12:00').buildTime(),
      new TimeBuilder().setId('4ca570ef-378b-43e5-a3e5-8ed15815cd0b').setName('Preisverleihung und Tombola').setTime('14:00').buildTime(),
    )
    .setTitle('Die Familientour')
    .setTracks(
      new TrackBuilder()
        .setId('e6db748e-6b26-496b-b593-4d9377206d0d')
        .setName('Vor der Tour')
        .setText(
          `Auf dem Schulgelände sind ausreichend Parkmöglichkeiten vorhanden.

Für die Frühaufsteher unter euch bieten wir ab 07:00 Uhr ein Frühstück in der Aula an.`,
        )
        .buildTrack(),
      new TrackBuilder()
        .setId('8fa6354d-0607-4401-862c-e6ab93f44a27')
        .setName('Während der Tour')
        .setText(
          `Auf unserer Kontrollstelle am Wesselinger Fähranleger steht für euch eine vielfältige Verpflegung zur Verfügung,
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
          `Damit ihr nach so einer anstrengenden Tour wieder zu Kräften kommt,
bieten wir neben selbstgemachten Kuchen ab mittags auch leckere warme Gerichte mit verschiedenen Salaten an.

Und wer dazu noch ein Kaltgetränk möchte, dem wird auch geholfen.

Platz zum Zusammensitzen und Plauschen gibt es, je nach Wetterlage, draußen (am liebsten) auf dem Schulgelände oder drinnen in der Aula.`,
        )
        .buildTrack(),
      new TrackBuilder()
        .setControls(1)
        .setHeight(70)
        .setId('71029e5d-5f30-4cf0-b2fa-abf0468d3864')
        .setLength(22)
        .setName('Die Strecke')
        .setProfile(EProfile.Flach)
        .setText(
          `Wir starten, wie auch bei unseren großen Touren, im Schulzentrum Zündorf.
Dort ist für euch ein besonderer Anmeldetisch eingerichtet, wo eure erwachsenen Begleiter das „Startgeld“ entrichten müssen.
Daneben gibt es dort die Chips für die Fährfahrten.

Vom Start weg fahren wir immer den RTC-Schildern nach an Rolfs Streichelzoo vorbei, den der ein oder andere sicher schon kennt ( wenn nicht – sehr empfehlenswert!),
in Richtung Yachthafen, Groov und des Fähranlegers des KROKODILS.
Hier bezahlt Ihr den Fährmann Niklas Thiel mit euren Chips.

Dafür bringt er euch nach einer wilden Seefahrt sicher an das andere Ufer.
Weiter geht es immer am Rhein entlang in Richtung Sürth, wo ein schöner Kirchturm mit Zwiebelhaube ins Blickfeld kommt.
Von dort fahren wir auf dem Leinpfad am Naturschutzgebiet Godorfer Hafen entlang bis zur Mauer der Theo Steil GmbH, die mit tollen Graffitis verziert ist.
Schon in die nächste Kurve haben wir einen interessanten Blick in das Hafenbecken, wo die Shell AG ihre Raffinerieprodukte umschlägt.
Ehe wir die alte Godorfer Mühle erreichen, queren wir am Bahnhof Godorf auf einer Fußgängerbrücke die Eisenbahnschienen.
Hier müssen wir zu Fuß laufen, um auf den Radweg an der Industriestraße zu kommen.

Die Industriestraße führt uns auf die Dachhöhe der umliegenden Bauten, sodass Ihr einen Blick in die Industrieanlagen werfen könnt.
Und das ist gleichzeitig die einzige Steigung, die ihr auf unserer Tour bewältigen müsst.
Von dort aus geht es hinab nach Wesseling, wo nach einer Fahrt durch die Straßen am Fähranleger die wohlverdiente Pause wartet.

Hier steht für euch vielfältige Verpflegung bereit, die eure müden Beine wieder in Schwung bringt.
Wenn ihr wieder fit seid, bringt euch der RHEINSCHWAN auf die andere Rheinseite nach Lülsdorf.
Auch hier bezahlt ihr den Fährmann, Herrn Weisbarth, mit euren Chips.
Nun geht es auf die Heimreise.
Gleich zu Beginn fahrt ihr über die Einlaufschleusen des Hochwasserschutzbeckens Langeler Bogen.
Die dahinter liegenden Felder werden bei Extremhochwasser geflutet und können fast 5 Mio. Kubikmeter Wasser aufnehmen.
Das entspricht etwa einem Volumen von 1800 olympischen Schwimmbecken; die so entstehende Fläche umfasst ca. 210 Fußballfelder.
Und das alles, damit Köln nicht absäuft.
Auf der Deichkrone geht es durch den schönen Auenwald nach Langel.
Ein kleiner Hügel am Ende des Deichs zeigt euch, dass ihr über die Auslaufschleusen gefahren seid, denn das viele Wasser muss nach Ende der Flut ja wieder zurück in den Rhein.
Kurz darauf erreicht ihr den Langeler Weiher.
Er ist eines der letzten Auengewässer in NRW und bietet Heimat für seltene Fischarten.
Er wurde gerade erst vor dem Austrocknen gerettet.

Auf dem Damm geht es an „d´r Tant“ und der Bootsrampe vorbei weiter in Richtung Zündorf.
Hier können wir noch einmal einen schönen Blick auf Sürth am anderen Rheinufer werfen.
Bald schon hören wir den fröhlichen Kinderlärm aus dem Zündorfbad und damit ist die Tour fast geschafft.
Noch schnell am schönen Spielplatz vorbei und durch ein paar Zündorfer Gässchen und schon sind wir wieder zurück im Schulzentrum Zündorf.

Nun kann der gemütliche Teil beginnen mit einer tollen Verpflegung und der ein oder anderen Überraschung.`,
        )
        .setTime('10:00', '12:00')
        .setUrls({
          'GPX-Datei (In Bearbeitung)': new URL('https://content.rtc-koeln.de/pages/events/tours/family/'),
          'Komoot (In Bearbeitung)': new URL('https://www.komoot.de/tour/'),
        })
        .buildTrack(),
    )
    .buildEvent(),
]
