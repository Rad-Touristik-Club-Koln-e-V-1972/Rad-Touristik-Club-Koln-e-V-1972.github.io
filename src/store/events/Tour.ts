import { defineStore } from 'pinia'
import GalleryEntryBuilder from '~/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import ControlBuilder from '~/models/builder/events/tours/ControlBuilder'
import FeeBuilder from '~/models/builder/events/tours/events/FeeBuilder'
import TimeBuilder from '~/models/builder/events/tours/events/TimeBuilder'
import TrackBuilder from '~/models/builder/events/tours/events/TrackBuilder'
import EventBuilder from '~/models/builder/events/tours/EventBuilder'
import PermanentBuilder from '~/models/builder/events/tours/PermanentBuilder'
import Event from '~/models/entities/events/tours/Event'
import Permanent from '~/models/entities/events/tours/Permanent'
import EEvent from '~/models/enums/EEvent'
import EProfile from '~/models/enums/events/tours/EProfile'

export const useTourStore = defineStore('tour', {
    getters: {
        allPermanents: (state): Permanent[] => state.tours.filter((it) => it.category === EEvent.Permanente) as Permanent[],
        rtf: (state): Event => {
            return state.tours.find((it) => it.category === EEvent.RTF) as Event
        },
    },
    state: () => ({
        tours: [
            new EventBuilder()
                .setFees(
                    new FeeBuilder().setId('705e22a4-891a-406b-88ba-c4e104d6d2d3').setName('Jugendliche bis 18 Jahre').build(),
                    new FeeBuilder().setId('f7116627-33c3-4b87-a77e-fed528bafa63').setName('BDR-Mitglieder mit Breitensportlizenz').build(),
                    new FeeBuilder().setId('38c2d89f-813c-4e8a-ae46-4f378a7209b5').setName('sonstige BDR-Mitglieder').build(),
                    new FeeBuilder().setId('b71ffe1b-6d34-4b98-af51-ad0a59fd9b22').setName('Gastfahrer').build()
                )
                .setId('2048a7f0-315a-43d7-885a-23f388601052')
                .setTimes(
                    new TimeBuilder().setId('904b6941-8a8b-4450-973c-3f5b336b5276').setName('Start').setTime('08:00').build(),
                    new TimeBuilder().setName('Kontrollschluss am Ziel').setTime('17:00').build()
                )
                .setTracks(
                    new TrackBuilder()
                        .setId('dcd525d9-c804-435f-b50f-21ce85294dc7')
                        .setName('Alle Strecken')
                        .setText(
                            `Wie in den letzten Jahren starten wir im Schulzentrum in Porz-Zündorf.
„Frühaufsteher“ können dort ab acht Uhr, während die „Langschläfer“ noch bis elf Uhr starten können.
Parkflächen stehen auf dem Schulgelände ausreichend zur Verfügung.
Die Anmeldung, Stand 27.01.2023, erfolgt über die BDR-App für die Breitensportlizenzinhaber (ehemalige Wertungskarteninhaber).
Für alle anderen läuft die Anmeldung „analog“ an den Starttischen vor Ort.
Da die App zurzeit noch in der Testphase ist und noch weiter angepasst wird, werden wir zeitnah zum 28.05.2023 noch nähere Informationen auf unserer Webseite bekannt geben.
Vom Start weg fahren wir durch eine Spielstraße, die sich leider nicht sinnvoll umgehen lässt.
Hier bitten wir die FahrerInnen um besondere Rücksichtnahme.
Zum Einrollen geht es zunächst flach durch die Felder und den südlichsten Stadtteil von Köln, Porz-Libur.
<figure>
    <img alt="Start an der Schule in Zündorf" src='https://content.rtc-koeln.de/pages/events/tours/events/rtfs/Start_Ziel.jpg' style='width: 100%' />
    <figcaption>Start an der Schule in Zündorf</figcaption>
</figure>
In Troisdorf-Spich kommen dann auf dem Mauspfad die ersten Hügel.
Nachdem in Lohmar wieder Rollen angesagt ist, geht es dann das Jabachtal hinauf.
Zur Belohnung gibt es dann in Pohlhausen die erste Kontrolle.
<figure>
    <img alt="Kontrolle 1 - Pohlhausen" src='https://content.rtc-koeln.de/pages/events/tours/events/rtfs/K1_Pohlhausen.jpg' style='width: 100%' />
    <figcaption>Kontrolle 1 - Pohlhausen</figcaption>
</figure>`
                        )
                        .build(),
                    new TrackBuilder()
                        .setControls(1)
                        .setHeight(390)
                        .setId('c1934b4b-2058-4100-946e-77c264533c76')
                        .setLength(51)
                        .setName('Die 51er')
                        .setText(
                            `Sie führt über Krahwinkel und Breidt vorbei an Halberg, um über eine kurvenreiche Abfahrt wieder ins Jabachtal zu gelangen, wo sie nördlich von Lohmar mit den anderen Strecken zusammentrifft.

Hinter Lohmar geht es über die L288 ins Sülztal (Hier befindet sich der Radweg auf der „verkehrten“ Straßenseite!) und über den letzten Anstieg der Strecke nach Altenrath.
Hier geht das Tempo noch mal deutlich nach oben, denn die alte Kölner Straße auf der Rückseite des Flughafens ist vielen VereinsfahrerInnen als Zeitfahrstrecke bekannt.
Über Porz-Grengel und Urbach quert die Strecke die ICE-Strecke und führt zurück zum Startort.`
                        )
                        .setTime('07:30', '11:00')
                        .setUrls({
                            'GPX-Datei': new URL('https://content.rtc-koeln.de/pages/events/tours/events/rtfs/2023 Tour 51km.gpx'),
                            Komoot: new URL('https://www.komoot.de/tour/676899286'),
                        })
                        .build(),
                    new TrackBuilder()
                        .setControls(2)
                        .setHeight(740)
                        .setId('383d8d76-1e23-42bf-983c-aeaf54672755')
                        .setLength(78)
                        .setName('Die 78er')
                        .setProfile(EProfile.wellig)
                        .setText(
                            `Nach einer rasanten Abfahrt folgen die Fahrer dem Wahnbachtal bis nach Herrenteich.
Nach einem längeren Anstieg durch Sommerhausen treffen sich im westlichen Randbereich von Much alle Strecken, bis auf die 51er.
<figure>
    <img alt="Von Much nach Hetzenholz" src='https://content.rtc-koeln.de/pages/events/tours/events/rtfs/Much_Hetzenholz.jpg' style='width: 100%' />
    <figcaption>Von Much nach Hetzenholz</figcaption>
</figure>
Von Much geht es durch wenig befahrene ländliche Straßen über Hetzenholz, Nackhausen und Seelscheid nach Ingersauel, wo die nächste Herausforderung wartet:
der Anstieg zu unserer Kontrolle auf dem Betriebshof von Fullwood Wohnblockhaus in Oberstehöhe.
<figure>
    <img alt="Betriebshof Fullwood" src='https://content.rtc-koeln.de/pages/events/tours/events/rtfs/Betriebshof_Fullwood.jpg' style='width: 100%' />
    <figcaption>Betriebshof Fullwood</figcaption>
</figure>
Von dort geht es zunächst wellig weiter, bis nach einer schönen Abfahrt das Aggertal erreicht wird.
Alle FahrerInnen, die bis hierher noch nicht genügend Höhenmeter beisammen haben, dürfen hier gerne noch den Anstieg nach Naaferberg mitnehmen und auf dem Höhenrücken der 51er-Strecke folgen.
Für alle anderen geht es flach weiter über Donrath, bis dass vor Lohmar alle Strecken zusammengeführt werden.
<i>Auf diesem Streckenteil sollte unbedingt der Radweg benutzt werden.</i>
Hinter Lohmar geht es über die L288 ins Sülztal (Hier befindet sich der Radweg auf der „verkehrten“ Straßenseite!) und über den letzten Anstieg der Strecke nach Altenrath.
Hier geht das Tempo noch mal deutlich nach oben, denn die alte Kölner Straße auf der Rückseite des Flughafens ist vielen VereinsfahrerInnen als Zeitfahrstrecke bekannt.
Über Porz-Grengel und Urbach quert die Strecke die ICE-Strecke und führt zurück zum Startort.`
                        )
                        .setTime('07:30', '11:00')
                        .setUrls({
                            'GPX-Datei': new URL('https://content.rtc-koeln.de/pages/events/tours/events/rtfs/2023 Tour 78km.gpx'),
                            Komoot: new URL('https://www.komoot.de/tour/676927332'),
                        })
                        .build(),
                    new TrackBuilder()
                        .setControls(3)
                        .setHeight(1440)
                        .setId('e075e4fb-e46a-4505-b935-8acfe1368265')
                        .setLength(117)
                        .setName('Die 117er')
                        .setProfile(EProfile.huegelig)
                        .setText(
                            `Während die 78er weiter dem Wahnbachtal folgt, biegen die restlichen Strecken nach rechts in den Wald auf einen kleinen, gemeinen Anstieg nach Oberwennerscheid ab.
In Brackemich geht es rechts ab und über Eischeid hinunter ins Bröltal.
Einer Baustelle verdanken wir den folgenden Anstieg nach Winterscheid.
Es lohnt sich unbedingt auf der Höhe den Blick zurück ins Tal zu richten!
<figure>
    <img alt="Wahnbachtal" src='https://content.rtc-koeln.de/pages/events/tours/events/rtfs/Wahnbachtal.jpg' style='width: 100%' />
    <figcaption>Wahnbachtal</figcaption>
</figure>
Bis zur Abfahrt zur nächsten Kontrolle in Bourauel kann man sich den Hügel auf nur leicht welliger Strecke aus den Beinen fahren.
Leider finden sich in dieser Abfahrt einige Straßenschäden, sodass besondere Vorsicht geboten ist.
<figure>
    <img alt="Kontrolle 2 - Eitdorf-Bourauel" src='https://content.rtc-koeln.de/pages/events/tours/events/rtfs/K2_Eitdorf_Bourauel.jpg' style='width: 100%' />
    <figcaption>Kontrolle 2 - Eitdorf-Bourauel</figcaption>
</figure>
Von der Kontrollstelle auf dem Dorfplatz in Bourauel geht es das Siegtal hinauf.
Recht schnell verlässt die 117er das Siegtal wieder und führt über Rieferath nach Ruppichteroth.
Auf diesem Teilstück wird ein erheblicher Anteil der Höhenmeter auf der anspruchsvollen Strecke überwunden.
Über Hambuchen und Retscheroth geht es weiter nach Marienfeld, bis nach Much.
Von Much geht es durch wenig befahrene ländliche Straßen über Hetzenholz, Nackhausen und Seelscheid nach Ingersauel, wo die nächste Herausforderung wartet:
der Anstieg zu unserer Kontrolle auf dem Betriebshof von Fullwood Blockhaus in Oberstehöhe.
Von dort geht es zunächst wellig weiter, bis nach einer schönen Abfahrt das Aggertal erreicht wird.
Alle FahrerInnen, die bis hierher noch nicht genügend Höhenmeter beisammen haben, dürfen hier gerne noch den Anstieg nach Naaferberg mitnehmen und auf dem Höhenrücken der 51er-Strecke folgen.
Für alle anderen geht es flach weiter über Donrath, bis dass vor Lohmar alle Strecken zusammengeführt werden.
Gemeinsam geht es auf dem Radweg Richtung Altenrath weiter.`
                        )
                        .setTime('07:30', '11:00')
                        .setUrls({
                            'GPX-Datei': new URL('https://content.rtc-koeln.de/pages/events/tours/events/rtfs/2023 Tour 117km.gpx'),
                            Komoot: new URL('https://www.komoot.de/tour/676930729'),
                        })
                        .build()
                )
                .setCategory(EEvent.RTF)
                .setImages(
                    new GalleryEntryBuilder()
                        .setId('0bb4cd1f-bfd8-478d-9722-46bcba571edb')
                        .setImageUrl('content.rtc-koeln.de/pages/events/tours/events/rtfs/2023 Flyer.jpg')
                        .build()
                )
                .setLastChange('2023-01-28')
                .setText(
                    `Liebe Radsportlerinnen und Radsportler,

wir freuen uns schon riesig auf die neue Radsportsaison und auch darauf, Euch bei unserer Forsbachtour wiederzusehen.
Wie ihr wisst, liegt ein ereignisreiches und intensives Jubiläumsjahr hinter uns.
Um uns eine Verschnaufpause zu gönnen, haben wir uns entschlossen, in diesem Jahr nur drei Strecken anzubieten.
Aber auch diese Strecken sind wunderschön und lohnen sich, unter die Räder genommen zu werden.

Was sich nicht ändert ist unsere – über Kölns Grenzen hinweg bekannte – sehr gute Verpflegung.
Dies gilt für die Kontrollstellen genauso wie für den Start-/Zielbereich.
Wir möchten den früheren Kontrollschluss dafür nutzen, mit Euch den Nachmittag auf dem Schulhof zu genießen.
Bringt also Zeit und Hunger mit.

Wie es mit unseren Streckenangeboten in 2024 weitergeht? Da sind wir dran. 😊

Mehr Infos gibt es hier, auf Instagram und Facebook kurz vor der Forsbachtour, die am 28. Mai 2023 stattfindet.

Eurer RTC Köln e.V.`
                )
                .setTitle('Die Forsbach-Tour')
                .build(),
            new PermanentBuilder()
                .setHeight(700)
                .setId('4c0364c7-508f-4e0c-9a1a-9f703e399f13')
                .setLength(71)
                .setProfile(EProfile.wellig)
                .setCategory(EEvent.Permanente)
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

Euer RTC Köln e.V. 1972`
                )
                .setTitle('Das Bergische Karussell')
                .setUrls({
                    'GPX-Datei': new URL('https://content.rtc-koeln.de/pages/events/tours/permanents/bergischeskarussell-2021-12-12.gpx'),
                    Komoot: new URL('https://www.komoot.de/tour/678486665'),
                    'Startkarte inkl. Streckenbeschreibung': new URL('https://content.rtc-koeln.de/pages/events/tours/permanents/Bergisches Karussell von Piccola 20201214.pdf'),
                })
                .setControls(
                    new ControlBuilder()
                        .setCity('Lindlar')
                        .setId('e12d3e90-9192-45cb-a13c-0fe0a7cfb35c')
                        .setStreet('Kölner Straße 23')
                        .setTitle('Aral-Tankstelle')
                        .setUrl('tankstelle.aral.de/lindlar/koelner-strasse-23/28324100')
                        .setZipCode('51789')
                        .build()
                )
                .setLastChange('2022-01-12')
                .build(),
            new PermanentBuilder()
                .setHeight(700)
                .setId('05499ece-e973-48e4-8b1c-b2c35c72ef3e')
                .setLength(72)
                .setProfile(EProfile.wellig)
                .setCategory(EEvent.Permanente)
                .setActive(false)
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

Euer RTC Köln e.V. 1972`
                )
                .setTitle('Schmitzebud')
                .setUrls({
                    'GPX-Datei': new URL('https://content.rtc-koeln.de/pages/events/tours/permanents/schmitzebud-2021-12-12.gpx'),
                    Komoot: new URL('https://www.komoot.de/tour/678483689'),
                    'Startkarte inkl. Streckenbeschreibung': new URL('https://content.rtc-koeln.de/pages/events/tours/permanents/Schmitzebud 20201214.pdf'),
                })
                .setControls(
                    new ControlBuilder()
                        .setCity('Kürten')
                        .setId('32851936-b351-4b4d-a71f-03e3138a8864')
                        .setStreet('Wipperfürther Straße 360')
                        .setTitle('Esso-Tankstelle')
                        .setUrl('ich-tanke.de/tankstelle/019555c8827f78f780d0e0c71a87e0f6/')
                        .setZipCode('51515')
                        .build()
                )
                .setLastChange('2023-01-27')
                .build(),
        ],
    }),
})
