import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/guestbook/ESource'
import GuestbookEntryBuilder from '~/models/builder/guestbook/EntryBuilder'

export default [
    new GuestbookEntryBuilder()
        .date(2014, 6, 19, 18, 43)
        .name('Helga Hasberg')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC,
\\
\\
ich/wir wollte/n nur sagen, dass ...ich heute nach langer Zeit mal bei euch im Internet zu Gast war.
\\
Erinnerungen wurden wach.\\Ich wünsche euch weiterhin für die Zukunft viel Erfolg und bei allen Touren gutes Gelingen.
\\
\\
Viele liebe Grüße
\\
\\
Helga
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 28, 12, 36)
        .name('Jessica Bosen')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC,
\\
\\
ich/wir wollte/n nur sagen, dass ...
\\
\\
\\
Was für ein Andrang schon um 6 Uhr?!
\\
Ich gehörte nicht zu den Marathonfahrern, wollte eine der kleineren Strecken abfahren und stand plötzlich schon in einer anderen Warteschlange.
\\
Es kamen immer mehr und mehr Radfahrer, die genau so wie ich bei dem schönen Wetter früh starten wollten.
\\
Alle Kassenbetreuer gaben ihr Bestes, um die Anmeldungen so schnell wie möglich aufzunehmen.
\\
Bei so einem Ansturm musste schon in den frühen Morgenstunden improvisiert werden.
\\
\\
So ein großes Kuchenbuffet mit hausgemachten Kuchen kannte ich bis dahin noch nicht.
\\
Die Kontrollen waren mit einer anderen sehr auffallenden Auswahl versehen: Brot, Marmelade, Weckchen, Hörnchen und Kekse.
\\
Endlich mal nicht die üblichen Waffeln, Bananen, oder sogar nur Waffeln, oder nur Bananen.
\\
\\
\\
\\
Bei der Streckenführung haben sich die Verantwortlichen sehr viel Mühe gegeben.
\\
Die zweitlängste Strecke war für mich mit 1653 hm ziemlich anstrengend,
aber der tolle Ausblick, die gut positionierten Kontrollstellen, das schöne Wetter und die abgelegenen Wege waren das Ganze mehr als Wert.
\\
\\
Der Ansturm an Teilnehmern riss auch am späten Nachmittag nicht ab.
\\
Der Grill war durch seine große Auswahl an selbstgemachten Salaten und Grillwürstchen ununterbrochen stark besucht.
\\
\\
Nach Sonntag kann ich nun selbst mitreden und für mich war es ein tolles Erlebnis, endlich diese bekannte RTF kennengelernt zu haben.
\\
Das frühe Aufstehen an einem Sonntag hatte sich definitiv gelohnt.
\\
\\
Insgesamt hieß es für den Veranstalter bei so vielen Besuchern den Überblick zu bewahren, was ihm und den fleißigen Helfern auch gut gelungen war.
\\
Ein großes Kompliment an das Team, das trotz des großen Ansturms, sehr gut in dieser Situation reagiert hat.
\\
\\
Bis zum nächsten Jahr
\\
Jessica
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 27, 13, 10)
        .name('velotoerist')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC,
\\
\\
das war ein sehr schöner Radmarathon am Sonntag.
\\
\\
Eine tolle Strecke, weitgehend verkehrsarm und überwiegend recht gute Oberflächen (in der gewählten Richtung keine Selbstverständlichkeit),
nettes Personal, sehr gute Ausschilderung und eine prima Verpflegung.
\\
Allein der Nudeltopf in Bebbingen war sensationell gut,
auch wenn ich eigentlich kein Fan der warmen Verpflegung unterwegs bin, die liegt so schwer im Magen an den Folgenhügeln...
\\
(daher lieber nicht sooo lecker kochen oder - noch besser - im Ziel servieren)
\\
\\
Auch davor und danach waren die Tische (bei uns) reich gedeckt.
\\
Vielleicht sollte mancher "Schlemmermeier" einfach etwas früher losfahren, dann gibt's auch noch mehr.
\\
Da sind wir auch schon bei meinem einzigen Kritikpunkt:
\\
Wenn eine Startzeit angegeben wird, würde ich es gut finden,
wenn diese auch konsequent eingehalten würde und nicht bereits eine Viertelstunde (oder mehr) eher losgefahren wird.
\\
Sollte doch kein Problem sein.
\\
\\
Ansonsten: Weiter so! :-)
\\
\\
Beste Grüße
\\
velotoerist
`
        )
        .title('RM')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 27, 12, 59)
        .name('Helmut Hane')
        .organization('www.sportlich-radeln.de')
        .source(ESource['E-Mail'])
        .text(
            `
