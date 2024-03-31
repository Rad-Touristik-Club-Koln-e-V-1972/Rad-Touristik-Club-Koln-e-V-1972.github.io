import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
  .setDate('2023-05-15')
  .setId('57987c1c-d899-4f5c-93ea-fdacfebfb7c9')
  .setImages(
    new GalleryEntryBuilder()
      .setId('112d2efc-63be-4ce6-b831-70d3ec5fa040')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_15_Gewinne_und_Preise_auf_der_Forsbachtour_in_vier_Kategorien/image0.jpeg.avif')
      .buildGalleryEntry(),
  )
  .setLocation('Köln')
  .setTitle('Gewinne und Preise auf der Forsbachtour in vier Kategorien')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/05_15_Gewinne_und_Preise_auf_der_Forsbachtour_in_vier_Kategorien/image0.jpeg.avif')
  .buildGallery()
