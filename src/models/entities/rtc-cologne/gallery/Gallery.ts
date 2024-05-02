import { Model } from 'pinia-orm'
import { Attr, BelongsTo, HasMany, MorphOne, Str, Uid } from 'pinia-orm/decorators'
import EEvent from 'src/models/enums/EEvent'
import BlogEntry from 'src/models/entities/home/BlogEntry'
import Time from 'src/models/entities/events/Time'
import GalleryAlbum from 'src/models/entities/rtc-cologne/gallery/GalleryAlbum'

export default class Gallery extends Model {
  static readonly entity = 'galleries'

  @HasMany(() => GalleryAlbum, 'galleryId') declare albums: GalleryAlbum[]
  @Uid() declare blogEntryId: string | null
  @BelongsTo(() => BlogEntry, 'blogEntryId') declare blogEntry: BlogEntry | null
  @MorphOne(() => Time, 'timeableId', 'timeableType') declare time: Time

  @Attr(EEvent.RTC) declare category: EEvent
  @Str('', { notNullable: true }) declare location: string
  @Attr() declare titleImageUrl: URL
  @Attr([]) declare youtubeVideoIds: string[]
}
