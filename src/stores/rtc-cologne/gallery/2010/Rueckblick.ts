import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
  .setDate('2010-12-31')
  .setId('8ac9f536-2770-47b4-8dad-63f6ce9f71bb')
  .setImages([
    new GalleryEntryBuilder().setId('2a8b69c4-2530-4938-8854-951c863a4c08').setImageUrl('content.rtc-koeln.de/pages/gallery/2010/01_27/Rueckblick.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('fad4d5bc-f555-4123-bfe3-3016268e9bdd').setImageUrl('content.rtc-koeln.de/pages/gallery/2010/09_05_Hennef_news.gif.avif').buildGalleryEntry(),
  ])
  .setLocation('Köln')
  .setTitle('Rückblick')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2010/01_27/Rueckblick.jpg.avif')
  .setYoutubeVideoIds('AFjAyuWpGQ4')
  .buildGallery()
