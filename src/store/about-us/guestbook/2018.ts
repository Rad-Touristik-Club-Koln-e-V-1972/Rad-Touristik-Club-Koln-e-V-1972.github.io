import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/about-us/guestbook/ESource'
import GuestbookEntryBuilder from '~/models/builder/about-us/guestbook/EntryBuilder'

export default [
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2018, 10, 28, 0, 0)
        .name('Andreas Reineke')
        .source(ESource.Facebook)
        .text(
            `Schöne Strecke - aber die Markierungsdiebe waren zu aktiv.

Den Vereinsmitgliedern tat es total leid, aber die konnten nicht so schnell nachschildern bzw. Flaggen, wie die Markierungen geklaut worden sind.
Es waren alle super nett!!
Es war eine sehr schöne Veranstaltung.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2018, 10, 28, 0, 0)
        .name('Vamos Bala')
        .source(ESource.Facebook)
        .text(
            `Orga an Start/Ziel super und sehr nette motivierte Helfertruppe ...
Schön, dass Ihr die Veranstaltung gewuppt bekommt und sie auch weiter macht ...
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2018, 10, 27, 16, 36)
        .name('Bernd Doelp')
        .source(ESource['E-Mail'])
        .text(
            `Hallo RTC,
genau wie letztes Jahr war alles wieder perfekt.

Vielen Dank und bis nächstes Jahr, diese Veranstaltung ist auf jeden Fall gesetzt.

Ich freue mich jetzt schon ...
Viele Grüße

Bernd
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2018, 5, 28, 17, 0)
        .name('Profitrise Sports')
        .source(ESource.Facebook)
        .text(`Und danke an den RTC Köln e. V. 1972 für die tolle RTF heute!`)
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2018, 5, 28, 17, 0)
        .name('Petra Humbach')
        .source(ESource.Facebook)
        .text(`Schade, da bietet ihr an, ab Pohlhausen zu starten und dann gibt es ab 9:15 Uhr keine Startkarten mehr.`)
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2018, 5, 28, 17, 0)
        .name('Jochen Güttes')
        .source(ESource.Facebook)
        .text(
            `Wir Teilnehmer sind begeistert.
Streckenführung, Verpflegung, Personal ... alles TOP.
Danke für die Gastfreundschaft.
                `
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2018, 5, 28, 17, 0)
        .name('Ros Si')
        .source(ESource.Facebook)
        .text(
            `Die Fahrt hat Tradition.
Und Tradition hat auch die perfekte Organisation.
Super Ausschilderung, super Getränke und natürlich die obligatorischen RTF Nutellabrote.
Und vieles mehr an den Kontrollen.
Riesen Dankeschön.
Hat riesig Spaß gemacht bei euch zu fahren.
Nächstes Jahr wieder.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2018, 5, 28, 17, 0)
        .name('Angela Maja')
        .source(ESource.Facebook)
        .text(
            `Es war wunderbar 😊
Vielen Dank für tolle Streckenführung, Verpflegung, freundliche Orga und Helfer!
Alles bestens.

161 km RTF Strecke und dann nach Hause waren dann für mich bei meiner ersten RTF in diesem Jahr ein Marathon ... 😊`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2018, 5, 27, 17, 1)
        .name('Harald Seidenberg')
        .source(ESource['E-Mail'])
        .text(
            `Hallo RTC,

Ich/wir wollte/n nur sagen, dass ...  ich heute nach 25 Jahren wieder mal eine RTF gefahren bin.
Mir hat die RTF heute Kurzstrecke sehr gut gefallen hat. Wetter schön, Temperatur wunderbar.
gut ausgeschildert.
Was ich gegenüber damals vermisst habe waren Verkaufstand  mit Trikots oder…. .
Vielleicht hat sich in der Zeit da was verändert.
Sollte keine Kritik sein.
Nur eine Anmerkung.
Harry
`
        )
        .title('Feedback wegen ... RTF 27.05.2018')
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.RTF)
        .date(2018, 5, 27, 13, 54)
        .name('Dirk Oliver Heppert')
        .organization('RSV Staubwolke Refrath')
        .source(ESource['E-Mail'])
        .text(
            `Hallo RTC, ich/wir wollte/n nur sagen, dass ... ich wieder total begeistert bin von Eurer RTF.
Wie immer Toporganisation, präzise Ausschilderung und interessante Streckenführung.
Bin heute nur die 51er Schleife mit meinem Kollegen gefahren, da ich noch von gestern die Höhenmeter der RTF in Wuppertal in den Beinen habe.
Aber auch die kurze Schleife hat ihre Reize.
Kenne jetzt auf jeden Fall alle Strecken.
Eure RTF gehört zu den Besten im Bezirk Köln-Bonn.

LG Dirk Heppert- RSV Staubwolke Refrath- Bezirksmeister 2017 Köln-Bonn
`
        )
        .title('Feedback wegen ...RTF 2018')
        .build(),
]
