import ABuilder from 'src/models/builder/ABuilder'
import PersonalData from 'src/models/entities/membership-registration/PersonalData'

export default class PersonalDataBuilder extends ABuilder {
    private personalData = new PersonalData()

    buildPersonalData = () => Object.assign(this.personalData, this.buildAEntity())

    setBirthdate = (value: string): this => {
        this.personalData.birthdate = value

        return this
    }

    setCity = (value: string): this => {
        this.personalData.city = value

        return this
    }

    setEmail = (value: string): this => {
        this.personalData.email = value

        return this
    }

    setEntryDate = (value: string): this => {
        this.personalData.entryDate = value

        return this
    }

    setFirstName = (value: string): this => {
        this.personalData.firstName = value

        return this
    }

    setLastName = (value: string): this => {
        this.personalData.lastName = value

        return this
    }

    setMobilePhoneCountryCode = (value: string): this => {
        this.personalData.mobilePhoneCountryCode = value

        return this
    }

    setMobilePhoneNumber = (value: string): this => {
        this.personalData.mobilePhoneNumber = value

        return this
    }

    setStreet = (value: string): this => {
        this.personalData.street = value

        return this
    }

    setStreetNumber = (value: string): this => {
        this.personalData.streetNumber = value

        return this
    }

    setSpecialNeeds = (value: string): this => {
        this.personalData.specialNeeds = value

        return this
    }

    setTelePhoneCountryCode = (value: string): this => {
        this.personalData.telePhoneCountryCode = value

        return this
    }

    setTelePhoneNumber = (value: string): this => {
        this.personalData.telePhoneNumber = value

        return this
    }

    setTShirtSize = (value: string): this => {
        this.personalData.tShirtSize = value

        return this
    }

    setWantsAmateursportslicense = (value: boolean): this => {
        this.personalData.wantsAmateursportslicense = value

        return this
    }

    setWantsBdrMembership = (value: boolean): this => {
        this.personalData.wantsBdrMembership = value

        return this
    }

    setZipCode = (value: string): this => {
        this.personalData.zipCode = value

        return this
    }
}
