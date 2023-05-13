import AEntity from '~/models/entities/AEntity'
import BdrMembership from '~/models/entities/membership-registration/BdrMembership'
import MembershipFee from '~/models/entities/membership-registration/MembershipFee'
import PersonalData from '~/models/entities/membership-registration/PersonalData'
import Signature from '~/models/entities/membership-registration/Signature'

export default class MembershipRegistration extends AEntity {
    bdrMembership!: BdrMembership

    consentPrivacyPolicy!: Signature

    membershipFee!: MembershipFee

    personalData!: PersonalData

    signature: Signature = new Signature()
}
