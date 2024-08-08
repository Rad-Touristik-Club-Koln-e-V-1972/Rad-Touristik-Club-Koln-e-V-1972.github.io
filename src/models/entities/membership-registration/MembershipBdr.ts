import { Model } from 'pinia-orm'
import { Attr, BelongsTo, Bool, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import MembershipRegistration from 'src/models/entities/MembershipRegistration'

export default class MembershipBdr extends Model {
  static override readonly entity = 'membershipBDRs'
  @Uid() declare id: string

  @Attr() declare membershipRegistrationId: string
  @BelongsTo(() => MembershipRegistration, 'membershipRegistrationId') declare membershipRegistration: MembershipRegistration

  @Bool(false) declare isMember: boolean
  @Attr(new Date()) declare date: Date
  @Str(null) declare number: string | null
}
