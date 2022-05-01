import EventType from '@/models/enums/guestbook/EventType'
import GuestbookEntryBuilder from '@/models/builder/guestbook/EntryBuilder'
import SourceType from '@/models/enums/guestbook/SourceType'

export default [
    new GuestbookEntryBuilder()
        .date(2016, 10, 31)
        .event(EventType.CTF)
        .name('Rolf Müller')
        .organization('Cito Hennef-Geistingen')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
es war meine erste CTF und ich bin begeistert.<br/>
Nachdem wir früh auf die „Beschilderung“ mit den Bändern aufmerksam gemacht wurden, hatten wir keine Probleme mit der 35er Strecke,
obwohl wir nur mit normalen Trekkingrädern unterwegs waren!<br/>
Man konnte immer wieder merken, dass hier Leute am Werk waren, die etwas vom Fach verstehen!<br/>
<br/>
Ich freue mich schon auf das nächste Jahr!<br/>
<br/>
Rolf Müller, Cito Hennef-Geistingen
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .answer(`310 Teilnehmer waren's`)
        .date(2016, 10, 30, 20, 30)
        .event(EventType.CTF)
        .location('Hürth Berrenrath')
        .name('Stefan Schneider')
        .organization('RV Morgenstern')
        .source(SourceType.Facebook)
        .text(
            `
Die CTF war gestern erste Sahne, nur bei den Flatterbändern hättet ihr das eine oder andere mehr aufhängen können.<br/>
Ich war ganz froh meinen Garmin dabei gehabt zu haben.<br/>
Wie viele Teilnehmer hattet ihr eigentlich?
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .answer(`Der Tacho wurde gefunden, der Finder hat sich bei uns gemeldet - danke nochmal dafür - und Jörg hat ihn heute (31.10.) auch schon zurück bekommen ...`)
        .date(2016, 10, 29, 19, 21)
        .event(EventType.CTF)
        .name('Jörg Moritz')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
ich wollte nur sagen, dass euch die CTF sehr gut gelungen ist.<br/>
Vor allem die zweite Beschilderung nach einer Abzweigung gibt einem Sicherheit, dass man richtig ist.<br/>
<br/>
Mir ist im Startbereich leider ein Mißgeschick passiert.<br/>
Auf den ersten ca. 200m habe ich meinen Radcomputer verloren.<br/>
Falls also jemand einen Sigma ROX 6.0 CAD gefunden hat, wäre es schön, wenn der Kontakt hergestellt werden könnte.<br/>
<br/>
Grüße<br/>
Jörg Moritz
`
        )
        .title('Feedback wegen CTF')
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 10, 29, 20, 30)
        .event(EventType.CTF)
        .name('Jürgen Rohr')
        .source(SourceType.Facebook)
        .text(
            `
Schöne Runde bei gutem Wetter und sehr guter Verpflegung.<br/>
Hat Spaß gemacht.<br/>
Vielen Dank an das Orga-Team!!!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 10, 29, 20, 30)
        .event(EventType.CTF)
        .location('RSC Erftstadt')
        .name('Horst Paesch')
        .source(SourceType.Facebook)
        .text(
            `
Wenn ich mal was konstruktives sagen darf, es war eine super spannende CTF, sehr abwechslungsreich,
die spärliche Beschilderung im Wald mit rotweißem Absperrband möchte ich garnicht kritisieren,
ich fand es sehr spannend und man kam dadurch mit den Kollegen ins Gespräch.<br/>
Also, wie gewohnt vom RTC, eine tolle Veranstaltung.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 10, 29, 20, 30)
        .event(EventType.CTF)
        .location('RTV Lohmar')
        .name('Se Sandra')
        .source(SourceType.Facebook)
        .text(
            `
Ich fands geil!<br/>
Sollte mehr davon bei uns hier geben 😊
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 10, 29, 20, 30)
        .event(EventType.CTF)
        .name('Bernd Doelp')
        .source(SourceType.Facebook)
        .text(`Vielen Dank für die schöne Tour und bis nächstes Jahr`)
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 10, 29, 20, 30)
        .event(EventType.CTF)
        .name('Jörg Marso')
        .source(SourceType.Facebook)
        .text(
            `
Es hat super viel Spaß gemacht und die Verpflegung war Spitze.<br/>
Denke ich war der einzige mit einem Pedelec, habe sonst keins gesehen.<br/>
Wir sehen uns dann 2017.
`
        )
        .build(),
    new GuestbookEntryBuilder().date(2016, 10, 29, 20, 30).event(EventType.CTF).name('Marcus Wilden').source(SourceType.Facebook).text('Schöne Tour bei bestem Wetter').build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 31, 1, 34)
        .event(EventType.RTF)
        .name('Gunter Maier')
        .source(SourceType.Facebook)
        .text(
            `
Mir kommt es auch so vor als ob ich zugenommen habe, trotz der drei Varianten die wir gefahren sind (welche sich mMn auch sehr gelohnt haben).<br/>
Ihr ward alle total lieb und ich verzeihe euch, uns keinen Espresso zum Croissant gereicht zu haben 😀<br/>
<br/>
Alles super und eine toll ausgearbeitete Strecke (bezogen auf den Marathon, die anderen bin ich ja nicht gefahren).<br/>
<br/>
Ihr wollt Kritik, meine wäre diese:<br/>
Ganz am Anfang Kreuzung Hermann-Löss-Straße / Frankfurter Straße habt ihr zusätzlich zu den beiden Verkehrszeichen "Stopp" einen eigenen Warnhinweis angebracht,
damit durchdringt ihr ein einheitliches System und müsstet eigentlich jedes weitere Verkehrszeichen welches auf eine Gefahr hinweist bzw. ein Gebot vorgibt doppeln.<br/>
Macht man aber nicht weil solche Sicherheitssysteme einfach und verständlich gehalten werden sollen.<br/>
So könnte es dazu führen dass am nächsten Stoppschild wo kein zusätzliches Schild hängt,
man von keiner Relevanz für einen selbst ausgeht und man einfach drüber fährt ("vor allem wenn er schon im Tunnel fährt").<br/>
Ich glaube ein klarer Hinweis auf die StVO und deren Einhaltung reicht aus, da sie ein erprobtes System darstellt.<br/>
<br/>
Anders sieht es jetzt aus, wenn z.B. eine Abfahrt kommt und darin Schlaglöcher oder sonstige Gefahren für Radfahrer verborgen sind
und auch kein Verkehrszeichen darauf hinweist, dann ist ein Hinweis "Gefährliche Kurven", "Starkes Gefälle" oder "Straßenschäden" schon sinnvoll,
man sollte aber bei dem Jargon der StVO bleiben.<br/>
<br/>
Natürlich habe ich auch nichts gegen aufmunternde motivierende Sprüche einzuwenden, welche ich farblich aber anders gestalten würde.<br/>
<br/>
Klar ist das eine kleine Kritik, die eher einen Denkanstoss geben soll und wobei bestimmt nicht jeder hier meiner Meinung ist.<br/>
<br/>
Ich wollte es trotzdem loswerden, da wir uns gestern schon auf der Strecke darüber unterhalten haben.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 30)
        .event(EventType.RTF)
        .name('Lutz Schröder')
        .source(SourceType.Facebook)
        .text(
            `
Und im nächsten Jahr gibt's bei der Warmverpflegung für die Vegetarier wenigstens ein Ketchup als Alternative zum Gulasch ??<br/>
<br/>
Ansonsten vielen Dank für die tolle Organisation und die schöne Strecke.
`
        )
        .title('Wo bleiben die Vegetarier?')
        .build(),
    new GuestbookEntryBuilder().date(2016, 5, 30).event(EventType.RTF).name('Andreas Klemt').source(SourceType.Facebook).text('Sehr gut: Der Reiskuchen!').build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 30, 14, 46)
        .event(EventType.RTF)
        .name('Martin Holtzmann')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
