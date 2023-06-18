import ABuilder from 'src/models/builder/ABuilder'
import MembershipRegistration from 'src/models/entities/MembershipRegistration'
import BdrMembership from 'src/models/entities/membership-registration/BdrMembership'
import MembershipFee from 'src/models/entities/membership-registration/MembershipFee'
import PersonalData from 'src/models/entities/membership-registration/PersonalData'
import Signature from 'src/models/entities/membership-registration/Signature'

export default class MembershipRegistrationBuilder extends ABuilder {
    private entity = new MembershipRegistration()

    build = () => Object.assign(this.entity, super.build())

    setBdrMembership = (value: BdrMembership): this => {
        this.entity.bdrMembership = value

        return this
    }

    setConsentPrivacyPolicy = (value: Signature): this => {
        this.entity.consentPrivacyPolicy = value

        return this
    }

    setMembershipFee = (value: MembershipFee): this => {
        this.entity.membershipFee = value

        return this
    }

    setPersonalData = (value: PersonalData): this => {
        this.entity.personalData = value

        return this
    }

    setSignature = (value: Signature): this => {
        this.entity.signature = value

        return this
    }
}
