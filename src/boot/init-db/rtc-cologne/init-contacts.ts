import { Pinia } from 'pinia'
import { useRepo } from 'pinia-orm'
import Contact from 'src/models/entities/rtc-cologne/Contact'

export default (store: Pinia) =>
  useRepo(Contact, store).save([
    {
      eMail: 'erster.vorsitz@rtc-koeln.de',
      name: 'Diana Vialon',
      position: 'Erster Vorsitz',
    },
    {
      eMail: 'zweiter.vorsitz@rtc-koeln.de',
      name: 'Frank Prescha',
      position: 'Zweiter Vorsitz',
    },
    {
      eMail: 'geschaeftsfuehrung@rtc-koeln.de',
      name: 'Judith Halama',
      position: 'Geschäftsführung',
    },
    {
      eMail: 'erster.kassenwart@rtc-koeln.de',
      name: 'Matthias Köhler',
      position: 'Erster Kassenwart',
    },
    {
      eMail: 'PR@rtc-koeln.de',
      name: 'Diana Vialon',
      position: 'Pressewart',
    },
    {
      eMail: 'sportwart@rtc-koeln.de',
      name: 'Manfred Türk-Vialon',
      position: 'Sportwart',
    },
    {
      eMail: 'webmaster@rtc-koeln.de',
      name: 'Martin Dünkelmann',
      position: 'Webmaster',
    },
  ])
