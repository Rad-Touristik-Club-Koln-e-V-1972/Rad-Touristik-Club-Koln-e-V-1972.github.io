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
                .setEMail('erster.vorsitzender@rtc-koeln.de')
                .setImageUrl('www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                .setName('Wolfgang Dünkelmann')
                .setPosition('Erster Vorsitzender')
                .build(),
            new ContactBuilder()
                .setEMail('erster.sportwart@rtc-koeln.de')
                .setImageUrl('www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                .setName('Klaus Dünkelmann')
                .setPosition('Erster Sportwart')
                .build(),
            new ContactBuilder()
                .setEMail('PR@rtc-koeln.de')
                .setImageUrl('www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                .setName('Diana Vialon')
                .setPosition('Pressewartin')
                .build(),
            new ContactBuilder()
                .setEMail('geschaeftsfuehrung@rtc-koeln.de')
                .setImageUrl('www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                .setName('Burghild Liedtke')
                .setPosition('Geschäftsführerin')
                .build(),
            new ContactBuilder()
                .setEMail('webmaster@rtc-koeln.de')
                .setImageUrl('www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                .setName('Martin Dünkelmann')
                .setPosition('Webmaster')
                .build(),
        ],
    }),
})
