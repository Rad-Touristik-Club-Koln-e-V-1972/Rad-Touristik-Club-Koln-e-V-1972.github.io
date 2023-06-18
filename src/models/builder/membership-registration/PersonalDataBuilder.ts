import ABuilder from 'src/models/builder/ABuilder'
import PersonalData from 'src/models/entities/membership-registration/PersonalData'

export default class PersonalDataBuilder extends ABuilder {
    private entity = new PersonalData()

    build = () => Object.assign(this.entity, super.build())

    setBirthdate = (value: string): this => {
        this.entity.birthdate = value

        return this
    }

    setCity = (value: string): this => {
        this.entity.city = value

        return this
    }

    setEmail = (value: string): this => {
        this.entity.email = value

        return this
    }

    setEntryDate = (value: string): this => {
        this.entity.entryDate = value

        return this
    }

    setFirstName = (value: string): this => {
        this.entity.firstName = value

        return this
    }

    setLastName = (value: string): this => {
        this.entity.lastName = value

        return this
    }

    setMobilePhoneCountryCode = (value: string): this => {
        this.entity.mobilePhoneCountryCode = value

        return this
    }

    setMobilePhoneNumber = (value: string): this => {
        this.entity.mobilePhoneNumber = value

        return this
    }

    setStreet = (value: string): this => {
        this.entity.street = value

        return this
    }

    setStreetNumber = (value: string): this => {
        this.entity.streetNumber = value

        return this
    }

    setSpecialNeeds = (value: string): this => {
        this.entity.specialNeeds = value

        return this
    }

    setTelePhoneCountryCode = (value: string): this => {
        this.entity.telePhoneCountryCode = value

        return this
    }

    setTelePhoneNumber = (value: string): this => {
        this.entity.telePhoneNumber = value

        return this
    }

    setTShirtSize = (value: string): this => {
        this.entity.tShirtSize = value

        return this
    }

    setWantsAmateursportslicense = (value: boolean): this => {
        this.entity.wantsAmateursportslicense = value

        return this
    }

    setWantsBdrMembership = (value: boolean): this => {
        this.entity.wantsBdrMembership = value

        return this
    }

    setZipCode = (value: string): this => {
        this.entity.zipCode = value

        return this
    }
}
