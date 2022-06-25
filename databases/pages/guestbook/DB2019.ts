import EEvent from '@/models/enums/guestbook/EEvent'
import ESource from '@/models/enums/guestbook/ESource'
import GuestbookEntryBuilder from '@/models/builder/guestbook/EntryBuilder'

export default [
    new GuestbookEntryBuilder()
        .date(2019, 10, 28, 20, 0)
        .event(EEvent.CTF)
        .name('Franz Böhm')
        .source(ESource.Facebook)
        .text(`Ihr macht das richtig gut! Freue mich auf nächstes Jahr.`)
        .build(),
    new GuestbookEntryBuilder()
        .date(2019, 10, 28, 20, 0)
        .event(EEvent.CTF)
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
        .date(2019, 10, 28, 20, 0)
        .event(EEvent.CTF)
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
        .date(2019, 10, 28, 20, 0)
        .event(EEvent.CTF)
        .name('Dirk Weinbörner')
        .source(ESource.Facebook)
        .text(`Tolle Tour, klasse Verpflegung - richtig gut gemacht - nächstes Jahr auf jeden Fall wieder.`)
        .build(),
    new GuestbookEntryBuilder()
        .date(2019, 10, 28, 20, 0)
        .event(EEvent.CTF)
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
    new GuestbookEntryBuilder().date(2019, 10, 28, 20, 0).event(EEvent.CTF).name('Stephanie Hilton').source(ESource.Facebook).text(`Tolle Tour! Hat Spass gemacht!!!`).build(),
    new GuestbookEntryBuilder()
        .date(2019, 10, 28, 20, 0)
        .event(EEvent.CTF)
        .name('Jochen Güttes')
        .source(ESource.Facebook)
        .text(`Eine top organisierte Veranstaltung. Hat riesen Spaß gemacht.`)
        .build(),
]
