import GuestbookEntryBuilder from '~/models/builder/rtc-cologne/guestbook/GuestbookEntryBuilder'
import EEvent from '~/models/enums/EEvent'
import ESource from '~/models/enums/rtc-cologne/guestbook/ESource'

export default [
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2019-10-28 20:00')
        .setName('Franz Böhm')
        .setSource(ESource.Facebook)
        .setText(`Ihr macht das richtig gut! Freue mich auf nächstes Jahr.`)
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2019-10-28 20:00')
        .setName('Martin Rupp')
        .setSource(ESource.Facebook)
        .setText(
            `Sehr schöne Strecken ...
super Verpflegung ...
schöne Lounge im Ziel ...
mit Grill und Bierchen ...
weiter so.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2019-10-28 20:00')
        .setName('Andreas Schäfer')
        .setSource(ESource.Facebook)
        .setText(
            `Sehr schöne Tour bei tollem Sonnenschein
Danke an alle fleißigen Helferlein an den verschiedenen Kontrollpunkten.
Die 55er Strecke war bis auf 2 oder 3 Stellen sehr gut markiert.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2019-10-28 20:00')
        .setName('Dirk Weinbörner')
        .setSource(ESource.Facebook)
        .setText(`Tolle Tour, klasse Verpflegung - richtig gut gemacht - nächstes Jahr auf jeden Fall wieder.`)
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2019-10-28 20:00')
        .setName('Matthes Heise')
        .setSource(ESource.Facebook)
        .setText(
            `War eine sehr schöne Tour. Die Kontroll- und Verpflegungspunkte waren super.
Einfach gesagt, ich freu mich schon auf's nächste Jahr!
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2019-10-28 20:00')
        .setName('Stephanie Hilton')
        .setSource(ESource.Facebook)
        .setText(`Tolle Tour! Hat Spass gemacht!!!`)
        .build(),
    new GuestbookEntryBuilder()
        .setCategory(EEvent.CTF)
        .setDate('2019-10-28 20:00')
        .setName('Jochen Güttes')
        .setSource(ESource.Facebook)
        .setText(`Eine top organisierte Veranstaltung. Hat riesen Spaß gemacht.`)
        .build(),
]
