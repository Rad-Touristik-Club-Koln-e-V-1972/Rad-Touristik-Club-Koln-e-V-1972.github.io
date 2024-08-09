import { Model } from 'pinia-orm'
import { BelongsTo, MorphMany, Str } from 'pinia-orm/decorators'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'
import Gallery from 'src/models/entities/rtc-cologne/gallery/Gallery'

export default class GalleryAlbum extends Model {
  static override readonly entity = 'galleryAlbums'

  @MorphMany(() => GalleryAlbumEntry, 'galleryAlbumEntryableId', 'galleryAlbumEntryableType') declare entries: GalleryAlbumEntry[]
  @Attr() declare galleryId: string
  @BelongsTo(() => Gallery, 'galleryId') declare gallery: Gallery

  @Str('Ohne Album') declare name: string
}
