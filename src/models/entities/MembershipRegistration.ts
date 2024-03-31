import AEntity from 'src/models/entities/AEntity'
import BdrMembership from 'src/models/entities/membership-registration/BdrMembership'
import MembershipFee from 'src/models/entities/membership-registration/MembershipFee'
import PersonalData from 'src/models/entities/membership-registration/PersonalData'
import Signature from 'src/models/entities/membership-registration/Signature'

export default class MembershipRegistration extends AEntity {
  bdrMembership = new BdrMembership()
  consentPrivacyPolicy = new Signature()
  membershipFee = new MembershipFee()
  personalData = new PersonalData()
  signature = new Signature()
}
