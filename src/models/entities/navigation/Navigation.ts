import { Model } from 'pinia-orm'
import { Attr, HasMany, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import ENavigation from 'src/models/enums/ENavigation'

export default class Navigation extends Model {
  static override readonly entity = 'navigations'
  @Uid() declare id: string

  @HasMany(() => Navigation, 'navigationId') declare navigations: Navigation[]

  @Str(null) declare color: string | null
  @Str(null) declare icon: string | null
  @Str(null) declare target: string | null
  @Str(null) declare title: string | null
  @Attr(ENavigation.Navigation) declare type: ENavigation
  @Str(null) declare to: string | null
  @Attr(null) declare url: URL | null
}
