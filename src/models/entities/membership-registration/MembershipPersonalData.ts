import { Model } from 'pinia-orm'
import { Attr, BelongsTo, Bool, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import type { CountryCode } from 'libphonenumber-js'
import MembershipRegistration from 'src/models/entities/MembershipRegistration'

export default class MembershipPersonalData extends Model {
  static override readonly entity = 'membershipPersonalDatas'
  @Uid() declare id: string

  @Attr() declare membershipRegistrationId: string
  @BelongsTo(() => MembershipRegistration, 'membershipRegistrationId') declare membershipRegistration: MembershipRegistration

  @Attr() declare birthdate: Date
  @Str('', { notNullable: true }) declare city: string
  @Str('', { notNullable: true }) declare email: string
  @Attr(new Date()) declare entryDate: Date
  @Str('', { notNullable: true }) declare firstName: string
  @Str('', { notNullable: true }) declare lastName: string
  @Str('', { notNullable: true }) declare mobilePhoneNumber: string
  @Str('DE') declare mobilePhoneCountryCode: CountryCode
  @Str('', { notNullable: true }) declare street: string
  @Str('', { notNullable: true }) declare streetNumber: string
  @Str('', { notNullable: true }) declare specialNeeds: string
  @Str('DE') declare telePhoneCountryCode: CountryCode
  @Str('', { notNullable: true }) declare telePhoneNumber: string
  @Str('', { notNullable: true }) declare tShirtSize: string
  @Bool(false) declare wantsAmateursportslicense: boolean
  @Bool(false) declare wantsBdrMembership: boolean
  @Str('', { notNullable: true }) declare zipCode: string
}
