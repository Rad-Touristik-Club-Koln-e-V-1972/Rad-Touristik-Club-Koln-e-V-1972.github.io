import AEntity from '~/models/entities/AEntity'

export default class PersonalData extends AEntity {
    birthdate!: string
    city!: string
    email!: string
    entryDate!: string
    firstName!: string
    lastName!: string
    mobilePhone!: string
    street!: string
    streetNumber!: string
    specialNeeds!: string
    telephone!: string
    tShirtSize!: string
    wantsBdrMembership!: boolean
    zipCode!: string
}
