import { defineStore } from 'pinia'
import ContactBuilder from '~/models/builder/about-us/ContactBuilder'
import Contact from '~/models/entities/about-us/Contact'

export const useContactsStore = defineStore('about-us-contacts', {
    getters: {
        all: (state): Contact[] => state.contacts,
    },
    state: () => ({
        contacts: [
            new ContactBuilder()
                .description('Hier könnte seine Beschreibung stehen.')
                .eMail('erster.vorsitzender@rtc-koeln.de')
                .imageUrl('www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                .name('Wolfgang Dünkelmann')
                .position('Erster Vorsitzender')
                .build(),
            new ContactBuilder()
                .description('Hier könnte seine Beschreibung stehen.')
                .eMail('erster.sportwart@rtc-koeln.de')
                .imageUrl('www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                .name('Klaus Dünkelmann')
                .position('Erster Sportwart')
                .build(),
            new ContactBuilder()
                .description('Hier könnte seine Beschreibung stehen.')
                .eMail('PR@rtc-koeln.de')
                .imageUrl('www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                .name('Diana Vialon')
                .position('Pressewart')
                .build(),
            new ContactBuilder()
                .description('Hier könnte seine Beschreibung stehen.')
                .eMail('geschaeftsfuehrung@rtc-koeln.de')
                .imageUrl('www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                .name('Burghild Liedtke')
                .position('Geschäftsführung')
                .build(),
            new ContactBuilder()
                .description('Hier könnte seine Beschreibung stehen.')
                .eMail('webmaster@rtc-koeln.de')
                .imageUrl('www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                .name('Martin Dünkelmann')
                .position('Webmaster')
                .build(),
        ],
    }),
})
