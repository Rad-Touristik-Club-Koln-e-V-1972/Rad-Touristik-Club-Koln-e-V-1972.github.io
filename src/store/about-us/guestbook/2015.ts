import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/about-us/guestbook/ESource'
import GuestbookEntryBuilder from '~/models/builder/about-us/guestbook/GuestbookEntryBuilder'

export default [
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date('2015-10-19 12:55')
        .name('Claude-Antoine Berger de Leon')
        .source(ESource.Facebook)
        .text(
            `Auch von meiner Seite einen großen Dank an den Veranstalter, der einen enormen Aufwand betrieben hat.

Obwohl es die erste Veranstaltung dieser Art für den Verein war, wurde an Alles gedacht und es war eine sehr gelungene CTF,
bei der die Teilnehmer einen Riesenspaß haben konnten.
Es ist zu hoffen, dass im nächstem Jahr eine Wiederholung der Veranstaltung stattfinden kann
und dass auch vielleicht noch einige andere Vereine aus der Region die für Viele noch etwas unbekannte Veranstaltung in Angriff nehmen ...
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date('2015-10-18 18:43')
        .name('Helmut Kanthak')
        .organization('RSC Nievenheim')
        .source(ESource['E-Mail'])
        .text(
            `Hallo RTC,

ich/wir wollte/n nur sagen, dass ...eure Orga perfekt war und wir vom RSC Nievenheim beim nächsten mal wieder dabei sind.
Verpflegung war superund auch das man das Rad kurz abspülen konnte war toll.
Danke für eine so schöne Tour.
8-)
Helmut vom RSC Nievenheim
`
        )
        .title('Feedback wegen ...CTF 1. Wahnbach - Tour')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date('2015-10-18 14:23')
        .name('Schonneb Aus Lev')
        .source(ESource.Facebook)
        .text('<a href="www.youtube.com/v/Z2MqTVOeZMM" target="_blank" v-text="www.youtube.com/v/Z2MqTVOeZMM"/>')
        .title('... kleines Video von gestern')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date('2015-10-18 14:22')
        .name('Jür Jen')
        .source(ESource.Facebook)
        .text(
            `... die sich die Zeit genommen haben und die tolle Arbeit für uns Teilnehmer gemacht habt!!
Strecke war prima, leckere Verpflegung (Wurstbrote 😉) auch der Wasserschlauch fürs Rädchen war gut!

Hoffentlich gibt es nächstes Jahr die 2. Wahnbach-Tour, ich bin wieder dabei .....
`
        )
        .title('Besten Dank an ALLE Helfer ...')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date('2015-10-18 13:49')
        .name("Manuela 'Ela' Huber")
        .source(ESource.Facebook)
        .text(
            `total nette Crew - super Strecke - hat viel Spaß gemacht!!
gerne wieder!!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date('2015-10-18 10:33')
        .name('Jo Di')
        .source(ESource.Facebook)
        .text(
            `Ihr seid ein richtig nettes Team und ein toller Verein, da konnte das Wetter doch nur mitmachen.
Strecke war toll und an den Kontrollstellen gab's immer lekker Verpflegung (Klasse die wärmende Brühe und Liebe-Wurst-Käse belegten Brote) und immer ein nettes Gespräch.
Hat uns viel Spaß gemacht.
Danke

Ps. Dank suuuuper Waschmöglichkeit vor Ort konnten wir uns zuhause gleich aufs Sofa hauen.

Ps.Ps. Schmalzbrotgrüsse
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date('2015-10-18 8:22')
        .name('Guido Faßbender')
        .source(ESource['E-Mail'])
        .text(
            `Hallo RTC,

Eure 1. CTF war eine klasse Veranstaltung.
Vielen Dank für die Mühe, die Ihr Euch damit gemacht habt.
Die Streckenführung war sehr gut gewählt.
Euro Verpflegung war -wie offenbar bei Euch üblich- sehr gut.
An der entferntesten Kontrolle wären vielleicht ein paar Schmalzbrote ganz okay gewesen ;-)

Ich fand Eure Ausschilderung sehr gut gemacht.
In Kombination mit den aktualisierten Tracks konnte da eigentlich nichts mehr schief gehen.
Obwohl das Zusammenspiel mit Fußgängern/Joggern mehr als in Ordnung war, könnte ich mir vorstellen, dass die eine oder andere Markierung verschwunden ist.

Alles in allem eine tolle Veranstaltung.
Bin nächstes Jahr wieder dabei.

Guido Faßbender
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date('2015-10-17 21:02')
        .name('Schonneb Aus Lev')
        .source(ESource.Facebook)
        .text(
            `Hallo Zusammen,
vielen Dank an das OrgTeam und die fleissigen Helfer.
Mir hat die Strecke sehr gut gefallen, Verpflegung super, Rad war zum Schluß auch noch sauber (meine Frau fragte, ob ich überhaupt gefahren bin) - also rundum gelungen.

Ich würde mich auf ein nächstes Mal sehr freuen.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date('2015-10-17 20:45')
        .name('Henning Rudolph')
        .source(ESource['E-Mail'])
        .text(
            `Hallo RTC,

vielen Dank für die Organisation der CTF.
Die Verpflegung an euren Kontrollstellen und die freundlichen Helfer überall waren top!
Vor allem der warme Tee und die heiße Brühe waren heute klasse.
Auch im Zielbereich hat es an nichts gefehlt.
Einzig die Ausschilderung bis zur ersten Kontrolle war teilweise nicht vorhanden oder sehr schwer zu sehen.
Danach hat es gepasst.
Dank GPS-Gerät und Track von Euch ging es aber.

Macht weiter so!
Für nächstes Jahr wünsche ich Euch etwas Sonnenschein, damit noch mehr Biker kommen.

Sportliche Grüße,
Henning
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date('2015-10-17 20:01')
        .imageUrls('content.rtc-koeln.de/pages/guestbook/2015-10-17_20-01.jpg')
        .name('Wilfried Goesgens')
        .source(ESource.Facebook)
        .text(
            `Auch wenn ich das Startfenster leicht gerissen habe und nur die kurze Tour nehmen konnte 😕
Superrunde und hoffentlich nächstes Jahr wieder ...
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date('2015-10-17 19:38')
        .imageUrls('content.rtc-koeln.de/pages/guestbook/2015-10-17_19-38.jpg')
        .name('Thorsten Klein')
        .source(ESource.Facebook)
        .text(
            `Tolle Strecke.
Hat Spaß gemacht.
Danke für die Orga.
Es sollte mehr CTF geben.

Die Möglichkeit das Rad direkt vor Ort zu reinigen fand ich auch klasse.

Hier auch noch ein Bild von dem Ausblick auf der Strecke.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date('2015-10-17 19:03')
        .name('Sabine Riehl')
        .source(ESource.Facebook)
        .text(`Superschöne Strecke, tolle Verpflegung: hat total Spaß gemacht - vielen Dank für diese CTF und allen, die Sie möglich gemacht haben ...`)
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date('2015-10-17 18:57')
        .name('Jörg Hengster')
        .source(ESource.Facebook)
        .text(
            `Super Tour heute!
Schöne Strecke, direkt in den Wald, leckere Verpflegung.
Gute Idee, hier mal eine CTF anzubieten.
Danke RTC!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date('2015-10-17 17:52')
        .name('Bernd Doelp')
        .source(ESource.Facebook)
        .text(
            `Hallo RTC,

vielen Dank für eure heutige Veranstaltung.
Ihr habt eine wunderschöne Strecke und perfekte Kontrollstellen auf die Beine gestellt.
Gerade in Zeiten schwindender Radveranstaltungen, geht Ihr den anderen Weg und organisiert eine Zweite.
RESPEKT!!
Ich hoffe, dass Ihr es auch nächstes Jahr schafft dieses Event zu veranstalten.
Also bitte weiter so.

Und nun den einzigen Kritikpunkt, an der Ausschilderung müsst Ihr echt noch arbeiten.
Ein Kontrollfahrer am Morgen würde hier Wunder wirken.
Ich für meinen Teil freue mich jetzt schon auf's nächste Jahr.

Mit sportlichem Gruß
Bernd Doelp
`
        )
        .title('Feedback vom CTF')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date('2015-10-17 16:45')
        .name('Ben Feld')
        .source(ESource.Facebook)
        .text(
            `Danke für die schöne Veranstaltung!
Die Strecke war ausgesprochen schön und überall, wo nicht irgendwelche Deppen die Schilder umgedreht oder abgerissen haben, prima ausgezeichnet.

Wiederholung im nächsten Jahr ist ausdrücklich erwünscht.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date('2015-10-17 16:07')
        .name('Stephan Schwarz')
        .source(ESource['E-Mail'])
        .text(
            `Hallo,

der CTF heute hat mir sehr gut gefallen.
Tolle Strecke, sehr gute Verpflegung, sehr nette Personen an den Verpflegungspunkten.

Danke aus Hennef
Stephan
`
        )
        .title('Wahnbachtal Tour')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date('2015-6-3 20:16')
        .name('Guido Faßbender')
        .organization('Grenzfahrer e.V.')
        .source(ESource['E-Mail'])
        .text(
            `Hallo RTC,

vielen Dank für die tolle Marathonstrecke, die sehr gute und ausreichende Verpflegung und überhaupt für die ganze Veranstaltung.
Bin nächstes Jahr sicher wieder dabei.
Nix ändern :-))

Sportliche Grüße

Guido Faßbender
Grenzfahrer e.V.
`
        )
        .title('Feedback wegen Marathon')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date('2015-6-3 12:36')
        .name('Frank Koch')
        .source(ESource['E-Mail'])
        .text(
            `Reiskuchen,
der Reiskuchen von Silvana war wieder mal der Knaller.
Kann mir evtl einer das Rezept verraten????
Für eure Mühe und Antwort danke ich im voraus
mfg Frank
`
        )
        .title('Re: RTF')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date('2015-6-3 9:31')
        .name('Frank Koch')
        .source(ESource['E-Mail'])
        .text(
            `guten Mogen,
kann mich da meinen Vorrednern nur anschließen eine sehr schöne RTF war das.
Bin die 118er Runde gefahren die es ja auch schon mit ihren 1600 Hm in sich hatte.
Da taten die Beine doch schon ein bisschen weh.
Die Landschaft um Eitorf und Much ist sehr schön.
Alle Leute im K Bereich waren sehr nett und zuvorkommend.
An dieser Stelle noch mals besten Dank an Harald für mein gefundenes Handy.

schöne Grüße aus Troisdorf Frank 😊
`
        )
        .title('RTF')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date('2015-6-2 10:45')
        .name('Frank Oesterheld')
        .source(ESource.Facebook)
        .text(
            `Die Versorgungen an allen "K" super und vor allem die Supporter hilfsbereit, nett und gut gelaunt ...
Das ist nicht selbstverständlich und nicht auf allen Veranstaltungen so.
Das spricht für ein tolles Klima im Team RTC Köln e. V. 1972 !!
Bis zum nächsten Jahr 😊
`
        )
        .title('Kommentar zu Schnappschüssen / Impressionen von der K5 auf der Forsbach-Tour 2015')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date('2015-6-1 22:47')
        .name('Gerhard Veeh')
        .source(ESource.Facebook)
        .text(
            `Wir, der RTC-Mehlem 1984 e. V., waren nur zu zweit am Start wg. der Terminkollision mit ByBike.
Nächstes Mal sind wir wieder mehr und beim Marathon dabei ...

Danke Euch für die tolle Organisation.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date('2015-6-1 20:33')
        .name('Fam Rossol')
        .organization('1. RTW-Sankt Augustin-Menden')
        .source(ESource['E-Mail'])
        .text(
            `Nach der ersten Kontrolle haben wir uns aufgeteilt und in Gruppen die 70er, 100er und die 150er Strecke unter die Räder genommen.
Im Ziel waren wir uns einig - es war wieder eine tolle Veranstaltung bei euch - DANKE an ALLE Helfer, Freunde und Sponsoren des RTC !!!!

Die Radsportfreunde vom 1. RTW-Sankt Augustin-Menden
`
        )
        .title('Danke ...')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date('2015-6-1 15:57')
        .name('Christof Mourikis')
        .source(ESource['E-Mail'])
        .text(
            `Hallo RTC,

ich/wir wollte/n nur sagen, dass ...

SENSATIONELL!!!!!

Die Strecke    150 von 100 möglichen  Punkte
Höhenmeter   reichlich!

Ausschilderung  150 von 100 möglichen  Punkte

Verpflegung 150 von 100 möglichen  Punkte

Was will der Radsportler mehr??

Ketten-Checks, für den der es braucht!

Beste Marathon-Veranstaltung, die ich bisher gefahren bin (und das sind nicht wenige!)
`
        )
        .title('Feedback wegen 43. Marathon am 31.05.2015')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date('2015-6-1 14:14')
        .name('Yvonne Basinski')
        .source(ESource.Facebook)
        .text(
            `Total schöne Tour.
Top Verpflegung und Beschilderung.
Vielen Dank an das Orga Team!
Wir sind nächstes Jahr wieder dabei.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date('2015-6-1 9:05')
        .name('Marc Grewe')
        .source(ESource['E-Mail'])
        .text(
            `Hallo RTC,

danke mal wieder für die tolle Tour!
Man glaubt ja manchmal gar nicht, wie schön wir es im Bergischen haben.
Ich komme gerne wieder!!
Vielleicht gelingt es euch ja sogar den Termin von der BN-Eupen-BN Tour zu trennen, die will ich nämlich auch mal angehen.
Verpflegung fand' ich angemessen gut, auch wenn das Gulasch später an den Anstiegen noch mal Hallo sagen wollte ;-)

Was mich allerdings schon wundert ist eure Angabe der Hm für die Marathonstrecke:
also mein Garmin hat knappe 2300 hm aufgezeichnet, mit topografischen Korrekturen könnte man vielleicht noch knappe 2400 hm rausschlagen.
Aber 2700 hm sind einfach nicht drin.
Nicht, dass ich mehr bräuchte, aber es ist schon unterwegs irritierend, weil man zum Gulasch (55% der Strecke) gerade mal 1100 hm (40% von 2700 hm) hat
und denkt, was denn da wohl noch alles von einem liegen soll?

Leider habe ich auch alle Abzweigungen zum "Kettencheck" verpasst (was mir zum Ende hin wohl auch ganz recht war ;-)).
Ob ihr das wohl bitte im kommenden Jahr deutlicher ausschildern könntet?

Wie stellt ihr die Streckenlänge eigentlich so genau fest?
Ich hatte jetzt zum zweiten Mal die 200km gerade erst auf dem Schulhof geknackt…
Aber gut, wir reden hier von einem Prozent Abweichung.
Ich fand euer 200km-Schild jedenfalls sehr schön J (auch wenn mir da noch gute 2km auf dem Tacho fehlten)
und auch euer "1km bis zum Ziel" Schild steht was früh auf der Strecke,
aber es steigt ja keiner 400m vor dem Ziel ab und beruft sich auf das Schild ;-).

Nochmals danke und bis zum nächsten Mal!

Marc
`
        )
        .build(),
    new GuestbookEntryBuilder().category(EEvent.RTF).date('2015-5-31 20:30').name('Petra Ak').source(ESource.Facebook).text("Vielen Dank für's Organisieren, war super !").build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date('2015-5-31 20:19')
        .name('Thomas Mühl')
        .source(ESource.Facebook)
        .text(
            `Für den Regen am Schluss könnt ihr ja nichts, ansonsten Top Veranstaltung, da können sich andere Veranstalter mal 'ne Scheibe von abschneiden.
`
        )
        .build(),
    new GuestbookEntryBuilder().category(EEvent.RTF).date('2015-5-31 20:11').name('Michael Kalisch').source(ESource.Facebook).title('top top top 😊').build(),
    new GuestbookEntryBuilder().category(EEvent.RTF).date('2015-5-31 20:10').name('Horst Voll').source(ESource.Facebook).text('War geil und sehr anstrengend ! 👍').build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date('2015-5-31 19:29')
        .imageUrls('content.rtc-koeln.de/pages/guestbook/2015-05-31_19-29.jpg')
        .name('Horst Paesch')
        .source(ESource.Facebook)
        .text(
            `Danke für ein perfekt organisierten Marathon, die Strecke war super ausgesucht, viele ruhige Straßen, tolle Ausblicke!
Die Damen und Herren an den Kontrollpunkte/Verpflegungspunkten waren alle sehr nett und hilfsbereit, die Verpflegung ist der Knaller.

Da nimmt man beim Marathon noch zu 😊
`
        )
        .build(),
]
