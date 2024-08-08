import { Model } from 'pinia-orm'
import { Attr, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'

export default class Suggestion extends Model {
  static override readonly entity = 'suggestions'
  @Uid() declare id: string

  @Str('', { notNullable: true }) declare text: string
  @Str('', { notNullable: true }) declare title: string
  @Attr() declare url: URL

  static override readonly saving = (model: Suggestion) => {
    model.text = model.text.replaceAll('\n', '<br>')

    return true
  }
}
