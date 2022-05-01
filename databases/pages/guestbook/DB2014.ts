import EventType from '@/models/enums/guestbook/EventType'
import GuestbookEntryBuilder from '@/models/builder/guestbook/EntryBuilder'
import SourceType from '@/models/enums/guestbook/SourceType'

export default [
    new GuestbookEntryBuilder()
        .date(2014, 6, 19, 18, 43)
        .name('Helga Hasberg')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
ich/wir wollte/n nur sagen, dass ...ich heute nach langer Zeit mal bei euch im Internet zu Gast war.<br/>
Erinnerungen wurden wach.<br/>Ich wünsche euch weiterhin für die Zukunft viel Erfolg und bei allen Touren gutes Gelingen.<br/>
<br/>
Viele liebe Grüße<br/>
<br/>
Helga
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 28, 12, 36)
        .event(EventType.RTF)
        .name('Jessica Bosen')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
ich/wir wollte/n nur sagen, dass ...<br/>
<br/>
<br/>
Was für ein Andrang schon um 6 Uhr?!<br/>
Ich gehörte nicht zu den Marathonfahrern, wollte eine der kleineren Strecken abfahren und stand plötzlich schon in einer anderen Warteschlange.<br/>
Es kamen immer mehr und mehr Radfahrer, die genau so wie ich bei dem schönen Wetter früh starten wollten.<br/>
Alle Kassenbetreuer gaben ihr Bestes, um die Anmeldungen so schnell wie möglich aufzunehmen.<br/>
Bei so einem Ansturm musste schon in den frühen Morgenstunden improvisiert werden.<br/>
<br/>
So ein großes Kuchenbuffet mit hausgemachten Kuchen kannte ich bis dahin noch nicht.<br/>
Die Kontrollen waren mit einer anderen sehr auffallenden Auswahl versehen: Brot, Marmelade, Weckchen, Hörnchen und Kekse.<br/>
Endlich mal nicht die üblichen Waffeln, Bananen, oder sogar nur Waffeln, oder nur Bananen.<br/>
<br/>
<br/>
<br/>
Bei der Streckenführung haben sich die Verantwortlichen sehr viel Mühe gegeben.<br/>
Die zweitlängste Strecke war für mich mit 1653 hm ziemlich anstrengend,
aber der tolle Ausblick, die gut positionierten Kontrollstellen, das schöne Wetter und die abgelegenen Wege waren das Ganze mehr als Wert.<br/>
<br/>
Der Ansturm an Teilnehmern riss auch am späten Nachmittag nicht ab.<br/>
Der Grill war durch seine große Auswahl an selbstgemachten Salaten und Grillwürstchen ununterbrochen stark besucht.<br/>
<br/>
Nach Sonntag kann ich nun selbst mitreden und für mich war es ein tolles Erlebnis, endlich diese bekannte RTF kennengelernt zu haben.<br/>
Das frühe Aufstehen an einem Sonntag hatte sich definitiv gelohnt.<br/>
<br/>
Insgesamt hieß es für den Veranstalter bei so vielen Besuchern den Überblick zu bewahren, was ihm und den fleißigen Helfern auch gut gelungen war.<br/>
Ein großes Kompliment an das Team, das trotz des großen Ansturms, sehr gut in dieser Situation reagiert hat.<br/>
<br/>
Bis zum nächsten Jahr<br/>
Jessica
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 27, 13, 10)
        .event(EventType.RTF)
        .name('velotoerist')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
