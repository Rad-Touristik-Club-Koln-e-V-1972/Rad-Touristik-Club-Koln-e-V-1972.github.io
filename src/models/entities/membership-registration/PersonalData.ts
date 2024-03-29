import { date } from 'quasar'
import { CountryCode } from 'libphonenumber-js/types'
import AEntity from 'src/models/entities/AEntity'

export default class PersonalData extends AEntity {
    birthdate = '1972/10/30'
    city = ''
    email = ''
    entryDate = date.formatDate(new Date(), 'YYYY/MM/DD')
    firstName = ''
    lastName = ''
    mobilePhoneNumber = ''
    mobilePhoneCountryCode: CountryCode = 'DE'
    street = ''
    streetNumber = ''
    specialNeeds = ''
    telePhoneCountryCode: CountryCode = 'DE'
    telePhoneNumber = ''
    tShirtSize = ''
    wantsAmateursportslicense = false
    wantsBdrMembership = false
    zipCode = ''
}
