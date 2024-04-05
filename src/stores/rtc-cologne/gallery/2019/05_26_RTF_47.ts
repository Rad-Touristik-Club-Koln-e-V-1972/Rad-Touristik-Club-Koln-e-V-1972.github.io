import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
  .setCategory(EEvent.RTF)
  .setDate('2019-05-26')
  .setId('f3b20d5f-3c1b-467f-a233-ccaf9eb787b6')
  .setImages([
    new GalleryEntryBuilder().setId('0b5fa209-620f-47fb-a5d0-6f0fd688430b').setImageUrl('content.rtc-koeln.de/pages/gallery/2019/05_26_RTF_47/rtc-forsbach-tour-flyer-2019.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('fee6a46d-7140-4b88-976d-dc91b160ba69').setImageUrl('content.rtc-koeln.de/pages/gallery/2019/05_26_RTF_47/rtc-forsbach-tour-flyer1-2019.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('8ec4e937-51e8-494e-ac1f-092c3dc2f2a6').setImageUrl('content.rtc-koeln.de/pages/gallery/2019/05_26_RTF_47/rtc-forsbach-tour-flyer2-2019.jpg.avif').buildGalleryEntry(),
  ])
  .setLocation('Rösrath-Forsbach')
  .setTitle('47. Forsbach-Tour')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2019/05_26_RTF_47/rtc-forsbach-tour-flyer-2019.jpg.avif')
  .buildGallery()
