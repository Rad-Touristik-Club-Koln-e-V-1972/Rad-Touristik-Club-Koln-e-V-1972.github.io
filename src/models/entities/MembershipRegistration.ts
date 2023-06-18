import AEntity from 'src/models/entities/AEntity'
import BdrMembership from 'src/models/entities/membership-registration/BdrMembership'
import MembershipFee from 'src/models/entities/membership-registration/MembershipFee'
import PersonalData from 'src/models/entities/membership-registration/PersonalData'
import Signature from 'src/models/entities/membership-registration/Signature'

export default class MembershipRegistration extends AEntity {
    bdrMembership!: BdrMembership

    consentPrivacyPolicy!: Signature

    membershipFee!: MembershipFee

    personalData!: PersonalData

    signature: Signature = new Signature()
}