Prima RTF am vergangenen Sonntag.
\\
Bericht über meine Fahrt auf der 150er Strecke jetzt auf meiner Website www.sportlich-radeln.de
\\
\\
Helmut Hane
`
        )
        .title('Prima RTF')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 27, 9, 28)
        .name('Marco Gerlach')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC,
\\
\\
ich war am Sonntag auf der Marathon-Strecke unterwegs.
\\
Die Strecke war wirklich sehr sehenswert und gut ausgeschildert (auch wenn ich mich einmal verfahren habe, was aber an eigener Blindheit gelegen hat).
\\
\\
Orga und Verpflegung waren Tiptop, da kann man nicht meckern!
\\
\\
Danke, hat wirklich Spaß gemacht!
\\
\\
Gruß
\\
Marco Gerlach
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 27, 9, 26)
        .name('Jörg Homann')
        .organization('www.scan.bike`')
        .source(ESource['E-Mail'])
        .text(
            `
Ein langer Tag, nicht nur für die Fahrer auf den langen Strecken der Forsbach-Tour 2014, nein, auch für die Helfer des veranstaltenden Vereins RTC Köln 1972 e.V.
- aber auch ein schöner Tag!
\\
\\
Bereits um 5:10 Uhr, mit kurzer Verspätung, öffneten sich die Türen der Sporthalle in der Heerstraße in Zündorf und blitzartig verteilten sich die helfenden Hände,
um mit den letzten Vorkehrungen ihre Stationen für den Andrang der Sportler vorzubereiten - und die kamen dann (wie üblich) sogar schon lange vor Öffnung der Anmeldung
und warteten mehr oder weniger geduldig auf Kaffee und Startkarten.
\\
\\
Neben den fünf herkömmlichen Anmeldetischen war auch scan&bike mit am Start, um die Athleten schnell auf die Strecke zu schicken - und das ging auch wieder richtig zügig,
nach dem Scannen des auf http://scan.bike vorab gedruckten oder aufs Smartphone gespeicherten QR Codes und dem Bezahlen des Startgelds trägt der Laptop den Fahrer
(ob Marathon oder kürzer, ob mit oder ohne Wertungskarte und sogar Trimmfahrer)
\\
per Mausklick im Bruchteil einer Sekunde in die Teilnehmerliste ein und sofort kommt der nächste an die Reihe
- zeitraubende Handarbeit übernimmt der Computer und der einmal erzeugte
QR Code gilt die ganze Saison - mit dem Laserdrucker ausgedruckt kann man ihn bis auf eine Kantenlänge von 2,5 cm verkleinern und auf die Wertungskarte kleben
oder laminieren und dadurch für die vielen RTF-/CTF-Teilnahmen konservieren - denn eines kann der Code nicht vertragen und das ist wenn er verwischt und undeutlich wird.
\\
Auch für den Veranstalter wird es leichter, wenn nach und nach immer mehr Sportler mit QR Code zur Einschreibung kommen kann eh schon knappes Personal reduziert werden
und auch die langen Schlangen bei der Anmeldung entfallen durch die um ein Vielfaches kürzere Zeit des Einzelnen am Schalter.
\\
Scannen, Kassieren, Klicken - Scannen, Kassieren, Klicken - Scannen, Kassieren, Klicken,â€¦ so geht scan&bike!
\\
\\
Die jährliche Forsbach-Tour ist immer ein weiteres Highlight im RTF Kalender, bei besonders gutem Wetter wird die viele professionelle Arbeit des Vereins
und seiner Mitglieder auch mit hohen Teilnehmerzahlen belohnt - mit scan&bike sind wir auf dem richtigen Weg die morgendliche Wartezeit zu minimieren
und mit zum guten Gelingen einer Veranstaltung beizutragen.
\\
\\
Jörg Homann
\\
http://scan.bike
`
        )
        .title('erfolgreicher Einsatz von scan&bike')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 27, 6, 49)
        .name('Norbert Priefert')
        .source(ESource['E-Mail'])
        .text(
            `
Jetzt muss man hier aber mal einen Punkt machen und in die Bresche springen.
\\
Kritik ist durchaus erlaubt, aber man muss, wenn man das macht, auch alle Umstände mit einbeziehen.
\\
Hier wird aber in dem Beitrag alles, aber auch alles schlecht geredet.
\\
Der RTC-Köln organisiert eine solche Veranstaltung nicht zum ersten Mal.
\\
Am Sonntag war für den ausrichtenden Verein eine Rekordbeteiligung zu verzeichnen,
mit der man -bei all der Erfahrung- nicht gerechnet hat und in dem Ausmaß auch nicht rechnen konnte.
\\
Fast 1.300 Teilnehmer und man ist wahrscheinlich von einem Spitzenwert von 900 - 1.000 ausgegangen.
\\
Und an einem Sonntag können ausgegangene Nahrungsmittel nicht mal so eben nachgeordert werden.
\\
\\
Sich jetzt an allem aufzuhängen und die Umstände die dazu geführt haben nicht zu berücksichtigen, ist gegenüber dem Veranstalter nicht fair.
\\
Und mal ehrlich Herr General-Kritiker, wofür seid ihr denn überhaupt zur RTF gekommen?
\\
Doch nicht etwa wegen eurer Radsportbegeisterung.
\\
Nein, ich hätte euch gleich nach dem Start ein schickes Cafe empfehlen können oder alternativ ein gutes Restaurant.
\\
Echten Radsportlern geht es doch vielmehr um den Radsport und das damit verbundene Erleben schöner Strecken.
\\
Und wenn dann mal wirklich an einer Kontrolle was fehlt, was nicht der Regelfall sein sollte aber nachvollziehbar passieren kann,
ja dann fährt man zur nächsten Tanke und zieht sich da was rein.
\\
Wie macht man das denn auf den Trainingsrunden, die länger ausfallen als geplant?
\\
Ich nehme an, ihr seid schon große, selbständige Jungs; ansonsten empfehle ich euch einen Verein für betreutes Rennradfahren zu gründen.
\\
Auch wenn am Ende alles ausging, aus nachvollziehbarem Grund, die Veranstaltung war und bleibt toll!
\\
\\
mit sportlich fairen Grüßen
\\
Norbert
`
        )
        .title('Feedback auf die Generalkritk  ....wir sind enttäuscht von eurer Veranstaltung und kommen nicht nochmal wieder .')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 26, 20, 16)
        .location('Recklinghausen')
        .name('Jörg Freitag')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo lieber RTC,
