import { defineStore } from 'pinia'
import ContactBuilder from '~/models/builder/rtc-cologne/ContactBuilder'
import Contact from '~/models/entities/rtc-cologne/Contact'

export const useContactsStore = defineStore('rtc-cologne-contacts', {
    getters: {
        all: (state): Contact[] => state.contacts,
    },
    state: () => ({
        contacts: [
            new ContactBuilder()
                .setEMail('erster.vorsitzender@rtc-koeln.de')
                .setId('4c5aea1e-a6b7-4319-ab3d-854529d8a476')
                .setImageUrl('www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                .setName('Wolfgang Dünkelmann')
                .setPosition('Erster Vorsitzender')
                .build(),
            new ContactBuilder()
                .setEMail('erster.sportwart@rtc-koeln.de')
                .setId('5f48c322-ba0e-4866-be30-89702565522d')
                .setImageUrl('www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                .setName('Klaus Dünkelmann')
                .setPosition('Erster Sportwart')
                .build(),
            new ContactBuilder()
                .setEMail('PR@rtc-koeln.de')
                .setId('697d177f-454d-42a3-8b7e-85b576e9696f')
                .setImageUrl('www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                .setName('Diana Vialon')
                .setPosition('Pressewartin')
                .build(),
            new ContactBuilder()
                .setEMail('geschaeftsfuehrung@rtc-koeln.de')
                .setId('ca74ca7f-79e3-4548-b851-8757a4ee17f7')
                .setImageUrl('www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                .setName('Burghild Liedtke')
                .setPosition('Geschäftsführerin')
                .build(),
            new ContactBuilder()
                .setEMail('webmaster@rtc-koeln.de')
                .setId('2a25424f-ef36-47c2-be85-027a9220f302')
                .setImageUrl('www.rtc-koeln.de/content/Bilder/rtc-weihnachten/2021/RTC Logo 720px_withHat.png')
                .setName('Martin Dünkelmann')
                .setPosition('Webmaster')
                .build(),
        ],
    }),
})
