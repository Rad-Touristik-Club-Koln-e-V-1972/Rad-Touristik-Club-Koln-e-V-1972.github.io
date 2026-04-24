import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
  .setDate('2026-04-11')
  .setId('e8fe7eff-ab36-4504-9032-e3afe7ebb311')
  .setImages([
    new GalleryEntryBuilder()
      .setId('63fca604-c630-4104-90a9-a38c8a3e0120')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2026/04_11_Vortour_zur_Forsbachtour/668563805_1817399153047938_4017022807676963800_n.jpg.avif')
      .buildGalleryEntry(),
  ])
  .setLocation('Köln')
  .setTitle('Vortour zur Forsbachtour')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2026/04_11_Vortour_zur_Forsbachtour/668563805_1817399153047938_4017022807676963800_n.jpg.avif')
  .buildGallery()
