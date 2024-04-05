import GalleryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryBuilder'
import GalleryEntryBuilder from 'src/models/builder/rtc-cologne/gallery/GalleryEntryBuilder'
import EEvent from 'src/models/enums/EEvent'

export default new GalleryBuilder()
  .setCategory(EEvent.Vereinsfahrt)
  .setDate('2014-05-04')
  .setId('8e01b5cd-7210-4fd3-9459-419b75e810a5')
  .setImages([
    new GalleryEntryBuilder().setId('be0740dd-8086-45e9-b86a-b20183fb4aeb').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4901.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('c6865cf6-aa34-4dbb-b58f-63515d70bf3f').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4907.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('5e13906a-a114-433d-b879-4bb1bc0df88e').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4908.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('15843515-d0e0-48a6-91c5-688dcb726165').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4909.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('5e9a5048-08ca-464a-8a02-17b8b1b9d624').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4910.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('04af3825-1d7f-44b8-852b-73086a4abd54').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4911.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('a63adeaa-11f3-463c-b4cd-e20f599c3986').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4912.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('053320e6-5140-44dd-830b-16cdc11969f1').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4913.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('50984c26-0e1c-44d0-9877-7662b649cee5').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4914.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('e1137f2e-eca1-441e-a1c2-35bf0fd3daa1').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4917.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('110feb6d-00fe-495c-827c-e6989d70cd73').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4918.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('bddcbc52-91f2-4139-9440-bf9ee512da3d').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4919.JPG.avif').buildGalleryEntry(),
    new GalleryEntryBuilder().setId('40052ff3-7cab-4989-b8e2-4b1a6b49806c').setImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4920.JPG.avif').buildGalleryEntry(),
  ])
  .setLocation('Niederkassel-Lülsdorf')
  .setTitle('Niederkassel-Lülsdorf')
  .setTitleImageUrl('content.rtc-koeln.de/pages/gallery/2014/05_04_Luelsdorf/DSCF4901.JPG.avif')
  .buildGallery()
