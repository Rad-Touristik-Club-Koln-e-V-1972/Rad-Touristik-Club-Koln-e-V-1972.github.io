import { Model } from 'pinia-orm'
import { Attr, BelongsTo, Bool, Str, Uid } from 'pinia-orm/decorators'
import MembershipRegistration from 'src/models/entities/MembershipRegistration'

export default class MembershipBdr extends Model {
  static override readonly entity = 'membershipBDRs'

  @Uid() declare membershipRegistrationId: string
  @BelongsTo(() => MembershipRegistration, 'membershipRegistrationId') declare registration: MembershipRegistration

  @Bool(false) declare isMember: boolean
  @Attr(new Date()) declare date: Date
  @Str(null) declare number: string | null
}
