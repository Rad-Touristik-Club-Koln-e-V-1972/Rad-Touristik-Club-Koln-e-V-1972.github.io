import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
  .setDate('2023-04-22')
  .setId('d75f2e09-17d6-48bc-b640-1431ca581f74')
  .setImages([
    new GalleryEntryBuilder().setId('151f5ac8-d2bf-43f1-9b29-1a11e58ae8c6').setImageUrl('content.rtc-koeln.de/pages/gallery/2023/04_22_Unsere_Erste_Marathoni_In_2023/image0.jpeg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('ac2557ec-a272-4a07-b2f4-b1f8c3f4a02c').setImageUrl('content.rtc-koeln.de/pages/gallery/2023/04_22_Unsere_Erste_Marathoni_In_2023/image1.jpeg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('1a34d0fb-59fc-4033-81a0-96e93181d6d0').setImageUrl('content.rtc-koeln.de/pages/gallery/2023/04_22_Unsere_Erste_Marathoni_In_2023/image2.jpeg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('ce8060ca-96bc-4b46-8461-fdaebdf17845').setImageUrl('content.rtc-koeln.de/pages/gallery/2023/04_22_Unsere_Erste_Marathoni_In_2023/image3.jpeg.avif').buildGalleryEntry(),
  ])
  .setLocation('Brandenburg')
  .setTitle('Unsere erste Marathoni in 2023')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/04_22_Unsere_Erste_Marathoni_In_2023/image0.jpeg.avif')
  .buildGallery()