\\
\\
ich möchte mich bedanken für eine so tolle Tour.
\\
Es war eine sehr sehenswerte Strecke, ausrechend Verpflegung und sehr nette Stationshelfer.
\\
Mir hat sehr gut gefallen und ich werde auf jeden Fall wiederkommen.
\\
Gruß aus Recklinghausen
\\
Jörg
`
        )
        .title('Marathon')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 26, 16, 57)
        .name('Markus Reckter')
        .organization('www.rtf-koblenz.de')
        .source(ESource['E-Mail'])
        .text(
            `
Sehr geehrtes Team,
\\
die Streckenwahl des Marathon war sehr schön, über verkehrsarme Straßen und durch landschaftliche Highlights perfekt gewählt.
\\
Auch das Profil war sportlich anspruchsvoll und ließ keine Wünsche offen.
\\
Leider war bei den letzten 2 Kontrollstellen keine Verpflegung mehr vorhanden.
\\
Bis zur Warmverpflegung war diese sehr gut, danach wahrscheinlich durch die Fahrer auf den kürzeren schon verbraucht.
\\
Vielleicht sollte, wie bei den Radmarathon Deutschland Veranstaltungen, die Verpflegung für die Marathonfahrer seperat sein.
\\
\\
liebe Grüße aus Koblenz
\\
M.Reckter
\\
RTF Koblenz
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 26, 13, 8)
        .name('Claudia Braun')
        .organization('Union Biesfeld Triathlon')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC,