ich/wir wollte/n nur sagen, dass ...<br/>
<br/>
ich bin die 158km Runde gefahren!  Sehr schöne, verkehrsarme Straßen (vor allem von Rosbach zur Vierbuchenmühle) nettes Verpflegungsteam!<br/>
Schade, daß das vorhersagte Wetter eine niedrigeTeilnehmerzahl beschert hat, sogar auf Internet ist kein Verlaß!!<br/>
LG Martin
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 30, 13, 4)
        .event(EventType.RTF)
        .location('Ruhrstadt Bochum')
        .name('Martin Poettgen')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
ich/wir wollte/n nur sagen, dass ...<br/>
<br/>
Ihr habt eine tolle Marathon Strecke mit schönen Varianten erarbeitet.<br/>
An 2 – 3 Stellen hätte ein zusätzliches Schild ganz gut getan,
denn bei flotter Fahrt fehlte manchmal eine eindeutige Orientierung
und Verfahrer und Umdreher kosten Zeit und Kraft (war wohl nicht der einzige).<br/>
Die Wettervorhersage, die in Eurem Falle dann einmal nicht gestimmt hat (sonst hat sie uns dieses Jahr bei LBL und Röhn das vorausgesagte Mistwetter auch beschert)
hat Euch leider die Teilnehmerzahlen verhagelt.<br/>
Jedenfalls bin ich noch nie einen Marathon gefahren, bei dem ich die ersten Mit-Teilnehmer bei Km 180 getroffen habe.<br/>
Insofern einen ganz neue Erfahrung.<br/>
Nicht verzagen, ein Sportlerherz übersteht dies und nächstes Jahr wird die Wettervorhersage dann sicherlich auch stimmen, wie auch immer sie dann sein wird.<br/>
<br/>
Mit sportlichen Grüßen<br/>
<br/>
Martin Poettgen,<br/>
<br/>
Ruhrstadt Bochum
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29, 23, 0)
        .event(EventType.RTF)
        .name('Andreas Tilles')
        .organization('FB-Gruppe RTF und CTF - Radtourenfahrten des BDR (Bund Deutscher Radfahrer e.V.)')
        .source(SourceType.Facebook)
        .text(
            `
Beste Warm-Verpflegung seit langem.<br/>
<br/>
Ohne Nachschlag gingen Hermann und ich da nicht wieder auf die Strecke.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29, 21, 21)
        .event(EventType.RTF)
        .name('Volker Pütz')
        .source(SourceType.Facebook)
        .text(
            `
Es war alles top top!<br/>
Bin den Marathon gefahren und es hat einfach Spaß gemacht.<br/>
<br/>
Danke an alle Helfer und das Orga Team!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29, 20, 50)
        .event(EventType.RTF)
        .name('Alexandra Raj')
        .organization('FB-Gruppe RTF und CTF - Radtourenfahrten des BDR (Bund Deutscher Radfahrer e.V.)')
        .source(SourceType.Facebook)
        .text('Herrliche Strecke ')
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29, 20, 33)
        .event(EventType.RTF)
        .name('Roland Liffers')
        .source(SourceType.Facebook)
        .text(
            `
... schließe mich dem Lob von David Pandya vollumfänglich an, man kann es tendenziell nicht besser machen ...<br/>
Nächstes Jahr wird wieder die 1000er Marke geknackt 😀
`
        )
        .title('Tolle Stullen, die 2.')
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29, 20, 20)
        .event(EventType.RTF)
        .name('Ludger Thier')
        .organization('FB-Gruppe RTF und CTF - Radtourenfahrten des BDR (Bund Deutscher Radfahrer e.V.)')
        .source(SourceType.Facebook)
        .text(
            `
Wer sich heute trotz der besch... Wettervorhersage der "bergischen Herausforderung des RTC Köln" mit 2700hm auf knappen 200km gestellt hat,
wurde bei herrlichem Wetter mit einer traumhaften Tour durch die wunderschöne Landschaft des Bergischen Landes belohnt.<br/>
<br/>
Die Sportler wurden von sehr freundlichen Helfern an den Kontrollstellen empfangen.<br/>
Die Verpflegung war mehr als reichlich und sehr gut, insbesondere die Warmverpflegung, Gulasch mit Nudeln, war ein Genuß.<br/>
<br/>
Ein großes Lob und DANKE an alle Helfer des RTC Köln für diesen tollen Tag.<br/>
<br/>
Bis nächstes Jahr!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29, 19, 46)
        .event(EventType.RTF)
        .name('Angela Maja')
        .source(SourceType.Facebook)
        .text(
            `
Ich bedanke mich bei allen Beteiligten, die diese wunderbare Veranstaltung wieder möglich gemacht haben:<br/>
Klasse Ausschilderung, super Verpflegung, schöne, verkehrsberuhigte Streckenführungen, herrliche Landschaften, nette Orga und Helfer - was will man mehr !<br/>
<br/>
Ich freute mich, dass ich heute weder auf der 160 km Strecke noch auf dem anschl. Weg nach Hause von Gewitter oder Regen überrascht wurde - sondern eher von der Sonne.
`
        )
        .title('Fabelhaft ...')
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29, 19, 11)
        .event(EventType.RTF)
        .name('David Pandya')
        .organization('The Racing Club Rush (Gemeinschaft via Facebook)')
        .source(SourceType.Facebook)
        .text(
            `
Vielen vielen vielen lieben Dank RTC Köln e. V. 1972.<br/>
Das war wirklich spitzenmässig organisiert und das kann auch mal gesagt werden.<br/>
Tolle Stullen, selbstgebackene Kuchen, leckeres Kölsch, überall super freundliche, gut gelaunte Menschen und die schönste ausgearbeitete Route der letzten 12 Monate!<br/>
<br/>
Chapeau!
`
        )
        .title('Tolle Stullen ...')
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29)
        .event(EventType.RTF)
        .location('Hürth Berrenrath')
        .name('Stefan Schneider')
        .organization('RV Morgenstern')
        .source(SourceType.Facebook)
        .text(`Wie gut ,dass ich den Apps heute nicht getraut habe und bei euch war 😀`)
        .build(),
    new GuestbookEntryBuilder().date(2016, 5, 29).event(EventType.RTF).name('Petra Ba').source(SourceType.Facebook).text('Ein super Tag, und super Wetter ...').build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29, 17, 38)
        .event(EventType.RTF)
        .name('Bernd Doelp')
        .source(SourceType.Facebook)
        .text(`Das war eine schöne und anspruchsvolle Veranstaltung, vielen Dank.`)
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29)
        .event(EventType.RTF)
        .name('Steffi Brockenhexe')
        .source(SourceType.Facebook)
        .text(
            `
Es wurde alles gesagt.<br/>
<br/>
Einfach nur Top und alle die nur nach dem Wetterbericht gehen sind selber schuld.<br/>
Super Wetter mit reichlich Sonne auf knapp 200km ...
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29, 16, 12)
        .event(EventType.RTF)
        .name('Horst Voll')
        .source(SourceType.Facebook)
        .text(
            `
War echt stark ...<br/>
<br/>
Die 200er war geil und, Nudeln mit Gulasch waren echt lecker ...
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29, 16, 6)
        .event(EventType.RTF)
        .name('Horst Paesch')
        .organization('RSC Erftstadt')
        .source(SourceType.Facebook)
        .text(
            `
Sitzen noch im Ziel und besaufen uns mit Alkoholfreiem Weizen ...<br/>
<br/>
...super Veranstaltung<br/>
<br/>
...super Wetter!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29)
        .event(EventType.RTF)
        .name('Mario Schmitt')
        .source(SourceType.Facebook)
        .text(
            `
Super Organisation.<br/>
Die Strecke war klar und deutlich ausgeschildert und die Verpflegung war reichlich.<br/>
<br/>
Top! 👍
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29)
        .event(EventType.RTF)
        .name('Volker Schmitz')
        .source(SourceType.Facebook)
        .text(
            `

Tolles Event, klasse Orga!<br/>
<br/>
Mich hat am meisten beeindruckt wie gut die Strecke ausgeschildert war!<br/>
<br/>
Top! 👍
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29)
        .event(EventType.RTF)
        .name('Se Sandra')
        .source(SourceType.Facebook)
        .text(
            `
War 'ne schöne Strecke und Verpflegung war reichlich da an den Kontrollstellen! 👍 👍<br/>
<br/>
Wettervorhersage?<br/>
Was ist das? 😉
`
        )
        .title('Tadel gibt es keinen!')
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29, 14, 36)
        .event(EventType.RTF)
        .name('Ros Si')
        .source(SourceType.Facebook)
        .text(
            `
War eine super 158er RTF.<br/>
Alles klasse, sogar das Wetter.<br/>
<br/>
Vielen Dank an den RTC.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29, 14, 0)
        .event(EventType.RTF)
        .name('Patrock Cyclista')
        .source(SourceType.Facebook)
        .text(`Danke für heute. Super Orga, schöne Strecke, gerne wieder.`)
        .build(),
    new GuestbookEntryBuilder()
        .date(2016, 5, 29, 13, 52)
        .event(EventType.RTF)
        .name('Jochen Güttes')
        .source(SourceType.Facebook)
        .text(
            `
Das mit das mit dem Wettergott hat hervorragend funktioniert.<br/>
Leider verlassen sich mehr Leute auf ihre Wetterapp am Tag zuvor als morgens einmal aus dem Fenster zu schauen.<br/>
Ich bin trocken geblieben und es war eine tolle Veranstaltung.<br/>
Vielen Dank
`
        )
        .title('Ihr habt mehr Teilnehmer verdient gehabt. Vor allem beim Marathon ...')
        .build(),
]
