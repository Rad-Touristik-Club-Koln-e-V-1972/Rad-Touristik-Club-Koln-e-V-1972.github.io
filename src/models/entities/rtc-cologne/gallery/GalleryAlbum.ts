import { Model } from 'pinia-orm'
import { Attr, BelongsTo, MorphMany, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'
import Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'

export default class GalleryAlbum extends Model {
  static override readonly entity = 'galleryAlbums'
  @Uid() declare id: string

  @MorphMany(() => GalleryAlbumEntry, 'galleryAlbumEntryableId', 'galleryAlbumEntryableType') declare entries: GalleryAlbumEntry[]
  @Attr() declare galleryId: string
  @BelongsTo(() => Gallery, 'galleryId') declare gallery: Gallery

  @Str('Ohne Album') declare name: string
}
