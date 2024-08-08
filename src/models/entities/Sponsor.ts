import { Model } from 'pinia-orm'
import { Attr, MorphOne, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import GalleryAlbumEntry from 'src/models/entities/rtc-cologne/gallery/GalleryAlbumEntry'

export default class Sponsor extends Model {
  static override readonly entity = 'sponsors'
  @Uid() declare id: string

  @MorphOne(() => GalleryAlbumEntry, 'galleryEntryableId', 'galleryEntryableType') declare galleryEntry: GalleryAlbumEntry

  @Str(null) declare text: string | null
  @Attr(null) declare url: URL | null

  static override mutators() {
    return {
      name(value: string) {
        return value.replaceAll('\n', '<br>')
      },
    }
  }
}
