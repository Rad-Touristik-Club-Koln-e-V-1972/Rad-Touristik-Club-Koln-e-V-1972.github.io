import GuestbookEntryBuilder from '~/models/builder/rtc-cologne/guestbook/GuestbookEntryBuilder'
import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/rtc-cologne/guestbook/ESource'

export default [
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2015-10-19 12:55')
        .setId('670692ec-28c2-456f-b56b-bbea4a7a1492')
        .setName('Claude-Antoine Berger de Leon')
        .setSource(ESource.Facebook)
        .setText(
            `Auch von meiner Seite einen großen Dank an den Veranstalter, der einen enormen Aufwand betrieben hat.

Obwohl es die erste Veranstaltung dieser Art für den Verein war, wurde an Alles gedacht und es war eine sehr gelungene CTF,
bei der die Teilnehmer einen Riesenspaß haben konnten.
Es ist zu hoffen, dass im nächstem Jahr eine Wiederholung der Veranstaltung stattfinden kann
und dass auch vielleicht noch einige andere Vereine aus der Region die für Viele noch etwas unbekannte Veranstaltung in Angriff nehmen ...
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2015-10-18 18:43')
        .setId('28617bc6-73c2-4dd4-b01b-cc3ca0d8f48c')
        .setName('Helmut Kanthak')
        .setOrganization('RSC Nievenheim')
        .setSource(ESource['E-Mail'])
        .setText(
            `Hallo RTC,

ich/wir wollte/n nur sagen, dass ...eure Orga perfekt war und wir vom RSC Nievenheim beim nächsten mal wieder dabei sind.
Verpflegung war superund auch das man das Rad kurz abspülen konnte war toll.
Danke für eine so schöne Tour.
8-)
Helmut vom RSC Nievenheim
`
        )
        .setTitle('Feedback wegen ...CTF 1. Wahnbach - Tour')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2015-10-18 14:23')
        .setId('b4153686-b88a-4847-b98e-071438cc10d6')
        .setName('Schonneb Aus Lev')
        .setSource(ESource.Facebook)
        .setText('<a href="www.youtube.com/v/Z2MqTVOeZMM" target="_blank">www.youtube.com/v/Z2MqTVOeZMM<a/>')
        .setTitle('... kleines Video von gestern')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2015-10-18 14:22')
        .setId('58ed0ab8-b2d7-47b1-85e0-f78817989d7c')
        .setName('Jür Jen')
        .setSource(ESource.Facebook)
        .setText(
            `... die sich die Zeit genommen haben und die tolle Arbeit für uns Teilnehmer gemacht habt!!
Strecke war prima, leckere Verpflegung (Wurstbrote 😉) auch der Wasserschlauch fürs Rädchen war gut!

Hoffentlich gibt es nächstes Jahr die 2. Wahnbach-Tour, ich bin wieder dabei .....
`
        )
        .setTitle('Besten Dank an ALLE Helfer ...')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2015-10-18 13:49')
        .setId('3589a9f5-2b1a-4137-a4ac-e3231f6d1933')
        .setName("Manuela 'Ela' Huber")
        .setSource(ESource.Facebook)
        .setText(
            `total nette Crew - super Strecke - hat viel Spaß gemacht!!
gerne wieder!!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2015-10-18 10:33')
        .setId('e91c8da4-502a-4f2f-ab3d-b97917b5e5af')
        .setName('Jo Di')
        .setSource(ESource.Facebook)
        .setText(
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
        .setCategory(EEvent.CTF)
        .setDate('2015-10-18 8:22')
        .setId('1d5ba100-2a06-4637-9eaa-6b252f447bc3')
        .setName('Guido Faßbender')
        .setSource(ESource['E-Mail'])
        .setText(
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
        .setCategory(EEvent.CTF)
        .setDate('2015-10-17 21:02')
        .setId('47600af9-8d7b-4137-a61d-9ba9f155fb3d')
        .setName('Schonneb Aus Lev')
        .setSource(ESource.Facebook)
        .setText(
            `Hallo Zusammen,
vielen Dank an das OrgTeam und die fleissigen Helfer.
Mir hat die Strecke sehr gut gefallen, Verpflegung super, Rad war zum Schluß auch noch sauber (meine Frau fragte, ob ich überhaupt gefahren bin) - also rundum gelungen.

Ich würde mich auf ein nächstes Mal sehr freuen.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2015-10-17 20:45')
        .setId('eaf08dae-67c4-4e06-89fa-0311b9fecd76')
        .setName('Henning Rudolph')
        .setSource(ESource['E-Mail'])
        .setText(
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
        .setCategory(EEvent.CTF)
        .setDate('2015-10-17 20:01')
        .setImageUrls('content.rtc-koeln.de/pages/guestbook/2015-10-17_20-01.jpg')
        .setId('f5bb6bc8-8fe5-4a69-bf59-6d1f0a035a73')
        .setName('Wilfried Goesgens')
        .setSource(ESource.Facebook)
        .setText(
            `Auch wenn ich das Startfenster leicht gerissen habe und nur die kurze Tour nehmen konnte 😕
Superrunde und hoffentlich nächstes Jahr wieder ...
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2015-10-17 19:38')
        .setImageUrls('content.rtc-koeln.de/pages/guestbook/2015-10-17_19-38.jpg')
        .setId('c9ff2e18-f766-47d4-aef2-92f414fa87c8')
        .setName('Thorsten Klein')
        .setSource(ESource.Facebook)
        .setText(
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
        .setCategory(EEvent.CTF)
        .setDate('2015-10-17 19:03')
        .setId('eb2c1c1f-7ae3-47dc-8492-340a9203cdb6')
        .setName('Sabine Riehl')
        .setSource(ESource.Facebook)
        .setText(`Superschöne Strecke, tolle Verpflegung: hat total Spaß gemacht - vielen Dank für diese CTF und allen, die Sie möglich gemacht haben ...`)
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2015-10-17 18:57')
        .setId('2e0bdd4e-603e-473c-952c-7e2c53e4e369')
        .setName('Jörg Hengster')
        .setSource(ESource.Facebook)
        .setText(
            `Super Tour heute!
Schöne Strecke, direkt in den Wald, leckere Verpflegung.
Gute Idee, hier mal eine CTF anzubieten.
Danke RTC!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2015-10-17 17:52')
        .setId('f6491868-9588-45fd-8563-392f477e68cf')
        .setName('Bernd Doelp')
        .setSource(ESource.Facebook)
        .setText(
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
        .setTitle('Feedback vom CTF')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2015-10-17 16:45')
        .setId('ce880b76-b3f3-4a81-ac1f-936dab0919c5')
        .setName('Ben Feld')
        .setSource(ESource.Facebook)
        .setText(
            `Danke für die schöne Veranstaltung!
Die Strecke war ausgesprochen schön und überall, wo nicht irgendwelche Deppen die Schilder umgedreht oder abgerissen haben, prima ausgezeichnet.

Wiederholung im nächsten Jahr ist ausdrücklich erwünscht.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2015-10-17 16:07')
        .setId('c313d9cb-b2ed-46c1-ae1e-7617f9e81b9e')
        .setName('Stephan Schwarz')
        .setSource(ESource['E-Mail'])
        .setText(
            `Hallo,

der CTF heute hat mir sehr gut gefallen.
Tolle Strecke, sehr gute Verpflegung, sehr nette Personen an den Verpflegungspunkten.

Danke aus Hennef
Stephan
`
        )
        .setTitle('Wahnbachtal Tour')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2015-06-03 20:16')
        .setId('e33bf8ab-4500-4149-b4c4-fc0cdb3c6aa0')
        .setName('Guido Faßbender')
        .setOrganization('Grenzfahrer e.V.')
        .setSource(ESource['E-Mail'])
        .setText(
            `Hallo RTC,

vielen Dank für die tolle Marathonstrecke, die sehr gute und ausreichende Verpflegung und überhaupt für die ganze Veranstaltung.
Bin nächstes Jahr sicher wieder dabei.
Nix ändern :-))

Sportliche Grüße

Guido Faßbender
Grenzfahrer e.V.
`
        )
        .setTitle('Feedback wegen Marathon')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2015-06-03 12:36')
        .setId('3339c97b-e392-4216-8653-dce28bc9c6cd')
        .setName('Frank Koch')
        .setSource(ESource['E-Mail'])
        .setText(
            `Reiskuchen,
der Reiskuchen von Silvana war wieder mal der Knaller.
Kann mir evtl einer das Rezept verraten????
Für eure Mühe und Antwort danke ich im voraus
mfg Frank
`
        )
        .setTitle('Re: RTF')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2015-06-03 9:31')
        .setId('0ce53a69-f135-4793-b93e-502a51be682f')
        .setName('Frank Koch')
        .setSource(ESource['E-Mail'])
        .setText(
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
        .setTitle('RTF')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2015-06-02 10:45')
        .setId('7ac16201-c7e3-4dda-a200-6005a42d857f')
        .setName('Frank Oesterheld')
        .setSource(ESource.Facebook)
        .setText(
            `Die Versorgungen an allen "K" super und vor allem die Supporter hilfsbereit, nett und gut gelaunt ...
Das ist nicht selbstverständlich und nicht auf allen Veranstaltungen so.
Das spricht für ein tolles Klima im Team RTC Köln e. V. 1972 !!
Bis zum nächsten Jahr 😊
`
        )
        .setTitle('Kommentar zu Schnappschüssen / Impressionen von der K5 auf der Forsbach-Tour 2015')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2015-06-01 22:47')
        .setId('eb50ce8f-8009-48c7-a1d1-b53212b20b18')
        .setName('Gerhard Veeh')
        .setSource(ESource.Facebook)
        .setText(
            `Wir, der RTC-Mehlem 1984 e. V., waren nur zu zweit am Start wg. der Terminkollision mit ByBike.
Nächstes Mal sind wir wieder mehr und beim Marathon dabei ...

Danke Euch für die tolle Organisation.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2015-06-01 20:33')
        .setId('ecefada5-64cc-4d8e-bb37-d0dd9606cac6')
        .setName('Fam Rossol')
        .setOrganization('1. RTW-Sankt Augustin-Menden')
        .setSource(ESource['E-Mail'])
        .setText(
            `Nach der ersten Kontrolle haben wir uns aufgeteilt und in Gruppen die 70er, 100er und die 150er Strecke unter die Räder genommen.
Im Ziel waren wir uns einig - es war wieder eine tolle Veranstaltung bei euch - DANKE an ALLE Helfer, Freunde und Sponsoren des RTC !!!!

Die Radsportfreunde vom 1. RTW-Sankt Augustin-Menden
`
        )
        .setTitle('Danke ...')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2015-06-01 15:57')
        .setId('be7be1d5-e7a6-4a8d-8104-1ddaa0136d14')
        .setName('Christof Mourikis')
        .setSource(ESource['E-Mail'])
        .setText(
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
        .setTitle('Feedback wegen 43. Marathon am 31.05.2015')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2015-06-01 14:14')
        .setId('a47dd1ac-091e-44a5-a856-1caedea83025')
        .setName('Yvonne Basinski')
        .setSource(ESource.Facebook)
        .setText(
            `Total schöne Tour.
Top Verpflegung und Beschilderung.
Vielen Dank an das Orga Team!
Wir sind nächstes Jahr wieder dabei.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2015-06-01 9:05')
        .setId('e5a70497-78d7-43bc-ac68-08d82d0080bb')
        .setName('Marc Grewe')
        .setSource(ESource['E-Mail'])
        .setText(
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
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2015-05-31 20:30')
        .setId('3ccc4f04-1123-4756-9d4d-bbcdbcd7f6e0')
        .setName('Petra Ak')
        .setSource(ESource.Facebook)
        .setText("Vielen Dank für's Organisieren, war super !")
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2015-05-31 20:19')
        .setId('4190886c-613c-4369-b1d0-fbbd8a8e54b3')
        .setName('Thomas Mühl')
        .setSource(ESource.Facebook)
        .setText(
            `Für den Regen am Schluss könnt ihr ja nichts, ansonsten Top Veranstaltung, da können sich andere Veranstalter mal 'ne Scheibe von abschneiden.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2015-05-31 20:11')
        .setId('bde02868-dfb7-45fc-879a-0f239805fedb')
        .setName('Michael Kalisch')
        .setSource(ESource.Facebook)
        .setTitle('top top top 😊')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2015-05-31 20:10')
        .setId('ee86939c-fad7-4ceb-80a3-a27491a351ab')
        .setName('Horst Voll')
        .setSource(ESource.Facebook)
        .setText('War geil und sehr anstrengend ! 👍')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2015-05-31 19:29')
        .setImageUrls('content.rtc-koeln.de/pages/guestbook/2015-05-31_19-29.jpg')
        .setId('38d9f55f-8314-498e-9a0d-9bbe6ef53705')
        .setName('Horst Paesch')
        .setSource(ESource.Facebook)
        .setText(
            `Danke für ein perfekt organisierten Marathon, die Strecke war super ausgesucht, viele ruhige Straßen, tolle Ausblicke!
Die Damen und Herren an den Kontrollpunkte/Verpflegungspunkten waren alle sehr nett und hilfsbereit, die Verpflegung ist der Knaller.

Da nimmt man beim Marathon noch zu 😊
`
        )
        .build(),
]
