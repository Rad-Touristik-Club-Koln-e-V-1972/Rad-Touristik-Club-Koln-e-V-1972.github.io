import EEvent from '@/models/enums/guestbook/EEvent'
import ESource from '@/models/enums/guestbook/ESource'
import GuestbookEntryBuilder from '@/models/builder/guestbook/EntryBuilder'

export default [
    new GuestbookEntryBuilder()
        .date(2018, 10, 28, 0, 0)
        .event(EEvent.CTF)
        .name('Andreas Reineke')
        .source(ESource.Facebook)
        .text(
            `
Schöne Strecke - aber die Markierungsdiebe waren zu aktiv.<br/>
<br/>
Den Vereinsmitgliedern tat es total leid, aber die konnten nicht so schnell nachschildern bzw. Flaggen, wie die Markierungen geklaut worden sind.<br/>
Es waren alle super nett!!<br/>
Es war eine sehr schöne Veranstaltung.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2018, 10, 28, 0, 0)
        .event(EEvent.CTF)
        .name('Vamos Bala')
        .source(ESource.Facebook)
        .text(
            `
Orga an Start/Ziel super und sehr nette motivierte Helfertruppe ...<br/>
Schön, dass Ihr die Veranstaltung gewuppt bekommt und sie auch weiter macht ...
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2018, 10, 27, 16, 36)
        .event(EEvent.CTF)
        .name('Bernd Doelp')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
genau wie letztes Jahr war alles wieder perfekt.<br/>
<br/>
Vielen Dank und bis nächstes Jahr, diese Veranstaltung ist auf jeden Fall gesetzt.<br/>
<br/>
Ich freue mich jetzt schon ...<br/>
Viele Grüße<br/>
<br/>
Bernd
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2018, 5, 28, 17, 0)
        .event(EEvent.RTF)
        .name('Profitrise Sports')
        .source(ESource.Facebook)
        .text(`Und danke an den RTC Köln e. V. 1972 für die tolle RTF heute!`)
        .build(),
    new GuestbookEntryBuilder()
        .date(2018, 5, 28, 17, 0)
        .event(EEvent.RTF)
        .name('Petra Humbach')
        .source(ESource.Facebook)
        .text(`Schade, da bietet ihr an, ab Pohlhausen zu starten und dann gibt es ab 9:15 Uhr keine Startkarten mehr.`)
        .build(),
    new GuestbookEntryBuilder()
        .date(2018, 5, 28, 17, 0)
        .event(EEvent.RTF)
        .name('Jochen Güttes')
        .source(ESource.Facebook)
        .text(
            `
Wir Teilnehmer sind begeistert.<br/>
Streckenführung, Verpflegung, Personal ... alles TOP.<br/>
Danke für die Gastfreundschaft.
                `
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2018, 5, 28, 17, 0)
        .event(EEvent.RTF)
        .name('Ros Si')
        .source(ESource.Facebook)
        .text(
            `
Die Fahrt hat Tradition.<br/>
Und Tradition hat auch die perfekte Organisation.<br/>
Super Ausschilderung, super Getränke und natürlich die obligatorischen RTF Nutellabrote.<br/>
Und vieles mehr an den Kontrollen.<br/>
Riesen Dankeschön.<br/>
Hat riesig Spaß gemacht bei euch zu fahren.<br/>
Nächstes Jahr wieder.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2018, 5, 28, 17, 0)
        .event(EEvent.RTF)
        .name('Angela Maja')
        .source(ESource.Facebook)
        .text(
            `
Es war wunderbar 😊<br/>
Vielen Dank für tolle Streckenführung, Verpflegung, freundliche Orga und Helfer!<br/>
Alles bestens.<br/>
<br/>
161 km RTF Strecke und dann nach Hause waren dann für mich bei meiner ersten RTF in diesem Jahr ein Marathon ... 😊`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2018, 5, 27, 17, 1)
        .event(EEvent.RTF)
        .name('Harald Seidenberg')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC,<br/>
<br/>
Ich/wir wollte/n nur sagen, dass ...  ich heute nach 25 Jahren wieder mal eine RTF gefahren bin.<br/>
Mir hat die RTF heute Kurzstrecke sehr gut gefallen hat. Wetter schön, Temperatur wunderbar.<br/>
gut ausgeschildert.<br/>
Was ich gegenüber damals vermisst habe waren Verkaufstand  mit Trikots oder…. .<br/>
Vielleicht hat sich in der Zeit da was verändert.<br/>
Sollte keine Kritik sein.<br/>
Nur eine Anmerkung.<br/>
Harry
`
        )
        .title('Feedback wegen ... RTF 27.05.2018')
        .build(),
    new GuestbookEntryBuilder()
        .date(2018, 5, 27, 13, 54)
        .event(EEvent.RTF)
        .name('Dirk Oliver Heppert')
        .organization('RSV Staubwolke Refrath')
        .source(ESource['E-Mail'])
        .text(
            `
Hallo RTC, ich/wir wollte/n nur sagen, dass ... ich wieder total begeistert bin von Eurer RTF.<br/>
Wie immer Toporganisation, präzise Ausschilderung und interessante Streckenführung.<br/>
Bin heute nur die 51er Schleife mit meinem Kollegen gefahren, da ich noch von gestern die Höhenmeter der RTF in Wuppertal in den Beinen habe.<br/>
Aber auch die kurze Schleife hat ihre Reize.<br/>
Kenne jetzt auf jeden Fall alle Strecken.<br/>
Eure RTF gehört zu den Besten im Bezirk Köln-Bonn.<br/>
<br/>
LG Dirk Heppert- RSV Staubwolke Refrath- Bezirksmeister 2017 Köln-Bonn
`
        )
        .title('Feedback wegen ...RTF 2018')
        .build(),
]
