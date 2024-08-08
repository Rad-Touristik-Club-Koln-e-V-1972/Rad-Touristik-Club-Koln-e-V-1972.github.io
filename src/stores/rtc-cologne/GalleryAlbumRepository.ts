import { Repository } from 'pinia-orm'
import GalleryAlbum from 'src/models/entities/rtc-cologne/gallery/GalleryAlbum'

export default class GalleryAlbumRepository extends Repository<GalleryAlbum> {
  override use = GalleryAlbum

  getByGalleryAndAlbumName = (gallery: string, album: string) =>
    this.with('entries')
      .with('gallery', (it) => it.with('time'))
      .where((it) => it.gallery.time.name === gallery && it.name === album)
      .first()
}
