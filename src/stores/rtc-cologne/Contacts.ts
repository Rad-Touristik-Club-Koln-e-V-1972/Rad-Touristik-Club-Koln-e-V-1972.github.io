import { ref } from 'vue'
import { defineStore } from 'pinia'
import ContactBuilder from 'src/models/builder/rtc-cologne/ContactBuilder'
import Contact from 'src/models/entities/rtc-cologne/Contact'

export default defineStore('rtc-cologne-contacts', () => {
    return {
        all: ref<Contact[]>([
            new ContactBuilder()
                .setEMail('erster.vorsitz@rtc-koeln.de')
                .setId('4c5aea1e-a6b7-4319-ab3d-854529d8a476')
                .setName('Diana Vialon')
                .setPosition('Erster Vorsitz')
                .buildContact(),
            new ContactBuilder()
                .setEMail('zweiter.vorsitz@rtc-koeln.de')
                .setId('2c8afbe2-8774-42b0-8788-5a5b29e41568')
                .setName('Frank Prescha')
                .setPosition('Zweiter Vorsitz')
                .buildContact(),
            new ContactBuilder()
                .setEMail('geschaeftsfuehrung@rtc-koeln.de')
                .setId('ca74ca7f-79e3-4548-b851-8757a4ee17f7')
                .setName('Judith Halama')
                .setPosition('Geschäftsführung')
                .buildContact(),
            new ContactBuilder()
                .setEMail('erster.kassenwart@rtc-koeln.de')
                .setId('dde5cc57-9669-4455-8971-70a9a3500069')
                .setName('Matthias Köhler')
                .setPosition('Erster Kassenwart')
                .buildContact(),
            new ContactBuilder().setEMail('PR@rtc-koeln.de').setId('697d177f-454d-42a3-8b7e-85b576e9696f').setName('Diana Vialon').setPosition('Pressewart').buildContact(),
            new ContactBuilder()
                .setEMail('sportwart@rtc-koeln.de')
                .setId('5f48c322-ba0e-4866-be30-89702565522d')
                .setName('Manfred Türk-Vialon')
                .setPosition('Sportwart')
                .buildContact(),
            new ContactBuilder()
                .setEMail('webmaster@rtc-koeln.de')
                .setId('2a25424f-ef36-47c2-be85-027a9220f302')
                .setName('Martin Dünkelmann')
                .setPosition('Webmaster')
                .buildContact(),
        ]),
    }
})
