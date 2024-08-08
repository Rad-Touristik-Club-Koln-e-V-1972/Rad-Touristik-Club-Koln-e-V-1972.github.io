import { Model } from 'pinia-orm'
import { Attr, MorphTo, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import MembershipRegistration from 'src/models/entities/MembershipRegistration'
import MembershipFee from 'src/models/entities/membership-registration/MembershipFee'

export default class MembershipSignature extends Model {
  static override readonly entity = 'membershipSignatures'
  @Uid() declare id: string

  @Attr() declare membershipSignatureableId: string
  @Str('', { notNullable: true }) declare membershipSignatureableType: string
  @MorphTo(() => [MembershipFee, MembershipRegistration], 'membershipSignatureableId', 'membershipSignatureableType') declare membershipSignatureable: MembershipFee | MembershipRegistration

  @Attr(new Date()) declare date: Date
  @Str('', { notNullable: true }) declare location: string
  @Str('', { notNullable: true }) declare signature: string
}
