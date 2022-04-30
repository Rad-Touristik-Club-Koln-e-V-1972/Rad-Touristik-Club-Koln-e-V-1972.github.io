import Event from '@/models/enums/guestbook/Event'
import GuestbookEntryBuilder from '@/models/builder/guestbook/EntryBuilder'
import Source from '@/models/enums/guestbook/Source'

export default [
    new GuestbookEntryBuilder()
        .date(2019, 10, 28, 20, 0)
        .event(Event.CTF)
        .name('Franz Böhm')
        .source(Source.Facebook)
        .text(`Ihr macht das richtig gut! Freue mich auf nächstes Jahr.`)
        .build(),
    new GuestbookEntryBuilder()
        .date(2019, 10, 28, 20, 0)
        .event(Event.CTF)
        .name('Martin Rupp')
        .source(Source.Facebook)
        .text(
            `
Sehr schöne Strecken ...<br/>
super Verpflegung ...<br/>
schöne Lounge im Ziel ...<br/>
mit Grill und Bierchen ...<br/>
weiter so.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2019, 10, 28, 20, 0)
        .event(Event.CTF)
        .name('Andreas Schäfer')
        .source(Source.Facebook)
        .text(
            `
Sehr schöne Tour bei tollem Sonnenschein<br/>
Danke an alle fleißigen Helferlein an den verschiedenen Kontrollpunkten.<br/>
Die 55er Strecke war bis auf 2 oder 3 Stellen sehr gut markiert.
`
        )
        .build(),
    new GuestbookEntryBuilder()
        .date(2019, 10, 28, 20, 0)
        .event(Event.CTF)
        .name('Dirk Weinbörner')
        .source(Source.Facebook)
        .text(`Tolle Tour, klasse Verpflegung - richtig gut gemacht - nächstes Jahr auf jeden Fall wieder.`)
        .build(),
    new GuestbookEntryBuilder()
        .date(2019, 10, 28, 20, 0)
        .event(Event.CTF)
        .name('Matthes Heise')
        .source(Source.Facebook)
        .text(
            `
War eine sehr schöne Tour. Die Kontroll- und Verpflegungspunkte waren super.<br/>
Einfach gesagt, ich freu mich schon auf's nächste Jahr!
`
        )
        .build(),
    new GuestbookEntryBuilder().date(2019, 10, 28, 20, 0).event(Event.CTF).name('Stephanie Hilton').source(Source.Facebook).text(`Tolle Tour! Hat Spass gemacht!!!`).build(),
    new GuestbookEntryBuilder()
        .date(2019, 10, 28, 20, 0)
        .event(Event.CTF)
        .name('Jochen Güttes')
        .source(Source.Facebook)
        .text(`Eine top organisierte Veranstaltung. Hat riesen Spaß gemacht.`)
        .build(),
]
