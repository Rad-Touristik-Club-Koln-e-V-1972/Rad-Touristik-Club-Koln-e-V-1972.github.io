import { date } from 'quasar'
import type { CountryCode } from 'libphonenumber-js'
import AEntity from 'src/models/entities/AEntity'

export default class PersonalData extends AEntity {
  birthdate = ''
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