das war ein sehr schöner Radmarathon am Sonntag.<br/>
<br/>
Eine tolle Strecke, weitgehend verkehrsarm und überwiegend recht gute Oberflächen (in der gewählten Richtung keine Selbstverständlichkeit),
nettes Personal, sehr gute Ausschilderung und eine prima Verpflegung.<br/>
Allein der Nudeltopf in Bebbingen war sensationell gut,
auch wenn ich eigentlich kein Fan der warmen Verpflegung unterwegs bin, die liegt so schwer im Magen an den Folgenhügeln...<br/>
(daher lieber nicht sooo lecker kochen oder - noch besser - im Ziel servieren)<br/>
<br/>
Auch davor und danach waren die Tische (bei uns) reich gedeckt.<br/>
Vielleicht sollte mancher "Schlemmermeier" einfach etwas früher losfahren, dann gibt's auch noch mehr.<br/>
Da sind wir auch schon bei meinem einzigen Kritikpunkt:<br/>
Wenn eine Startzeit angegeben wird, würde ich es gut finden,
wenn diese auch konsequent eingehalten würde und nicht bereits eine Viertelstunde (oder mehr) eher losgefahren wird.<br/>
Sollte doch kein Problem sein.<br/>
<br/>
Ansonsten: Weiter so! :-)<br/>
<br/>
Beste Grüße<br/>
velotoerist
`
        )
        .title('RM')
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 27, 12, 59)
        .event(EventType.RTF)
        .name('Helmut Hane')
        .organization('www.sportlich-radeln.de')
        .source(SourceType['E-Mail'])
        .text(
            `
