import { date } from 'quasar'
import AEntity from 'src/models/entities/AEntity'

export default class PersonalData extends AEntity {
    birthdate = '1972/10/30'
    city = ''
    email = ''
    entryDate = date.formatDate(new Date(), 'YYYY/MM/DD')
    firstName = ''
    lastName = ''
    mobilePhoneNumber = ''
    mobilePhoneCountryCode = 'DE'
    street = ''
    streetNumber = ''
    specialNeeds = ''
    telePhoneCountryCode = 'DE'
    telePhoneNumber = ''
    tShirtSize = ''
    wantsAmateursportslicense = false
    wantsBdrMembership = false
    zipCode = ''
}
