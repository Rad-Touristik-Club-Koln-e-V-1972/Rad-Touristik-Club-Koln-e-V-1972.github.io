import { Model } from 'pinia-orm'
import { Attr, BelongsTo, MorphOne, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import MembershipSignature from 'src/models/entities/membership-registration/MembershipSignature'
import MembershipRegistration from 'src/models/entities/MembershipRegistration'

export default class MembershipFee extends Model {
  static override readonly entity = 'membershipFees'
  @Uid() declare id: string

  @Attr() declare membershipRegistrationId: string
  @BelongsTo(() => MembershipRegistration, 'membershipRegistrationId') declare registration: MembershipRegistration
  @MorphOne(() => MembershipSignature, 'membershipSignatureableId', 'membershipSignatureableType') declare signature: MembershipSignature

  @Str('', { notNullable: true }) declare bankholder: string
  @Str('', { notNullable: true }) declare bic: string
  @Str('', { notNullable: true }) declare creditInstitute: string
  @Str('', { notNullable: true }) declare iban: string
  @Str('Lastschrifteinzug', { notNullable: true }) declare paymentMethod: string
}
