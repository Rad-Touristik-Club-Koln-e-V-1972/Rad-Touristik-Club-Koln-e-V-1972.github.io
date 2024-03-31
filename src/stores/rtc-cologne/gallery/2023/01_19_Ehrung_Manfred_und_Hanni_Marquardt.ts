import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
  .setDate('2023-01-19')
  .setId('52c09122-f041-4b5b-8ae1-a581ccf77dd4')
  .setImages([
    new GalleryEntryBuilder()
      .setId('f6cfe6d2-96f4-4dfe-a4cf-20145065d5a9')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_19_Ehrung_Manfred_und_Hanni_Marquardt/image1.jpeg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('048ae6d4-ec35-44d9-9ea8-1fa8ca06b652')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_19_Ehrung_Manfred_und_Hanni_Marquardt/image2.jpeg.avif')
      .buildGalleryEntry(),
  ])
  .setLocation('Köln')
  .setTitle('Ehrung Manfred & Hanni Marquardt')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/01_19_Ehrung_Manfred_und_Hanni_Marquardt/image2.jpeg.avif')
  .buildGallery()