Prima RTF am vergangenen Sonntag.<br/>
Bericht über meine Fahrt auf der 150er Strecke jetzt auf meiner Website www.sportlich-radeln.de<br/>
<br/>
Helmut Hane
`
        )
        .title('Prima RTF')
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 27, 9, 28)
        .event(EventType.RTF)
        .name('Marco Gerlach')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
ich war am Sonntag auf der Marathon-Strecke unterwegs.<br/>
Die Strecke war wirklich sehr sehenswert und gut ausgeschildert (auch wenn ich mich einmal verfahren habe, was aber an eigener Blindheit gelegen hat).<br/>
<br/>
Orga und Verpflegung waren Tiptop, da kann man nicht meckern!<br/>
<br/>
Danke, hat wirklich Spaß gemacht!<br/>
<br/>
Gruß<br/>
Marco Gerlach
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 27, 9, 26)
        .event(EventType.RTF)
        .name('Jörg Homann')
        .organization('www.scan.bike`')
        .source(SourceType['E-Mail'])
        .text(
            `
Ein langer Tag, nicht nur für die Fahrer auf den langen Strecken der Forsbach-Tour 2014, nein, auch für die Helfer des veranstaltenden Vereins RTC Köln 1972 e.V.
- aber auch ein schöner Tag!<br/>
<br/>
Bereits um 5:10 Uhr, mit kurzer Verspätung, öffneten sich die Türen der Sporthalle in der Heerstraße in Zündorf und blitzartig verteilten sich die helfenden Hände,
um mit den letzten Vorkehrungen ihre Stationen für den Andrang der Sportler vorzubereiten - und die kamen dann (wie üblich) sogar schon lange vor Öffnung der Anmeldung
und warteten mehr oder weniger geduldig auf Kaffee und Startkarten.<br/>
<br/>
Neben den fünf herkömmlichen Anmeldetischen war auch scan&bike mit am Start, um die Athleten schnell auf die Strecke zu schicken - und das ging auch wieder richtig zügig,
nach dem Scannen des auf http://scan.bike vorab gedruckten oder aufs Smartphone gespeicherten QR Codes und dem Bezahlen des Startgelds trägt der Laptop den Fahrer
(ob Marathon oder kürzer, ob mit oder ohne Wertungskarte und sogar Trimmfahrer)<br/>
per Mausklick im Bruchteil einer Sekunde in die Teilnehmerliste ein und sofort kommt der nächste an die Reihe
- zeitraubende Handarbeit übernimmt der Computer und der einmal erzeugte
QR Code gilt die ganze Saison - mit dem Laserdrucker ausgedruckt kann man ihn bis auf eine Kantenlänge von 2,5 cm verkleinern und auf die Wertungskarte kleben
oder laminieren und dadurch für die vielen RTF-/CTF-Teilnahmen konservieren - denn eines kann der Code nicht vertragen und das ist wenn er verwischt und undeutlich wird.<br/>
Auch für den Veranstalter wird es leichter, wenn nach und nach immer mehr Sportler mit QR Code zur Einschreibung kommen kann eh schon knappes Personal reduziert werden
und auch die langen Schlangen bei der Anmeldung entfallen durch die um ein Vielfaches kürzere Zeit des Einzelnen am Schalter.<br/>
Scannen, Kassieren, Klicken - Scannen, Kassieren, Klicken - Scannen, Kassieren, Klicken,â€¦ so geht scan&bike!<br/>
<br/>
Die jährliche Forsbach-Tour ist immer ein weiteres Highlight im RTF Kalender, bei besonders gutem Wetter wird die viele professionelle Arbeit des Vereins
und seiner Mitglieder auch mit hohen Teilnehmerzahlen belohnt - mit scan&bike sind wir auf dem richtigen Weg die morgendliche Wartezeit zu minimieren
und mit zum guten Gelingen einer Veranstaltung beizutragen.<br/>
<br/>
Jörg Homann<br/>
http://scan.bike
`
        )
        .title('erfolgreicher Einsatz von scan&bike')
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 27, 6, 49)
        .event(EventType.RTF)
        .name('Norbert Priefert')
        .source(SourceType['E-Mail'])
        .text(
            `
Jetzt muss man hier aber mal einen Punkt machen und in die Bresche springen.<br/>
Kritik ist durchaus erlaubt, aber man muss, wenn man das macht, auch alle Umstände mit einbeziehen.<br/>
Hier wird aber in dem Beitrag alles, aber auch alles schlecht geredet.<br/>
Der RTC-Köln organisiert eine solche Veranstaltung nicht zum ersten Mal.<br/>
Am Sonntag war für den ausrichtenden Verein eine Rekordbeteiligung zu verzeichnen,
mit der man -bei all der Erfahrung- nicht gerechnet hat und in dem Ausmaß auch nicht rechnen konnte.<br/>
Fast 1.300 Teilnehmer und man ist wahrscheinlich von einem Spitzenwert von 900 - 1.000 ausgegangen.<br/>
Und an einem Sonntag können ausgegangene Nahrungsmittel nicht mal so eben nachgeordert werden.<br/>
<br/>
Sich jetzt an allem aufzuhängen und die Umstände die dazu geführt haben nicht zu berücksichtigen, ist gegenüber dem Veranstalter nicht fair.<br/>
Und mal ehrlich Herr General-Kritiker, wofür seid ihr denn überhaupt zur RTF gekommen?<br/>
Doch nicht etwa wegen eurer Radsportbegeisterung.<br/>
Nein, ich hätte euch gleich nach dem Start ein schickes Cafe empfehlen können oder alternativ ein gutes Restaurant.<br/>
Echten Radsportlern geht es doch vielmehr um den Radsport und das damit verbundene Erleben schöner Strecken.<br/>
Und wenn dann mal wirklich an einer Kontrolle was fehlt, was nicht der Regelfall sein sollte aber nachvollziehbar passieren kann,
ja dann fährt man zur nächsten Tanke und zieht sich da was rein.<br/>
Wie macht man das denn auf den Trainingsrunden, die länger ausfallen als geplant?<br/>
Ich nehme an, ihr seid schon große, selbständige Jungs; ansonsten empfehle ich euch einen Verein für betreutes Rennradfahren zu gründen.<br/>
Auch wenn am Ende alles ausging, aus nachvollziehbarem Grund, die Veranstaltung war und bleibt toll!<br/>
<br/>
mit sportlich fairen Grüßen<br/>
Norbert
`
        )
        .title('Feedback auf die Generalkritk  ....wir sind enttäuscht von eurer Veranstaltung und kommen nicht nochmal wieder .')
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 26, 20, 16)
        .event(EventType.RTF)
        .location('Recklinghausen')
        .name('Jörg Freitag')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo lieber RTC,<br/>
<br/>
ich möchte mich bedanken für eine so tolle Tour.<br/>
Es war eine sehr sehenswerte Strecke, ausrechend Verpflegung und sehr nette Stationshelfer.<br/>
Mir hat sehr gut gefallen und ich werde auf jeden Fall wiederkommen.<br/>
Gruß aus Recklinghausen<br/>
Jörg
`
        )
        .title('Marathon')
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 26, 16, 57)
        .event(EventType.RTF)
        .name('Markus Reckter')
        .organization('www.rtf-koblenz.de')
        .source(SourceType['E-Mail'])
        .text(
            `
