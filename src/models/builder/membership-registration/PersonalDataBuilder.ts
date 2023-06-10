import ABuilder from '~/models/builder/ABuilder'
import PersonalData from '~/models/entities/membership-registration/PersonalData'

export default class PersonalDataBuilder extends ABuilder {
    private entity = new PersonalData()

    build() {
        return Object.assign(this.entity, super.build())
    }

    setBirthdate(value: string): PersonalDataBuilder {
        this.entity.birthdate = value

        return this
    }

    setCity(value: string): PersonalDataBuilder {
        this.entity.city = value

        return this
    }

    setEmail(value: string): PersonalDataBuilder {
        this.entity.email = value

        return this
    }

    setEntryDate(value: string): PersonalDataBuilder {
        this.entity.entryDate = value

        return this
    }

    setFirstName(value: string): PersonalDataBuilder {
        this.entity.firstName = value

        return this
    }

    setLastName(value: string): PersonalDataBuilder {
        this.entity.lastName = value

        return this
    }

    setMobilePhoneCountryCode(value: string): PersonalDataBuilder {
        this.entity.mobilePhoneCountryCode = value

        return this
    }

    setMobilePhoneNumber(value: string): PersonalDataBuilder {
        this.entity.mobilePhoneNumber = value

        return this
    }

    setStreet(value: string): PersonalDataBuilder {
        this.entity.street = value

        return this
    }

    setStreetNumber(value: string): PersonalDataBuilder {
        this.entity.streetNumber = value

        return this
    }

    setSpecialNeeds(value: string): PersonalDataBuilder {
        this.entity.specialNeeds = value

        return this
    }

    setTelePhoneCountryCode(value: string): PersonalDataBuilder {
        this.entity.telePhoneCountryCode = value

        return this
    }

    setTelePhoneNumber(value: string): PersonalDataBuilder {
        this.entity.telePhoneNumber = value

        return this
    }

    setTShirtSize(value: string): PersonalDataBuilder {
        this.entity.tShirtSize = value

        return this
    }

    setWantsBdrMembership(value: boolean): PersonalDataBuilder {
        this.entity.wantsBdrMembership = value

        return this
    }

    setZipCode(value: string): PersonalDataBuilder {
        this.entity.zipCode = value

        return this
    }
}