\\
\\
das war eine RTF wie aus dem Bilderbuch.
\\
Strecke (150), Verpflegung, Helfer, Wetter, alles passte.
\\
Vielen lieben Dank für die hervorragende Organisation.
\\
Im nächsten Jahr gerne wieder!
\\
Dank an die Jungs vom RC Schmitter fürs Ziehen :-)
\\
\\
Sportliche Grüsse
\\
Claudia Braun
\\
Union Biesfeld Triathlon
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 26, 12, 50)
        .name('Angela Schmilewski')
        .organization('Fachwart RTC Mehlem')
        .source(ESource['E-Mail'])
        .text(
            `
Liebe Orga des RTC Köln,
\\
\\
ich startete recht früh, da ich mich für die 156 km entschieden hatte.
\\
\\
Landschaftlich einfach nur herrlich und sehr verkehrsberuhigte Strecken bei wunderbarem Wetter – besser ging es nicht !
\\
\\
Ich fand reichhaltige Verpflegungsstellen vor – von der 1. bis zur 4. - sowie freundliche Orga und Helfer – sowohl auf der Strecke als auch im Start- und Zielbereich.
\\
\\
Ein herzliches Dankeschön an Orga und Helfer und Euch allen eine gute Regeneration – die habt Ihr Euch jetzt verdient….
`
        )
        .title('Wunderbare Veranstaltung')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 26, 12, 43)
        .name('Dirk Brieden')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC,