Sehr geehrtes Team,<br/>
die Streckenwahl des Marathon war sehr schön, über verkehrsarme Straßen und durch landschaftliche Highlights perfekt gewählt.<br/>
Auch das Profil war sportlich anspruchsvoll und ließ keine Wünsche offen.<br/>
Leider war bei den letzten 2 Kontrollstellen keine Verpflegung mehr vorhanden.<br/>
Bis zur Warmverpflegung war diese sehr gut, danach wahrscheinlich durch die Fahrer auf den kürzeren schon verbraucht.<br/>
Vielleicht sollte, wie bei den Radmarathon Deutschland Veranstaltungen, die Verpflegung für die Marathonfahrer seperat sein.<br/>
<br/>
liebe Grüße aus Koblenz<br/>
M.Reckter<br/>
RTF Koblenz
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 26, 13, 8)
        .event(EventType.RTF)
        .name('Claudia Braun')
        .organization('Union Biesfeld Triathlon')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
das war eine RTF wie aus dem Bilderbuch.<br/>
Strecke (150), Verpflegung, Helfer, Wetter, alles passte.<br/>
Vielen lieben Dank für die hervorragende Organisation.<br/>
Im nächsten Jahr gerne wieder!<br/>
Dank an die Jungs vom RC Schmitter fürs Ziehen :-)<br/>
<br/>
Sportliche Grüsse<br/>
Claudia Braun<br/>
Union Biesfeld Triathlon
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 26, 12, 50)
        .event(EventType.RTF)
        .name('Angela Schmilewski')
        .organization('Fachwart RTC Mehlem')
        .source(SourceType['E-Mail'])
        .text(
            `
Liebe Orga des RTC Köln,<br/>
<br/>
ich startete recht früh, da ich mich für die 156 km entschieden hatte.<br/>
<br/>
Landschaftlich einfach nur herrlich und sehr verkehrsberuhigte Strecken bei wunderbarem Wetter – besser ging es nicht !<br/>
<br/>
Ich fand reichhaltige Verpflegungsstellen vor – von der 1. bis zur 4. - sowie freundliche Orga und Helfer – sowohl auf der Strecke als auch im Start- und Zielbereich.<br/>
<br/>
Ein herzliches Dankeschön an Orga und Helfer und Euch allen eine gute Regeneration – die habt Ihr Euch jetzt verdient….
`
        )
        .title('Wunderbare Veranstaltung')
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 26, 12, 43)
        .event(EventType.RTF)
        .name('Dirk Brieden')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
