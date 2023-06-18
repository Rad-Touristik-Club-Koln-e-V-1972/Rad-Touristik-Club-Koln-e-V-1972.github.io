import GuestbookEntryBuilder from 'src/models/builder/rtc-cologne/guestbook/GuestbookEntryBuilder'
import EEvent from 'src/models/enums/EEvent'
import ESource from 'src/models/enums/rtc-cologne/guestbook/ESource'

export default [
    new GuestbookEntryBuilder()
        .setAnswer('Dem Dieter kann geholfen werden, Brille ist da, Kontakt wird aufgenommen ...')
        .setCategory(EEvent.CTF)
        .setDate('2017-11-11 17:01')
        .setId('41af2aad-55fa-46fc-af9b-7dd5b4319bec')
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
Viele Grüße, Dieter Roggensack...`,
        )
        .setTitle('Feedback wegen ...CTF Wahnbachtour')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-30 9:48')
        .setId('59b1dd55-230e-405c-8f0d-d7725fa7bff4')
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
`,
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-29 18:00')
        .setId('e5a6d8de-786c-4252-add2-7e4446ba12c3')
        .setName('Wilfried Goesgens')
        .setSource(ESource.Facebook)
        .setText(
            `Hallo liebes RTC Team,
Super Tour, hat viel Spaß gemacht.
Wie gestern schon persönlich erzählt, war ein Abzweig auf Lohmar zu in der Abfahrt schwer zu sehen - einige haben sich verfahren ...
Da wir gestern den Punkt nicht genau festmachen konnten, hier mein Strava Track, bei KM 73,3 ist es passiert ...
Evtl. müsste man hier den Abbieger mit Flatterband auf dem Boden markieren, von oben kommend sah man die Markierung quasi nicht.
`,
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-29 18:00')
        .setId('d0fc81a8-dbb5-487e-9aba-73deb71d3778')
        .setName('Jan Koza')
        .setSource(ESource.Facebook)
        .setText(
            `Eine tolle Strecke ...
Herzlichen Dank!
`,
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-29 18:00')
        .setId('55683c01-0a06-4820-bb8c-f99d58ab4abe')
        .setName('Birgit Frings-Salz')
        .setSource(ESource.Facebook)
        .setText('Uns, als Gruppe Säuwätz, hat es auch super gut gefallen. Grosses Lob ...')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-28 21:30')
        .setId('fcb47dbd-5d0f-48fd-b99c-4be6a2ac0f89')
        .setName('Christoph Werner')
        .setSource(ESource.Facebook)
        .setText('War eine schöne Veranstaltung. Gerne nächstes Jahr wieder.')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-28 21:30')
        .setId('6816bd6c-9865-407a-ad80-3cf3b660e8e9')
        .setName('Mika Kali')
        .setSource(ESource.Facebook)
        .setText('Wie immer: Klasse CTF ...')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-28 21:30')
        .setId('cbd50311-319f-4fc9-b1a1-248f0487b67f')
        .setName('Thomas Zengerle')
        .setSource(ESource.Facebook)
        .setText(
            `Hallo,
das war heute eine tolle Runde. Ihr habt eine klasse Orga gehabt.
Hoffentlich geht es dem Verletzten bald wieder gut.
Schönen Gruß Thomas
`,
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-28 21:30')
        .setId('02d7ea76-4074-4f9a-9c8a-b6208314e7bd')
        .setName('Andreas Diehl')
        .setSource(ESource.Facebook)
        .setText("Schön war's ...")
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-28 21:30')
        .setId('27b66792-1cb8-4dc3-ace1-a958bc710ceb')
        .setName('Jürgen Em')
        .setSource(ESource.Facebook)
        .setText(
            `Tolle Veranstaltung; tolle Verpflegung; tolle Strecke;
Ausschilderung hätte etwas besser sein können, aber irgendwas ist immer.
Bin nächstes Jahr gerne wieder dabei!
`,
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-28 21:30')
        .setId('82cc177a-80dc-42a0-8cd6-c7dab895339e')
        .setName('Bernd Doelp')
        .setSource(ESource.Facebook)
        .setText(
            `... dieses Jahr hat wirklich alles perfekt gepasst.
Super ausgeschildert, Verpflegung mehr als genug ...
VIELEN DANK
                `,
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-28 21:30')
        .setId('7d6484e4-fbea-45f0-aa53-8342dbc222d8')
        .setName('Konstantin Sakellaris')
        .setSource(ESource.Facebook)
        .setText(
            `Hallo RTC-Köln, ich fahr seit grob 2 Jahren erst MTB, eure CTF war meine erste die ich gefahren bin.
Ich möchte mich ganz herzlich bei euch für diese Tour bedanken, vor allem an das Team K1/K3.
Da hatte ich bei der erste Anfahrt einen Cheesburger bestellt. Als ich zur dritten Kontrolle wieder da war, habe ich doch einen bekommen, echt kreativ dieses Team.
2 TUC Kekse und dazwischen eine Scheibe Käse. Lecker. Bis zum nächstem Jahr.
                `,
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2017-10-28 21:30')
        .setId('4b4d554d-a764-440a-a701-0f93c3f52861')
        .setName('Mischa Breuer')
        .setSource(ESource.Facebook)
        .setText('War echt super. Hoffentlich 2018 wieder ...')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2017-05-29 20:30')
        .setId('d3a00f24-cd3e-4772-b842-a5be6a0f7c41')
        .setName('Jochen Güttes')
        .setOrganization('Präsident des RTC Mehlem')
        .setSource(ESource.Facebook)
        .setText(
            `Danke für die TOP Organisation, die gute Beschilderung und die abwechslungsreiche Verpflegung an den Kontrollen und im Ziel.
Es war wieder super bei euch.
                `,
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2017-05-29 20:30')
        .setId('8ad6aa92-2374-41fb-bd3c-eae3556855c7')
        .setName('Roland Liffers')
        .setSource(ESource.Facebook)
        .setText(
            `Schliesse mich meinem Sportskamerad Jochen Güttes vollumfänglich an.
Der RTC Köln hat trotz immer schwerer werdenden Rahmenbedingungen eine Super-Veranstaltung auf die Beine gestellt.
Danke dafür!
`,
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2017-05-29 20:30')
        .setId('1a92a753-f4d1-481d-af9a-8cbdf0a976bc')
        .setName('Horst Voll')
        .setSource(ESource.Facebook)
        .setText('Vielen Dank für die heutige Betreuung.... war TippiToppi.')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2017-05-29 20:30')
        .setId('848eede7-086e-4679-9770-23fd96e7ce50')
        .setName('Uli Fritzsche')
        .setSource(ESource.Facebook)
        .setText('Und wir danken für die tolle Orga!')
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2017-05-28 20:30')
        .setId('e137479f-1ef4-4866-a4f9-83648e8ee745')
        .setName('Frank Müller')
        .setSource(ESource.Facebook)
        .setText(
            `Ausschilderung gut, Strecke perfekt, Verpflegung ausgezeichnet (das Gulasch mit Nudeln sehr lecker).
Vielen Dank
`,
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2017-05-28 20:30')
        .setId('4e2794d8-2969-4d37-8aa6-b04ebda6d6ad')
        .setName('Mika Kali')
        .setSource(ESource.Facebook)
        .setText(
            `Hallo, danke nochmal für die tolle RTF gestern!
Ich habe nur einen kleinen Kritikpunkt:
Die Ortsdurchsfahrt Much war auch in diesem Jahr wieder Horror. Da wird durch Autofahrer genötigt, was das Zeug hält ...
`,
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2017-05-28 20:57')
        .setId('9d8a4e46-de83-4b23-add3-a25a9ca99d38')
        .setName('Dirk Oliver Heppert')
        .setOrganization('RSV Staubwolke Refrath')
        .setSource(ESource['E-Mail'])
        .setText(
            `Hallo RTC,

ich/wir wollte/n nur sagen, dass ... Eure RTF war wieder bestens organisiert. Schöne anspruchsvolle Strecken, gute Verpflegung und präzise Ausschilderung.
Hat wieder alles gepasst.

VG
Dirk Oliver Heppert RSV Staubwolke Refrath
`,
        )
        .build(),
]
