import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import ControlBuilder from 'src/models/builder/events/tours/ControlBuilder'
import FeeBuilder from 'src/models/builder/events/tours/events/FeeBuilder'
import TimeBuilder from 'src/models/builder/events/tours/events/TimeBuilder'
import TrackBuilder from 'src/models/builder/events/tours/events/TrackBuilder'
import EventBuilder from 'src/models/builder/events/tours/EventBuilder'
import PermanentBuilder from 'src/models/builder/events/tours/PermanentBuilder'
import Event from 'src/models/entities/events/tours/Event'
import Permanent from 'src/models/entities/events/tours/Permanent'
import EEvent from 'src/models/enums/EEvent'
import EProfile from 'src/models/enums/events/tours/EProfile'

export default defineStore('tour', () => {
    const events = ref<Event[]>([
        new EventBuilder()
            .setCategory(EEvent.RTF)
            .setFees(
                new FeeBuilder().setId('705e22a4-891a-406b-88ba-c4e104d6d2d3').setName('<b>Bike Rebels</b><br/>(Jugendliche bis 18 Jahre)').setPrice(0).buildFee(),
                new FeeBuilder()
                    .setId('f7116627-33c3-4b87-a77e-fed528bafa63')
                    .setName('<b>Team-Biker <i>mit</i>&ensp;Breitensportlizenz</b><br/>(BDR-Mitglieder mit Breitensportlizenz)')
                    .setPrice(6)
                    .buildFee(),
                new FeeBuilder()
                    .setId('38c2d89f-813c-4e8a-ae46-4f378a7209b5')
                    .setName('<b>Team-Biker <i>ohne</i>&ensp;Breitensportlizenz</b><br/>(sonstige BDR-Mitglieder)')
                    .setPrice(8)
                    .buildFee(),
                new FeeBuilder().setId('b71ffe1b-6d34-4b98-af51-ad0a59fd9b22').setName('<b>After Work-Bikers</b><br/>(Gastfahrer)').setPrice(12).buildFee(),
                new FeeBuilder().setId('ce8f7235-4d1e-4ec0-a704-921bcf8588df').setName('<b>151 km Strecke</b><br/>Zusatzgebühr').setPrice(4).buildFee(),
            )
            .setId('2048a7f0-315a-43d7-885a-23f388601052')
            .setImages(
                new GalleryEntryBuilder()
                    .setId('0bb4cd1f-bfd8-478d-9722-46bcba571edb')
                    .setImageUrl('content.rtc-koeln.de/pages/events/tours/events/rtfs/2023 Flyer.jpg.avif')
                    .buildGalleryEntry(),
            )
            .setLastChange('2024-02-27')
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
    <img alt="Start an der Schule in Zündorf" src='https://content.rtc-koeln.de/pages/events/tours/events/rtfs/Start_Ziel.jpg.avif' style='width: 100%' />
    <figcaption>Start an der Schule in Zündorf</figcaption>
</figure>
In Troisdorf-Spich kommen dann auf dem Mauspfad die ersten Hügel.
Nachdem in Lohmar wieder Rollen angesagt ist, geht es dann das Jabachtal hinauf.
Zur Belohnung gibt es dann in Pohlhausen die erste Kontrolle.
<figure>
    <img alt="Kontrolle 1 - Pohlhausen" src='https://content.rtc-koeln.de/pages/events/tours/events/rtfs/K1_Pohlhausen.jpg.avif' style='width: 100%' />
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
                    .setText(`Text in Bearbeitung`)
                    .setTime('10:00', '12:00')
                    .setUrls({
                        'GPX-Datei (In Bearbeitung)': new URL('https://content.rtc-koeln.de/pages/events/tours/events/rtfs/'),
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
                        'GPX-Datei (In Bearbeitung)': new URL('https://content.rtc-koeln.de/pages/events/tours/events/rtfs/'),
                        'Komoot (In Bearbeitung)': new URL('https://www.komoot.de/tour/'),
                    })
                    .buildTrack(),
                new TrackBuilder()
                    .setControls(2)
                    .setHeight(780)
                    .setId('383d8d76-1e23-42bf-983c-aeaf54672755')
                    .setLength(82)
                    .setName('Die 82er')
                    .setProfile(EProfile.Wellig)
                    .setText(
                        `Im Gegensatz zur 52er erfolgt schon in Lohmar eine Streckentrennung.
Wir haben uns für die Strecken 82 km, 125 km und 151 km eine neue Auffahrt zur Kontrolle nach Pohlhausen für Euch ausgedacht.
An diesem Anstieg wartet eine RTC-Fotografin auf Euch, also bitte immer schön lächeln. 🙂
Nach einer rasanten Abfahrt folgen die Fahrer dem Wahnbachtal bis nach Herrenteich.
Nach einem längeren Anstieg durch Sommerhausen treffen sich im westlichen Randbereich von Much alle Strecken, bis auf die 52er.
<figure>
    <img alt="Von Much nach Hetzenholz" src='https://content.rtc-koeln.de/pages/events/tours/events/rtfs/Much_Hetzenholz.jpg.avif' style='width: 100%' />
    <figcaption>Von Much nach Hetzenholz</figcaption>
</figure>
Von Much geht es durch wenig befahrene ländliche Straßen über Hetzenholz, Nackhausen und Seelscheid nach Ingersauel, wo die nächste Herausforderung wartet:
der Anstieg zu unserer Kontrolle auf dem Betriebshof von Fullwood Wohnblockhaus in Oberstehöhe.
<figure>
    <img alt="Betriebshof Fullwood" src='https://content.rtc-koeln.de/pages/events/tours/events/rtfs/Betriebshof_Fullwood.jpg.avif' style='width: 100%' />
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
                        'GPX-Datei (In Bearbeitung)': new URL('https://content.rtc-koeln.de/pages/events/tours/events/rtfs/'),
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
    <img alt="Wahnbachtal" src='https://content.rtc-koeln.de/pages/events/tours/events/rtfs/Wahnbachtal.jpg.avif' style='width: 100%' />
    <figcaption>Wahnbachtal</figcaption>
</figure>
Bis zur Abfahrt zur nächsten Kontrolle in Bourauel kann man sich den Hügel auf nur leicht welliger Strecke aus den Beinen fahren.
Leider finden sich in dieser Abfahrt einige Straßenschäden, sodass besondere Vorsicht geboten ist.
<figure>
    <img alt="Kontrolle 2 - Eitdorf-Bourauel" src='https://content.rtc-koeln.de/pages/events/tours/events/rtfs/K2_Eitdorf_Bourauel.jpg.avif' style='width: 100%' />
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
                        'GPX-Datei (In Bearbeitung)': new URL('https://content.rtc-koeln.de/pages/events/tours/events/rtfs/'),
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
                        'GPX-Datei (In Bearbeitung)': new URL('https://content.rtc-koeln.de/pages/events/tours/events/rtfs/'),
                        'Komoot (In Bearbeitung)': new URL('https://www.komoot.de/tour/'),
                    })
                    .buildTrack(),
            )
            .buildEvent(),
    ])

    return {
        allPermanents: ref<Permanent[]>([
            new PermanentBuilder()
                .setActive(false)
                .setCategory(EEvent.Permanente)
                .setControls(
                    new ControlBuilder()
                        .setCity('Lindlar')
                        .setId('e12d3e90-9192-45cb-a13c-0fe0a7cfb35c')
                        .setStreet('Kölner Straße 23')
                        .setTitle('Aral-Tankstelle')
                        .setUrl('tankstelle.aral.de/lindlar/koelner-strasse-23/28324100')
                        .setZipCode('51789')
                        .buildControl(),
                )
                .setHeight(700)
                .setId('4c0364c7-508f-4e0c-9a1a-9f703e399f13')
                .setLastChange('2022-01-12')
                .setLength(71)
                .setProfile(EProfile.Wellig)
                .setText(
                    `Diese Strecke ist der Klassiker für das Profil des „Bergischen Landes“ schlechthin.
Es handelt sich um landschaftlich schöne Strecken mit herrlichen Rundblicken über Köln und das Bergische Land.

Start und Ziel ist das <a href='https://maps.google.com/maps?daddr=Rather Mauspfad 19, 51107, Köln-Rath, Deutschland&hl=de' target='_blank'>Eiscafe "Piccola Gelateria", Rather Mauspfad 19 in 51107 Köln-Rath</a>.
Die Strecke selbst führt zuerst flach, etwa 13 km, über den Heumarer und Grengeler Mauspfad auf die Alte Kölner Straße (Flughafenstrecke) Richtung Altenrath.
Nach einer rauschenden Abfahrt in das Tal der Sülz geht es dann bergauf in den einzigen Anstieg bei Heppenberg (ca. 1,5 km) auf die Höhen des Bergischen Landes.
Über den welligen Höhenrücken geht es über Durbusch und Heiligenhaus, Kreutzhäuschen, Hohkeppel nach Lindlar.
Die Strecke geht teilweise durch waldige Abschnitte mit kurzen Abfahrten und Gegenanstiegen.
Es macht da oben Spaß, die Gegenanstiege mit dem richtigen Schwung einfach „wegzudrücken“.
Von der Höhe geht es dann rasant durch den Wald abwärts (ca. 1 km) in das Lennefer Bach Tal, am <a href='https://freilichtmuseum-lindlar.lvr.de/de/startseite.html' target='_blank'>Freilichtmuseum des LVR</a> vorbei, nach Lindlar.
In Lindlar angekommen, gibt es, nachdem oder bevor ihr den Kontrollstempel an der <a href='https://tankstelle.aral.de/lindlar/koelner-strasse-23/28324100' target='_blank'>Aral-Tankstelle</a>, Kölner Straße 23, abgeholt habt, die Möglichkeit, in einigen Cafés den Kohlehydratspeicher wieder aufzufüllen.
Dies sind z.B. <a href='http://bachsundbinas.de' target='_blank'>Bach's und Bina's</a>, Kirchplatz 7, <a href='https://www.lecker-kaffee-lindlar.de/' target='_blank'>lecker kaffee lindlar</a>, Kölner Str. 15 oder, wer es einfach mag, <a href='https://kamps.de/standort/kamps-baeckerei-lindlar-koelner-strasse-16-a' target='_blank'>Bäckerei Kamps</a>, Kölner Straße 16 a.

Nach der Pause radelt ihr dann leicht aufwärts zurück über die Pollerhofstraße, zunächst waldfrei mit teilweiser schöner Aussicht, in Richtung Köln.
Ab Kemmerich geht es dann wellig abwärts mit leichten Gegensteigungen über Schmitzhöhe, rasant durch Brombach nach Obersteeg, Immekeppel, Untereschbach, Hoffnungsthal (das <a href='https://www.cafe-rosenow.de/' target='_blank'>Cafe Rosenow</a> ist empfehlenswert), Rösrath durch den Königsforst flach nach Köln-Rath zurück.
Auf der Rücktour könnt ihr genug Speed machen, um die überflüssigen Kalorien wieder abzutrainieren.
Wer dann trotzdem noch Platz hat, dem kann ich nur das Eiscafé Piccola Gelateria empfehlen.
Hier kann man die Runde mit Freunden bei einem vorzüglichen selbstgemachten cremigen Speiseeis abschließen.

...und wenn du eine Breitensportlizenz hast, nicht vergessen, deine Email-Adresse in der Liste einzutragen.
Am Schluss der Saison werden wir dir die notwendigen QR-Codes zusenden, damit du die Permanente in die BDR-App eintragen kannst.

Das Startgeld beträgt 3 €.
Breitensportlizenzinhaber mit dem Vermerk "Schüler" sind zum Start zugelassen und vom Startgeld befreit.
Die genaue Streckenbeschreibung befindet sich neben dem o.a. Flyer auch auf der Startkarte, die die Radfahrerinnen und Radfahrer nach der Eintragung in die Teilnehmerliste (Email-Adresse nicht vergessen) ausgehändigt bekommen.
An der ARAL-Tankstelle in Lindlar (ungefähr die Hälfte der insgesamt 71 km) erfolgt der Kontrollstempel in die Startkarte, als Nachweis, um sich nach der Rückkehr (Öffnungszeiten beachten) einmalig 2 Punkte in die Wertungskarte eintragen zu lassen.
Bei den Touren wird entsprechend der Vorgabe des BDR der Sternfahrt-Modus nicht durchgeführt.
Die Anmeldung am Start ist von den Öffnungszeiten abhängig.
Bitte sich vorher auf der jeweiligen Webseite informieren.
Alle Teilnehmerinnen und Teilnehmer müssen die <a href='http://www.verkehrsportal.de/stvo/stvo.php' target='_blank'>StVO</a> beachten und können durch den Veranstalter von der Fahrt für die Zukunft ausgeschlossen werden, wenn sie sich undiszipliniert verhalten oder gegen die <a href='http://www.verkehrsportal.de/stvo/stvo.php' target='_blank'>StVO</a> verstoßen.
Das Tragen eines guten Helms wird dringend empfohlen.

Der RTC Köln wünscht den TeilnehmerInnen eine gute und sichere Fahrt.

Euer RTC Köln e.V. 1972`,
                )
                .setTitle('Das Bergische Karussell')
                .setUrls({
                    'GPX-Datei': new URL('https://content.rtc-koeln.de/pages/events/tours/permanents/bergischeskarussell-2021-12-12.gpx'),
                    Komoot: new URL('https://www.komoot.de/tour/678486665'),
                    'Startkarte inkl. Streckenbeschreibung': new URL('https://content.rtc-koeln.de/pages/events/tours/permanents/Bergisches Karussell von Piccola 20201214.pdf'),
                })
                .buildPermanent(),
            new PermanentBuilder()
                .setActive(false)
                .setCategory(EEvent.Permanente)
                .setControls(
                    new ControlBuilder()
                        .setCity('Kürten')
                        .setId('32851936-b351-4b4d-a71f-03e3138a8864')
                        .setStreet('Wipperfürther Straße 360')
                        .setTitle('Esso-Tankstelle')
                        .setUrl('ich-tanke.de/tankstelle/019555c8827f78f780d0e0c71a87e0f6/')
                        .setZipCode('51515')
                        .buildControl(),
                )
                .setHeight(700)
                .setId('05499ece-e973-48e4-8b1c-b2c35c72ef3e')
                .setLastChange('2023-01-27')
                .setLength(72)
                .setProfile(EProfile.Wellig)
                .setText(
                    `Diese Tour startet an der legendären <a href='https://www.schmitzebud-koeln.de' target='_blank'>Schmitzebud</a> oder auch <a href='http://www.ambuedche.de/schmitzebud/' target='_blank'>Am Büdche</a> genannt.
Sie ist ebenso wellig wie das Profil des Bergischen Landes.

Nach dem Start geht es erst mal über den Rather Mauspfad Richtung Norden.
Nach etwa 1 km weicht die Bebauung zurück und du biegst rechts auf die Lützerather Straße, Richtung Bensberg.
Hier beginnt auch der erste sanfte Anstieg.
Nach ca. 4 km auf dem Radweg durch den Wald geht es über die Brüderstraße Richtung Osten.
In Bensberg angekommen, führt die Strecke am <a href='https://de.wikipedia.org/wiki/Altes_Schloss_Bensberg' target='_blank'>„Affenfelsen“</a> vorbei über Moitzfeld und Herkenrath nach Spitze.
Hinter Herkenrath weicht die Bebauung wieder zurück und macht den Blick frei auf die Bergische Kulturlandschaft.
Hier ist auch der erste Anstieg geschafft.
Hinter Spitze geht es dann bei Schanze über die Höhen, mit gelegentlichem Weitblick, wellig weiter über Bechen bis Lamsfuß und dort biegst du rechts ab.
Hier ist die zweite Steigung geschafft.
Ab hier kannst du richtig Speed machen – es geht kontinuierlich 26 km, unterbrochen durch kleine Gegensteigungen, bis nach Untereschbach bergab.
Vorher ist ein Boxenstopp in Kürten angesagt.
Hier holst du dir deinen Kontrollstempel an der Esso-Tankstelle.
Vor- oder nachher kannst du dir hier deinen Kohlehydratspeicher wieder auffüllen.
Dazu gibt es Gelegenheit bei der <a href='https://landbaeckerei-bauer.de/' target='_blank'>Landbäckerei Bauer</a>, Marktfeld 2, bei der <a href='https://www.baeckerei-fritzen.de/' target='_blank'>Kürtener Landbäckerei Mario Fritzen</a>, Wipperfürther Str. 389, oder <a href='https://www.engels-baeckerei.de/newpage10' target='_blank'>Felder´s Engelsbäckerei (im Rewe)</a>, Wipperfürther Str. 400.
Wer lieber auf Eis steht, der ist mit dem <a href='https://de-de.facebook.com/eiscafe.veneziakurten' target='_blank'>Eiscafé Venezia</a>, Talblick 2, gut bedient.

Frisch aufgetankt geht es dann weiter über Hommerich und Brombach nach Obersteeg.
Auf der Strecke dann nach Untereschbach kann teilweise ein Radweg genutzt werden.
In Untereschbach beginnt die letzte Steigung über den Bockenberg, die sich oben etwas zuzieht.
Von hier aus geht es partiell auf dem Hinweg die letzten 10 km wieder zurück zum Startpunkt Schmitzebud.
Hier kannst du, wenn du möchtest, die Tour mit deinen Radsportfreunden ausklingen lassen.

...und wenn du eine Wertungskarte hast, nicht vergessen, die Tour eintragen zu lassen…

Das Startgeld beträgt 3 €.
Wertungskarteninhaber mit dem Vermerk "Schüler" sind zum Start zugelassen und vom Startgeld befreit.
Die genaue Streckenbeschreibung befindet sich neben dem o.a. Flyer auch auf der Startkarte, die die Radfahrerinnen und Radfahrer nach der Eintragung in die Teilnehmerliste ausgehändigt bekommen.
An der Esso-Tankstelle in Kürten (etwas mehr als die Hälfte der insgesamt 72 km) erfolgt der Kontrollstempel in die Startkarte, als Nachweis, um sich nach der Rückkehr (Öffnungszeiten beachten) einmalig 2 Punkte in die Wertungskarte eintragen zu lassen.
Bei den Touren wird entsprechend der Vorgabe des BDR der Sternfahrt-Modus nicht durchgeführt.
Die Anmeldung am Start ist von den Öffnungszeiten abhängig.
Bitte sich vorher auf der jeweiligen Webseite informieren.
Alle Teilnehmerinnen und Teilnehmer müssen die <a href='http://www.verkehrsportal.de/stvo/stvo.php' target='_blank'>StVO</a> beachten und können durch den Veranstalter von der Fahrt für die Zukunft ausgeschlossen werden, wenn sie sich undiszipliniert verhalten oder gegen die <a href='http://www.verkehrsportal.de/stvo/stvo.php' target='_blank'>StVO</a> verstoßen.
Das Tragen eines guten Helms wird dringend empfohlen.

Der RTC Köln wünscht den TeilnehmerInnen eine gute und sichere Fahrt.

Euer RTC Köln e.V. 1972`,
                )
                .setTitle('Schmitzebud')
                .setUrls({
                    'GPX-Datei': new URL('https://content.rtc-koeln.de/pages/events/tours/permanents/schmitzebud-2021-12-12.gpx'),
                    Komoot: new URL('https://www.komoot.de/tour/678483689'),
                    'Startkarte inkl. Streckenbeschreibung': new URL('https://content.rtc-koeln.de/pages/events/tours/permanents/Schmitzebud 20201214.pdf'),
                })
                .buildPermanent(),
        ]),
        rtf: computed(() => events.value.find((it) => it.category === EEvent.RTF)),
    }
})
