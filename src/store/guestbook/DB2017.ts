import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/guestbook/ESource'
import GuestbookEntryBuilder from '~/models/builder/guestbook/EntryBuilder'

export default [
    new GuestbookEntryBuilder()
        .answer(`Dem Dieter kann geholfen werden, Brille ist da, Kontakt wird aufgenommen ...`)
        .category(EEvent.CTF)
        .date(2017, 11, 11, 17, 1)
        .name('Dieter Roggensack')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC, ich/wir wollte/n nur sagen, dass Eure CTF einmal wieder sehr schön und ausgezeichnet organisiert war.
\\
Wenn ich auch nicht unbedingt begeistert von den 2 Downhill-Strecken war (ich bin dafür zu alt und zu ängstlich), so war der übrige Teil der 55-er Runde wunderbar.
\\
Vielen Dank  für all Eure Mühen.
\\
Seit der CTF bei Euch vermisse ich meine Radbrille.
\\
Ich kann mir nur noch vorstellen, sie beim Ziel innen oder draußen liegen gelassen zu haben.
\\
Es handelt sich um die Marke Eagle Five mit eingebautem Leseteil.
\\
Sollte sie gefunden sein, bitte ich um Kontakt per email.
\\
Viele Grüße, Dieter Roggensack...`
        )
        .title('Feedback wegen ...CTF Wahnbachtour')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2017, 10, 30, 9, 48)
        .name('Herwig Barthes')
        .source(ESource.Facebook)
        .text(
            `
Die CTF an der Wahnbachtalsperre war großartig und hat großen Spaß gemacht.
\\
Ein Riesenkompliment an alle Helfer und Organisatoren. Super Service auf der Strecke und am Klubhaus.
\\
Besonders gut gefallen hat mir der Grill, die Waschstation und die Erbsensuppe.
\\
\\
Einen kleinen Verbesserungsvorschlag hätte ich:
\\
Vielleicht könnte man in den GPSies-Track beim nächsten Mal Abbiegehinweise einbauen.
\\
Ich weiß, das ist eine ziemliche Fummelei, würde aber die Navigation erleichtern.
\\
\\
Ansonsten alles top!!
\\
\\
Vielen Dank!
\\
Gruß H. Barthes
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2017, 10, 29, 18, 0)
        .name('Wilfried Goesgens')
        .source(ESource.Facebook)
        .text(
            `
Hallo liebes RTC Team,
\\
Super Tour, hat viel Spaß gemacht.
\\
Wie gestern schon persönlich erzählt, war ein Abzweig auf Lohmar zu in der Abfahrt schwer zu sehen - einige haben sich verfahren ...
\\
Da wir gestern den Punkt nicht genau festmachen konnten, hier mein Strava Track, bei KM 73,3 ist es passiert ...
\\
Evtl. müsste man hier den Abbieger mit Flatterband auf dem Boden markieren, von oben kommend sah man die Markierung quasi nicht.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2017, 10, 29, 18, 0)
        .name('Jan Koza')
        .source(ESource.Facebook)
        .text(
            `
Eine tolle Strecke ...
\\
Herzlichen Dank!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2017, 10, 29, 18, 0)
        .name('Birgit Frings-Salz')
        .source(ESource.Facebook)
        .text(`Uns, als Gruppe Säuwätz, hat es auch super gut gefallen. Grosses Lob ...`)
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2017, 10, 28, 21, 30)
        .name('Christoph Werner')
        .source(ESource.Facebook)
        .text(`War eine schöne Veranstaltung. Gerne nächstes Jahr wieder.`)
        .build(),
    new GuestbookEntryBuilder().category(EEvent.CTF).date(2017, 10, 28, 21, 30).name('Mika Kali').source(ESource.Facebook).text(`Wie immer: Klasse CTF ...`).build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2017, 10, 28, 21, 30)
        .name('Thomas Zengerle')
        .source(ESource.Facebook)
        .text(
            `
Hallo,
\\
das war heute eine tolle Runde. Ihr habt eine klasse Orga gehabt.
\\
Hoffentlich geht es dem Verletzten bald wieder gut.
\\
Schönen Gruß Thomas
`
        )
        .build(),
    new GuestbookEntryBuilder().category(EEvent.CTF).date(2017, 10, 28, 21, 30).name('Andreas Diehl').source(ESource.Facebook).text(`Schön war's ...`).build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2017, 10, 28, 21, 30)
        .name('Jürgen Em')
        .source(ESource.Facebook)
        .text(
            `
Tolle Veranstaltung; tolle Verpflegung; tolle Strecke;
\\
Ausschilderung hätte etwas besser sein können, aber irgendwas ist immer.
\\
Bin nächstes Jahr gerne wieder dabei!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2017, 10, 28, 21, 30)
        .name('Bernd Doelp')
        .source(ESource.Facebook)
        .text(
            `
... dieses Jahr hat wirklich alles perfekt gepasst.
\\
Super ausgeschildert, Verpflegung mehr als genug ...
\\
VIELEN DANK
                `
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2017, 10, 28, 21, 30)
        .name('Konstantin Sakellaris')
        .source(ESource.Facebook)
        .text(
            `
Hallo RTC-Köln, ich fahr seit grob 2 Jahren erst MTB, eure CTF war meine erste die ich gefahren bin.
\\
Ich möchte mich ganz herzlich bei euch für diese Tour bedanken, vor allem an das Team K1/K3.
\\
Da hatte ich bei der erste Anfahrt einen Cheesburger bestellt. Als ich zur dritten Kontrolle wieder da war, habe ich doch einen bekommen, echt kreativ dieses Team.
\\
2 TUC Kekse und dazwischen eine Scheibe Käse. Lecker. Bis zum nächstem Jahr.
\\
                `
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2017, 10, 28, 21, 30)
        .name('Mischa Breuer')
        .source(ESource.Facebook)
        .text(`War echt super. Hoffentlich 2018 wieder ...`)
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2017, 5, 29, 20, 30)
        .name('Jochen Güttes')
        .organization('Präsident des RTC Mehlem')
        .source(ESource.Facebook)
        .text(
            `
Danke für die TOP Organisation, die gute Beschilderung und die abwechslungsreiche Verpflegung an den Kontrollen und im Ziel.
\\
Es war wieder super bei euch.
                `
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2017, 5, 29, 20, 30)
        .name('Roland Liffers')
        .source(ESource.Facebook)
        .text(
            `
Schliesse mich meinem Sportskamerad Jochen Güttes vollumfänglich an.
\\
Der RTC Köln hat trotz immer schwerer werdenden Rahmenbedingungen eine Super-Veranstaltung auf die Beine gestellt.
\\
Danke dafür!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2017, 5, 29, 20, 30)
        .name('Horst Voll')
        .source(ESource.Facebook)
        .text(`Vielen Dank für die heutige Betreuung.... war TippiToppi.`)
        .build(),
    new GuestbookEntryBuilder().category(EEvent.RTF).date(2017, 5, 29, 20, 30).name('Uli Fritzsche').source(ESource.Facebook).text(`Und wir danken für die tolle Orga!`).build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2017, 5, 28, 20, 30)
        .name('Frank Müller')
        .source(ESource.Facebook)
        .text(
            `
Ausschilderung gut, Strecke perfekt, Verpflegung ausgezeichnet (das Gulasch mit Nudeln sehr lecker).
\\
Vielen Dank
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2017, 5, 28, 20, 30)
        .name('Mika Kali')
        .source(ESource.Facebook)
        .text(
            `
Hallo, danke nochmal für die tolle RTF gestern!
\\
Ich habe nur einen kleinen Kritikpunkt:
\\
Die Ortsdurchsfahrt Much war auch in diesem Jahr wieder Horror. Da wird durch Autofahrer genötigt, was das Zeug hält ...
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2017, 5, 28, 20, 57)
        .name('Dirk Oliver Heppert')
        .organization('RSV Staubwolke Refrath')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC,
\\
\\
ich/wir wollte/n nur sagen, dass ... Eure RTF war wieder bestens organisiert. Schöne anspruchsvolle Strecken, gute Verpflegung und präzise Ausschilderung.
\\
Hat wieder alles gepasst.
\\
\\
VG
\\
Dirk Oliver Heppert RSV Staubwolke Refrath
`
        )
        .build(),
]
