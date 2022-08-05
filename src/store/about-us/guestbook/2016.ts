import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/about-us/guestbook/ESource'
import GuestbookEntryBuilder from '~/models/builder/about-us/guestbook/EntryBuilder'

export default [
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2016, 10, 31)
        .name('Rolf Müller')
        .organization('Cito Hennef-Geistingen')
        .source(ESource['E-Mail'])
        .text(
            `Hallo RTC,

es war meine erste CTF und ich bin begeistert.
Nachdem wir früh auf die „Beschilderung“ mit den Bändern aufmerksam gemacht wurden, hatten wir keine Probleme mit der 35er Strecke,
obwohl wir nur mit normalen Trekkingrädern unterwegs waren!
Man konnte immer wieder merken, dass hier Leute am Werk waren, die etwas vom Fach verstehen!

Ich freue mich schon auf das nächste Jahr!

Rolf Müller, Cito Hennef-Geistingen
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .answer(`310 Teilnehmer waren's`)
        .category(EEvent.CTF)
        .date(2016, 10, 30, 20, 30)
        .location('Hürth Berrenrath')
        .name('Stefan Schneider')
        .organization('RV Morgenstern')
        .source(ESource.Facebook)
        .text(
            `Die CTF war gestern erste Sahne, nur bei den Flatterbändern hättet ihr das eine oder andere mehr aufhängen können.
Ich war ganz froh meinen Garmin dabei gehabt zu haben.
Wie viele Teilnehmer hattet ihr eigentlich?
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .answer(`Der Tacho wurde gefunden, der Finder hat sich bei uns gemeldet - danke nochmal dafür - und Jörg hat ihn heute (31.10.) auch schon zurück bekommen ...`)
        .category(EEvent.CTF)
        .date(2016, 10, 29, 19, 21)
        .name('Jörg Moritz')
        .source(ESource['E-Mail'])
        .text(
            `Hallo RTC,

ich wollte nur sagen, dass euch die CTF sehr gut gelungen ist.
Vor allem die zweite Beschilderung nach einer Abzweigung gibt einem Sicherheit, dass man richtig ist.

Mir ist im Startbereich leider ein Mißgeschick passiert.
Auf den ersten ca. 200m habe ich meinen Radcomputer verloren.
Falls also jemand einen Sigma ROX 6.0 CAD gefunden hat, wäre es schön, wenn der Kontakt hergestellt werden könnte.

Grüße
Jörg Moritz
`
        )
        .title('Feedback wegen CTF')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2016, 10, 29, 20, 30)
        .name('Jürgen Rohr')
        .source(ESource.Facebook)
        .text(
            `Schöne Runde bei gutem Wetter und sehr guter Verpflegung.
Hat Spaß gemacht.
Vielen Dank an das Orga-Team!!!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2016, 10, 29, 20, 30)
        .location('RSC Erftstadt')
        .name('Horst Paesch')
        .source(ESource.Facebook)
        .text(
            `Wenn ich mal was konstruktives sagen darf, es war eine super spannende CTF, sehr abwechslungsreich,
die spärliche Beschilderung im Wald mit rotweißem Absperrband möchte ich garnicht kritisieren,
ich fand es sehr spannend und man kam dadurch mit den Kollegen ins Gespräch.
Also, wie gewohnt vom RTC, eine tolle Veranstaltung.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2016, 10, 29, 20, 30)
        .location('RTV Lohmar')
        .name('Se Sandra')
        .source(ESource.Facebook)
        .text(
            `Ich fands geil!
Sollte mehr davon bei uns hier geben 😊
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2016, 10, 29, 20, 30)
        .name('Bernd Doelp')
        .source(ESource.Facebook)
        .text(`Vielen Dank für die schöne Tour und bis nächstes Jahr`)
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2016, 10, 29, 20, 30)
        .name('Jörg Marso')
        .source(ESource.Facebook)
        .text(
            `Es hat super viel Spaß gemacht und die Verpflegung war Spitze.
Denke ich war der einzige mit einem Pedelec, habe sonst keins gesehen.
Wir sehen uns dann 2017.
`
        )
        .build(),
    new GuestbookEntryBuilder().category(EEvent.CTF).date(2016, 10, 29, 20, 30).name('Marcus Wilden').source(ESource.Facebook).text('Schöne Tour bei bestem Wetter').build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 31, 1, 34)
        .name('Gunter Maier')
        .source(ESource.Facebook)
        .text(
            `Mir kommt es auch so vor als ob ich zugenommen habe, trotz der drei Varianten die wir gefahren sind (welche sich mMn auch sehr gelohnt haben).
Ihr ward alle total lieb und ich verzeihe euch, uns keinen Espresso zum Croissant gereicht zu haben 😀

Alles super und eine toll ausgearbeitete Strecke (bezogen auf den Marathon, die anderen bin ich ja nicht gefahren).

Ihr wollt Kritik, meine wäre diese:
Ganz am Anfang Kreuzung Hermann-Löss-Straße / Frankfurter Straße habt ihr zusätzlich zu den beiden Verkehrszeichen "Stopp" einen eigenen Warnhinweis angebracht,
damit durchdringt ihr ein einheitliches System und müsstet eigentlich jedes weitere Verkehrszeichen welches auf eine Gefahr hinweist bzw. ein Gebot vorgibt doppeln.
Macht man aber nicht weil solche Sicherheitssysteme einfach und verständlich gehalten werden sollen.
So könnte es dazu führen dass am nächsten Stoppschild wo kein zusätzliches Schild hängt,
man von keiner Relevanz für einen selbst ausgeht und man einfach drüber fährt ("vor allem wenn er schon im Tunnel fährt").
Ich glaube ein klarer Hinweis auf die StVO und deren Einhaltung reicht aus, da sie ein erprobtes System darstellt.

Anders sieht es jetzt aus, wenn z.B. eine Abfahrt kommt und darin Schlaglöcher oder sonstige Gefahren für Radfahrer verborgen sind
und auch kein Verkehrszeichen darauf hinweist, dann ist ein Hinweis "Gefährliche Kurven", "Starkes Gefälle" oder "Straßenschäden" schon sinnvoll,
man sollte aber bei dem Jargon der StVO bleiben.

Natürlich habe ich auch nichts gegen aufmunternde motivierende Sprüche einzuwenden, welche ich farblich aber anders gestalten würde.

Klar ist das eine kleine Kritik, die eher einen Denkanstoss geben soll und wobei bestimmt nicht jeder hier meiner Meinung ist.

Ich wollte es trotzdem loswerden, da wir uns gestern schon auf der Strecke darüber unterhalten haben.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 30)
        .name('Lutz Schröder')
        .source(ESource.Facebook)
        .text(
            `Und im nächsten Jahr gibt's bei der Warmverpflegung für die Vegetarier wenigstens ein Ketchup als Alternative zum Gulasch ??

Ansonsten vielen Dank für die tolle Organisation und die schöne Strecke.
`
        )
        .title('Wo bleiben die Vegetarier?')
        .build(),
    new GuestbookEntryBuilder().category(EEvent.RTF).date(2016, 5, 30).name('Andreas Klemt').source(ESource.Facebook).text('Sehr gut: Der Reiskuchen!').build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 30, 14, 46)
        .name('Martin Holtzmann')
        .source(ESource['E-Mail'])
        .text(
            `Hallo RTC,

ich/wir wollte/n nur sagen, dass ...

ich bin die 158km Runde gefahren!  Sehr schöne, verkehrsarme Straßen (vor allem von Rosbach zur Vierbuchenmühle) nettes Verpflegungsteam!
Schade, daß das vorhersagte Wetter eine niedrigeTeilnehmerzahl beschert hat, sogar auf Internet ist kein Verlaß!!
LG Martin
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 30, 13, 4)
        .location('Ruhrstadt Bochum')
        .name('Martin Poettgen')
        .source(ESource['E-Mail'])
        .text(
            `Hallo RTC,

ich/wir wollte/n nur sagen, dass ...

Ihr habt eine tolle Marathon Strecke mit schönen Varianten erarbeitet.
An 2 – 3 Stellen hätte ein zusätzliches Schild ganz gut getan,
denn bei flotter Fahrt fehlte manchmal eine eindeutige Orientierung
und Verfahrer und Umdreher kosten Zeit und Kraft (war wohl nicht der einzige).
Die Wettervorhersage, die in Eurem Falle dann einmal nicht gestimmt hat (sonst hat sie uns dieses Jahr bei LBL und Röhn das vorausgesagte Mistwetter auch beschert)
hat Euch leider die Teilnehmerzahlen verhagelt.
Jedenfalls bin ich noch nie einen Marathon gefahren, bei dem ich die ersten Mit-Teilnehmer bei Km 180 getroffen habe.
Insofern einen ganz neue Erfahrung.
Nicht verzagen, ein Sportlerherz übersteht dies und nächstes Jahr wird die Wettervorhersage dann sicherlich auch stimmen, wie auch immer sie dann sein wird.

Mit sportlichen Grüßen

Martin Poettgen,

Ruhrstadt Bochum
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29, 23, 0)
        .name('Andreas Tilles')
        .organization('FB-Gruppe RTF und CTF - Radtourenfahrten des BDR (Bund Deutscher Radfahrer e.V.)')
        .source(ESource.Facebook)
        .text(
            `Beste Warm-Verpflegung seit langem.

Ohne Nachschlag gingen Hermann und ich da nicht wieder auf die Strecke.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29, 21, 21)
        .name('Volker Pütz')
        .source(ESource.Facebook)
        .text(
            `Es war alles top top!
Bin den Marathon gefahren und es hat einfach Spaß gemacht.

Danke an alle Helfer und das Orga Team!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29, 20, 50)
        .name('Alexandra Raj')
        .organization('FB-Gruppe RTF und CTF - Radtourenfahrten des BDR (Bund Deutscher Radfahrer e.V.)')
        .source(ESource.Facebook)
        .text('Herrliche Strecke ')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29, 20, 33)
        .name('Roland Liffers')
        .source(ESource.Facebook)
        .text(
            `... schließe mich dem Lob von David Pandya vollumfänglich an, man kann es tendenziell nicht besser machen ...
Nächstes Jahr wird wieder die 1000er Marke geknackt 😀
`
        )
        .title('Tolle Stullen, die 2.')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29, 20, 20)
        .name('Ludger Thier')
        .organization('FB-Gruppe RTF und CTF - Radtourenfahrten des BDR (Bund Deutscher Radfahrer e.V.)')
        .source(ESource.Facebook)
        .text(
            `Wer sich heute trotz der besch... Wettervorhersage der "bergischen Herausforderung des RTC Köln" mit 2700hm auf knappen 200km gestellt hat,
wurde bei herrlichem Wetter mit einer traumhaften Tour durch die wunderschöne Landschaft des Bergischen Landes belohnt.

Die Sportler wurden von sehr freundlichen Helfern an den Kontrollstellen empfangen.
Die Verpflegung war mehr als reichlich und sehr gut, insbesondere die Warmverpflegung, Gulasch mit Nudeln, war ein Genuß.

Ein großes Lob und DANKE an alle Helfer des RTC Köln für diesen tollen Tag.

Bis nächstes Jahr!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29, 19, 46)
        .name('Angela Maja')
        .source(ESource.Facebook)
        .text(
            `Ich bedanke mich bei allen Beteiligten, die diese wunderbare Veranstaltung wieder möglich gemacht haben:
Klasse Ausschilderung, super Verpflegung, schöne, verkehrsberuhigte Streckenführungen, herrliche Landschaften, nette Orga und Helfer - was will man mehr !

Ich freute mich, dass ich heute weder auf der 160 km Strecke noch auf dem anschl. Weg nach Hause von Gewitter oder Regen überrascht wurde - sondern eher von der Sonne.
`
        )
        .title('Fabelhaft ...')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29, 19, 11)
        .name('David Pandya')
        .organization('The Racing Club Rush (Gemeinschaft via Facebook)')
        .source(ESource.Facebook)
        .text(
            `Vielen vielen vielen lieben Dank RTC Köln e. V. 1972.
Das war wirklich spitzenmässig organisiert und das kann auch mal gesagt werden.
Tolle Stullen, selbstgebackene Kuchen, leckeres Kölsch, überall super freundliche, gut gelaunte Menschen und die schönste ausgearbeitete Route der letzten 12 Monate!

Chapeau!
`
        )
        .title('Tolle Stullen ...')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29)
        .location('Hürth Berrenrath')
        .name('Stefan Schneider')
        .organization('RV Morgenstern')
        .source(ESource.Facebook)
        .text(`Wie gut ,dass ich den Apps heute nicht getraut habe und bei euch war 😀`)
        .build(),
    new GuestbookEntryBuilder().category(EEvent.RTF).date(2016, 5, 29).name('Petra Ba').source(ESource.Facebook).text('Ein super Tag, und super Wetter ...').build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29, 17, 38)
        .name('Bernd Doelp')
        .source(ESource.Facebook)
        .text(`Das war eine schöne und anspruchsvolle Veranstaltung, vielen Dank.`)
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29)
        .name('Steffi Brockenhexe')
        .source(ESource.Facebook)
        .text(
            `Es wurde alles gesagt.

Einfach nur Top und alle die nur nach dem Wetterbericht gehen sind selber schuld.
Super Wetter mit reichlich Sonne auf knapp 200km ...
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29, 16, 12)
        .name('Horst Voll')
        .source(ESource.Facebook)
        .text(
            `War echt stark ...

Die 200er war geil und, Nudeln mit Gulasch waren echt lecker ...
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29, 16, 6)
        .name('Horst Paesch')
        .organization('RSC Erftstadt')
        .source(ESource.Facebook)
        .text(
            `Sitzen noch im Ziel und besaufen uns mit Alkoholfreiem Weizen ...

...super Veranstaltung

...super Wetter!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29)
        .name('Mario Schmitt')
        .source(ESource.Facebook)
        .text(
            `Super Organisation.
Die Strecke war klar und deutlich ausgeschildert und die Verpflegung war reichlich.

Top! 👍
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29)
        .name('Volker Schmitz')
        .source(ESource.Facebook)
        .text(
            `Tolles Event, klasse Orga!

Mich hat am meisten beeindruckt wie gut die Strecke ausgeschildert war!

Top! 👍
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29)
        .name('Se Sandra')
        .source(ESource.Facebook)
        .text(
            `War 'ne schöne Strecke und Verpflegung war reichlich da an den Kontrollstellen! 👍 👍

Wettervorhersage?
Was ist das? 😉
`
        )
        .title('Tadel gibt es keinen!')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29, 14, 36)
        .name('Ros Si')
        .source(ESource.Facebook)
        .text(
            `War eine super 158er RTF.
Alles klasse, sogar das Wetter.

Vielen Dank an den RTC.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29, 14, 0)
        .name('Patrock Cyclista')
        .source(ESource.Facebook)
        .text(`Danke für heute. Super Orga, schöne Strecke, gerne wieder.`)
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2016, 5, 29, 13, 52)
        .name('Jochen Güttes')
        .source(ESource.Facebook)
        .text(
            `Das mit das mit dem Wettergott hat hervorragend funktioniert.
Leider verlassen sich mehr Leute auf ihre Wetterapp am Tag zuvor als morgens einmal aus dem Fenster zu schauen.
Ich bin trocken geblieben und es war eine tolle Veranstaltung.
Vielen Dank
`
        )
        .title('Ihr habt mehr Teilnehmer verdient gehabt. Vor allem beim Marathon ...')
        .build(),
]
