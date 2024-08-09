import { Model } from 'pinia-orm'
import { Attr, Bool, HasMany, HasOne, MorphMany, Str } from 'pinia-orm/decorators'
import Popup from 'src/models/entities/Popup'
import URL from 'src/models/entities/events/URL'
import Event from 'src/models/entities/events/tours/Event.ts'
import Location from 'src/models/entities/events/tours/Location'
import Permanent from 'src/models/entities/events/tours/Permanent.ts'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'
import EEvent from 'src/models/enums/EEvent'

export default class Tour extends Model {
  static override entity = 'tours'
  static override readonly types = () => ({ EVENT: Event, PERMANENT: Permanent })

  @MorphMany(() => GalleryAlbumEntry, 'galleryEntryableId', 'galleryEntryableType') declare galleryEntries: GalleryAlbumEntry[]
  @HasOne(() => Location, 'tourId') declare location: Location
  @HasMany(() => Location, 'tourId') declare locations: Location[]
  @HasOne(() => Popup, 'tourId') declare popup: Popup | null
  @MorphMany(() => URL, 'urlableId', 'urlableType') declare urls: URL[]

  @Bool(true) declare active: boolean
  @Attr(EEvent.Vereinsfahrt) declare category: EEvent
  @Attr() declare lastChange: Date
  @Str('', { notNullable: true }) declare text: string
  @Str('', { notNullable: true }) declare title: string

  static override readonly saving = (model: Tour) => {
    model.text = model.text.replaceAll('\n', '<br>')

    return true
  }
}
