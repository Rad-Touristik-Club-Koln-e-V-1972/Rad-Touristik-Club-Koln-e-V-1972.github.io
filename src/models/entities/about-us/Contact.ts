import AEntity from '~/models/entities/AEntity'

export default class Contact extends AEntity {
    description = ''
    eMail = ''
    imageUrl: URL = new URL('https://rtc-koeln.de/')
    name = ''
    position = ''
}
