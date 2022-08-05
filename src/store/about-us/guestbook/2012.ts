import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/about-us/guestbook/ESource'
import GuestbookEntryBuilder from '~/models/builder/about-us/guestbook/EntryBuilder'

export default [
    new GuestbookEntryBuilder()
        .date(2012, 6)
        .name('Wolfgang Alberg')
        .organization('www.cardiofitness.de')
        .source(ESource['E-Mail'])
        .text(
            `Hallo Sportfreunde,

leider finde ich auf euer Homepage kein Gästebuch, möchte mich, auch im Namen weiterer 8 Mitfahrer unserer Gruppe bei euch für die Tour ab Zündorf bedanken.

Neben der tollen Strecke und des netten Teams, habt ihr es auch geschafft die Sonne, entgegen aller Vorhersagen zu buchen.

Wir freuen uns schon auf die Tour im kommenden Jahr.

Mit sportlichen Grüßen

Wolfgang Alberg
www.cardiofitness.de
`
        )
        .title('Ein großes Dankeschöööööön')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2012, 6)
        .name('Ursula Koepp')
        .organization('TSV Weiss-Köln')
        .source(ESource['E-Mail'])
        .text(
            `Liebe Radsportfreunde,

ganz herzlichen Dank für die schöne RTF am Sonntag!

Was Ihr da auf die Beine gestellt habt war super!

Eine landschaftlich tolle Strecke, Verpflegung vom Feinsten auf der 125er Strecke,
immer gut gelaunte Helfer u. selbst die angekündigten Gewitter hatten ein Einsehen mit Eurer Veranstaltung!
Auch wenn auf den ersten Kilometern nachgeschildert werden musste (Spiel"kinder" gibt's immer), habt Ihr versucht uns eine perfekte RTF zu bieten!
Und Dank dem Track, den ich mir sicherheitshalber von Euer Homepage runter geladen hatte, ging auch orientierungsmäßig alles glatt.

Herzliche Grüße aus Rondorf,
Ursula Koepp
`
        )
        .title('... ganz herzlichen Dank für die schöne RTF am Sonntag!')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2012, 6)
        .name('Günter')
        .source(ESource['E-Mail'])
        .text(
            `Hallo Diana,

hatte Norbert am Sonntag noch getroffen und ihm gesagt, dass es mir sehr gut gefallen hatte.
Obwohl ich ja etwas unmotiviert war und es vor der ersten Kontrolle noch ein kleines Scharmützel mit "Kollegen" gab,
wurde es ein wirklich schöner Tag, der nicht so schnell zu topen ist!!!

Also nochmals: 10 Punkte und die Krone für eure schöne RTF!!!

Ihr habt das sehr liebevoll gestaltet.
Die Kontrollen konnten sich absolut sehen lassen.
Alle sehr freundlich und kein Zeitstreß.
Liebe Leute kennengelernt.
Das Wetter hatte bis zum Schluss gehalten.
Das hebt die Laune ungemein.... :-)
Also euch allen vielen Dank für eure Mühe.
Natürlich auch an Klaus-Anton und Thilo, mit denen es viel Spaß gemacht hat zu fahren....

Viele Grüße

Günter
`
        )
        .title('10 Punkte und die Krone für eure schöne RTF!!!')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2012, 6)
        .name('Dieter Reich')
        .organization('ISB-Team-Cologne')
        .source(ESource['E-Mail'])
        .text(
            `Hallo Radsportler des RTC-Köln,

danke für die gut ausgearbeitete Tour am 20.05.12.
Strecke und Verpflegung wie immer prima.
Aber nicht zu vergessen die freundlichen Kontakte.
Schön, dass es noch Radsportler gibt, die ihre Freizeit für diesen schönen Event opfern !!

Es freut sich auf die nächste Veranstaltung, das benachbarte ISB-Team-Cologne

Sportliche Grüße
Dieter Reich
`
        )
        .title('Danke für die gut ausgearbeitete Tour am 20.05.12')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2012, 6)
        .location('Monheim')
        .name('Elke und Dieter')
        .source(ESource['E-Mail'])
        .text(
            `Hallo liebe RTCler,

herzlichen Dank für eine tolle Forsbachtour 2012.
Der Tip unserer Freundin Marlies, unbedingt teil zu nehmen, hat sich wahrlich als Volltreffer erwiesen.
Eine sensationelle Streckenführung, gepaart mit der ausgesprochen guten Verpflegung
und ergänzt durch das schöne Frühsommerwetter waren die Zutaten für einen sehr schönen RTF-Sonntag.

Nochmal herzlichen Dank an alle RTCler.

Viele Grüße aus Monheim am Rhein
Elke und Dieter
`
        )
        .title('... eine tolle Forsbachtour 2012')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2012, 5)
        .name('Josef Witt')
        .source(ESource['E-Mail'])
        .text(
            `Guten Morgen,

ich bin gestern die 151 Strecke gefahren und wie ich um ca. 15.30 Uhr im Ziel wieder war wollte ich und meine drei anderen Radkollegen ein Grillwürstchen essen,
aber leider waren keine mehr da nur noch für die Jungs und Mädels vom Marathon das war sehr schade.
Da wir den ganzen Morgen nur Waffeln und Riegel gegessen hatten.

Für nächstes Jahr muss ich entweder schneller fahren oder eine kleinere Runde fahren damit ich noch ein Würstchen bekomme
oder ich bringe mir ein Paar mit die dann gegrillt werden können.

An der ein oder anderen Kontrolle habe ich die Bananen vermiest schade.

Aber man kann es ja auch nicht jedem recht machen.

Sonst war es eine sehr gute Veranstaltung!

Mit freundlichen Grüßen
Josef Witt
`
        )
        .title('Verpflegungsengpässe, sonst war es eine sehr gute Veranstaltung!')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2012, 5)
        .location('Kierspe')
        .name('Michaela Bäcker')
        .source(ESource['E-Mail'])
        .text(
            `Der Tag danach ...

So, ich hatte gestern das große Vergnügen an dem Forstbach-Marathon 2012 teilzunehmen.
Den Tag zuvor hatte ich noch wenig lust 200 km und ein paar gequetschte zu fahren.
Die Wetterprognose war auch nicht so dolle, leichtes Gewitter war angesagt.
Außerdem bedeutet so ein Marathon immer sehr früh aufzustehen ( in diesem Falle 04:30 Uhr ) :-)
Und mein Radkollege hat abgesagt - also genug Gründe, sich den Sonntag anders zu verplanen.
Wenn da nicht der innere Schweinehund den Kampf angesagt hätte ...
Und mal ehrlich meine Laune wäre am Sonntag nicht berauschend gewesen denn ...

es war eine super gelungene RTF !!!

Leider gab es anfangs Schwierigkeiten da irgend so ein Depp die Schilder die auf die Strecke führen sollten abmontiert hat ...
das ist ein übler Scherz wenn man denn 200 KM radeln möchte.
Da kommt eine Wegsuche nicht gut.
Ich hatte das Glück einen Garmin dabei zu haben.
Ich hatte mir die Strecke Tags zuvor aufgeladen und konnte so die Streckenführung erkennen.
Das wiederum hatte aber zu Folge, dass ich, anstatt wie geplant ganz locker anfangen, eine "Meute" hinter mir hatte die die Strecke nicht kannte
und auch so ein Gerät nicht besaßen.
Da fühlte man sich dann schon ein wenig "auf der Jagd" wenn die jungen Burschen hinter einem fröhlich Quatschen
und spaß haben und man selber bei 85% der Maximalen HF die Strecke abfährt ;-)
Zum Glück war der Spuk nach 10 km erledigt und die Wegbezeichnung waren wieder sichtbar angebracht.
So konnte ich es dann ganz entspannt angehen lassen ...
Schnell fand ich wieder in meinen Trott - und mit mir auch ein Radkollege dessen Name ich leider vergessen habe ( ? ).
Er ist echt gut drauf.
Der zog auf der Geraden ein Tempo, das war schon echt klasse.
Ich genoss es bei Ihm im Windschatten fahren zu dürfen.
So konnte ich auch die traumhafte Gegend genießen !!!
Bei KM 60/65 passierte mir dann leider eine Panne :-) Mein Vorderreifen hatte einen platten in der Abfahrt ...
da habe ich Glück gehabt, das es mich nicht zerbröselt hat.
Zu diesem Zeitpunkt waren wir mit einem kleinen Pulk unterwegs.
Mein Kollege bekam von meinem Dilemma nichts mit.
Und so stand ich da mit einem Platten - Flickzeug hatte ich, aber leider keine Ahnung wie ich so einen Schlauch auch repariere bzw. austausche.
Und da gilt dann ganz klar der Spruch: "Ich bin so froh, das ich ein Mädchen bin"
Keine 2 Minuten später kam ein Mitfahrer vom RTC Rodenkirchen und hat mir anstandslos geholfen.
Kurz darauf kam auch ein Wagen Vom RTC Köln und fragte ob er auch helfen könnte ...
Das war unglaublich nett !!!!!
Schön, das es solche Menschen gibt !!!!
Bei der nächsten Verpflegung wartete dann mein "Kollege" auch schon auf mich ;-)
Die Verpflegungsstellen waren allesamt klasse !!!
Es gab Kuchen, Rosinenstuten, Kekse, Weingummi, Riegel, und und und ...
Für die Marathon'is gab es sogar noch eine warme Mahlzeit.
Das Wetter war auch absolut in Ordnung.
Es kamen nur ein paar Tropfen runter und die konnte man genießen wurde es doch zum Ende der Tour mächtig warm mit Sonne !!!!
Fazit: Eine absolut lohnenswerte RTF - sehr nette, und hilfsbereite Helfer - super Gegend !!!!
Auf diesem Wege auch noch mal ein herzliches Dankeschön für die nette Begleitung Namens ? - ohne ihn wäre ich nicht so schnell unterwegs gewesen.

Lieben Gruß
Michaela Bäcker
Aus Kierspe
`
        )
        .title('... eine super gelungene RTF !!!')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2012, 5)
        .location('Libur')
        .name('Matthias Zimmer')
        .source(ESource['E-Mail'])
        .text(
            `Sehr geehrte Damen und Herren,

Ich freue mich sehr wenn der Breitensport immer noch großen Zulauf findet.
Überhaupt keine Freude empfinde ich wenn Radsportbegeisterte ihre Freude widerrum schon Morgens um kurz nach 7 in reinen Wohngebieten lautstark zum Ausdruck bringen.
So geschehen heute Morgen in Libur (Freiheit/Stockumer Weg) Seit diesem Zeitpunkt war ich leider wach und konnte den Hochgenüssen der lautstarken Artikulation bestens folgen.
Ein weiterer Kritikpunkt ist: in den an Libur angrenzenden Feldern genießen viele ihre Freizeit, Hundehalter, Jogger, Walker
und andere sind massivst durch unangemessene Geschwindigkeit Ihrer Fahrer gestört.
Auch in Libur selber, sie kennen die Strassen wahrscheinlich, sind Ihre Teilnehmer unangemessen schnell unterwegs.
Ich selber durfte eine Gruppe "vorbeifliegender" Radler genießen.

Ich fasse meine Kritik noch einmal zusammen.
- unangemessene Geschwindigkeit
- zu hohe Lautstärke der Teilnehmer in reinen Wohngebieten zu nachtschlafender Zeit
- bedingte Bereitsschaft zu gegenseitiger Rücksichtnahme
- keine Signalisierung durch von hinten heraneilenden Radgruppen (Ihre Sportgeräte haben keine hohen Laufgeräusche)
- keine Information der Anwohner, damit diese sich darauf einstellen können.

Ich gebe zu ich habe wahrscheinlich nicht die besten Exemplare erwischt, aber diese sind natürlich dann das Markenzeichen Ihrer Veranstaltung.

mit freundlichen Grüssen
Matthias Zimmer
`
        )
        .title('Lärmbelästigung und Raserei')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2012, 5)
        .name('Monika und Helmut Moosmann')
        .organization('RSG Ford')
        .source(ESource['E-Mail'])
        .text(
            `Liebe RTCler,

CHAPEAU!!!
Wir sind zwar nur die 75-er (eigentlich waren es 84 km) gefahren, aber es war ein Traum!
Und besonders möchten wir die Verpflegung - hier besonders an der 1. Kontrolle - hervorheben.
Ein Genuss par excellence!
Das Beste, was wir in unserer 8-jährigen RTF-Erfahrung erleben durften!
Als Feinschmeckerin kann ich dies sehr wohl beurteilen: die tollen Kuchen, die liebevoll zubereiteten Brötchen mit Frischkäse und Garnitur und natürlich das Schmalzbrot.
Und keine WAFFELN!
Toll!
Ihr könnt auf eure Frauen stolz sein, super!
Und später am Ziel dann die wunderbare Quiche mit den zahlreichen Salaten habe ich genossen!
Vielen Dank nochmals für diese wunderbare Tour!
Hier spürt man euer Herzblut in aller Gänze!
Macht weiter so.

Herzlichst grüßen die RSGler (Ford)

Monika u. Helmut Moosmann
`
        )
        .title('CHAPEAU !!!')
        .build(),
]
