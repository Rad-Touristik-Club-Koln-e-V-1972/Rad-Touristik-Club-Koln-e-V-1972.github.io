import GuestbookEntryBuilder from 'src/models/builder/rtc-cologne/guestbook/GuestbookEntryBuilder'
import EEvent from 'src/models/enums/EEvent'
import ESource from 'src/models/enums/rtc-cologne/guestbook/ESource'

export default [
    new GuestbookEntryBuilder()
        .setCategory(EEvent.RTF)
        .setDate('2023-05-28 21:48')
        .setId('b98ee39c-9336-44aa-b64e-a9617b0dcc72')
        .setName('Marius Risch')
        .setSource(ESource['E-Mail'])
        .setText(
            `Hallo RTC Köln,
vielen Dank für die heutige tolle Forsbachtour.
Ganz tolle Strecke und vielen Dank für das Engagement zur Organisation und Durchführung einer solchen Veranstaltung.
Es mir sehr gut bei Euch gefallen.

Liebe Grüße
Marius`,
        )
        .buildGuestbookEntry(),
]