ich/wir wollte/n nur sagen, dass ...<br/>
<br/>
<br/>
<br/>
Warum wurde meine Meinung von eben zu eurer Tour von gestern nicht abgedruckt?<br/>
<br/>
Habt ihr Angst vor Kritik?<br/>
<br/>
Dirk<br/>
<br/>
PS: Hätte schon gedruckt werden müssen, da in der Zwischenzeit schon 2 neue Meinungen „reingestellt“ wurden.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 26, 10, 55)
        .event(EventType.RTF)
        .name('Dirk Brieden')
        .source(SourceType['E-Mail'])
        .text(
            `
Wir sind gestern euren Marathon gefahren.<br/>
<br/>
Die Strecke war wirklich schön,<br/>
<br/>
**ABER:**<br/>
eure Verpflegung war m. E. gesagt, das Allerletzte!<br/>
Es gab keine Bananen (nur an 2 Kontrollen), keine Müsli-Riegel, keine Waffeln, keine Joghurts und die Getränke waren nicht isotonisch,
da hätte man auch das Wasser aus der Sieg nehmen können.<br/>
Eure letzte Kontrolle war ein Totalausfall, da gab es gar nur Wurstscheiben, die den ganzen Tag schon von der Sonne "gebleicht" wurden.<br/>
Dabei braucht man nach 170km schon nochmal einen "Energieschub" durch Bananen, Müsli-Riegel, Waffeln oder ähnlichem.<br/>
Von Ernährung für Radsportler habt ihr wirklich keine Ahnung.<br/>
<br/>
<br/>
Getränke und Nahrung war das, was ihr insgesamt angeboten habt, eine Frechheit, da solltet ihr euch ein Beispiel an anderen Anbietern nehmen.<br/>
Da tröstet auch das mittelmäßige Gulasch-Nudel-Angebot an einer Kontrolle nicht darüber hinweg, wobei Gulasch eh schwer im Magen liegt und ungeeignet ist.<br/>
Euer gesamtes Verpflegungs-Angebot an den Kontrollen war nach dem Strickmuster "schön billig" zusammen gestellt und dafür 12 Euro zu verlangen, war eine Frechheit.<br/>
<br/>
<br/>
Euer Ambiente am Start-/Zielplatz solltet ihr auch mal überdenken, bei jeder anderen RTF sind auch Anbieter für "Rad-Klamotten".<br/>
<br/>
Es war schlichtweg keine Atmosphäre, nur "Baller-Baller-Musik".<br/>
<br/>
<br/>
Eure Mitarbeiter bei der An-/Abmeldung schienen mit allem etwas überfordert.<br/>
Es dauerte eine Ewigkeit, um nach der Tour unsere Serien-Karten zurück zubekommen, dabei saßen sie doch alle nur dumm rum und hatten nichts zu tun.<br/>
Nachdem wir alle von eurem Team angesprochen hatten und alle Mitarbeiter suchten, wurden die Karten dann gefunden.<br/>
<br/>
<br/>
<u>**Fazit:**</u><br/>

Wir sind enttäuscht von eurer Veranstaltung und kommen nicht nochmal wieder ☹
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 26, 10, 49)
        .event(EventType.RTF)
        .name('Michaela Packebusch')
        .organization('VfB Polch Abtl. Radsport')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
ich/wir wollte/n nur sagen, dass ... vielen Dank für die tolle Organisation und Verpflegung auf dem Marathon
(besonders erwähnenswert fand ich den klasse Reiskuchen von Silvana J.<br/>
Nochmals vielen Dank an den Fahrer des Besenwagens, in dem ich leider sitzen musste als mein Material defekt war.<br/>
LG Michaela<br/>
vom VfB Polch Abtl. Radsport.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 26, 10, 33)
        .event(EventType.RTF)
        .name('Frank Stöcker')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
eigentlich eine schöne Tour gesten , gut ausgesucht und bestens ausgeschildert .<br/>
<br/>
ABER: keine Parkpätze mehr in der Nähe , keine Startnummern mehr ( 9.45 Uhr ! )  und bei der ersten Kontolle kaum noch was zu essen .<br/>
Nur noch Brotscheiben und trockene Keksreste.<br/>
Kein Obst, Riegel  NICHTS MEHR.<br/>
<br/>
Auch die Kollegen an der ersten Kontrolle waren genervt und nicht mit der besten Laune da.......<br/>
<br/>
Zitat aus Euerm Flyer " Sehr gute Verpflegung an allen Kontollstellen und am Ziel"<br/>
<br/>
Bei der 2. Kontrolle wieder kein Obst oder Riegel - die Kekse waren besser und ein bischen Gebäck mit Sirup .<br/>
Getränke nur Tee.<br/>
<br/>
Im Ziel - Ihr könnt es Euch denken auch ziemlich tote Hose.<br/>
<br/>
Das ist für 12,- Euro für 2 Personen ein bisschen dürftig und hätte zumindest im Ziel in Form von Würstchen, Kuchen oder Teilerstattung ausgeglichen werden können.<br/>
<br/>
Frank
`
        )
        .title('Feedback wegen Forsbach Tour 24.05.14')
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 26, 8, 54)
        .event(EventType.RTF)
        .name('Reiche')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
ich/wir wollte/n nur sagen, dass ...<br/>
<br/>
<br/>
vielen Dank für die Orga und die Auswahl der schönen Strecke.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 26, 8, 15)
        .event(EventType.RTF)
        .name('Max Christian Obst')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
