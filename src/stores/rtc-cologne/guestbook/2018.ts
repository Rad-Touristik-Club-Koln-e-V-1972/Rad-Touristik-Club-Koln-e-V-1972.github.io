import GuestbookEntryBuilder from 'src/models/builder/rtc-cologne/guestbook/GuestbookEntryBuilder'
import EEvent from 'src/models/enums/EEvent'
import ESource from 'src/models/enums/rtc-cologne/guestbook/ESource'

export default [
  new GuestbookEntryBuilder()
    .setCategory(EEvent.CTF)
    .setDate('2018-10-28 00:00')

    .setName('Andreas Reineke')
    .setSource(ESource.Facebook)
    .setText(
      `Schöne Strecke - aber die Markierungsdiebe waren zu aktiv.

Den Vereinsmitgliedern tat es total leid, aber die konnten nicht so schnell nachschildern bzw. Flaggen, wie die Markierungen geklaut worden sind.
Es waren alle super nett!!
Es war eine sehr schöne Veranstaltung.
`,
    )
    .buildGuestbookEntry(),
  new GuestbookEntryBuilder()
    .setCategory(EEvent.CTF)
    .setDate('2018-10-28 00:00')

    .setName('Vamos Bala')
    .setSource(ESource.Facebook)
    .setText(
      `Orga an Start/Ziel super und sehr nette motivierte Helfertruppe ...
Schön, dass Ihr die Veranstaltung gewuppt bekommt und sie auch weiter macht ...
`,
    )
    .buildGuestbookEntry(),
  new GuestbookEntryBuilder()
    .setCategory(EEvent.CTF)
    .setDate('2018-10-27 16:36')

    .setName('Bernd Doelp')
    .setSource(ESource['E-Mail'])
    .setText(
      `Hallo RTC,
genau wie letztes Jahr war alles wieder perfekt.

Vielen Dank und bis nächstes Jahr, diese Veranstaltung ist auf jeden Fall gesetzt.

Ich freue mich jetzt schon ...
Viele Grüße

Bernd
`,
    )
    .buildGuestbookEntry(),
  new GuestbookEntryBuilder()
    .setCategory(EEvent.RTF)
    .setDate('2018-05-28 17:00')

    .setName('Profitrise Sports')
    .setSource(ESource.Facebook)
    .setText('Und danke an den RTC Köln e. V. 1972 für die tolle RTF heute!')
    .buildGuestbookEntry(),
  new GuestbookEntryBuilder()
    .setCategory(EEvent.RTF)
    .setDate('2018-05-28 17:00')

    .setName('Petra Humbach')
    .setSource(ESource.Facebook)
    .setText('Schade, da bietet ihr an, ab Pohlhausen zu starten und dann gibt es ab 9:15 Uhr keine Startkarten mehr.')
    .buildGuestbookEntry(),
  new GuestbookEntryBuilder()
    .setCategory(EEvent.RTF)
    .setDate('2018-05-28 17:00')

    .setName('Jochen Güttes')
    .setSource(ESource.Facebook)
    .setText(
      `Wir Teilnehmer sind begeistert.
Streckenführung, Verpflegung, Personal ... alles TOP.
Danke für die Gastfreundschaft.
                `,
    )
    .buildGuestbookEntry(),
  new GuestbookEntryBuilder()
    .setCategory(EEvent.RTF)
    .setDate('2018-05-28 17:00')

    .setName('Ros Si')
    .setSource(ESource.Facebook)
    .setText(
      `Die Fahrt hat Tradition.
Und Tradition hat auch die perfekte Organisation.
Super Ausschilderung, super Getränke und natürlich die obligatorischen RTF Nutellabrote.
Und vieles mehr an den Kontrollen.
Riesen Dankeschön.
Hat riesig Spaß gemacht bei euch zu fahren.
Nächstes Jahr wieder.
`,
    )
    .buildGuestbookEntry(),
  new GuestbookEntryBuilder()
    .setCategory(EEvent.RTF)
    .setDate('2018-05-28 17:00')

    .setName('Angela Maja')
    .setSource(ESource.Facebook)
    .setText(
      `Es war wunderbar 😊
Vielen Dank für tolle Streckenführung, Verpflegung, freundliche Orga und Helfer!
Alles bestens.

161 km RTF Strecke und dann nach Hause waren dann für mich bei meiner ersten RTF in diesem Jahr ein Marathon ... 😊`,
    )
    .buildGuestbookEntry(),
  new GuestbookEntryBuilder()
    .setCategory(EEvent.RTF)
    .setDate('2018-05-27 17:01')

    .setName('Harald Seidenberg')
    .setSource(ESource['E-Mail'])
    .setText(
      `Hallo RTC,

Ich/wir wollte/n nur sagen, dass ...  ich heute nach 25 Jahren wieder mal eine RTF gefahren bin.
Mir hat die RTF heute Kurzstrecke sehr gut gefallen hat. Wetter schön, Temperatur wunderbar.
gut ausgeschildert.
Was ich gegenüber damals vermisst habe waren Verkaufstand  mit Trikots oder…. .
Vielleicht hat sich in der Zeit da was verändert.
Sollte keine Kritik sein.
Nur eine Anmerkung.
Harry
`,
    )
    .setTitle('Feedback wegen ... RTF 27.05.2018')
    .buildGuestbookEntry(),
  new GuestbookEntryBuilder()
    .setCategory(EEvent.RTF)
    .setDate('2018-05-27 13:54')

    .setName('Dirk Oliver Heppert')
    .setOrganization('RSV Staubwolke Refrath')
    .setSource(ESource['E-Mail'])
    .setText(
      `Hallo RTC, ich/wir wollte/n nur sagen, dass ... ich wieder total begeistert bin von Eurer RTF.
Wie immer Toporganisation, präzise Ausschilderung und interessante Streckenführung.
Bin heute nur die 51er Schleife mit meinem Kollegen gefahren, da ich noch von gestern die Höhenmeter der RTF in Wuppertal in den Beinen habe.
Aber auch die kurze Schleife hat ihre Reize.
Kenne jetzt auf jeden Fall alle Strecken.
Eure RTF gehört zu den Besten im Bezirk Köln-Bonn.

LG Dirk Heppert- RSV Staubwolke Refrath- Bezirksmeister 2017 Köln-Bonn
`,
    )
    .setTitle('Feedback wegen ...RTF 2018')
    .buildGuestbookEntry(),
]
