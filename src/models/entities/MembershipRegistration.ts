import { Model } from 'pinia-orm'
import { HasOne, MorphOne } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import MembershipBdr from 'src/models/entities/membership-registration/MembershipBdr'
import MembershipFee from 'src/models/entities/membership-registration/MembershipFee'
import MembershipPersonalData from 'src/models/entities/membership-registration/MembershipPersonalData'
import MembershipSignature from 'src/models/entities/membership-registration/MembershipSignature'

export default class MembershipRegistration extends Model {
  static override readonly entity = 'membershipRegistrations'
  @Uid() declare id: string

  @HasOne(() => MembershipBdr, 'membershipRegistrationId') declare bdr: MembershipBdr
  @MorphOne(() => MembershipSignature, 'membershipSignatureableId', 'membershipSignatureableType') declare consentPrivacyPolicySignature: MembershipSignature
  @HasOne(() => MembershipFee, 'membershipRegistrationId') declare fee: MembershipFee
  @HasOne(() => MembershipPersonalData, 'membershipRegistrationId') declare personalData: MembershipPersonalData
  @MorphOne(() => MembershipSignature, 'membershipSignatureableId', 'membershipSignatureableType') declare signature: MembershipSignature
}
