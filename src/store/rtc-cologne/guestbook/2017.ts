import GuestbookEntryBuilder from '~/models/builder/rtc-cologne/guestbook/GuestbookEntryBuilder'
import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/rtc-cologne/guestbook/ESource'

export default [
    new GuestbookEntryBuilder()
        .setAnswer(`Dem Dieter kann geholfen werden, Brille ist da, Kontakt wird aufgenommen ...`)
        .setCategory(EEvent.CTF)
        .setDate('2017-11-11 17:01')
        .setName('Dieter Roggensack')
        .setSource(ESource['E-Mail'])
        .setText(
            `Hallo RTC, ich/wir wollte/n nur sagen, dass Eure CTF einmal wieder sehr schön und ausgezeichnet organisiert war.
Wenn ich auch nicht unbedingt begeistert von den 2 Downhill-Strecken war (ich bin dafür zu alt und zu ängstlich), so war der übrige Teil der 55-er Runde wunderbar.
Vielen Dank  für all Eure Mühen.
Seit der CTF bei Euch vermisse ich meine Radbrille.
Ich kann mir nur noch vorstellen, sie beim Ziel innen oder draußen liegen gelassen zu haben.
Es handelt sich um die Marke Eagle Five mit eingebautem Leseteil.
Sollte sie gefunden sein, bitte ich um Kontakt per email.
Viele Grüße, Dieter Roggensack...`
        )
        .setTitle('Feedback wegen ...CTF Wahnbachtour')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-30 9:48')
        .setName('Herwig Barthes')
        .setSource(ESource.Facebook)
        .setText(
            `Die CTF an der Wahnbachtalsperre war großartig und hat großen Spaß gemacht.
Ein Riesenkompliment an alle Helfer und Organisatoren. Super Service auf der Strecke und am Klubhaus.
Besonders gut gefallen hat mir der Grill, die Waschstation und die Erbsensuppe.

Einen kleinen Verbesserungsvorschlag hätte ich:
Vielleicht könnte man in den GPSies-Track beim nächsten Mal Abbiegehinweise einbauen.
Ich weiß, das ist eine ziemliche Fummelei, würde aber die Navigation erleichtern.

Ansonsten alles top!!

Vielen Dank!
Gruß H. Barthes
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-29 18:00')
        .setName('Wilfried Goesgens')
        .setSource(ESource.Facebook)
        .setText(
            `Hallo liebes RTC Team,
Super Tour, hat viel Spaß gemacht.
Wie gestern schon persönlich erzählt, war ein Abzweig auf Lohmar zu in der Abfahrt schwer zu sehen - einige haben sich verfahren ...
Da wir gestern den Punkt nicht genau festmachen konnten, hier mein Strava Track, bei KM 73,3 ist es passiert ...
Evtl. müsste man hier den Abbieger mit Flatterband auf dem Boden markieren, von oben kommend sah man die Markierung quasi nicht.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-29 18:00')
        .setName('Jan Koza')
        .setSource(ESource.Facebook)
        .setText(
            `Eine tolle Strecke ...
Herzlichen Dank!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-29 18:00')
        .setName('Birgit Frings-Salz')
        .setSource(ESource.Facebook)
        .setText(`Uns, als Gruppe Säuwätz, hat es auch super gut gefallen. Grosses Lob ...`)
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-28 21:30')
        .setName('Christoph Werner')
        .setSource(ESource.Facebook)
        .setText(`War eine schöne Veranstaltung. Gerne nächstes Jahr wieder.`)
        .build(),
    new GuestbookEntryBuilder().setCategory(EEvent.CTF).setDate('2017-10-28 21:30').setName('Mika Kali').setSource(ESource.Facebook).setText(`Wie immer: Klasse CTF ...`).build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-28 21:30')
        .setName('Thomas Zengerle')
        .setSource(ESource.Facebook)
        .setText(
            `Hallo,
das war heute eine tolle Runde. Ihr habt eine klasse Orga gehabt.
Hoffentlich geht es dem Verletzten bald wieder gut.
Schönen Gruß Thomas
`
        )
        .build(),
    new GuestbookEntryBuilder().setCategory(EEvent.CTF).setDate('2017-10-28 21:30').setName('Andreas Diehl').setSource(ESource.Facebook).setText(`Schön war's ...`).build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-28 21:30')
        .setName('Jürgen Em')
        .setSource(ESource.Facebook)
        .setText(
            `Tolle Veranstaltung; tolle Verpflegung; tolle Strecke;
Ausschilderung hätte etwas besser sein können, aber irgendwas ist immer.
Bin nächstes Jahr gerne wieder dabei!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-28 21:30')
        .setName('Bernd Doelp')
        .setSource(ESource.Facebook)
        .setText(
            `... dieses Jahr hat wirklich alles perfekt gepasst.
Super ausgeschildert, Verpflegung mehr als genug ...
VIELEN DANK
                `
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-28 21:30')
        .setName('Konstantin Sakellaris')
        .setSource(ESource.Facebook)
        .setText(
            `Hallo RTC-Köln, ich fahr seit grob 2 Jahren erst MTB, eure CTF war meine erste die ich gefahren bin.
Ich möchte mich ganz herzlich bei euch für diese Tour bedanken, vor allem an das Team K1/K3.
Da hatte ich bei der erste Anfahrt einen Cheesburger bestellt. Als ich zur dritten Kontrolle wieder da war, habe ich doch einen bekommen, echt kreativ dieses Team.
2 TUC Kekse und dazwischen eine Scheibe Käse. Lecker. Bis zum nächstem Jahr.
                `
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-28 21:30')
        .setName('Mischa Breuer')
        .setSource(ESource.Facebook)
        .setText(`War echt super. Hoffentlich 2018 wieder ...`)
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2017-05-29 20:30')
        .setName('Jochen Güttes')
        .setOrganization('Präsident des RTC Mehlem')
        .setSource(ESource.Facebook)
        .setText(
            `Danke für die TOP Organisation, die gute Beschilderung und die abwechslungsreiche Verpflegung an den Kontrollen und im Ziel.
Es war wieder super bei euch.
                `
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2017-05-29 20:30')
        .setName('Roland Liffers')
        .setSource(ESource.Facebook)
        .setText(
            `Schliesse mich meinem Sportskamerad Jochen Güttes vollumfänglich an.
Der RTC Köln hat trotz immer schwerer werdenden Rahmenbedingungen eine Super-Veranstaltung auf die Beine gestellt.
Danke dafür!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2017-05-29 20:30')
        .setName('Horst Voll')
        .setSource(ESource.Facebook)
        .setText(`Vielen Dank für die heutige Betreuung.... war TippiToppi.`)
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2017-05-29 20:30')
        .setName('Uli Fritzsche')
        .setSource(ESource.Facebook)
        .setText(`Und wir danken für die tolle Orga!`)
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2017-05-28 20:30')
        .setName('Frank Müller')
        .setSource(ESource.Facebook)
        .setText(
            `Ausschilderung gut, Strecke perfekt, Verpflegung ausgezeichnet (das Gulasch mit Nudeln sehr lecker).
Vielen Dank
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2017-05-28 20:30')
        .setName('Mika Kali')
        .setSource(ESource.Facebook)
        .setText(
            `Hallo, danke nochmal für die tolle RTF gestern!
Ich habe nur einen kleinen Kritikpunkt:
Die Ortsdurchsfahrt Much war auch in diesem Jahr wieder Horror. Da wird durch Autofahrer genötigt, was das Zeug hält ...
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2017-05-28 20:57')
        .setName('Dirk Oliver Heppert')
        .setOrganization('RSV Staubwolke Refrath')
        .setSource(ESource['E-Mail'])
        .setText(
            `Hallo RTC,

ich/wir wollte/n nur sagen, dass ... Eure RTF war wieder bestens organisiert. Schöne anspruchsvolle Strecken, gute Verpflegung und präzise Ausschilderung.
Hat wieder alles gepasst.

VG
Dirk Oliver Heppert RSV Staubwolke Refrath
`
        )
        .build(),
]
