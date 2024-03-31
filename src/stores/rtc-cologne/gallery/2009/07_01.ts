import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
  .setCategory(EEvent.RTF)
  .setDate('2009-07-01')
  .setId('9ce4e14d-4a25-4de6-ab45-9f1230486a27')
  .setImages(
    new GalleryEntryBuilder()
      .setId('e9f33ef3-288c-4a13-bcc6-bc5c7d25ad14')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2009/07_01_RTF_37_Pressebericht_Koelner_Wochenspiegel.jpeg.avif')
      .buildGalleryEntry(),
  )
  .setLocation('Köln')
  .setTitle('Pressebericht zur 37. Forsbach-Tour')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2009/07_01_RTF_37_Pressebericht_Koelner_Wochenspiegel.jpeg.avif')
  .buildGallery()
