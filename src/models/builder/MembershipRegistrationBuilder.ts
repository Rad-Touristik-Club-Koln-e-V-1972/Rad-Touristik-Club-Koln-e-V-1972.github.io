import ABuilder from '~/models/builder/ABuilder'
import MembershipRegistration from '~/models/entities/MembershipRegistration'
import BdrMembership from '~/models/entities/membership-registration/BdrMembership'
import MembershipFee from '~/models/entities/membership-registration/MembershipFee'
import PersonalData from '~/models/entities/membership-registration/PersonalData'
import Signature from '~/models/entities/membership-registration/Signature'

export default class MembershipRegistrationBuilder extends ABuilder {
    private entity = new MembershipRegistration()

    build() {
        return Object.assign(this.entity, super.build())
    }

    setBdrMembership(value: BdrMembership): MembershipRegistrationBuilder {
        this.entity.bdrMembership = value

        return this
    }

    setConsentPrivacyPolicy(value: Signature): MembershipRegistrationBuilder {
        this.entity.consentPrivacyPolicy = value

        return this
    }

    setMembershipFee(value: MembershipFee): MembershipRegistrationBuilder {
        this.entity.membershipFee = value

        return this
    }

    setPersonalData(value: PersonalData): MembershipRegistrationBuilder {
        this.entity.personalData = value

        return this
    }

    setSignature(value: Signature): MembershipRegistrationBuilder {
        this.entity.signature = value

        return this
    }
}
