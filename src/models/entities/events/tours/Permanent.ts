import { Attr, Num } from 'pinia-orm/decorators'
import Tour from 'src/models/entities/events/tours/Tour'
import EProfile from 'src/models/enums/events/EProfile'

export default class Permanent extends Tour {
  static readonly baseEntity = 'tours'
  static readonly entity = 'permanent'

  static fields() {
    return {
      ...super.schemas[super.entity],
    }
  }

  @Num(0, { notNullable: true }) declare height: number
  @Num(0, { notNullable: true }) declare length: number
  @Attr(EProfile.Wellig) declare profile: EProfile
}
