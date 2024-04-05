import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
  .setCategory(EEvent.Veranstaltung)
  .setDate('2014-10-19')
  .setId('f9866892-c91c-42a8-9098-5e312627c1f8')
  .setImages([
    new GalleryEntryBuilder().setId('ecec3e70-d07c-45ba-899a-20f81ad2887e').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/1.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('8d629741-9a8b-4e3e-ab65-de81b9a2234d').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/2.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('43567f21-8ac1-47a7-af6d-58cb574e7699').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/3.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('260b8ed3-a51a-4aa6-abd9-665fcc44cc7d').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/4.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('571439e9-069d-4626-9360-c3a08f7b1336').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/5.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('6a4f9ed3-2726-422d-89cd-dcd1d335c5ec').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/6.jpg.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('9384096b-5549-425c-b149-b1960143f48c').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/7.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('03734510-fef1-4cfc-811c-7596e01da71a').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/8.jpg.avif').buildGalleryEntry(),
  ])
  .setLocation('Ahrtal')
  .setTitle('Ahrwanderung')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/10_19_Ahrwanderung/5.JPG.avif')
  .buildGallery()
