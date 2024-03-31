import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
  .setDate('2024-03-01')
  .setId('288bbe8e-aa03-492f-b206-8e6932e7c45d')
  .setImages(
    new GalleryEntryBuilder()
      .setId('e91d1e02-f2e5-4102-93ce-a075346c4e7a')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2024/03_01_RTC_Vorstand/IMG_9235.jpg.avif')
      .buildGalleryEntry(),
  )
  .setLocation('Köln')
  .setTitle('Neuer Vorstand beim RTC Köln e.V. 1972')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2024/03_01_RTC_Vorstand/IMG_9235.jpg.avif')
  .buildGallery()
