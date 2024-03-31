import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
  .setCategory(EEvent.Vereinsfahrt)
  .setDate('2015-06-07')
  .setId('494594cf-62bb-4577-a668-9983f07f6a50')
  .setImages([
    new GalleryEntryBuilder()
      .setId('4e1c4c33-6c26-432c-a255-043bced5fd3f')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-001.jpg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('d87ffc28-6e2b-4bd6-8302-9f3e79b0dfbe')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-002.jpg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('baa23d29-200e-4a62-8d67-9ee6401f53b3')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-003.jpg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('a856d0ad-6ea2-4190-a532-ba814948a01b')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-004.jpg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('3b809ea7-a352-4642-a6ac-35a002f202a9')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-005.jpg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('c066b4f0-0704-4f08-b891-9111c8fabaf6')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-006.jpg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('9865a914-f7aa-4ad9-86ea-1e1cb01419a5')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-007.jpg.avif')
      .buildGalleryEntry(),
    new GalleryEntryBuilder()
      .setId('9437e5ea-2210-4119-8fdd-928d25ea180c')
      .setImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-008.jpg.avif')
      .buildGalleryEntry(),
  ])
  .setLocation('Buchholz')
  .setTitle('Buchholz')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2015/06_07_Buchholz/rtc-20150607-buchholz-003.jpg.avif')
  .buildGallery()
