import { ref } from 'vue'
import { defineStore } from 'pinia'
import ContactBuilder from 'src/models/builder/rtc-cologne/ContactBuilder'
import Contact from 'src/models/entities/rtc-cologne/Contact'

export default defineStore('rtc-cologne-contacts', () => {
  return {
    all: ref<Contact[]>([
      new ContactBuilder().setEMail('erster.vorsitz@rtc-koeln.de').setName('Diana Vialon').setPosition('Erster Vorsitz').buildContact(),
      new ContactBuilder().setEMail('zweiter.vorsitz@rtc-koeln.de').setName('Frank Prescha').setPosition('Zweiter Vorsitz').buildContact(),
      new ContactBuilder().setEMail('geschaeftsfuehrung@rtc-koeln.de').setName('Judith Halama').setPosition('Geschäftsführung').buildContact(),
      new ContactBuilder().setEMail('erster.kassenwart@rtc-koeln.de').setName('Matthias Köhler').setPosition('Erster Kassenwart').buildContact(),
      new ContactBuilder().setEMail('PR@rtc-koeln.de').setName('Diana Vialon').setPosition('Pressewart').buildContact(),
      new ContactBuilder().setEMail('sportwart@rtc-koeln.de').setName('Manfred Türk-Vialon').setPosition('Sportwart').buildContact(),
      new ContactBuilder().setEMail('webmaster@rtc-koeln.de').setName('Martin Dünkelmann').setPosition('Webmaster').buildContact(),
    ]),
  }
})
