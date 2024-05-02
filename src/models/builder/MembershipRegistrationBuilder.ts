import ABuilder from 'src/models/builder/ABuilder'
import MembershipRegistration from 'src/models/entities/MembershipRegistration'
import MembershipBdr from 'src/models/entities/membership-registration/MembershipBdr'
import MembershipFee from 'src/models/entities/membership-registration/MembershipFee'
import MembershipPersonalData from 'src/models/entities/membership-registration/MembershipPersonalData'
import MembershipSignature from 'src/models/entities/membership-registration/MembershipSignature'

export default class MembershipRegistrationBuilder extends ABuilder {
  private membershipRegistration = new MembershipRegistration()

  buildMembershipRegistration = () => Object.assign(this.membershipRegistration, this.buildAEntity())

  setBdrMembership = (value: MembershipBdr): this => {
    this.membershipRegistration.bdrMembership = value

    return this
  }

  setConsentPrivacyPolicy = (value: MembershipSignature): this => {
    this.membershipRegistration.consentPrivacyPolicy = value

    return this
  }

  setMembershipFee = (value: MembershipFee): this => {
    this.membershipRegistration.membershipFee = value

    return this
  }

  setPersonalData = (value: MembershipPersonalData): this => {
    this.membershipRegistration.personalData = value

    return this
  }

  setSignature = (value: MembershipSignature): this => {
    this.membershipRegistration.signature = value

    return this
  }
}
