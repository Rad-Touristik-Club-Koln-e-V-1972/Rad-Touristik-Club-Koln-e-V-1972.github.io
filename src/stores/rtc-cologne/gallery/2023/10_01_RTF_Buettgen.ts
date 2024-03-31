import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'

export default new GalleryBuilder()
  .setDate('2023-10-01')
  .setId('19e71a41-1e1c-4c5d-ae0c-b012245e5176')
  .setImages([
    new GalleryEntryBuilder()
      .setId('6f541b93-c1c2-46f5-bb60-6ab9930cc650')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/10_01_RTF_Buettgen/48a9d169-7230-4cca-a80e-765fee6d04de.JPG.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('3a043674-2610-49f8-b156-ed6c41c4f477')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/10_01_RTF_Buettgen/71f83add-e47c-451f-8a4a-fc7f3c224898 2.JPG.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('0833b736-e5ef-40d0-a7e0-029ce206669a')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/10_01_RTF_Buettgen/802ab202-6b6c-4b69-a0b0-ca18acfad390 2.JPG.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('1b41e664-e9bc-4076-a148-feae871caf02')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/10_01_RTF_Buettgen/838841bd-a22c-4fc1-bfa6-e8b5acc3a6d1.jpg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('f1c5ac8f-863a-47f5-b289-7a3ea8de2b87')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/10_01_RTF_Buettgen/b33caf3c-a4e4-4aef-8fed-ad3841cbeaf4.JPG.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('ea3b31e4-b41d-46fa-8ff7-19e09c1b3ce7')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/10_01_RTF_Buettgen/C55CC9C5-F5B2-47E4-A34A-4668F6D91012.JPG.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('e82fcb2d-3027-45bb-bee5-cb2cdc49dd86')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/10_01_RTF_Buettgen/e96125f0-8bb8-4279-b46d-ccf9e84f4a8e.JPG.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('dff1a9ec-9d80-4857-b901-1f9992c99ca2')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/10_01_RTF_Buettgen/IMG_6169.JPG.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('8f0506db-af7e-4a18-93eb-91caefc49418')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2023/10_01_RTF_Buettgen/IMG_6172.jpg.avif')
      .buildGalleryEntry(),
  ])
  .setLocation('Büttgen')
  .setTitle('RTF Büttgen... und da waren es nur noch drei!')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2023/10_01_RTF_Buettgen/IMG_6172.jpg.avif')
  .buildGallery()