\\
\\
ich/wir wollte/n nur sagen, dass ...
\\
\\
\\
\\
Warum wurde meine Meinung von eben zu eurer Tour von gestern nicht abgedruckt?
\\
\\
Habt ihr Angst vor Kritik?
\\
\\
Dirk
\\
\\
PS: Hätte schon gedruckt werden müssen, da in der Zwischenzeit schon 2 neue Meinungen „reingestellt“ wurden.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 26, 10, 55)
        .name('Dirk Brieden')
        .source(ESource['E-Mail'])
        .text(
            `
Wir sind gestern euren Marathon gefahren.
\\
\\
Die Strecke war wirklich schön,
\\
\\
**ABER:**
\\
eure Verpflegung war m. E. gesagt, das Allerletzte!
\\
Es gab keine Bananen (nur an 2 Kontrollen), keine Müsli-Riegel, keine Waffeln, keine Joghurts und die Getränke waren nicht isotonisch,
da hätte man auch das Wasser aus der Sieg nehmen können.
\\
Eure letzte Kontrolle war ein Totalausfall, da gab es gar nur Wurstscheiben, die den ganzen Tag schon von der Sonne "gebleicht" wurden.
\\
Dabei braucht man nach 170km schon nochmal einen "Energieschub" durch Bananen, Müsli-Riegel, Waffeln oder ähnlichem.
\\
Von Ernährung für Radsportler habt ihr wirklich keine Ahnung.
\\
\\
\\
Getränke und Nahrung war das, was ihr insgesamt angeboten habt, eine Frechheit, da solltet ihr euch ein Beispiel an anderen Anbietern nehmen.
\\
Da tröstet auch das mittelmäßige Gulasch-Nudel-Angebot an einer Kontrolle nicht darüber hinweg, wobei Gulasch eh schwer im Magen liegt und ungeeignet ist.
\\
Euer gesamtes Verpflegungs-Angebot an den Kontrollen war nach dem Strickmuster "schön billig" zusammen gestellt und dafür 12 Euro zu verlangen, war eine Frechheit.
\\
\\
\\
Euer Ambiente am Start-/Zielplatz solltet ihr auch mal überdenken, bei jeder anderen RTF sind auch Anbieter für "Rad-Klamotten".
\\
\\
Es war schlichtweg keine Atmosphäre, nur "Baller-Baller-Musik".
\\
\\
\\
Eure Mitarbeiter bei der An-/Abmeldung schienen mit allem etwas überfordert.
\\
Es dauerte eine Ewigkeit, um nach der Tour unsere Serien-Karten zurück zubekommen, dabei saßen sie doch alle nur dumm rum und hatten nichts zu tun.
\\
Nachdem wir alle von eurem Team angesprochen hatten und alle Mitarbeiter suchten, wurden die Karten dann gefunden.
\\
\\
\\
<u>**Fazit:**</u>
\\
Wir sind enttäuscht von eurer Veranstaltung und kommen nicht nochmal wieder ☹
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 26, 10, 49)
        .name('Michaela Packebusch')
        .organization('VfB Polch Abtl. Radsport')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC,
\\
\\
ich/wir wollte/n nur sagen, dass ... vielen Dank für die tolle Organisation und Verpflegung auf dem Marathon
(besonders erwähnenswert fand ich den klasse Reiskuchen von Silvana J.
\\
Nochmals vielen Dank an den Fahrer des Besenwagens, in dem ich leider sitzen musste als mein Material defekt war.
\\
LG Michaela
\\
vom VfB Polch Abtl. Radsport.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 26, 10, 33)
        .name('Frank Stöcker')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC,
\\
\\
eigentlich eine schöne Tour gesten , gut ausgesucht und bestens ausgeschildert .
\\
\\
ABER: keine Parkpätze mehr in der Nähe , keine Startnummern mehr ( 9.45 Uhr ! )  und bei der ersten Kontolle kaum noch was zu essen .
\\
Nur noch Brotscheiben und trockene Keksreste.
\\
Kein Obst, Riegel  NICHTS MEHR.
\\
\\
Auch die Kollegen an der ersten Kontrolle waren genervt und nicht mit der besten Laune da.......
\\
\\
Zitat aus Euerm Flyer " Sehr gute Verpflegung an allen Kontollstellen und am Ziel"
\\
\\
Bei der 2. Kontrolle wieder kein Obst oder Riegel - die Kekse waren besser und ein bischen Gebäck mit Sirup .
\\
Getränke nur Tee.
\\
\\
Im Ziel - Ihr könnt es Euch denken auch ziemlich tote Hose.
\\
\\
Das ist für 12,- Euro für 2 Personen ein bisschen dürftig und hätte zumindest im Ziel in Form von Würstchen, Kuchen oder Teilerstattung ausgeglichen werden können.
\\
\\
Frank
`
        )
        .title('Feedback wegen Forsbach Tour 24.05.14')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 26, 8, 54)
        .name('Reiche')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC,
\\
\\
ich/wir wollte/n nur sagen, dass ...
\\
\\
\\
vielen Dank für die Orga und die Auswahl der schönen Strecke.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 26, 8, 15)
        .name('Max Christian Obst')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC,
\\
Die RTF gestern war mal wieder klasse was die Strecke und das Wetter anging.
\\
Für den schlechten Straßenbelag teilweise könnt ihr ja nix.
\\
Aber eine RTF wo es keine Bananen an den Verpflegungsstellen gibt, das geht gaaaaar nicht :D:D
\\
nächstes Jahr will ich wieder meine Banane bekommen ;)
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 26, 7, 24)
        .location('Berrenrath')
        .name('Stefan Schneider')
        .organization('RV Morgenstern')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo Sportskollegen vom RTC Köln.
