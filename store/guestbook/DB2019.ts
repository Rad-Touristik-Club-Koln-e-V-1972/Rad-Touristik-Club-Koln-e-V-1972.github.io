import EEvent from '@/models/enums/EEvent'
import ESource from '@/models/enums/guestbook/ESource'
import GuestbookEntryBuilder from '@/models/builder/guestbook/EntryBuilder'

export default [
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2019, 10, 28, 20, 0)
        .name('Franz Böhm')
        .source(ESource.Facebook)
        .text(`Ihr macht das richtig gut! Freue mich auf nächstes Jahr.`)
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2019, 10, 28, 20, 0)
        .name('Martin Rupp')
        .source(ESource.Facebook)
        .text(
            `
Sehr schöne Strecken ...
\\
super Verpflegung ...
\\
schöne Lounge im Ziel ...
\\
mit Grill und Bierchen ...
\\
weiter so.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2019, 10, 28, 20, 0)
        .name('Andreas Schäfer')
        .source(ESource.Facebook)
        .text(
            `
Sehr schöne Tour bei tollem Sonnenschein
\\
Danke an alle fleißigen Helferlein an den verschiedenen Kontrollpunkten.
\\
Die 55er Strecke war bis auf 2 oder 3 Stellen sehr gut markiert.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2019, 10, 28, 20, 0)
        .name('Dirk Weinbörner')
        .source(ESource.Facebook)
        .text(`Tolle Tour, klasse Verpflegung - richtig gut gemacht - nächstes Jahr auf jeden Fall wieder.`)
        .build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2019, 10, 28, 20, 0)
        .name('Matthes Heise')
        .source(ESource.Facebook)
        .text(
            `
War eine sehr schöne Tour. Die Kontroll- und Verpflegungspunkte waren super.
\\
Einfach gesagt, ich freu mich schon auf's nächste Jahr!
`
        )
        .build(),
    new GuestbookEntryBuilder().category(EEvent.CTF).date(2019, 10, 28, 20, 0).name('Stephanie Hilton').source(ESource.Facebook).text(`Tolle Tour! Hat Spass gemacht!!!`).build(),
    new GuestbookEntryBuilder()
        .category(EEvent.CTF)
        .date(2019, 10, 28, 20, 0)
        .name('Jochen Güttes')
        .source(ESource.Facebook)
        .text(`Eine top organisierte Veranstaltung. Hat riesen Spaß gemacht.`)
        .build(),
]