Die RTF gestern war mal wieder klasse was die Strecke und das Wetter anging.<br/>
Für den schlechten Straßenbelag teilweise könnt ihr ja nix.<br/>
Aber eine RTF wo es keine Bananen an den Verpflegungsstellen gibt, das geht gaaaaar nicht :D:D<br/>
nächstes Jahr will ich wieder meine Banane bekommen ;)
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 26, 7, 24)
        .event(EventType.RTF)
        .location('Berrenrath')
        .name('Stefan Schneider')
        .organization('RV Morgenstern')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo Sportskollegen vom RTC Köln.<br/>
Ich möchte euch ein großes Lob zu eurer gestrigen Veranstaltung aussprechen.<br/>
Es passte einfach alles, Wetter, Verpflegung, Strecke.<br/>
So macht es Spaß Marathon zu fahren.<br/>
<br/>
<br/>
Mit Sportlichem Gruß,<br/>
<br/>
Stefan Schneider<br/>
1.Vorsitzender RV Morgenstern Berrenrath
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 26, 7, 6)
        .event(EventType.RTF)
        .name('Norbert Priefert')
        .organization('www.rtc-rodenkirchen.de')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC Köln´ner,<br/>
<br/>
das war wirklich super Klasse!!<br/>
Tolle Organisation, freundliches und hilfsbereites Team, eine sehr schöne und interessante Streckenführung und -Gott sei Dank- das Wetter phantastisch.<br/>
Über 1200 Teilnehmer haben\`s euch gedankt.<br/>
Klasse!<br/>
Nach der Wasserschlacht von vergangenem Jahr habt ihr euch das auch wirklich verdient!<br/>
Eigentlich kann man das gar nicht toppen…eigentlich..<br/>
Die Messlatte habt ihr wirklich hoch aufgehängt, aber, wir vom RTC-Rodenkirchen nehmen dies als Herausforderung an.<br/>
Wir werden unser Bestes geben um zumindest annähernd euer Niveau zu erreichen.<br/>
Versprochen!<br/>
Also dann, bis Samstag, 14.06.2014 am Bildungswerk in Köln-Sürth, mit ebenfalls tollen Strecken, motiviertem Team und hoffentlich grandiosem Wetter.<br/>
<br/>
Bis denne,<br/>
Norbert
`
        )
        .title('Feedback wegen RTF 2014 -..eigenlich kann man das gar nicht toppen...')
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 5, 25, 19, 44)
        .event(EventType.RTF)
        .name('Jürgen Ruttkowski')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
ich/wir wollte/n nur sagen, dass ...<br/>
<br/>
die Forsbachtour am 25.05.2014, bei bestem Wetter, ein voller Erfolg war und die Strecke (115 km) hervorragend ausgesucht ist.<br/>
<br/>
<br/>
<br/>
Viele Grüße und den besten Dank an alle die zum Gelingen beigetragen haben<br/>
<br/>
Jürgen Ruttkowski
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2014, 1, 17, 11, 9)
        .name('Roland Schultz')
        .source(SourceType['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
ich/wir wollte/n nur sagen, dass ...<br/>
<br/>
am 29.5.14 wird ein interessanter Radwanderweg  eröffnet.<br/>
Auf der ehemaligen Bahntrasse, genannt "Balkanexpress" Startpunkt Bahnhof Leverkusen-Opladen
über Burscheid, Wermelskirchen, Remscheid, Hückeswagen, Wipperfürth bis nach Marienheide.<br/>
Empfohlene Weiterfahrt über Lindlar nach Köln.<br/>
Alternative zurück bis Wipperfürth nach Köln.<br/>
Wunderbar ausgebaut.<br/>
Kleine Einschränkungen in Wermelskirchen.<br/>
Hier sollte man genau auf die Ausschilderung achten.<br/>
Ein Teilstück ist bereits eröffnet. Einstieg auf der Landstraße Opladen, Richtung Burscheid.<br/>
Einstieg bei Haus Sonnenschein.<br/>
Bin die Strecke mit großer Freude einigemale gefahren.<br/>
Weitere Infos im Internet.<br/>
Unser RTC-Trikot habe ich voriges Jahr auf 2000 m Höhe auf einen ehemaligen Vulkangebiet in Hawaii ausgefahren.<br/>
<br/>
mit einem "All Heil"<br/>
Roland Schultz
`
        )
        .title('Feedback wegen ... Roland Schultz')
        .build(),
]