\\
Ich möchte euch ein großes Lob zu eurer gestrigen Veranstaltung aussprechen.
\\
Es passte einfach alles, Wetter, Verpflegung, Strecke.
\\
So macht es Spaß Marathon zu fahren.
\\
\\
\\
Mit Sportlichem Gruß,
\\
\\
Stefan Schneider
\\
1.Vorsitzender RV Morgenstern Berrenrath
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 26, 7, 6)
        .name('Norbert Priefert')
        .organization('www.rtc-rodenkirchen.de')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC Köln´ner,
\\
\\
das war wirklich super Klasse!!
\\
Tolle Organisation, freundliches und hilfsbereites Team, eine sehr schöne und interessante Streckenführung und -Gott sei Dank- das Wetter phantastisch.
\\
Über 1200 Teilnehmer haben\`s euch gedankt.
\\
Klasse!
\\
Nach der Wasserschlacht von vergangenem Jahr habt ihr euch das auch wirklich verdient!
\\
Eigentlich kann man das gar nicht toppen…eigentlich..
\\
Die Messlatte habt ihr wirklich hoch aufgehängt, aber, wir vom RTC-Rodenkirchen nehmen dies als Herausforderung an.
\\
Wir werden unser Bestes geben um zumindest annähernd euer Niveau zu erreichen.
\\
Versprochen!
\\
Also dann, bis Samstag, 14.06.2014 am Bildungswerk in Köln-Sürth, mit ebenfalls tollen Strecken, motiviertem Team und hoffentlich grandiosem Wetter.
\\
\\
Bis denne,
\\
Norbert
`
        )
        .title('Feedback wegen RTF 2014 -..eigenlich kann man das gar nicht toppen...')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2014, 5, 25, 19, 44)
        .name('Jürgen Ruttkowski')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC,
\\
\\
ich/wir wollte/n nur sagen, dass ...
\\
\\
die Forsbachtour am 25.05.2014, bei bestem Wetter, ein voller Erfolg war und die Strecke (115 km) hervorragend ausgesucht ist.
\\
\\
\\
\\
Viele Grüße und den besten Dank an alle die zum Gelingen beigetragen haben
\\
\\
Jürgen Ruttkowski
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 1, 17, 11, 9)
        .name('Roland Schultz')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC,
\\
\\
ich/wir wollte/n nur sagen, dass ...
\\
\\
am 29.5.14 wird ein interessanter Radwanderweg  eröffnet.
\\
Auf der ehemaligen Bahntrasse, genannt "Balkanexpress" Startpunkt Bahnhof Leverkusen-Opladen
über Burscheid, Wermelskirchen, Remscheid, Hückeswagen, Wipperfürth bis nach Marienheide.
\\
Empfohlene Weiterfahrt über Lindlar nach Köln.
\\
Alternative zurück bis Wipperfürth nach Köln.
\\
Wunderbar ausgebaut.
\\
Kleine Einschränkungen in Wermelskirchen.
\\
Hier sollte man genau auf die Ausschilderung achten.
\\
Ein Teilstück ist bereits eröffnet. Einstieg auf der Landstraße Opladen, Richtung Burscheid.
\\
Einstieg bei Haus Sonnenschein.
\\
Bin die Strecke mit großer Freude einigemale gefahren.
\\
Weitere Infos im Internet.
\\
Unser RTC-Trikot habe ich voriges Jahr auf 2000 m Höhe auf einen ehemaligen Vulkangebiet in Hawaii ausgefahren.
\\
\\
mit einem "All Heil"
\\
Roland Schultz
`
        )
        .title('Feedback wegen ... Roland Schultz')
        .build(),
]
