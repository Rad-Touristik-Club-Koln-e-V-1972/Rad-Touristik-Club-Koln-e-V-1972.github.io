import { Model } from 'pinia-orm'
import { Attr, MorphTo, Str } from 'pinia-orm/decorators'
import { Uid } from 'pinia-orm/nanoid/non-secure'
import mime from 'mime/lite'
import Sponsor from 'src/models/entities/Sponsor'
import Training from 'src/models/entities/events/Training'
import Tour from 'src/models/entities/events/tours/Tour'
import News from 'src/models/entities/home/News'
import Contact from 'src/models/entities/rtc-cologne/Contact'
import PressReport from 'src/models/entities/rtc-cologne/PressReport'
import GalleryAlbum from 'src/models/entities/rtc-cologne/gallery/GalleryAlbum'
import GuestbookEntry from 'src/models/entities/rtc-cologne/guestbook/GuestbookEntry'

export default class GalleryAlbumEntry extends Model {
  static override readonly entity = 'galleryAlbumEntries'
  @Uid() declare id: string

  @Attr() declare galleryAlbumEntryableId: string
  @Str('', { notNullable: true }) declare galleryAlbumEntryableType: string
  @MorphTo(() => [Contact, GalleryAlbum, GuestbookEntry, News, PressReport, Sponsor, Tour, Training], 'galleryAlbumEntryableId', 'galleryAlbumEntryableType') declare galleryAlbumEntryable:
    | Contact
    | GalleryAlbum
    | GuestbookEntry
    | News
    | PressReport
    | Sponsor
    | Tour
    | Training

  @Attr() declare imageUrl: URL
  @Attr(null) declare previewUrl: URL | null

  get mimeType(): string | null {
    return mime.getType(this.imageUrl.toString())
  }
}
