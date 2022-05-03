import EEvent from '@/models/enums/guestbook/EEvent'
import ESource from '@/models/enums/guestbook/ESource'
import GuestbookEntryBuilder from '@/models/builder/guestbook/EntryBuilder'

export default [
    new GuestbookEntryBuilder()
        .date(2012, 6)
        .name('Wolfgang Alberg')
        .organization('www.cardiofitness.de')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo Sportfreunde,<br/>
<br/>
leider finde ich auf euer Homepage kein Gästebuch, möchte mich, auch im Namen weiterer 8 Mitfahrer unserer Gruppe bei euch für die Tour ab Zündorf bedanken.<br/>
<br/>
Neben der tollen Strecke und des netten Teams, habt ihr es auch geschafft die Sonne, entgegen aller Vorhersagen zu buchen.<br/>
<br/>
Wir freuen uns schon auf die Tour im kommenden Jahr.<br/>
<br/>
Mit sportlichen Grüßen<br/>
<br/>
Wolfgang Alberg<br/>
www.cardiofitness.de
`
        )
        .title('Ein großes Dankeschöööööön')
        .build(),
    new GuestbookEntryBuilder()
        .date(2012, 6)
        .event(EEvent.RTF)
        .name('Ursula Koepp')
        .organization('TSV Weiss-Köln')
        .source(ESource['E-Mail'])
        .text(
            `
Liebe Radsportfreunde,<br/>
<br/>
ganz herzlichen Dank für die schöne RTF am Sonntag!<br/>
<br/>
Was Ihr da auf die Beine gestellt habt war super!<br/>
<br/>
Eine landschaftlich tolle Strecke, Verpflegung vom Feinsten auf der 125er Strecke,
immer gut gelaunte Helfer u. selbst die angekündigten Gewitter hatten ein Einsehen mit Eurer Veranstaltung!<br/>
Auch wenn auf den ersten Kilometern nachgeschildert werden musste (Spiel"kinder" gibt's immer), habt Ihr versucht uns eine perfekte RTF zu bieten!<br/>
Und Dank dem Track, den ich mir sicherheitshalber von Euer Homepage runter geladen hatte, ging auch orientierungsmäßig alles glatt.<br/>
<br/>
Herzliche Grüße aus Rondorf,<br/>
Ursula Koepp
`
        )
        .title('... ganz herzlichen Dank für die schöne RTF am Sonntag!')
        .build(),
    new GuestbookEntryBuilder()
        .date(2012, 6)
        .event(EEvent.RTF)
        .name('Günter')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo Diana,<br/>
<br/>
hatte Norbert am Sonntag noch getroffen und ihm gesagt, dass es mir sehr gut gefallen hatte.<br/>
Obwohl ich ja etwas unmotiviert war und es vor der ersten Kontrolle noch ein kleines Scharmützel mit "Kollegen" gab,
wurde es ein wirklich schöner Tag, der nicht so schnell zu topen ist!!!<br/>
<br/>
Also nochmals: 10 Punkte und die Krone für eure schöne RTF!!!<br/>
<br/>
Ihr habt das sehr liebevoll gestaltet.<br/>
Die Kontrollen konnten sich absolut sehen lassen.<br/>
Alle sehr freundlich und kein Zeitstreß.<br/>
Liebe Leute kennengelernt.<br/>
Das Wetter hatte bis zum Schluss gehalten.<br/>
Das hebt die Laune ungemein.... :-)<br/>
Also euch allen vielen Dank für eure Mühe.<br/>
Natürlich auch an Klaus-Anton und Thilo, mit denen es viel Spaß gemacht hat zu fahren....<br/>
<br/>
Viele Grüße<br/>
<br/>
Günter
`
        )
        .title('10 Punkte und die Krone für eure schöne RTF!!!')
        .build(),
    new GuestbookEntryBuilder()
        .date(2012, 6)
        .event(EEvent.RTF)
        .name('Dieter Reich')
        .organization('ISB-Team-Cologne')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo Radsportler des RTC-Köln,<br/>
<br/>
danke für die gut ausgearbeitete Tour am 20.05.12.<br/>
Strecke und Verpflegung wie immer prima.<br/>
Aber nicht zu vergessen die freundlichen Kontakte.<br/>
Schön, dass es noch Radsportler gibt, die ihre Freizeit für diesen schönen Event opfern !!<br/>
<br/>
Es freut sich auf die nächste Veranstaltung, das benachbarte ISB-Team-Cologne<br/>
<br/>
Sportliche Grüße<br/>
Dieter Reich
`
        )
        .title('Danke für die gut ausgearbeitete Tour am 20.05.12')
        .build(),
    new GuestbookEntryBuilder()
        .date(2012, 6)
        .event(EEvent.RTF)
        .location('Monheim')
        .name('Elke und Dieter')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo liebe RTCler,<br/>
<br/>
herzlichen Dank für eine tolle Forsbachtour 2012.<br/>
Der Tip unserer Freundin Marlies, unbedingt teil zu nehmen, hat sich wahrlich als Volltreffer erwiesen.<br/>
Eine sensationelle Streckenführung, gepaart mit der ausgesprochen guten Verpflegung
und ergänzt durch das schöne Frühsommerwetter waren die Zutaten für einen sehr schönen RTF-Sonntag.<br/>
<br/>
Nochmal herzlichen Dank an alle RTCler.<br/>
<br/>
Viele Grüße aus Monheim am Rhein<br/>
Elke und Dieter
`
        )
        .title('... eine tolle Forsbachtour 2012')
        .build(),
    new GuestbookEntryBuilder()
        .date(2012, 5)
        .event(EEvent.RTF)
        .name('Josef Witt')
        .source(ESource['E-Mail'])
        .text(
            `
Guten Morgen,<br/>
<br/>
ich bin gestern die 151 Strecke gefahren und wie ich um ca. 15.30 Uhr im Ziel wieder war wollte ich und meine drei anderen Radkollegen ein Grillwürstchen essen,
aber leider waren keine mehr da nur noch für die Jungs und Mädels vom Marathon das war sehr schade.<br/>
Da wir den ganzen Morgen nur Waffeln und Riegel gegessen hatten.<br/>
<br/>
Für nächstes Jahr muss ich entweder schneller fahren oder eine kleinere Runde fahren damit ich noch ein Würstchen bekomme
oder ich bringe mir ein Paar mit die dann gegrillt werden können.<br/>
<br/>
An der ein oder anderen Kontrolle habe ich die Bananen vermiest schade.<br/>
<br/>
Aber man kann es ja auch nicht jedem recht machen.<br/>
<br/>
Sonst war es eine sehr gute Veranstaltung!<br/>
<br/>
Mit freundlichen Grüßen<br/>
Josef Witt
`
        )
        .title('Verpflegungsengpässe, sonst war es eine sehr gute Veranstaltung!')
        .build(),
    new GuestbookEntryBuilder()
        .date(2012, 5)
        .event(EEvent.RTF)
        .location('Kierspe')
        .name('Michaela Bäcker')
        .source(ESource['E-Mail'])
        .text(
            `
Der Tag danach ...<br/>
<br/>
So, ich hatte gestern das große Vergnügen an dem Forstbach-Marathon 2012 teilzunehmen.<br/>
Den Tag zuvor hatte ich noch wenig lust 200 km und ein paar gequetschte zu fahren.<br/>
Die Wetterprognose war auch nicht so dolle, leichtes Gewitter war angesagt.<br/>
Außerdem bedeutet so ein Marathon immer sehr früh aufzustehen ( in diesem Falle 04:30 Uhr ) :-)<br/>
Und mein Radkollege hat abgesagt - also genug Gründe, sich den Sonntag anders zu verplanen.<br/>
Wenn da nicht der innere Schweinehund den Kampf angesagt hätte ...<br/>
Und mal ehrlich meine Laune wäre am Sonntag nicht berauschend gewesen denn ...<br/>
<br/>
es war eine super gelungene RTF !!!<br/>
<br/>
Leider gab es anfangs Schwierigkeiten da irgend so ein Depp die Schilder die auf die Strecke führen sollten abmontiert hat ...<br/>
das ist ein übler Scherz wenn man denn 200 KM radeln möchte.<br/>
Da kommt eine Wegsuche nicht gut.<br/>
Ich hatte das Glück einen Garmin dabei zu haben.<br/>
Ich hatte mir die Strecke Tags zuvor aufgeladen und konnte so die Streckenführung erkennen.<br/>
Das wiederum hatte aber zu Folge, dass ich, anstatt wie geplant ganz locker anfangen, eine "Meute" hinter mir hatte die die Strecke nicht kannte
und auch so ein Gerät nicht besaßen.<br/>
Da fühlte man sich dann schon ein wenig "auf der Jagd" wenn die jungen Burschen hinter einem fröhlich Quatschen
und spaß haben und man selber bei 85% der Maximalen HF die Strecke abfährt ;-)<br/>
Zum Glück war der Spuk nach 10 km erledigt und die Wegbezeichnung waren wieder sichtbar angebracht.<br/>
So konnte ich es dann ganz entspannt angehen lassen ...<br/>
Schnell fand ich wieder in meinen Trott - und mit mir auch ein Radkollege dessen Name ich leider vergessen habe ( ? ).<br/>
Er ist echt gut drauf.<br/>
Der zog auf der Geraden ein Tempo, das war schon echt klasse.<br/>
Ich genoss es bei Ihm im Windschatten fahren zu dürfen.<br/>
So konnte ich auch die traumhafte Gegend genießen !!!<br/>
Bei KM 60/65 passierte mir dann leider eine Panne :-) Mein Vorderreifen hatte einen platten in der Abfahrt ...<br/>
da habe ich Glück gehabt, das es mich nicht zerbröselt hat.<br/>
Zu diesem Zeitpunkt waren wir mit einem kleinen Pulk unterwegs.<br/>
Mein Kollege bekam von meinem Dilemma nichts mit.<br/>
Und so stand ich da mit einem Platten - Flickzeug hatte ich, aber leider keine Ahnung wie ich so einen Schlauch auch repariere bzw. austausche.<br/>
Und da gilt dann ganz klar der Spruch: "Ich bin so froh, das ich ein Mädchen bin"<br/>
Keine 2 Minuten später kam ein Mitfahrer vom RTC Rodenkirchen und hat mir anstandslos geholfen.<br/>
Kurz darauf kam auch ein Wagen Vom RTC Köln und fragte ob er auch helfen könnte ...<br/>
Das war unglaublich nett !!!!!<br/>
Schön, das es solche Menschen gibt !!!!<br/>
Bei der nächsten Verpflegung wartete dann mein "Kollege" auch schon auf mich ;-)<br/>
Die Verpflegungsstellen waren allesamt klasse !!!<br/>
Es gab Kuchen, Rosinenstuten, Kekse, Weingummi, Riegel, und und und ...<br/>
Für die Marathon'is gab es sogar noch eine warme Mahlzeit.<br/>
Das Wetter war auch absolut in Ordnung.<br/>
Es kamen nur ein paar Tropfen runter und die konnte man genießen wurde es doch zum Ende der Tour mächtig warm mit Sonne !!!!<br/>
Fazit: Eine absolut lohnenswerte RTF - sehr nette, und hilfsbereite Helfer - super Gegend !!!!<br/>
Auf diesem Wege auch noch mal ein herzliches Dankeschön für die nette Begleitung Namens ? - ohne ihn wäre ich nicht so schnell unterwegs gewesen.<br/>
<br/>
Lieben Gruß<br/>
Michaela Bäcker<br/>
Aus Kierspe
`
        )
        .title('... eine super gelungene RTF !!!')
        .build(),
    new GuestbookEntryBuilder()
        .date(2012, 5)
        .event(EEvent.RTF)
        .location('Libur')
        .name('Matthias Zimmer')
        .source(ESource['E-Mail'])
        .text(
            `
Sehr geehrte Damen und Herren,<br/>
<br/>
Ich freue mich sehr wenn der Breitensport immer noch großen Zulauf findet.<br/>
Überhaupt keine Freude empfinde ich wenn Radsportbegeisterte ihre Freude widerrum schon Morgens um kurz nach 7 in reinen Wohngebieten lautstark zum Ausdruck bringen.<br/>
So geschehen heute Morgen in Libur (Freiheit/Stockumer Weg) Seit diesem Zeitpunkt war ich leider wach und konnte den Hochgenüssen der lautstarken Artikulation bestens folgen.<br/>
Ein weiterer Kritikpunkt ist: in den an Libur angrenzenden Feldern genießen viele ihre Freizeit, Hundehalter, Jogger, Walker
und andere sind massivst durch unangemessene Geschwindigkeit Ihrer Fahrer gestört.<br/>
Auch in Libur selber, sie kennen die Strassen wahrscheinlich, sind Ihre Teilnehmer unangemessen schnell unterwegs.<br/>
Ich selber durfte eine Gruppe "vorbeifliegender" Radler genießen.<br/>
<br/>
Ich fasse meine Kritik noch einmal zusammen.
- unangemessene Geschwindigkeit
- zu hohe Lautstärke der Teilnehmer in reinen Wohngebieten zu nachtschlafender Zeit
- bedingte Bereitsschaft zu gegenseitiger Rücksichtnahme
- keine Signalisierung durch von hinten heraneilenden Radgruppen (Ihre Sportgeräte haben keine hohen Laufgeräusche)
- keine Information der Anwohner, damit diese sich darauf einstellen können.

<br/>
Ich gebe zu ich habe wahrscheinlich nicht die besten Exemplare erwischt, aber diese sind natürlich dann das Markenzeichen Ihrer Veranstaltung.<br/>
<br/>
mit freundlichen Grüssen<br/>
Matthias Zimmer
`
        )
        .title('Lärmbelästigung und Raserei')
        .build(),
    new GuestbookEntryBuilder()
        .date(2012, 5)
        .event(EEvent.RTF)
        .name('Monika und Helmut Moosmann')
        .organization('RSG Ford')
        .source(ESource['E-Mail'])
        .text(
            `
Liebe RTCler,<br/>
<br/>
CHAPEAU!!!<br/>
Wir sind zwar nur die 75-er (eigentlich waren es 84 km) gefahren, aber es war ein Traum!<br/>
Und besonders möchten wir die Verpflegung - hier besonders an der 1. Kontrolle - hervorheben.<br/>
Ein Genuss par excellence!<br/>
Das Beste, was wir in unserer 8-jährigen RTF-Erfahrung erleben durften!<br/>
Als Feinschmeckerin kann ich dies sehr wohl beurteilen: die tollen Kuchen, die liebevoll zubereiteten Brötchen mit Frischkäse und Garnitur und natürlich das Schmalzbrot.<br/>
Und keine WAFFELN!<br/>
Toll!<br/>
Ihr könnt auf eure Frauen stolz sein, super!<br/>
Und später am Ziel dann die wunderbare Quiche mit den zahlreichen Salaten habe ich genossen!<br/>
Vielen Dank nochmals für diese wunderbare Tour!<br/>
Hier spürt man euer Herzblut in aller Gänze!<br/>
Macht weiter so.<br/>
<br/>
Herzlichst grüßen die RSGler (Ford)<br/>
<br/>
Monika u. Helmut Moosmann
`
        )
        .title('CHAPEAU !!!')
        .build(),
]
