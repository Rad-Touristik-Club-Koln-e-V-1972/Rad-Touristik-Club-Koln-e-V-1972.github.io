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
        rtf: (state): Event => state.tours.find((it) => it.category === EEvent.RTF) as Event,
    },
    state: () => ({
        tours: [
            new EventBuilder()
                .setFees(
                    new FeeBuilder().setName('Jugendliche bis 18 Jahre').setPrice(0).build(),
                    new FeeBuilder().setName('BDR-Mitglieder mit Wertungskarte').setPrice(5).build(),
                    new FeeBuilder().setName('sonstige BDR-Mitglieder').setPrice(7).build(),
                    new FeeBuilder().setName('Gastfahrer').setPrice(9).build(),
                    new FeeBuilder().setCategory(EEvent.Marathon).setName('BDR-Mitglieder mit Wertungskarte').setPrice(15).build(),
                    new FeeBuilder().setCategory(EEvent.Marathon).setName('sonstige BDR-Mitglieder').setPrice(17).build(),
                    new FeeBuilder().setCategory(EEvent.Marathon).setName('Gastfahrer').setPrice(19).build()
                )
                .setTimes(
                    new TimeBuilder().setName('Frühstück').setTime('6:00', '6:30').build(),
                    new TimeBuilder().setName('Start').setTime('6:30', '11:00').build(),
                    new TimeBuilder().setName('Kontrollschluss am Ziel').setTime('18:00').build()
                )
                .setTracks(
                    new TrackBuilder()
                        .setName('Alle Strecken')
                        .setText(
                            `Wie in den letzten Jahren starten wir im Schulzentrum in Porz-Zündorf.
„Frühstarter“ können dort ab sechs Uhr frühstücken, während die „Langschläfer“ noch bis elf Uhr auf den kurzen Strecken starten können.
Parkflächen stehen auf dem Schulgelände ausreichend zur Verfügung.
Selbstverständlich kann sich auch bei uns mit Scan&Bike angemeldet werden.
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
                        .setLength(51)
                        .setName('Die 51er')
                        .setText(
                            `Sie führt über Krahwinkel und Breidt vorbei an Halberg, um über eine kurvenreiche Abfahrt wieder ins Jabachtal zu gelangen, wo sie nördlich von Lohmar mit den anderen Strecken zusammentrifft.

Hinter Lohmar geht es über die L288 ins Sülztal (Hier befindet sich der Radweg auf der „verkehrten“ Straßenseite!) und über den letzten Anstieg der Strecke nach Altenrath.
Hier geht das Tempo noch mal deutlich nach oben, denn die alte Kölner Straße auf der Rückseite des Flughafens ist vielen VereinsfahrerInnen als Zeitfahrstrecke bekannt.
Über Porz-Grengel und Urbach quert die Strecke die ICE-Strecke und führt zurück zum Startort.`
                        )
                        .setTime('7:30', '11:00')
                        .setUrls({
                            'GPX-Datei': new URL('https://content.rtc-koeln.de/pages/events/tours/events/rtfs/2022 Tour 51km.gpx'),
                            Komoot: new URL('https://www.komoot.de/tour/676899286'),
                        })
                        .build(),
                    new TrackBuilder()
                        .setControls(2)
                        .setHeight(740)
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
                        .setTime('7:30', '11:00')
                        .setUrls({
                            'GPX-Datei': new URL('https://content.rtc-koeln.de/pages/events/tours/events/rtfs/2022 Tour 78km.gpx'),
                            Komoot: new URL('https://www.komoot.de/tour/676927332'),
                        })
                        .build(),
                    new TrackBuilder()
                        .setControls(3)
                        .setHeight(1440)
                        .setLength(118)
                        .setName('Die 118er')
                        .setProfile(EProfile.huegelig)
                        .setText(
                            `Während die 78er weiter dem Wahnbachtal folgt, biegen die restlichen Strecken nach rechts in den Wald auf einen kleinen, gemeinen Anstieg nach Oberwennerscheid ab.
In Brackemich geht es rechts ab und über Eischeid hinunter ins Bröltal.
Einer Baustelle vor zwei Jahren verdanken wir den folgenden Anstieg nach Winterscheid.
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
Recht schnell verlässt die 118er das Siegtal wieder und führt über Rieferath nach Ruppichteroth.
Auf diesem Teilstück wird ein erheblicher Anteil der Höhenmeter auf der anspruchsvollen Strecke überwunden.
Über Hambuchen und Retscheroth geht es weiter nach Marienfeld, wo die drei langen Strecken aufeinander treffen und bis Much gemeinsam geführt werden.
Von Much geht es durch wenig befahrene ländliche Straßen über Hetzenholz, Nackhausen und Seelscheid nach Ingersauel, wo die nächste Herausforderung wartet:
der Anstieg zu unserer neuen Kontrolle auf dem Betriebshof von Fullwood Blockhaus in Oberstehöhe.
Von dort geht es zunächst wellig weiter, bis nach einer schönen Abfahrt das Aggertal erreicht wird.
Alle FahrerInnen, die bis hierher noch nicht genügend Höhenmeter beisammen haben, dürfen hier gerne noch den Anstieg nach Naaferberg mitnehmen und auf dem Höhenrücken der 51er-Strecke folgen.
Für alle anderen geht es flach weiter über Donrath, bis dass vor Lohmar alle Strecken zusammengeführt werden.
Gemeinsam geht es auf dem Radweg Richtung Altenrath weiter.`
                        )
                        .setTime('7:30', '11:00')
                        .setUrls({
                            'GPX-Datei': new URL('https://content.rtc-koeln.de/pages/events/tours/events/rtfs/2022 Tour 118km.gpx'),
                            Komoot: new URL('https://www.komoot.de/tour/676930729'),
                        })
                        .build(),
                    new TrackBuilder()
                        .setName('Marathon und 159er')
                        .setText(
                            `Beide Strecken führen nach der Kontrolle in Bourauel zunächst das Siegtal entlang.
In Müllenacker folgen wir, anders als in den letzten Jahren, der Sieg.
Wer Höhenmeter sammeln will, kann aber gerne über den Hügel auf der Herchener Straße abkürzen und trifft in Herchen wieder auf die Strecke.
Erst hinter Schladern ist es dann vorbei mit der gemütlichen Rollerei.
Über Vierbuchermühle, Schnörringen und Lützingen geht es stetig aufwärts zur Kontrolle in Hülstert.
Dort trennen sich dann auch Marathon und 159er:
<figure>
    <img alt="Kontrolle 3 / 5 - Hülstert" src='https://content.rtc-koeln.de/pages/events/tours/events/rtfs/K3_K5_Hülstert.jpg' style='width: 100%' />
    <figcaption>Kontrolle 3 / 5 - Hülstert</figcaption>
</figure>`
                        )
                        .build(),
                    new TrackBuilder()
                        .setControls(4)
                        .setHeight(1750)
                        .setImportant(true)
                        .setLength(159)
                        .setName('Die 159er')
                        .setProfile(EProfile.bergisch)
                        .setText(
                            `In Hülstert geht es für die 159er-Strecke nicht über eine der drei Haupststraßen weiter, sondern am besten über den Parkplatz neben der Imbissbude zur Straße „Auf der Stippe“.
Auf Nebenstrecken geht es dann durch Geiringen nach Hermesdorf.
Von dort folgen wir den Straßen entlang der Homburger Bröl.`
                        )
                        .setTime('7:30', '8:30')
                        .setUrls({
                            'GPX-Datei': new URL('https://content.rtc-koeln.de/pages/events/tours/events/rtfs/2022 Tour 159km.gpx'),
                            Komoot: new URL('https://www.komoot.de/tour/676931597'),
                        })
                        .build(),
                    new TrackBuilder()
                        .setControls(6)
                        .setHeight(2610)
                        .setImportant(true)
                        .setLength(212)
                        .setName('Der Marathon')
                        .setProfile(EProfile.bergisch)
                        .setText(
                            `Nach der Streckenteilung in Hülstert folgt eine geschmeidige Abfahrt hinunter nach Morsbach.
Weiter geht es auf der L278.
Kurz hinter der Systembaufirma ALHO verlassen wir Nordrhein-Westfalen und fahren die nächsten zehn Kilometer durch Rheinland-Pfalz.
<figure>
    <img alt="Gut Crottorf" src='https://content.rtc-koeln.de/pages/events/tours/events/rtfs/Gut_Crottorf.jpg' style='width: 100%' />
    <figcaption>Gut Crottorf</figcaption>
</figure>
Vorbei an Gut Crottorf geht es über wenig befahrene Nebenstrecken geradeaus weiter über Hilchenbach und Trömbach zur Warmverpflegung nach Bebbingen.
<figure>
    <img alt="Kontrolle 4 Marathon - Bebbingen" src='https://content.rtc-koeln.de/pages/events/tours/events/rtfs/K4_Marathon_Bebbingen.jpg' style='width: 100%' />
    <figcaption>Kontrolle 4 Marathon - Bebbingen</figcaption>
</figure>
Wer hier den Versuchungen unserer (Fast-) Sterneköche erliegt, wird die Kalorien auch gleich wieder los; bis zur Unterquerung der A4 geht es stetig hinauf.
Nach der folgenden Abfahrt wird in Iseringhausen der nördlichste Punkt auf unserer Strecke erreicht.
Relativ flach geht es nun über Husten und Halbhusten weiter zum langen Anstieg nach Blockhütte.
Auch hier werden die Mühen wieder mit einem grandiosen Ausblick belohnt.
Nach Abfahrt erfolgt in Eckenhagen die nächste Streckenänderung:
Da einige FahrerInnen sich dort im letzten Jahr verfahren haben, biegt die Strecke jetzt an der Hauptstraße rechts ab, um dem „intuitiven“ Streckenverlauf zu folgen.
Nachdem die A4 wieder überquert wird, geht es an der Wiehltalsperre vorbei.
Der Parkplatz mit dem „Krombacher“ Ausblick bietet sich natürlich für das ein oder andere „Selfie“ an.
<figure>
    <img alt="Blick auf die Wieltalsperre, aktuell ohne Kontrolle " src='https://content.rtc-koeln.de/pages/events/tours/events/rtfs/Wieltalsperre.jpg' style='width: 100%' />
    <figcaption>Blick auf die Wieltalsperre, aktuell ohne Kontrolle </figcaption>
</figure>
Hinter Brüchermühle geht es über eine leicht geänderte Strecke zur Kontrolle nach Hülstert zurück.`
                        )
                        .setTime('6:30', '7:30')
                        .setUrls({
                            'GPX-Datei': new URL('https://content.rtc-koeln.de/pages/events/tours/events/rtfs/2022 Marathon 212km.gpx'),
                            Komoot: new URL('https://www.komoot.de/tour/676932743'),
                        })
                        .build(),
                    new TrackBuilder()
                        .setName('159er und Marathon')
                        .setText(
                            `An der Kontrollstelle in Hülstert treffen die 159er und die Marathon-Strecke aufeinander.
Wegen der verlängerten Startzeit für die 159er bietet die Kontrolle an, sich dort zu verabreden und gemeinsam weiterzufahren.
Von dort geht es flacher durch das Bröltal weiter.
Bei Alefeld verlassen wir das Bröltal und fahren über Marienfeld nach Much, wo, bis auf die 51er, alle Strecken aufeinander treffen.`
                        )
                        .build()
                )
                .setImages(new GalleryEntryBuilder().setImageUrl('content.rtc-koeln.de/pages/events/tours/events/rtfs/2023 Flyer.jpg').build())
                .setLastChange('2022-12-02')
                .setPopup(
                    `Unsere nächste Forsbach-Tour ist am <b>Sonntag, dem 28. Mai 2023</b>

Notiert Euch schon mal den Termin.

Wir freuen uns auf Euch!

Euer RTC Köln e.V.`,
                    'NICHT VERPASSEN'
                )
                .setText(
                    `Wir haben uns bemüht, die Anregungen von den TeilnehmerInnen unserer vorherigen Forsbach-Tour umzusetzen und haben Teile der Strecken umgeplant.

So haben wir Kontrollstellen mit der Möglichkeit der WC-Nutzung gefunden und die letzte Kontrolle liegt nicht mehr unmittelbar an der Straße.

Die Entfernungen zwischen den Kontrollen haben wir gleichmäßiger aufgeteilt, die längste Strecke mit 38 km liegt nicht mehr am Schluss, sondern hinter der Kontrollstelle 2 in Bourauel.

Auch dem Trend zu mehr Höhenmetern sind wir nicht gefolgt, haben die Strecke an einigen Stellen entschärft, ohne ihr die typische Charakteristik zu nehmen.

Die Teilstrecken führen ausschließlich über wenig befahrene Nebenstraßen.`
                )
                .setTitle('Die Forsbach-Tour')
                .build(),
            new PermanentBuilder()
                .setHeight(700)
                .setLength(71)
                .setProfile(EProfile.wellig)
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
Dies sind z.B. <a href='http://bachs-und-binas.de/' target='_blank'>Bach's und Bina's</a>, Kirchplatz 7, <a href='https://www.lecker-kaffee-lindlar.de/' target='_blank'>lecker kaffee lindlar</a>, Kölner Str. 15 oder, wer es einfach mag, <a href='https://kamps.de/standort/kamps-baeckerei-lindlar-koelner-strasse-16-a' target='_blank'>Bäckerei Kamps</a>, Kölner Straße 16 a.

Nach der Pause radelt ihr dann leicht aufwärts zurück über die Pollerhofstraße, zunächst waldfrei mit teilweiser schöner Aussicht, in Richtung Köln.
Ab Kemmerich geht es dann wellig abwärts mit leichten Gegensteigungen über Schmitzhöhe, rasant durch Brombach nach Obersteeg, Immekeppel, Untereschbach, Hoffnungsthal (das <a href='https://www.cafe-rosenow.de/' target='_blank'>Cafe Rosenow</a> ist empfehlenswert), Rösrath durch den Königsforst flach nach Köln-Rath zurück.
Auf der Rücktour könnt ihr genug Speed machen, um die überflüssigen Kalorien wieder abzutrainieren.
Wer dann trotzdem noch Platz hat, dem kann ich nur das Eiscafé Piccola Gelateria empfehlen.
Hier kann man die Runde mit Freunden bei einem vorzüglichen selbstgemachten cremigen Speiseeis abschließen.

...und wenn du eine Wertungskarte hast, nicht vergessen, die Tour eintragen zu lassen…

Das Startgeld beträgt 3 €.
Wertungskarteninhaber mit dem Vermerk "Schüler" sind zum Start zugelassen und vom Startgeld befreit.
Die genaue Streckenbeschreibung befindet sich neben dem o.a. Flyer auch auf der Startkarte, die die Radfahrerinnen und Radfahrer nach der Eintragung in die Teilnehmerliste ausgehändigt bekommen.
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
                .setLength(72)
                .setProfile(EProfile.wellig)
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
Dazu gibt es Gelegenheit bei der <a href='https://landbaeckerei-bauer.de/' target='_blank'>Landbäckerei Bauer</a>, Marktfeld 2, bei der <a href='http://www.baeckerei-fritzen.de/' target='_blank'>Kürtener Landbäckerei Mario Fritzen</a>, Wipperfürther Str. 389, oder <a href='https://www.engels-baeckerei.de/newpage10' target='_blank'>Felder´s Engelsbäckerei (im Rewe)</a>, Wipperfürther Str. 400.
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
                        .setStreet('Wipperfürther Straße 360')
                        .setTitle('Esso-Tankstelle')
                        .setUrl('ich-tanke.de/tankstelle/019555c8827f78f780d0e0c71a87e0f6/')
                        .setZipCode('51515')
                        .build()
                )
                .setLastChange('2022-02-12')
                .build(),
        ],
    }),
})
