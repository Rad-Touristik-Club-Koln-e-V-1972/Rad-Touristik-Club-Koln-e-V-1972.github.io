import Event from '@/models/enums/guestbook/Event'
import GuestbookEntryBuilder from '@/models/builder/guestbook/EntryBuilder'
import Source from '@/models/enums/guestbook/Source'

export default [
    new GuestbookEntryBuilder()
        .date(2015, 10, 19, 12, 55)
        .event(Event.CTF)
        .name('Claude-Antoine Berger de Leon')
        .source(Source.Facebook)
        .text(
            `
Auch von meiner Seite einen großen Dank an den Veranstalter, der einen enormen Aufwand betrieben hat.<br/>
<br/>
Obwohl es die erste Veranstaltung dieser Art für den Verein war, wurde an Alles gedacht und es war eine sehr gelungene CTF,
bei der die Teilnehmer einen Riesenspaß haben konnten.<br/>
Es ist zu hoffen, dass im nächstem Jahr eine Wiederholung der Veranstaltung stattfinden kann
und dass auch vielleicht noch einige andere Vereine aus der Region die für Viele noch etwas unbekannte Veranstaltung in Angriff nehmen ...
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 10, 18, 18, 43)
        .event(Event.CTF)
        .name('Helmut Kanthak')
        .organization('RSC Nievenheim')
        .source(Source['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
ich/wir wollte/n nur sagen, dass ...eure Orga perfekt war und wir vom RSC Nievenheim beim nächsten mal wieder dabei sind.<br/>
Verpflegung war superund auch das man das Rad kurz abspülen konnte war toll.<br/>
Danke für eine so schöne Tour.<br/>
8-)<br/>
Helmut vom RSC Nievenheim
`
        )
        .title('Feedback wegen ...CTF 1. Wahnbach - Tour')
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 10, 18, 14, 23)
        .event(Event.CTF)
        .name('Schonneb Aus Lev')
        .source(Source.Facebook)
        .text('<a href="https://www.youtube.com/v/Z2MqTVOeZMM" target="_blank">https://www.youtube.com/v/Z2MqTVOeZMM<a/>')
        .title('... kleines Video von gestern')
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 10, 18, 14, 22)
        .event(Event.CTF)
        .name('Jür Jen')
        .source(Source.Facebook)
        .text(
            `
... die sich die Zeit genommen haben und die tolle Arbeit für uns Teilnehmer gemacht habt!!<br/>
Strecke war prima, leckere Verpflegung (Wurstbrote 😉) auch der Wasserschlauch fürs Rädchen war gut!<br/>
<br/>
Hoffentlich gibt es nächstes Jahr die 2. Wahnbach-Tour, ich bin wieder dabei .....
`
        )
        .title('Besten Dank an ALLE Helfer ...')
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 10, 18, 13, 49)
        .event(Event.CTF)
        .name("Manuela 'Ela' Huber")
        .source(Source.Facebook)
        .text(
            `
total nette Crew - super Strecke - hat viel Spaß gemacht!!<br/>
gerne wieder!!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 10, 18, 10, 33)
        .event(Event.CTF)
        .name('Jo Di')
        .source(Source.Facebook)
        .text(
            `
Ihr seid ein richtig nettes Team und ein toller Verein, da konnte das Wetter doch nur mitmachen.<br/>
Strecke war toll und an den Kontrollstellen gab's immer lekker Verpflegung (Klasse die wärmende Brühe und Liebe-Wurst-Käse belegten Brote) und immer ein nettes Gespräch.<br/>
Hat uns viel Spaß gemacht.<br/>
Danke<br/>
<br/>
Ps. Dank suuuuper Waschmöglichkeit vor Ort konnten wir uns zuhause gleich aufs Sofa hauen.<br/>
<br/>
Ps.Ps. Schmalzbrotgrüsse
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 10, 18, 8, 22)
        .event(Event.CTF)
        .name('Guido Faßbender')
        .source(Source['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
Eure 1. CTF war eine klasse Veranstaltung.<br/>
Vielen Dank für die Mühe, die Ihr Euch damit gemacht habt.<br/>
Die Streckenführung war sehr gut gewählt.<br/>
Euro Verpflegung war -wie offenbar bei Euch üblich- sehr gut.<br/>
An der entferntesten Kontrolle wären vielleicht ein paar Schmalzbrote ganz okay gewesen ;-)<br/>
<br/>
Ich fand Eure Ausschilderung sehr gut gemacht.<br/>
In Kombination mit den aktualisierten Tracks konnte da eigentlich nichts mehr schief gehen.<br/>
Obwohl das Zusammenspiel mit Fußgängern/Joggern mehr als in Ordnung war, könnte ich mir vorstellen, dass die eine oder andere Markierung verschwunden ist.<br/>
<br/>
Alles in allem eine tolle Veranstaltung.<br/>
Bin nächstes Jahr wieder dabei.<br/>
<br/>
Guido Faßbender
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 10, 17, 21, 2)
        .event(Event.CTF)
        .name('Schonneb Aus Lev')
        .source(Source.Facebook)
        .text(
            `
Hallo Zusammen,<br/>
vielen Dank an das OrgTeam und die fleissigen Helfer.<br/>
Mir hat die Strecke sehr gut gefallen, Verpflegung super, Rad war zum Schluß auch noch sauber (meine Frau fragte, ob ich überhaupt gefahren bin) - also rundum gelungen.<br/>
<br/>
Ich würde mich auf ein nächstes Mal sehr freuen.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 10, 17, 20, 45)
        .event(Event.CTF)
        .name('Henning Rudolph')
        .source(Source['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
vielen Dank für die Organisation der CTF.<br/>
Die Verpflegung an euren Kontrollstellen und die freundlichen Helfer überall waren top!<br/>
Vor allem der warme Tee und die heiße Brühe waren heute klasse.<br/>
Auch im Zielbereich hat es an nichts gefehlt.<br/>
Einzig die Ausschilderung bis zur ersten Kontrolle war teilweise nicht vorhanden oder sehr schwer zu sehen.<br/>
Danach hat es gepasst.<br/>
Dank GPS-Gerät und Track von Euch ging es aber.<br/>
<br/>
Macht weiter so!<br/>
Für nächstes Jahr wünsche ich Euch etwas Sonnenschein, damit noch mehr Biker kommen.<br/>
<br/>
Sportliche Grüße,<br/>
Henning
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 10, 17, 20, 1)
        .event(Event.CTF)
        .name('Wilfried Goesgens')
        .pictures(['https://content.rtc-koeln.de/pages/guestbook/2015-10-17_20-01.jpg'])
        .source(Source.Facebook)
        .text(
            `
Auch wenn ich das Startfenster leicht gerissen habe und nur die kurze Tour nehmen konnte 😕<br/>
Superrunde und hoffentlich nächstes Jahr wieder ...
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 10, 17, 19, 38)
        .event(Event.CTF)
        .name('Thorsten Klein')
        .pictures(['https://content.rtc-koeln.de/pages/guestbook/2015-10-17_19-38.jpg'])
        .source(Source.Facebook)
        .text(
            `
Tolle Strecke.<br/>
Hat Spaß gemacht.<br/>
Danke für die Orga.<br/>
Es sollte mehr CTF geben.<br/>
<br/>
Die Möglichkeit das Rad direkt vor Ort zu reinigen fand ich auch klasse.<br/>
<br/>
Hier auch noch ein Bild von dem Ausblick auf der Strecke.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 10, 17, 19, 3)
        .event(Event.CTF)
        .name('Sabine Riehl')
        .source(Source.Facebook)
        .text(`Superschöne Strecke, tolle Verpflegung: hat total Spaß gemacht - vielen Dank für diese CTF und allen, die Sie möglich gemacht haben ...`)
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 10, 17, 18, 57)
        .event(Event.CTF)
        .name('Jörg Hengster')
        .source(Source.Facebook)
        .text(
            `
Super Tour heute!<br/>
Schöne Strecke, direkt in den Wald, leckere Verpflegung.<br/>
Gute Idee, hier mal eine CTF anzubieten.<br/>
Danke RTC!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 10, 17, 17, 52)
        .event(Event.CTF)
        .name('Bernd Doelp')
        .source(Source.Facebook)
        .text(
            `
Hallo RTC,<br/>
<br/>
vielen Dank für eure heutige Veranstaltung.<br/>
Ihr habt eine wunderschöne Strecke und perfekte Kontrollstellen auf die Beine gestellt.<br/>
Gerade in Zeiten schwindender Radveranstaltungen, geht Ihr den anderen Weg und organisiert eine Zweite.<br/>
RESPEKT!!<br/>
Ich hoffe, dass Ihr es auch nächstes Jahr schafft dieses Event zu veranstalten.<br/>
Also bitte weiter so.<br/>
<br/>
Und nun den einzigen Kritikpunkt, an der Ausschilderung müsst Ihr echt noch arbeiten.<br/>
Ein Kontrollfahrer am Morgen würde hier Wunder wirken.<br/>
Ich für meinen Teil freue mich jetzt schon auf's nächste Jahr.<br/>
<br/>
Mit sportlichem Gruß<br/>
Bernd Doelp
`
        )
        .title('Feedback vom CTF')
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 10, 17, 16, 45)
        .event(Event.CTF)
        .name('Ben Feld')
        .source(Source.Facebook)
        .text(
            `
Danke für die schöne Veranstaltung!<br/>
Die Strecke war ausgesprochen schön und überall, wo nicht irgendwelche Deppen die Schilder umgedreht oder abgerissen haben, prima ausgezeichnet.<br/>
<br/>
Wiederholung im nächsten Jahr ist ausdrücklich erwünscht.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 10, 17, 16, 7)
        .event(Event.CTF)
        .name('Stephan Schwarz')
        .source(Source['E-Mail'])
        .text(
            `
Hallo,<br/>
<br/>
der CTF heute hat mir sehr gut gefallen.<br/>
Tolle Strecke, sehr gute Verpflegung, sehr nette Personen an den Verpflegungspunkten.<br/>
<br/>
Danke aus Hennef<br/>
Stephan
`
        )
        .title('Wahnbachtal Tour')
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 6, 3, 20, 16)
        .event(Event.RTF)
        .name('Guido Faßbender')
        .organization('Grenzfahrer e.V.')
        .source(Source['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
vielen Dank für die tolle Marathonstrecke, die sehr gute und ausreichende Verpflegung und überhaupt für die ganze Veranstaltung.<br/>
Bin nächstes Jahr sicher wieder dabei.<br/>
Nix ändern :-))<br/>
<br/>
Sportliche Grüße<br/>
<br/>
Guido Faßbender<br/>
Grenzfahrer e.V.
`
        )
        .title('Feedback wegen Marathon')
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 6, 3, 12, 36)
        .event(Event.RTF)
        .name('Frank Koch')
        .source(Source['E-Mail'])
        .text(
            `
Reiskuchen,<br/>
der Reiskuchen von Silvana war wieder mal der Knaller.<br/>
Kann mir evtl einer das Rezept verraten????<br/>
Für eure Mühe und Antwort danke ich im voraus<br/>
mfg Frank
`
        )
        .title('Re: RTF')
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 6, 3, 9, 31)
        .event(Event.RTF)
        .name('Frank Koch')
        .source(Source['E-Mail'])
        .text(
            `
guten Mogen,<br/>
kann mich da meinen Vorrednern nur anschließen eine sehr schöne RTF war das.<br/>
Bin die 118er Runde gefahren die es ja auch schon mit ihren 1600 Hm in sich hatte.<br/>
Da taten die Beine doch schon ein bisschen weh.<br/>
Die Landschaft um Eitorf und Much ist sehr schön.<br/>
Alle Leute im K Bereich waren sehr nett und zuvorkommend.<br/>
An dieser Stelle noch mals besten Dank an Harald für mein gefundenes Handy.<br/>
<br/>
schöne Grüße aus Troisdorf Frank 😊
`
        )
        .title('RTF')
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 6, 2, 10, 45)
        .event(Event.RTF)
        .name('Frank Oesterheld')
        .source(Source.Facebook)
        .text(
            `
Die Versorgungen an allen "K" super und vor allem die Supporter hilfsbereit, nett und gut gelaunt ...<br/>
Das ist nicht selbstverständlich und nicht auf allen Veranstaltungen so.<br/>
Das spricht für ein tolles Klima im Team RTC Köln e. V. 1972 !!<br/>
Bis zum nächsten Jahr 😊
`
        )
        .title('Kommentar zu Schnappschüssen / Impressionen von der K5 auf der Forsbach-Tour 2015')
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 6, 1, 22, 47)
        .event(Event.RTF)
        .name('Gerhard Veeh')
        .source(Source.Facebook)
        .text(
            `
Wir, der RTC-Mehlem 1984 e. V., waren nur zu zweit am Start wg. der Terminkollision mit ByBike.<br/>
Nächstes Mal sind wir wieder mehr und beim Marathon dabei ...<br/>
<br/>
Danke Euch für die tolle Organisation.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 6, 1, 20, 33)
        .event(Event.RTF)
        .name('Fam Rossol')
        .organization('1. RTW-Sankt Augustin-Menden')
        .source(Source['E-Mail'])
        .text(
            `
Nach der ersten Kontrolle haben wir uns aufgeteilt und in Gruppen die 70er, 100er und die 150er Strecke unter die Räder genommen.<br/>
Im Ziel waren wir uns einig - es war wieder eine tolle Veranstaltung bei euch - DANKE an ALLE Helfer, Freunde und Sponsoren des RTC !!!!<br/>
<br/>
Die Radsportfreunde vom 1. RTW-Sankt Augustin-Menden
`
        )
        .title('Danke ...')
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 6, 1, 15, 57)
        .event(Event.RTF)
        .name('Christof Mourikis')
        .source(Source['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
ich/wir wollte/n nur sagen, dass ...<br/>
<br/>
SENSATIONELL!!!!!<br/>
<br/>
Die Strecke    150 von 100 möglichen  Punkte<br/>
Höhenmeter   reichlich!<br/>
<br/>
Ausschilderung  150 von 100 möglichen  Punkte<br/>
<br/>
Verpflegung 150 von 100 möglichen  Punkte<br/>
<br/>
Was will der Radsportler mehr??<br/>
<br/>
Ketten-Checks, für den der es braucht!<br/>
<br/>
Beste Marathon-Veranstaltung, die ich bisher gefahren bin (und das sind nicht wenige!)
`
        )
        .title('Feedback wegen 43. Marathon am 31.05.2015')
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 6, 1, 14, 14)
        .event(Event.RTF)
        .name('Yvonne Basinski')
        .source(Source.Facebook)
        .text(
            `
Total schöne Tour.<br/>
Top Verpflegung und Beschilderung.<br/>
Vielen Dank an das Orga Team!<br/>
Wir sind nächstes Jahr wieder dabei.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2015, 6, 1, 9, 5)
        .event(Event.RTF)
        .name('Marc Grewe')
        .source(Source['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
danke mal wieder für die tolle Tour!<br/>
Man glaubt ja manchmal gar nicht, wie schön wir es im Bergischen haben.<br/>
Ich komme gerne wieder!!<br/>
Vielleicht gelingt es euch ja sogar den Termin von der BN-Eupen-BN Tour zu trennen, die will ich nämlich auch mal angehen.<br/>
Verpflegung fand' ich angemessen gut, auch wenn das Gulasch später an den Anstiegen noch mal Hallo sagen wollte ;-)<br/>
<br/>
Was mich allerdings schon wundert ist eure Angabe der Hm für die Marathonstrecke:<br/>
also mein Garmin hat knappe 2300 hm aufgezeichnet, mit topografischen Korrekturen könnte man vielleicht noch knappe 2400 hm rausschlagen.<br/>
Aber 2700 hm sind einfach nicht drin.<br/>
Nicht, dass ich mehr bräuchte, aber es ist schon unterwegs irritierend, weil man zum Gulasch (55% der Strecke) gerade mal 1100 hm (40% von 2700 hm) hat
und denkt, was denn da wohl noch alles von einem liegen soll?<br/>
<br/>
Leider habe ich auch alle Abzweigungen zum "Kettencheck" verpasst (was mir zum Ende hin wohl auch ganz recht war ;-)).<br/>
Ob ihr das wohl bitte im kommenden Jahr deutlicher ausschildern könntet?<br/>
<br/>
Wie stellt ihr die Streckenlänge eigentlich so genau fest?<br/>
Ich hatte jetzt zum zweiten Mal die 200km gerade erst auf dem Schulhof geknackt…<br/>
Aber gut, wir reden hier von einem Prozent Abweichung.<br/>
Ich fand euer 200km-Schild jedenfalls sehr schön J (auch wenn mir da noch gute 2km auf dem Tacho fehlten)
und auch euer "1km bis zum Ziel" Schild steht was früh auf der Strecke,
aber es steigt ja keiner 400m vor dem Ziel ab und beruft sich auf das Schild ;-).<br/>
<br/>
Nochmals danke und bis zum nächsten Mal!<br/>
<br/>
Marc
`
        )
        .build(),
    new GuestbookEntryBuilder().date(2015, 5, 31, 20, 30).event(Event.RTF).name('Petra Ak').source(Source.Facebook).text("Vielen Dank für's Organisieren, war super !").build(),
    new GuestbookEntryBuilder()
        .date(2015, 5, 31, 20, 19)
        .event(Event.RTF)
        .name('Thomas Mühl')
        .source(Source.Facebook)
        .text(
            `
Für den Regen am Schluss könnt ihr ja nichts, ansonsten Top Veranstaltung, da können sich andere Veranstalter mal 'ne Scheibe von abschneiden.
`
        )
        .build(),
    new GuestbookEntryBuilder().date(2015, 5, 31, 20, 11).event(Event.RTF).name('Michael Kalisch').source(Source.Facebook).title('top top top 😊').build(),
    new GuestbookEntryBuilder().date(2015, 5, 31, 20, 10).event(Event.RTF).name('Horst Voll').source(Source.Facebook).text('War geil und sehr anstrengend ! 👍').build(),
    new GuestbookEntryBuilder()
        .date(2015, 5, 31, 19, 29)
        .event(Event.RTF)
        .name('Horst Paesch')
        .pictures(['https://content.rtc-koeln.de/pages/guestbook/2015-05-31_19-29.jpg'])
        .source(Source.Facebook)
        .text(
            `
Danke für ein perfekt organisierten Marathon, die Strecke war super ausgesucht, viele ruhige Straßen, tolle Ausblicke!<br/>
Die Damen und Herren an den Kontrollpunkte/Verpflegungspunkten waren alle sehr nett und hilfsbereit, die Verpflegung ist der Knaller.<br/>
<br/>
Da nimmt man beim Marathon noch zu 😊
`
        )
        .build(),
]
