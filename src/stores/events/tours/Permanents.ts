import ControlBuilder from 'src/models/builder/events/tours/ControlBuilder'
import PermanentBuilder from 'src/models/builder/events/tours/PermanentBuilder'
import EEvent from 'src/models/enums/EEvent'
import EProfile from 'src/models/enums/events/EProfile'

export default [
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
Die genaue Streckenbeschreibung befindet sich neben dem o.a. Flyer auch auf der Startkarte, die die Radfahrer:innen und Radfahrer nach der Eintragung in die Teilnehmerliste (Email-Adresse nicht vergessen) ausgehändigt bekommen.
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
Die genaue Streckenbeschreibung befindet sich neben dem o.a. Flyer auch auf der Startkarte, die die Radfahrer:innen und Radfahrer nach der Eintragung in die Teilnehmerliste ausgehändigt bekommen.
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
]
