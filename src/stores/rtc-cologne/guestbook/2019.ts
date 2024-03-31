import GuestbookEntryBuilder from 'src/models/builder/rtc-cologne/guestbook/GuestbookEntryBuilder'
import EEvent from 'src/models/enums/EEvent'
import ESource from 'src/models/enums/rtc-cologne/guestbook/ESource'

export default [
  new GuestbookEntryBuilder()
    .setCategory(EEvent.CTF)
    .setDate('2019-10-28 20:00')
    .setId('341e9183-b975-4296-a324-d8da9b1f10d0')
    .setName('Franz Böhm')
    .setSource(ESource.Facebook)
    .setText('Ihr macht das richtig gut! Freue mich auf nächstes Jahr.')
    .buildGuestbookEntry(),
  new GuestbookEntryBuilder()
    .setCategory(EEvent.CTF)
    .setDate('2019-10-28 20:00')
    .setId('e1f41f0a-f16f-4f46-b6ba-43646284f8ac')
    .setName('Martin Rupp')
    .setSource(ESource.Facebook)
    .setText(
      `Sehr schöne Strecken ...
super Verpflegung ...
schöne Lounge im Ziel ...
mit Grill und Bierchen ...
weiter so.
`,
    )
    .buildGuestbookEntry(),
  new GuestbookEntryBuilder()
    .setCategory(EEvent.CTF)
    .setDate('2019-10-28 20:00')
    .setId('65711443-e57d-4de0-98da-839cb1e44797')
    .setName('Andreas Schäfer')
    .setSource(ESource.Facebook)
    .setText(
      `Sehr schöne Tour bei tollem Sonnenschein
Danke an alle fleißigen Helferlein an den verschiedenen Kontrollpunkten.
Die 55er Strecke war bis auf 2 oder 3 Stellen sehr gut markiert.
`,
    )
    .buildGuestbookEntry(),
  new GuestbookEntryBuilder()
    .setCategory(EEvent.CTF)
    .setDate('2019-10-28 20:00')
    .setId('7c6b830d-8ac6-4317-adce-6bdff49c4069')
    .setName('Dirk Weinbörner')
    .setSource(ESource.Facebook)
    .setText('Tolle Tour, klasse Verpflegung - richtig gut gemacht - nächstes Jahr auf jeden Fall wieder.')
    .buildGuestbookEntry(),
  new GuestbookEntryBuilder()
    .setCategory(EEvent.CTF)
    .setDate('2019-10-28 20:00')
    .setId('87228007-1555-4401-bdb8-cc98177e0c00')
    .setName('Matthes Heise')
    .setSource(ESource.Facebook)
    .setText(
      `War eine sehr schöne Tour. Die Kontroll- und Verpflegungspunkte waren super.
Einfach gesagt, ich freu mich schon auf's nächste Jahr!
`,
    )
    .buildGuestbookEntry(),
  new GuestbookEntryBuilder()
    .setCategory(EEvent.CTF)
    .setDate('2019-10-28 20:00')
    .setId('89475e9d-5e52-4da0-8eda-428b1de35710')
    .setName('Stephanie Hilton')
    .setSource(ESource.Facebook)
    .setText('Tolle Tour! Hat Spass gemacht!!!')
    .buildGuestbookEntry(),
  new GuestbookEntryBuilder()
    .setCategory(EEvent.CTF)
    .setDate('2019-10-28 20:00')
    .setId('92f970f8-3156-4790-9b7b-dc059805960a')
    .setName('Jochen Güttes')
    .setSource(ESource.Facebook)
    .setText('Eine top organisierte Veranstaltung. Hat riesen Spaß gemacht.')
    .buildGuestbookEntry(),
]
